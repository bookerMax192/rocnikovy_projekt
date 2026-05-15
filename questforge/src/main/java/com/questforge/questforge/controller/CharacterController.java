package com.questforge.questforge.controller;

import com.questforge.questforge.entity.CharacterSheet;
import com.questforge.questforge.service.CharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/characters")
@RequiredArgsConstructor
public class CharacterController {
    private final CharacterService characterService;

    @GetMapping
    public ResponseEntity<List<CharacterSheet>> getCharacters(Authentication authentication){
        Long userId = (Long) authentication.getPrincipal();
        return ResponseEntity.ok(characterService.getCharactersByUser(userId));
    }

    @PostMapping
    public ResponseEntity<?> createCharacter(@RequestBody Map<String, String> body,
                                             Authentication authentication) {
        Long userId = (Long) authentication.getPrincipal();

        String name = body.get("name");
        String race = body.get("race");
        String cls  = body.get("class");

        if (name == null || name.isBlank() ||
                race == null || race.isBlank() ||
                cls  == null || cls.isBlank()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Fill in all fields"));
        }

        try {
            CharacterSheet character = characterService.createCharacter(userId, name, race, cls);
            return ResponseEntity.status(HttpStatus.CREATED).body(character);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Something went wrong"));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCharacter(@PathVariable Long id, Authentication authentication){
        Long userId = (Long) authentication.getPrincipal();
        return characterService.getCharacterById(id, userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCharacter(@PathVariable Long id, @RequestBody Map<String, String> body, Authentication authentication){
        Long userId = (Long) authentication.getPrincipal();
        try {
            characterService.updateCharacter(
                    id,
                    userId,
                    body.get("name"),
                    body.get("race"),
                    body.get("sheet_data")
            );
            return ResponseEntity.ok(Map.of("message", "Saved"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCharacter(@PathVariable Long id, Authentication authentication){
        Long userId = (Long) authentication.getPrincipal();
        try {
            characterService.deleteCharacter(id, userId);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }
}
