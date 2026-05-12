package com.questforge.questforge.repository;

import com.questforge.questforge.entity.CharacterSheet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CharacterSheetRepository extends JpaRepository<CharacterSheet, Long> {
    List<CharacterSheet> findByUserIdUser(Long idUser);
}
