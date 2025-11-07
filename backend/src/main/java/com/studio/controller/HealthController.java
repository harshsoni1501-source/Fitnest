package com.studio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = {"*", "null"})
public class HealthController {

    @GetMapping
    public ResponseEntity<?> health() {
        return ResponseEntity.ok(Map.of(
            "status", "ok",
            "message", "Fitnest API is running",
            "endpoints", Map.of(
                "register", "/api/users/register",
                "login", "/api/users/login",
                "contact", "/api/contact",
                "events", "/api/events"
            )
        ));
    }
}

