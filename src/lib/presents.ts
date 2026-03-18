export interface Present {
  id: number;
  emoji: string;
  label: string;
  unlockAt: Date;
  text: string;
}

export const presents: Present[] = [
  {
    id: 1,
    emoji: '🍫',
    label: 'Cadeau 1',
    unlockAt: new Date('2026-03-23T08:00:00+01:00'), // CET
    text: 'Een doos heerlijke chocolaatjes, speciaal voor jou! 🍫'
  },
  {
    id: 2,
    emoji: '☕',
    label: 'Cadeau 2',
    unlockAt: new Date('2026-03-23T13:00:00+01:00'), // CET
    text: 'Koffie en een koekje bij Norvolk — samen genieten! ☕🍪'
  },
  {
    id: 3,
    emoji: '🎵',
    label: 'Cadeau 3',
    unlockAt: new Date('2026-03-23T16:00:00+01:00'), // CET
    text: 'Een cadeaubon van €250 om je klarinet te laten repareren — zodat de muziek weer kan stromen! 🎵'
  },
  {
    id: 4,
    emoji: '🍜',
    label: 'Cadeau 4',
    unlockAt: new Date('2026-03-23T18:30:00+01:00'), // CET
    text: 'Vanavond gaan we uit eten — een heerlijk bord noodles bij jouw favoriete restaurant! 🍜'
  }
];

export const birthdayAt = new Date('2026-03-23T00:00:00+01:00');
