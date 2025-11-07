package com.studio.controller;

import com.studio.model.ContactMessage;
import com.studio.repository.ContactMessageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"*", "null"})
public class ContactController {

    private final ContactMessageRepository repo;

    public ContactController(ContactMessageRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Map<String, Object> body) {
        try {
            ContactMessage msg = new ContactMessage();
            msg.setName(String.valueOf(body.getOrDefault("name", "")));
            msg.setEmail(String.valueOf(body.getOrDefault("email", "")));
            msg.setMessage(String.valueOf(body.getOrDefault("message", "")));
            repo.save(msg);
            return ResponseEntity.ok(Map.of("status", "ok", "id", msg.getId()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("status", "error", "message", e.getMessage()));
        }
    }
}


