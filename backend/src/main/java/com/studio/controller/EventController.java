package com.studio.controller;

import com.studio.service.GoogleSheetsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = {"*", "null"})
public class EventController {

    private final GoogleSheetsService googleSheetsService;

    public EventController(GoogleSheetsService googleSheetsService) {
        this.googleSheetsService = googleSheetsService;
    }

    @PostMapping
    public ResponseEntity<?> record(@RequestBody Map<String, Object> body) {
        try {
            String type = String.valueOf(body.getOrDefault("type", "unknown"));
            String key = String.valueOf(body.getOrDefault("key", ""));
            Object data = body.get("data");
            googleSheetsService.appendEvent(type, key, data);
            return ResponseEntity.ok(Map.of("status", "ok"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of(
                    "status", "error",
                    "message", e.getMessage()
            ));
        }
    }
}


