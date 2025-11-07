package com.studio.controller;

import com.studio.model.User;
import com.studio.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {"*", "null"})
public class UserController {

    private final UserRepository userRepo;

    public UserController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, Object> body) {
        try {
            String email = String.valueOf(body.getOrDefault("email", "")).trim();
            String password = String.valueOf(body.getOrDefault("password", "")).trim();
            String name = String.valueOf(body.getOrDefault("name", "")).trim();

            if (email.isEmpty() || password.isEmpty() || name.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("status", "error", "message", "All fields required"));
            }

            if (userRepo.findByEmail(email).isPresent()) {
                return ResponseEntity.badRequest().body(Map.of("status", "error", "message", "Email already registered"));
            }

            String[] nameParts = name.split("\\s+", 2);
            User user = new User();
            user.setEmail(email);
            user.setPassword(password);
            user.setFirstName(nameParts.length > 0 ? nameParts[0] : name);
            user.setLastName(nameParts.length > 1 ? nameParts[1] : "");
            user = userRepo.save(user);

            return ResponseEntity.ok(Map.of(
                "status", "ok",
                "id", user.getId(),
                "email", user.getEmail(),
                "name", user.getFirstName() + (user.getLastName().isEmpty() ? "" : " " + user.getLastName())
            ));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("status", "error", "message", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, Object> body) {
        try {
            String email = String.valueOf(body.getOrDefault("email", "")).trim();
            String password = String.valueOf(body.getOrDefault("password", "")).trim();

            if (email.isEmpty() || password.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("status", "error", "message", "Email and password required"));
            }

            return userRepo.findByEmail(email)
                .filter(u -> u.getPassword().equals(password))
                .map(u -> ResponseEntity.ok(Map.of(
                    "status", "ok",
                    "id", u.getId(),
                    "email", u.getEmail(),
                    "name", u.getFirstName() + (u.getLastName().isEmpty() ? "" : " " + u.getLastName())
                )))
                .orElse(ResponseEntity.badRequest().body(Map.of("status", "error", "message", "Invalid email or password")));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("status", "error", "message", e.getMessage()));
        }
    }
}

