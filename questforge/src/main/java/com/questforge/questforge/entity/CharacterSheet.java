package com.questforge.questforge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "characters")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CharacterSheet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_character")
    private Long idCharacter;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 50)
    private String race;

    @Column(name = "class", length = 50)
    private String characterClass;

    @Column
    private Integer level;

    @Column(name = "sheet_data", columnDefinition = "jsonb")
    private String sheetData;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
