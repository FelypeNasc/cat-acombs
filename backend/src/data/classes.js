export default classes = {
  warrior: {
    id: 1,
    name: "Warrior",
    description:
      "Resistente e robusto, um guerreiro que faria de tudo por um sachê",
    stats: {
      baseHp: 100,
      baseAttack: 10,
      hpPerLevel: 10,
      attackPerLevel: 2,
    },
    actions: {
      attacks: {
        normalAttack: { type: "attack", multiplier: 1, accuracy: 100 },
        strongAttack: { type: "attack", multiplier: 1.5, accuracy: 80 },
      },
      skills: [
        {
          id: 1,
          name: "Ataque Furioso",
          description: "Um ataque rápido e muito forte com sua espada, machuca",
          cooldown: 2,
          type: "attack",
          value: 20,
        },
      ],
    },
  },
  ranger: {
    id: 2,
    name: "Ranger",
    description:
      "Sorrateiro e mortal, tem o andar mais leve dentre todos os gatos",
    stats: {
      baseHp: 50,
      baseAttack: 16,
      hpPerLevel: 10,
      attackPerLevel: 2,
    },
    actions: {
      attacks: {
        normalAttack: { type: "attack", multiplier: 1, accuracy: 100 },
        strongAttack: { type: "attack", multiplier: 1.5, accuracy: 80 },
      },
      skills: [
        {
          id: 2,
          name: "Chuva de flechas",
          description:
            "Múltiplas flechas pro céu que caem sobre o inimigo consecutivamente",
          cooldown: 4,
          type: "attack",
          value: 15,
        },
      ],
    },
  },
  mage: {
    id: 3,
    name: "Mage",
    description:
      "Poderoso e implacável, capaz de lançar feitiços devastadores em quem encostar em sua bola de lã",
    stats: {
      baseHp: 60,
      baseAttack: 12,
      hpPerLevel: 10,
      attackPerLevel: 2,
    },
    actions: {
      attacks: {
        normalAttack: { type: "attack", multiplier: 1, accuracy: 100 },
        strongAttack: { type: "attack", multiplier: 1.5, accuracy: 80 },
      },
      skills: [
        {
          id: 3,
          name: "Bola de Fogo",
          description: "Uma bola de fogo que queima, cuidado viu",
          cooldown: 3,
          type: "attack",
          value: 40,
        },
      ],
    },
  },
  bard: {
    id: 4,
    name: "Bard",
    description:
      "Gracioso, um gato gentil e amigável que faria amizade até com um cachorro",
    stats: {
      baseHp: 80,
      baseAttack: 6,
      hpPerLevel: 10,
      attackPerLevel: 2,
    },
    actions: {
      attacks: {
        normalAttack: { type: "attack", multiplier: 1, accuracy: 100 },
        strongAttack: { type: "attack", multiplier: 1.5, accuracy: 80 },
      },
      skills: [
        {
          id: 4,
          name: "Música Curativa",
          description: "Uma música aliviante que faz cura os aliados",
          cooldown: 2,
          type: "cure",
          value: 20,
        },
      ],
    },
  },
};
