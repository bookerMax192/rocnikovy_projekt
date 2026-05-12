// Многоуровневая база данных SRD
const rulesDatabase = [
    {
        category: "Core Rules",
        id: "core-rules",
        items: [
            {
                name: "Ability Checks",
                id: "ability-checks",
                description: "Core mechanics for resolving uncertain outcomes and resisting dangers.",
                traits: [
                    { name: "The d20 Roll", text: "Roll 1d20 + Ability Modifier. Add your Proficiency Bonus if you are proficient. If the total equals or exceeds the DC, you succeed." },
                    { name: "Advantage / Disadvantage", text: "Roll two d20s instead of one. Use the higher roll for Advantage, and the lower roll for Disadvantage." },
                    { name: "Saving Throws", text: "Roll 1d20 + Ability Modifier to evade or resist threats. Add your Proficiency Bonus if applicable." }
                ]
            },
            {
                name: "Combat & Actions",
                id: "combat",
                description: "During your turn in combat, you can move up to your Speed and take one Action.",
                traits: [
                    { name: "Attack", text: "Make a melee or ranged attack with a weapon or an Unarmed Strike." },
                    { name: "Cast a Spell", text: "Cast a spell that has a casting time of 1 Action." },
                    { name: "Dash", text: "Gain extra movement equal to your Speed for the current turn." },
                    { name: "Dodge", text: "Attacks against you have Disadvantage, and you make Dex saves with Advantage until your next turn." },
                    { name: "Bonus Actions", text: "You can take one Bonus Action on your turn if a feature or spell allows it." }
                ]
            }
        ]
    },
    {
        category: "Species",
        id: "species",
        items: [
            {
                name: "Dragonborn",
                id: "dragonborn",
                description: "Descended from dragons, possessing draconic breath and resistance.",
                traits: [
                    { name: "Breath Weapon", text: "Exhale destructive energy. Targets make a saving throw, taking damage on a failure." },
                    { name: "Damage Resistance", text: "You have resistance to the damage type associated with your ancestry." }
                ]
            },
            {
                name: "Dwarf",
                id: "dwarf",
                description: "Bold and hardy, known as skilled warriors and workers of stone.",
                traits: [
                    { name: "Darkvision", text: "See in dim light within 60 feet as if it were bright light." },
                    { name: "Dwarven Resilience", text: "Advantage on saves against poison, and resistance to poison damage." },
                    { name: "Dwarven Toughness", text: "Your hit point maximum increases by 1 every time you gain a level." }
                ]
            },
            {
                name: "Elf",
                id: "elf",
                description: "A magical people of otherworldly grace.",
                traits: [
                    { name: "Darkvision", text: "See in dim light within 60 feet as if it were bright light." },
                    { name: "Keen Senses", text: "Proficiency in the Perception, Insight, or Survival skill." },
                    { name: "Trance", text: "You meditate deeply for 4 hours to gain the same benefit as 8 hours of sleep." }
                ]
            },
            {
                name: "Halfling",
                id: "halfling",
                description: "Diminutive survivors who ride the wave of luck.",
                traits: [
                    { name: "Brave", text: "Advantage on saving throws against being frightened." },
                    { name: "Luck", text: "When you roll a 1 on a d20, you can reroll the die and must use the new roll." }
                ]
            },
            {
                name: "Human",
                id: "human",
                description: "The most adaptable and ambitious people.",
                traits: [
                    { name: "Resourceful", text: "Gain Heroic Inspiration whenever you finish a Long Rest." },
                    { name: "Skillful", text: "Gain proficiency in one skill of your choice." }
                ]
            },
            {
                name: "Orc",
                id: "orc",
                description: "Fierce and passionate, known for great physical strength.",
                traits: [
                    { name: "Adrenaline Rush", text: "Take the Dash action as a Bonus Action and gain Temporary HP." },
                    { name: "Relentless Endurance", text: "When reduced to 0 HP but not killed outright, drop to 1 HP instead (once per Long Rest)." }
                ]
            },
            {
                name: "Tiefling",
                id: "tiefling",
                description: "Possessing fiendish blood and an otherworldly presence.",
                traits: [
                    { name: "Darkvision", text: "See in dim light within 60 feet as if it were bright light." },
                    { name: "Fiendish Legacy", text: "Gain a legacy of spells depending on your fiendish lineage." }
                ]
            }
        ]
    },
    {
        category: "Classes",
        id: "classes",
        items: [
            {
                name: "Barbarian",
                id: "barbarian",
                description: "A fierce warrior who can enter a battle rage. (Primary: Strength, d12 Hit Dice)",
                traits: [
                    { name: "Rage", text: "Bonus Action to rage. Gain resistance to physical damage and deal extra damage." },
                    { name: "Unarmored Defense", text: "While unarmored, AC = 10 + Dex mod + Con mod." }
                ]
            },
            {
                name: "Bard",
                id: "bard",
                description: "An inspiring magician whose power echoes the music of creation. (Primary: Charisma, d8 Hit Dice)",
                traits: [
                    { name: "Spellcasting", text: "Cast arcane magic through music. Charisma is your spellcasting ability." },
                    { name: "Bardic Inspiration", text: "Bonus Action to give an ally a d6 to add to a roll." }
                ]
            },
            {
                name: "Cleric",
                id: "cleric",
                description: "A priestly champion wielding divine magic. (Primary: Wisdom, d8 Hit Dice)",
                traits: [
                    { name: "Spellcasting", text: "Cast divine spells. Wisdom is your spellcasting ability." },
                    { name: "Channel Divinity", text: "Use divine energy to heal the injured or drive away the undead." }
                ]
            },
            {
                name: "Druid",
                id: "druid",
                description: "A priest of the Old Faith, adopting animal forms. (Primary: Wisdom, d8 Hit Dice)",
                traits: [
                    { name: "Spellcasting", text: "Cast spells from nature. Wisdom is your spellcasting ability." },
                    { name: "Wild Shape", text: "Bonus Action to magically assume the shape of a beast." }
                ]
            },
            {
                name: "Fighter",
                id: "fighter",
                description: "A master of martial combat. (Primary: Strength/Dexterity, d10 Hit Dice)",
                traits: [
                    { name: "Fighting Style", text: "Adopt a specialty like Archery, Defense, or Dueling." },
                    { name: "Action Surge", text: "Take one additional action on your turn (once per short rest)." }
                ]
            },
            {
                name: "Paladin",
                id: "paladin",
                description: "A holy warrior bound to a sacred oath. (Primary: Strength & Charisma, d10 Hit Dice)",
                traits: [
                    { name: "Lay on Hands", text: "Pool of healing power to restore HP or cure diseases." },
                    { name: "Divine Smite", text: "Expend a spell slot on a hit to deal extra radiant damage." }
                ]
            },
            {
                name: "Rogue",
                id: "rogue",
                description: "A scoundrel who uses stealth and trickery. (Primary: Dexterity, d8 Hit Dice)",
                traits: [
                    { name: "Sneak Attack", text: "Once per turn, deal extra damage if you have advantage or an ally nearby." },
                    { name: "Cunning Action", text: "Bonus Action to Dash, Disengage, or Hide." }
                ]
            },
            {
                name: "Wizard",
                id: "wizard",
                description: "A scholarly magic-user. (Primary: Intelligence, d6 Hit Dice)",
                traits: [
                    { name: "Spellcasting", text: "Cast spells from a spellbook using Intelligence." },
                    { name: "Arcane Recovery", text: "Recover expended spell slots after a Short Rest." }
                ]
            }
        ]
    },
    {
        category: "Equipment",
        id: "equipment",
        items: [
            {
                name: "Armor & Shields",
                id: "armor",
                description: "Protection from attacks based on your class proficiencies.",
                traits: [
                    { name: "Light Armor", text: "AC = Armor Base + full Dexterity modifier." },
                    { name: "Medium Armor", text: "AC = Armor Base + Dexterity modifier (max +2)." },
                    { name: "Heavy Armor", text: "AC = Armor Base. Doesn't use Dexterity." },
                    { name: "Shields", text: "Increases your AC by 2." }
                ]
            },
            {
                name: "Weapons",
                id: "weapons",
                description: "Simple and Martial tools of war.",
                traits: [
                    { name: "Finesse", text: "Use Dexterity instead of Strength for attack/damage rolls." },
                    { name: "Light", text: "Ideal for two-weapon fighting as a Bonus Action." }
                ]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('guide-nav-links');
    const contentContainer = document.getElementById('guides-content');
    
    if (!navContainer || !contentContainer) return;

    // Плавная прокрутка для якорных ссылок
    document.documentElement.style.scrollBehavior = "smooth";

    rulesDatabase.forEach(category => {
        // 1. Генерируем ЗАГОЛОВОК КАТЕГОРИИ в меню (Сайдбар)
        navContainer.innerHTML += `<a href="#${category.id}" class="sidebar-category-link">${category.category}</a>`;
        
        // 2. Генерируем БЛОК КАТЕГОРИИ в основном контенте
        let categoryHTML = `
            <div class="category-block" id="${category.id}">
                <h1 class="category-main-title colored-label">${category.category}</h1>
        `;

        // 3. Проходимся по элементам внутри категории (Расы, Классы и т.д.)
        category.items.forEach(item => {
            
            // Добавляем ссылку на конкретный элемент в Сайдбар
            navContainer.innerHTML += `<a href="#${item.id}" class="sidebar-item-link">${item.name}</a>`;
            
            // Собираем свойства (Traits)
            let traitsHTML = '';
            item.traits.forEach(trait => {
                traitsHTML += `<p class="bold-paragraph"><b>${trait.name}.</b> ${trait.text}</p>`;
            });

            // Добавляем сам элемент в основной контент
            categoryHTML += `
                <h2 class="section-title" id="${item.id}">${item.name}</h2>
                <hr class="subsection-uderscore">
                <div class="section-content-container">
                    <p><i>${item.description}</i></p>
                    <br>
                    ${traitsHTML}
                </div>
            `;
        });

        categoryHTML += `</div>`; // Закрываем блок категории
        contentContainer.innerHTML += categoryHTML; // Вставляем на страницу
    });
});