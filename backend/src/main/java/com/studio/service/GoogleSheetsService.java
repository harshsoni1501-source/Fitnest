package com.studio.service;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.api.services.sheets.v4.model.ValueRange;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.ServiceAccountCredentials;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.GeneralSecurityException;
import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;

@Service
public class GoogleSheetsService {

    @Value("${sheets.credentials:}")
    private String credentialsPath;

    @Value("${sheets.spreadsheetId:}")
    private String spreadsheetId;

    @Value("${sheets.worksheet:Events}")
    private String worksheet;

    private volatile Sheets sheetsClient;

    private Sheets client() throws Exception {
        if (sheetsClient != null) return sheetsClient;
        synchronized (this) {
            if (sheetsClient != null) return sheetsClient;
            if (credentialsPath == null || credentialsPath.isBlank()) {
                throw new IllegalStateException("Google Sheets credentials path is not configured (sheets.credentials)");
            }
            if (spreadsheetId == null || spreadsheetId.isBlank()) {
                throw new IllegalStateException("Google Sheets spreadsheetId is not configured (sheets.spreadsheetId)");
            }

            var httpTransport = GoogleNetHttpTransport.newTrustedTransport();
            var jsonFactory = GsonFactory.getDefaultInstance();

            var creds = ServiceAccountCredentials
                    .fromStream(new FileInputStream(credentialsPath))
                    .createScoped(Collections.singleton(SheetsScopes.SPREADSHEETS));

            sheetsClient = new Sheets.Builder(httpTransport, jsonFactory, new HttpCredentialsAdapter(creds))
                    .setApplicationName("Fitnest Demo")
                    .build();
            return sheetsClient;
        }
    }

    public void appendEvent(String eventType, String idempotencyKey, Object payload) throws Exception {
        var ts = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
                .withZone(ZoneId.systemDefault())
                .format(Instant.now());

        String range = worksheet + "!A:Z"; // append to the sheet
        List<List<Object>> values = List.of(List.of(
                ts,
                eventType,
                idempotencyKey == null ? "" : idempotencyKey,
                String.valueOf(payload)
        ));
        ValueRange body = new ValueRange().setValues(values);
        client().spreadsheets().values()
                .append(spreadsheetId, range, body)
                .setValueInputOption("RAW")
                .execute();
    }
}


