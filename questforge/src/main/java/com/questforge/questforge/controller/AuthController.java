package com.questforge.questforge.controller;

import com.questforge.questforge.config.JwtUtil;
import com.questforge.questforge.entity.User;
import com.questforge.questforge.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody Map<String, String> body){
        try {
            User user = authService.register(
                    body.get("user_name"),
                    body.get("email"),
                    body.get("password")
            );
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(Map.of("message", "User registered successfully"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Something went wrong"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body){
        Optional<User> user = authService.login(
                body.get("email"),
                body.get("password")
        );
        if (user.isPresent()) {
            String token = jwtUtil.generateToken(
                    user.get().getIdUser(),
                    user.get().getEmail(),
                    user.get().getRole()
            );
            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "user_name", user.get().getUserName(),
                    "role", user.get().getRole()
            ));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("error", "Wrong e-mail or password"));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
    }
}
