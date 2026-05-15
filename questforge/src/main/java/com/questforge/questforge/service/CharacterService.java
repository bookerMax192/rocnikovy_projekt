package com.questforge.questforge.service;

import com.questforge.questforge.entity.CharacterSheet;
import com.questforge.questforge.entity.User;
import com.questforge.questforge.repository.CharacterSheetRepository;
import com.questforge.questforge.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CharacterService {
    private final CharacterSheetRepository characterSheetRepository;
    private final UserRepository userRepository;

    public List<CharacterSheet> getCharactersByUser(Long userId){
        return characterSheetRepository.findByUserIdUser(userId);
    }

    public CharacterSheet createCharacter(Long userId, String name, String race, String characterClass){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        CharacterSheet character = new CharacterSheet();
        character.setName(name);
        character.setRace(race);
        character.setCharacterClass(characterClass);
        character.setLevel(1);
        character.setSheetData("{}");
        character.setUser(user);
        return characterSheetRepository.save(character);
    }

    public Optional<CharacterSheet> getCharacterById(Long characterId, Long userId) {
        return characterSheetRepository.findById(characterId)
                .filter(c -> c.getUser().getIdUser().equals(userId));
    }

    public CharacterSheet updateCharacter(Long characterId, Long userId, String name, String race, String sheetData) {
        CharacterSheet character = characterSheetRepository.findById(characterId)
                .filter(c -> c.getUser().getIdUser().equals(userId))
                .orElseThrow(() -> new RuntimeException("Character not found"));

        if (name != null && !name.isBlank()) character.setName(name);
        if (race != null && !race.isBlank()) character.setRace(race);
        character.setSheetData(sheetData);

        return characterSheetRepository.save(character);
    }

    public void deleteCharacter(Long characterId, Long userId){
        CharacterSheet character = characterSheetRepository.findById(characterId)
                .filter(c -> c.getUser().getIdUser().equals(userId))
                .orElseThrow(() -> new RuntimeException("Character not found"));
        characterSheetRepository.delete(character);
    }
}
