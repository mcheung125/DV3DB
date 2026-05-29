const dragons = [
  {
    "name": "Fire Dragon",
    "rarity": "Rare",
    "elements": ["Fire"],
    "stats": { "hp": 798, "atk": 1008, "def": 623, "mag": 968, "res": 833, "spd": 718 },
    "ability": "Ice Resistance",
    "description": "Will not enter Critical state."
  },
  {
    "name": "Aqua Dragon",
    "rarity": "Rare",
    "elements": ["Water"],
    "stats": { "hp": 806, "atk": 806, "def": 926, "mag": 806, "res": 728, "spd": 926 },
    "ability": "Typhoon",
    "description": "In Rainy weather, your Speed stat increases by 2 times."
  },
  {
    "name": "Wind Dragon",
    "rarity": "Rare",
    "elements": ["Wind"],
    "stats": { "hp": 776, "atk": 801, "def": 761, "mag": 801, "res": 761, "spd": 896 },
    "ability": "Flexible Body",
    "description": "Will not enter Paralysis state."
  },
  {
    "name": "Iron Dragon",
    "rarity": "Rare",
    "elements": ["Steel"],
    "stats": { "hp": 717, "atk": 842, "def": 967, "mag": 757, "res": 882, "spd": 633 },
    "ability": "Relaxed",
    "description": "Will not enter Blind state."
  },
  {
    "name": "Rock Dragon",
    "rarity": "Rare",
    "elements": ["Earth"],
    "stats": { "hp": 744, "atk": 1204, "def": 744, "mag": 744, "res": 744, "spd": 619 },
    "ability": "Heat Shell",
    "description": "Will not enter Burn state."
  },
  {
    "name": "Blue Thunder",
    "rarity": "Rare",
    "elements": ["Lightning"],
    "stats": { "hp": 707, "atk": 877, "def": 752, "mag": 792, "res": 752, "spd": 917 },
    "ability": "Air Slash",
    "description": "Weather effects are not applied during Combat."
  },
  {
    "name": "Enos",
    "rarity": "Rare",
    "elements": ["Fire", "Dark"],
    "stats": { "hp": 1125, "atk": 960, "def": 829, "mag": 550, "res": 829, "spd": 550 },
    "ability": "Fodder",
    "description": "Upon being hit, there is a 25% chance to inflict Burn on the opponent. Burn is not applied to Fire Element dragons."
  },
  {
    "name": "Nox",
    "rarity": "Rare",
    "elements": ["Dark"],
    "stats": { "hp": 816, "atk": 926, "def": 801, "mag": 756, "res": 801, "spd": 701 },
    "ability": "Flexible Body",
    "description": "Will not enter Paralysis state."
  },
  {
    "name": "Lamb Dragon",
    "rarity": "Rare",
    "elements": ["Dark"],
    "stats": { "hp": 701, "atk": 1121, "def": 786, "mag": 701, "res": 701, "spd": 1036 },
    "ability": "Regeneration",
    "description": "At the end of each turn, has a 1/3 chance to recover from status effects."
  },
  {
    "name": "Goblin Dragon",
    "rarity": "Rare",
    "elements": ["Lightning", "Earth"],
    "stats": { "hp": 978, "atk": 768, "def": 793, "mag": 893, "res": 933, "spd": 683 },
    "ability": "Sync",
    "description": "Upon being hit, main Element Type changes to the Element Type of the skill that hit."
  },
  {
    "name": "Magnello",
    "rarity": "Epic",
    "elements": ["Fire", "Earth"],
    "stats": { "hp": 855, "atk": 970, "def": 755, "mag": 970, "res": 755, "spd": 995 },
    "ability": "Roar",
    "description": "Upon appearance, decreases the opponent's Attack stat by 1 stage."
  },
  {
    "name": "Firetail",
    "rarity": "Epic",
    "elements": ["Fire", "Light"],
    "stats": { "hp": 1107, "atk": 1217, "def": 732, "mag": 1027, "res": 732, "spd": 732 },
    "ability": "Flame Will",
    "description": "When HP is 1/3 or less, Fire Element skill damage is increased by 1.5 times."
  },
  {
    "name": "Jujak",
    "rarity": "Epic",
    "elements": ["Fire", "Light", "Wind"],
    "stats": { "hp": 933, "atk": 883, "def": 908, "mag": 1258, "res": 1043, "spd": 1173 },
    "ability": "Last Will",
    "description": "When HP is full, a single hit will not incapacitate you, leaving HP at 1."
  },
  {
    "name": "Siamese Dragon",
    "rarity": "Epic",
    "elements": ["Fire", "Dark"],
    "stats": { "hp": 1051, "atk": 1076, "def": 761, "mag": 886, "res": 761, "spd": 761 },
    "ability": "Patience",
    "description": "While a status effect is applied to you, your Defense stat is increased by 1.5 times."
  },
  {
    "name": "Lava Dragon",
    "rarity": "Epic",
    "elements": ["Earth", "Fire"],
    "stats": { "hp": 751, "atk": 1001, "def": 686, "mag": 961, "res": 836, "spd": 1066 },
    "ability": "Frenzy",
    "description": "When attacking while a status effect is applied to you, damage is increased by 1.5 times."
  },
  {
    "name": "Taros",
    "rarity": "Epic",
    "elements": ["Earth", "Fire"],
    "stats": { "hp": 962, "atk": 1062, "def": 802, "mag": 1127, "res": 802, "spd": 792 },
    "ability": "Resistance",
    "description": "Will not enter Corrosion state."
  },
  {
    "name": "Ignis",
    "rarity": "Epic",
    "elements": ["Dark", "Fire"],
    "stats": { "hp": 1126, "atk": 1416, "def": 711, "mag": 550, "res": 711, "spd": 1041 },
    "ability": "Flame Amplify",
    "description": "Upon being hit by a Fire Element Type skill, nullifies the skill once and Fire Element Type skill damage used by self is applied at 1.5X."
  },
  {
    "name": "Phoenix Dragon",
    "rarity": "Epic",
    "elements": ["Light", "Fire"],
    "stats": { "hp": 806, "atk": 856, "def": 806, "mag": 986, "res": 861, "spd": 986 },
    "ability": "Flame Amplify",
    "description": "Upon being hit by a Fire Element Type skill, nullifies the skill once and Fire Element Type skill damage used by self is applied at 1.5X."
  },
  {
    "name": "Hell Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Fire"],
    "stats": { "hp": 976, "atk": 966, "def": 1101, "mag": 1301, "res": 1101, "spd": 856 },
    "ability": "Flame Will",
    "description": "When HP is 1/3 or less, Fire Element skill damage is increased by 1.5 times."
  },
  {
    "name": "Ifrit",
    "rarity": "Epic",
    "elements": ["Fire", "Earth"],
    "stats": { "hp": 882, "atk": 907, "def": 822, "mag": 847, "res": 807, "spd": 1282 },
    "ability": "Fodder",
    "description": "Upon being hit, there is a 25% chance to inflict Burn on the opponent. Burn is not applied to Fire Element dragons."
  },
  {
    "name": "Popomo",
    "rarity": "Epic",
    "elements": ["Light", "Fire"],
    "stats": { "hp": 942, "atk": 1132, "def": 842, "mag": 1132, "res": 842, "spd": 1152 },
    "ability": "Inner Focus",
    "description": "Your Attack stat will not decrease due to enemies."
  },
  {
    "name": "Enturas",
    "rarity": "Epic",
    "elements": ["Earth", "Fire"],
    "stats": { "hp": 979, "atk": 1314, "def": 899, "mag": 1229, "res": 899, "spd": 979 },
    "ability": "Fodder",
    "description": "Upon being hit, there is a 25% chance to inflict Burn on the opponent. Burn is not applied to Fire Element dragons."
  },
  {
    "name": "Patra",
    "rarity": "Epic",
    "elements": ["Light", "Earth"],
    "stats": { "hp": 962, "atk": 1062, "def": 802, "mag": 1127, "res": 802, "spd": 792 },
    "ability": "Sunrise",
    "description": "Upon appearance, changes the weather to Clear for 5 turns."
  },
  {
    "name": "Ngeonma",
    "rarity": "Epic",
    "elements": ["Water", "Dark"],
    "stats": { "hp": 867, "atk": 1117, "def": 952, "mag": 787, "res": 787, "spd": 1037 },
    "ability": "Rain Shower",
    "description": "Upon appearance, changes the weather to Rainy for 5 turns."
  },
  {
    "name": "Shark Dragon",
    "rarity": "Epic",
    "elements": ["Water", "Steel"],
    "stats": { "hp": 1189, "atk": 1124, "def": 729, "mag": 854, "res": 814, "spd": 839 },
    "ability": "Typhoon",
    "description": "In Rainy weather, your Speed stat increases by 2 times."
  },
  {
    "name": "Swamp Dragon",
    "rarity": "Epic",
    "elements": ["Earth", "Water"],
    "stats": { "hp": 1150, "atk": 730, "def": 980, "mag": 730, "res": 980, "spd": 730 },
    "ability": "Entangle",
    "description": "While this dragon is present, it entangles enemies, preventing them from selecting a dragon swap action."
  },
  {
    "name": "Poison River",
    "rarity": "Epic",
    "elements": ["Dark", "Water"],
    "stats": { "hp": 1048, "atk": 758, "def": 918, "mag": 1093, "res": 1238, "spd": 933 },
    "ability": "Untouchable",
    "description": "Upon being hit, there is a 20% chance to inflict one of the following status effects on the enemy: Corrosion, Paralysis, or Sleep."
  },
  {
    "name": "Rapia",
    "rarity": "Epic",
    "elements": ["Water", "Dark"],
    "stats": { "hp": 883, "atk": 1133, "def": 883, "mag": 1133, "res": 883, "spd": 633 },
    "ability": "Absorb",
    "description": "Upon being hit by a Water Element skill, nullifies the skill once and recovers 1/4 of your max HP."
  },
  {
    "name": "Frog Dragon",
    "rarity": "Epic",
    "elements": ["Earth", "Water"],
    "stats": { "hp": 1076, "atk": 996, "def": 986, "mag": 826, "res": 826, "spd": 576 },
    "ability": "Zephyr",
    "description": "In Clear weather, your Speed stat increases by 2 times."
  },
  {
    "name": "Typhoon Dragon",
    "rarity": "Epic",
    "elements": ["Water", "Wind"],
    "stats": { "hp": 946, "atk": 1061, "def": 1031, "mag": 781, "res": 861, "spd": 621 },
    "ability": "Air Slash",
    "description": "Weather effects are not applied during Combat."
  },
  {
    "name": "Zephyros",
    "rarity": "Epic",
    "elements": ["Dark", "Wind"],
    "stats": { "hp": 1008, "atk": 1093, "def": 758, "mag": 1008, "res": 758, "spd": 923 },
    "ability": "Marksman",
    "description": "Skill Accuracy is increased by 1.3 times."
  },
  {
    "name": "Applecheek",
    "rarity": "Epic",
    "elements": ["Earth", "Wind"],
    "stats": { "hp": 902, "atk": 922, "def": 922, "mag": 1072, "res": 1072, "spd": 902 },
    "ability": "Outrage",
    "description": "When HP is 1/3 or less, Wind Element skill damage is increased by 1.5 times."
  },
  {
    "name": "Blue Dragon",
    "rarity": "Epic",
    "elements": ["Water", "Wind"],
    "stats": { "hp": 1027, "atk": 1147, "def": 1112, "mag": 862, "res": 947, "spd": 702 },
    "ability": "Relaxed",
    "description": "Will not enter Blind state."
  },
  {
    "name": "Liberte",
    "rarity": "Epic",
    "elements": ["Earth", "Wind"],
    "stats": { "hp": 843, "atk": 758, "def": 883, "mag": 1173, "res": 883, "spd": 1008 },
    "ability": "Iron Will",
    "description": "Your Stats will not be lowered by the opponent."
  },
  {
    "name": "Deleth",
    "rarity": "Epic",
    "elements": ["Dark", "Wind"],
    "stats": { "hp": 831, "atk": 971, "def": 1111, "mag": 786, "res": 806, "spd": 796 },
    "ability": "Clairvoyance",
    "description": "Your Hit stat will not decrease due to enemies."
  },
  {
    "name": "Totem Dragon",
    "rarity": "Epic",
    "elements": ["Wind", "Earth"],
    "stats": { "hp": 743, "atk": 828, "def": 703, "mag": 1163, "res": 993, "spd": 868 },
    "ability": "Rain Dance",
    "description": "At the end of the turn, if the weather is Rainy, recovers 1/16 of your max HP."
  },
  {
    "name": "Pink Bell",
    "rarity": "Epic",
    "elements": ["Light", "Wind"],
    "stats": { "hp": 758, "atk": 818, "def": 968, "mag": 898, "res": 883, "spd": 1223 },
    "ability": "Zephyr",
    "description": "In Clear weather, your Speed stat increases by 2 times."
  },
  {
    "name": "Six-Leg Horn",
    "rarity": "Epic",
    "elements": ["Earth", "Wind"],
    "stats": { "hp": 786, "atk": 1371, "def": 951, "mag": 786, "res": 786, "spd": 871 },
    "ability": "Indifference",
    "description": "Will not enter Overwhelm state."
  },
  {
    "name": "Sharp Tail",
    "rarity": "Epic",
    "elements": ["Earth", "Steel"],
    "stats": { "hp": 774, "atk": 1104, "def": 1039, "mag": 689, "res": 689, "spd": 604 },
    "ability": "Sharp Scales",
    "description": "Upon being hit, there is a 50% chance to deal damage equal to 1/8 of the opponent's max HP."
  },
  {
    "name": "Dragonoid",
    "rarity": "Epic",
    "elements": ["Water", "Steel"],
    "stats": { "hp": 856, "atk": 1021, "def": 1021, "mag": 1271, "res": 856, "spd": 771 },
    "ability": "Mag-Field",
    "description": "While this dragon exists, Steel Element Type dragons cannot select the Swap action."
  },
  {
    "name": "Black Armor",
    "rarity": "Epic",
    "elements": ["Dark", "Steel"],
    "stats": { "hp": 881, "atk": 1341, "def": 1301, "mag": 1006, "res": 956, "spd": 801 },
    "ability": "Iron Will",
    "description": "Your Stats will not be lowered by the opponent."
  },
  {
    "name": "Fat",
    "rarity": "Epic",
    "elements": ["Wind", "Earth"],
    "stats": { "hp": 674, "atk": 1134, "def": 1239, "mag": 719, "res": 1049, "spd": 674 },
    "ability": "Frenzy",
    "description": "When attacking while a status effect is applied to you, damage is increased by 1.5 times."
  },
  {
    "name": "Knight Dragon",
    "rarity": "Epic",
    "elements": ["Steel", "Earth"],
    "stats": { "hp": 883, "atk": 883, "def": 883, "mag": 883, "res": 883, "spd": 883 },
    "ability": "Inner Focus",
    "description": "Your Attack stat will not decrease due to enemies."
  },
  {
    "name": "Egg Dragon",
    "rarity": "Epic",
    "elements": ["Light", "Earth"],
    "stats": { "hp": 1179, "atk": 1214, "def": 1264, "mag": 844, "res": 879, "spd": 669 },
    "ability": "Frenzy",
    "description": "When attacking while a status effect is applied to you, damage is increased by 1.5 times."
  },
  {
    "name": "Mud Dragon",
    "rarity": "Epic",
    "elements": ["Earth", "Water"],
    "stats": { "hp": 952, "atk": 1247, "def": 822, "mag": 672, "res": 877, "spd": 672 },
    "ability": "Swamp",
    "description": "While this dragon exists, it traps enemies in a Swamp, preventing them from selecting the Dragon Swap action."
  },
  {
    "name": "Leaf Dragon",
    "rarity": "Epic",
    "elements": ["Earth", "Wind"],
    "stats": { "hp": 703, "atk": 743, "def": 703, "mag": 1288, "res": 743, "spd": 1118 },
    "ability": "Relaxed",
    "description": "Will not enter Blind state."
  },
  {
    "name": "Lakion",
    "rarity": "Epic",
    "elements": ["Water", "Earth"],
    "stats": { "hp": 918, "atk": 958, "def": 828, "mag": 833, "res": 918, "spd": 1043 },
    "ability": "Sync",
    "description": "Upon being hit, main Element Type changes to the Element Type of the skill that hit."
  },
  {
    "name": "Mush Dragon",
    "rarity": "Epic",
    "elements": ["Fire", "Earth"],
    "stats": { "hp": 1174, "atk": 924, "def": 924, "mag": 759, "res": 759, "spd": 759 },
    "ability": "Resistance",
    "description": "Will not enter Corrosion state."
  },
  {
    "name": "Scorpion Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Earth"],
    "stats": { "hp": 894, "atk": 1079, "def": 769, "mag": 769, "res": 769, "spd": 1019 },
    "ability": "Resistance",
    "description": "Will not enter Corrosion state."
  },
  {
    "name": "Mustard Hammer",
    "rarity": "Epic",
    "elements": ["Earth", "Lightning"],
    "stats": { "hp": 826, "atk": 911, "def": 1151, "mag": 576, "res": 826, "spd": 936 },
    "ability": "Inner Focus",
    "description": "Your Attack stat will not decrease due to enemies."
  },
  {
    "name": "Pumpy",
    "rarity": "Epic",
    "elements": ["Earth", "Dark"],
    "stats": { "hp": 803, "atk": 1093, "def": 828, "mag": 843, "res": 963, "spd": 968 },
    "ability": "Clairvoyance",
    "description": "Your Hit stat will not decrease due to enemies."
  },
  {
    "name": "Blue Lightning Dragon",
    "rarity": "Epic",
    "elements": ["Water", "Lightning"],
    "stats": { "hp": 705, "atk": 985, "def": 625, "mag": 900, "res": 713, "spd": 1240 },
    "ability": "Charge",
    "description": "Upon being hit by a Lightning Element skill, nullifies the skill once and recovers 1/4 of your max HP."
  },
  {
    "name": "Cloud Dragon",
    "rarity": "Epic",
    "elements": ["Wind", "Lightning"],
    "stats": { "hp": 961, "atk": 1231, "def": 916, "mag": 1126, "res": 916, "spd": 666 },
    "ability": "Typhoon",
    "description": "In Rainy weather, your Speed stat increases by 2 times."
  },
  {
    "name": "Thunder Bolt Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Lightning"],
    "stats": { "hp": 688, "atk": 688, "def": 913, "mag": 1063, "res": 913, "spd": 1033 },
    "ability": "Galvanize",
    "description": "Upon being hit by a physical skill, there is a 30% chance to inflict Paralysis on the attacking enemy."
  },
  {
    "name": "Blue Firetail",
    "rarity": "Epic",
    "elements": ["Water", "Lightning"],
    "stats": { "hp": 862, "atk": 737, "def": 947, "mag": 737, "res": 1112, "spd": 1152 },
    "ability": "CRT Evade",
    "description": "Critical hits do not occur upon being hit."
  },
  {
    "name": "Splender",
    "rarity": "Epic",
    "elements": ["Wind", "Lightning"],
    "stats": { "hp": 784, "atk": 994, "def": 1244, "mag": 954, "res": 829, "spd": 744 },
    "ability": "Indifference",
    "description": "Will not enter Overwhelm state."
  },
  {
    "name": "White Thunder Dragon",
    "rarity": "Epic",
    "elements": ["Light", "Lightning"],
    "stats": { "hp": 841, "atk": 1241, "def": 726, "mag": 1006, "res": 926, "spd": 1006 },
    "ability": "Regeneration",
    "description": "At the end of each turn, has a 1/3 chance to recover from status effects."
  },
  {
    "name": "Faddire",
    "rarity": "Epic",
    "elements": ["Fire", "Lightning"],
    "stats": { "hp": 790, "atk": 955, "def": 830, "mag": 955, "res": 830, "spd": 1190 },
    "ability": "Speedster",
    "description": "At the start of each turn, your Speed stat increases by 1 stage."
  },
  {
    "name": "Haze",
    "rarity": "Epic",
    "elements": ["Dark", "Lightning"],
    "stats": { "hp": 731, "atk": 771, "def": 731, "mag": 1316, "res": 856, "spd": 1346 },
    "ability": "Purge",
    "description": "Status ailments are removed upon Swap."
  },
  {
    "name": "Emerald Dragon",
    "rarity": "Epic",
    "elements": ["Wind", "Earth"],
    "stats": { "hp": 738, "atk": 1068, "def": 738, "mag": 1113, "res": 738, "spd": 903 },
    "ability": "Lucky One",
    "description": "Skill's additional effect activation chance is applied at 2x."
  },
  {
    "name": "Birang",
    "rarity": "Epic",
    "elements": ["Light", "Wind"],
    "stats": { "hp": 856, "atk": 856, "def": 981, "mag": 856, "res": 981, "spd": 1021 },
    "ability": "Speedster",
    "description": "At the start of each turn, your Speed stat increases by 1 stage."
  },
  {
    "name": "Karael",
    "rarity": "Epic",
    "elements": ["Dark", "Light"],
    "stats": { "hp": 1141, "atk": 1431, "def": 1056, "mag": 726, "res": 806, "spd": 641 },
    "ability": "Physique",
    "description": "Damage taken from Fire and Chaos Element attacks is reduced by half."
  },
  {
    "name": "Solar Dragon",
    "rarity": "Epic",
    "elements": ["Light", "Earth"],
    "stats": { "hp": 1030, "atk": 1195, "def": 1030, "mag": 655, "res": 735, "spd": 655 },
    "ability": "Sunrise",
    "description": "Upon appearance, changes the weather to Clear for 5 turns."
  },
  {
    "name": "Spicy",
    "rarity": "Epic",
    "elements": ["Earth", "Light"],
    "stats": { "hp": 900, "atk": 1315, "def": 900, "mag": 550, "res": 900, "spd": 985 },
    "ability": "Marksman",
    "description": "Skill Accuracy is increased by 1.3 times."
  },
  {
    "name": "Skeleton Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Earth"],
    "stats": { "hp": 650, "atk": 945, "def": 1275, "mag": 945, "res": 1195, "spd": 550 },
    "ability": "Contagion",
    "description": "When inflicted with Corrosion, Corrosion, Paralysis, or Burn, inflicts the same status effect on the opponent."
  },
  {
    "name": "Serpent Dragon",
    "rarity": "Epic",
    "elements": ["Wind", "Dark"],
    "stats": { "hp": 746, "atk": 1076, "def": 746, "mag": 576, "res": 911, "spd": 1246 },
    "ability": "Recovery",
    "description": "When entering Sleep state, the number of turns until release is reduced by half."
  },
  {
    "name": "Ninja Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Wind"],
    "stats": { "hp": 843, "atk": 1258, "def": 798, "mag": 633, "res": 968, "spd": 1298 },
    "ability": "CRT Evade",
    "description": "Critical hits do not occur upon being hit."
  },
  {
    "name": "Centipede Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Earth"],
    "stats": { "hp": 898, "atk": 1108, "def": 1058, "mag": 773, "res": 1068, "spd": 883 },
    "ability": "Untouchable",
    "description": "Upon being hit, there is a 20% chance to inflict one of the following status effects on the enemy: Corrosion, Paralysis, or Sleep."
  },
  {
    "name": "Zagtail",
    "rarity": "Epic",
    "elements": ["Dark", "Lightning"],
    "stats": { "hp": 926, "atk": 1051, "def": 926, "mag": 841, "res": 841, "spd": 926 },
    "ability": "Brute Force",
    "description": "When performing a physical attack, your Attack stat is calculated at 1.5 times, and skill Accuracy is applied at 0.8 times."
  },
  {
    "name": "Kleptos",
    "rarity": "Epic",
    "elements": ["Wind", "Dark"],
    "stats": { "hp": 855, "atk": 1065, "def": 1055, "mag": 980, "res": 980, "spd": 855 },
    "ability": "Sharp Scales",
    "description": "Upon being hit, there is a 50% chance to deal damage equal to 1/8 of the opponent's max HP."
  },
  {
    "name": "Baal",
    "rarity": "Epic",
    "elements": ["Dark", "Earth"],
    "stats": { "hp": 801, "atk": 1006, "def": 801, "mag": 1131, "res": 801, "spd": 1006 },
    "ability": "Entangle",
    "description": "While this dragon is present, it entangles enemies, preventing them from selecting a dragon swap action."
  },
  {
    "name": "Liso",
    "rarity": "Epic",
    "elements": ["Dark", "Wind"],
    "stats": { "hp": 857, "atk": 967, "def": 842, "mag": 1132, "res": 842, "spd": 902 },
    "ability": "Recovery",
    "description": "When entering Sleep state, the number of turns until release is reduced by half."
  },
  {
    "name": "Lunera",
    "rarity": "Epic",
    "elements": ["Light", "Dark"],
    "stats": { "hp": 826, "atk": 1326, "def": 1131, "mag": 786, "res": 871, "spd": 871 },
    "ability": "Indifference",
    "description": "Will not enter Overwhelm state."
  },
  {
    "name": "Cat Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Wind"],
    "stats": { "hp": 1100, "atk": 1305, "def": 700, "mag": 1140, "res": 700, "spd": 855 },
    "ability": "Ice Resistance",
    "description": "Will not enter Critical state."
  },
  {
    "name": "Witch Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Light"],
    "stats": { "hp": 856, "atk": 981, "def": 646, "mag": 1146, "res": 896, "spd": 1021 },
    "ability": "Ominous",
    "description": "Upon being hit, there is a 25% chance to inflict Corrosion on the enemy. Corrosion is not applied to Soul or Steel Element dragons."
  },
  {
    "name": "Nebula",
    "rarity": "Epic",
    "elements": ["Dark", "Water"],
    "stats": { "hp": 757, "atk": 1567, "def": 982, "mag": 732, "res": 1152, "spd": 1102 },
    "ability": "Clairvoyance",
    "description": "Your Hit stat will not decrease due to enemies."
  },
  {
    "name": "Cupia",
    "rarity": "Epic",
    "elements": ["Light", "Dark"],
    "stats": { "hp": 1252, "atk": 747, "def": 987, "mag": 1177, "res": 1077, "spd": 550 },
    "ability": "Recovery",
    "description": "When entering Sleep state, the number of turns until release is reduced by half."
  },
  {
    "name": "Seere",
    "rarity": "Epic",
    "elements": ["Dark", "Earth"],
    "stats": { "hp": 946, "atk": 861, "def": 1401, "mag": 1231, "res": 946, "spd": 821 },
    "ability": "Insomnia",
    "description": "Will not enter Sleep state."
  },
  {
    "name": "Alien Dragon",
    "rarity": "Epic",
    "elements": ["Light", "Dark"],
    "stats": { "hp": 813, "atk": 1288, "def": 788, "mag": 788, "res": 1208, "spd": 913 },
    "ability": "Levitate",
    "description": "Unaffected by ground-based skills, and nullifies the first Earth Element attack that affects you."
  },
  {
    "name": "Nenes",
    "rarity": "Epic",
    "elements": ["Dark", "Light"],
    "stats": { "hp": 708, "atk": 1168, "def": 953, "mag": 583, "res": 1208, "spd": 938 },
    "ability": "Physique",
    "description": "Damage taken from Fire and Chaos Element attacks is reduced by half."
  },
  {
    "name": "Goldie",
    "rarity": "Epic",
    "elements": ["Light", "Earth"],
    "stats": { "hp": 794, "atk": 1149, "def": 819, "mag": 844, "res": 874, "spd": 819 },
    "ability": "Lucky One",
    "description": "Skill's additional effect activation chance is applied at 2x."
  },
  {
    "name": "Pierrot Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Wind"],
    "stats": { "hp": 1005, "atk": 595, "def": 805, "mag": 595, "res": 805, "spd": 595 },
    "ability": "Patience",
    "description": "While a status effect is applied to you, your Defense stat is increased by 1.5 times."
  },
  {
    "name": "Fairy Dragon",
    "rarity": "Epic",
    "elements": ["Wind", "Dark"],
    "stats": { "hp": 812, "atk": 897, "def": 852, "mag": 1062, "res": 857, "spd": 1062 },
    "ability": "Purge",
    "description": "Status ailments are removed upon Swap."
  },
  {
    "name": "Griptor",
    "rarity": "Epic",
    "elements": ["Dark", "Light"],
    "stats": { "hp": 751, "atk": 961, "def": 666, "mag": 1041, "res": 961, "spd": 1166 },
    "ability": "Levitate",
    "description": "Unaffected by ground-based skills, and nullifies the first Earth Element attack that affects you."
  },
  {
    "name": "Slime Dragon",
    "rarity": "Epic",
    "elements": ["Water", "Dark"],
    "stats": { "hp": 935, "atk": 900, "def": 885, "mag": 645, "res": 975, "spd": 950 },
    "ability": "Swamp",
    "description": "While this dragon exists, it traps enemies in a Swamp, preventing them from selecting the Dragon Swap action."
  },
  {
    "name": "Mist Dragon",
    "rarity": "Epic",
    "elements": ["Water", "Dark"],
    "stats": { "hp": 921, "atk": 821, "def": 796, "mag": 821, "res": 1171, "spd": 771 },
    "ability": "Ice Resistance",
    "description": "Will not enter Critical state."
  },
  {
    "name": "Maming Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Wind"],
    "stats": { "hp": 1161, "atk": 1076, "def": 861, "mag": 891, "res": 811, "spd": 1001 },
    "ability": "Regeneration",
    "description": "At the end of each turn, has a 1/3 chance to recover from status effects."
  },
  {
    "name": "Breader",
    "rarity": "Epic",
    "elements": ["Dark", "Water"],
    "stats": { "hp": 1182, "atk": 977, "def": 1002, "mag": 1102, "res": 1042, "spd": 892 },
    "ability": "CRT Evade",
    "description": "Critical hits do not occur upon being hit."
  },
  {
    "name": "ToddlemTom",
    "rarity": "Epic",
    "elements": ["Light", "Dark"],
    "stats": { "hp": 1115, "atk": 1155, "def": 655, "mag": 1155, "res": 880, "spd": 890 },
    "ability": "Purge",
    "description": "Status ailments are removed upon Swap."
  },
  {
    "name": "White Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Light"],
    "stats": { "hp": 1127, "atk": 1057, "def": 1102, "mag": 1002, "res": 1002, "spd": 1002 },
    "ability": "Flexible Body",
    "description": "Will not enter Paralysis state."
  },
  {
    "name": "Black Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Earth"],
    "stats": { "hp": 1006, "atk": 1266, "def": 931, "mag": 1166, "res": 916, "spd": 1018 },
    "ability": "Roar",
    "description": "Upon appearance, decreases the opponent's Attack stat by 1 stage."
  },
  {
    "name": "Characen",
    "rarity": "Epic",
    "elements": ["Earth", "Dark"],
    "stats": { "hp": 786, "atk": 746, "def": 1036, "mag": 1496, "res": 1036, "spd": 951 },
    "ability": "Rain Dance",
    "description": "At the end of the turn, if the weather is Rainy, recovers 1/16 of your max HP."
  },
  {
    "name": "Hilla",
    "rarity": "Epic",
    "elements": ["Dark", "Light"],
    "stats": { "hp": 883, "atk": 883, "def": 883, "mag": 1258, "res": 1258, "spd": 1258 },
    "ability": "Entangle",
    "description": "While this dragon is present, it entangles enemies, preventing them from selecting a dragon swap action."
  },
  {
    "name": "Uranus",
    "rarity": "Epic",
    "elements": ["Light", "Earth"],
    "stats": { "hp": 820, "atk": 820, "def": 780, "mag": 1135, "res": 1070, "spd": 1365 },
    "ability": "Lucky One",
    "description": "Skill's additional effect activation chance is applied at 2x."
  },
  {
    "name": "Shadow Dragon",
    "rarity": "Epic",
    "elements": ["Dark", "Wind"],
    "stats": { "hp": 1126, "atk": 1251, "def": 1001, "mag": 921, "res": 1001, "spd": 751 },
    "ability": "Brute Force",
    "description": "When performing a physical attack, your Attack stat is calculated at 1.5 times, and skill Accuracy is applied at 0.8 times."
  },
  {
    "name": "Dragon Slayer",
    "rarity": "Legendary",
    "elements": ["Dark", "Fire", "Water"],
    "stats": { "hp": 1031, "atk": 1231, "def": 896, "mag": 1061, "res": 1431, "spd": 896 },
    "ability": "Impulse",
    "description": "Upon taking a critical hit, your Attack stat increases by 6 stages."
  },
  {
    "name": "Frost Dragon",
    "rarity": "Legendary",
    "elements": ["Water", "Wind", "Earth"],
    "stats": { "hp": 1096, "atk": 1081, "def": 1036, "mag": 1166, "res": 1121, "spd": 991 },
    "ability": "Abyssal Force",
    "description": "When HP is 1/3 or less, Water Element skill damage is increased by 1.5 times."
  },
  {
    "name": "Tiamat",
    "rarity": "Legendary",
    "elements": ["Dark", "Water", "Earth"],
    "stats": { "hp": 1050, "atk": 1300, "def": 1050, "mag": 1300, "res": 1050, "spd": 800 },
    "ability": "Mucus",
    "description": "At the end of the turn, if the weather is Rainy, recovers from status effects."
  },
  {
    "name": "Phobos",
    "rarity": "Legendary",
    "elements": ["Dark", "Fire", "Earth"],
    "stats": { "hp": 931, "atk": 1516, "def": 1036, "mag": 931, "res": 931, "spd": 1016 },
    "ability": "Air Slash",
    "description": "Weather effects are not applied during Combat."
  },
  {
    "name": "Obex",
    "rarity": "Legendary",
    "elements": ["Dark", "Wind", "Earth"],
    "stats": { "hp": 961, "atk": 1126, "def": 1126, "mag": 1376, "res": 961, "spd": 876 },
    "ability": "Levitate",
    "description": "Unaffected by ground-based skills, and nullifies the first Earth Element attack that affects you."
  },
  {
    "name": "Power Dragon",
    "rarity": "Legendary",
    "elements": ["Dark", "Earth"],
    "stats": { "hp": 1095, "atk": 1355, "def": 1167, "mag": 1052, "res": 1095, "spd": 792 },
    "ability": "Monstrous Strength",
    "description": "Physical attack damage is increased by 1.5 times."
  },
  {
    "name": "Lightning Dragon",
    "rarity": "Legendary",
    "elements": ["Lightning", "Dark", "Fire"],
    "stats": { "hp": 1036, "atk": 1036, "def": 986, "mag": 1326, "res": 1036, "spd": 1121 },
    "ability": "Insulator",
    "description": "Upon being hit by a Lightning Element skill, nullifies the skill once and your Magic stat increases by 1 stage."
  },
  {
    "name": "Selura",
    "rarity": "Legendary",
    "elements": ["Water", "Wind", "Dark"],
    "stats": { "hp": 995, "atk": 1370, "def": 995, "mag": 995, "res": 910, "spd": 1285 },
    "ability": "Purge",
    "description": "Status ailments are removed upon Swap."
  },
  {
    "name": "Fides",
    "rarity": "Legendary",
    "elements": ["Dark", "Fire", "Earth"],
    "stats": { "hp": 846, "atk": 1556, "def": 806, "mag": 1266, "res": 806, "spd": 1266 },
    "ability": "Roar",
    "description": "Upon appearance, decreases the opponent's Attack stat by 1 stage."
  },
  {
    "name": "Crevasse",
    "rarity": "Legendary",
    "elements": ["Dark", "Water", "Wind"],
    "stats": { "hp": 798, "atk": 943, "def": 773, "mag": 1608, "res": 1358, "spd": 1068 },
    "ability": "Nightmare",
    "description": "At the end of the turn, if the enemy is in Sleep state, deals damage equal to 1/8 of the enemy's max HP to the enemy."
  },
  {
    "name": "Lucio",
    "rarity": "Legendary",
    "elements": ["Dark", "Wind", "Water"],
    "stats": { "hp": 918, "atk": 1168, "def": 828, "mag": 1168, "res": 1083, "spd": 1333 },
    "ability": "Insomnia",
    "description": "Will not enter Sleep state."
  },
  {
    "name": "Centura",
    "rarity": "Legendary",
    "elements": ["Water", "Earth", "Dark"],
    "stats": { "hp": 1074, "atk": 1184, "def": 1039, "mag": 1184, "res": 1009, "spd": 1089 },
    "ability": "Iron Will",
    "description": "Your Stats will not be lowered by the opponent."
  },
  {
    "name": "Anger of",
    "rarity": "Legendary",
    "elements": ["Earth", "Dark", "Wind"],
    "stats": { "hp": 1496, "atk": 1446, "def": 1071, "mag": 946, "res": 946, "spd": 821 },
    "ability": "Breath Sync",
    "description": "While on the field, once per battle, your main Element Type changes to match the Element Type of the skill used, then activates."
  },
  {
    "name": "Florea",
    "rarity": "Legendary",
    "elements": ["Dark", "Water", "Wind"],
    "stats": { "hp": 1024, "atk": 729, "def": 1104, "mag": 1314, "res": 1274, "spd": 979 },
    "ability": "Patience",
    "description": "While a status effect is applied to you, your Defense stat is increased by 1.5 times."
  },
  {
    "name": "Noll",
    "rarity": "Legendary",
    "elements": ["Water", "Earth", "Dark"],
    "stats": { "hp": 737, "atk": 1397, "def": 1487, "mag": 902, "res": 1487, "spd": 732 },
    "ability": "Insomnia",
    "description": "Will not enter Sleep state."
  },
  {
    "name": "God Dragon",
    "rarity": "Legendary",
    "elements": ["Light", "Wind", "Dark"],
    "stats": { "hp": 1023, "atk": 1438, "def": 1188, "mag": 1188, "res": 1023, "spd": 938 },
    "ability": "Flawless",
    "description": "Upon being hit, does not receive status ailments or Stats changes from skill's additional effects."
  },
  {
    "name": "Darknix",
    "rarity": "Legendary",
    "elements": ["Dark", "Fire", "Earth"],
    "stats": { "hp": 1023, "atk": 1188, "def": 1023, "mag": 1438, "res": 1188, "spd": 938 },
    "ability": "Flawless",
    "description": "Upon being hit, does not receive status ailments or Stats changes from skill's additional effects."
  }
];