// FROZEN VOCABULARY — case authors must use exactly these spellings.
// Nothing here may be renamed: scoring, the UI and every case file depend on it.

export const VERDICTS = ['Release', 'Return', 'Retain'];

export const VERDICT_GLOSS = {
  Release: 'The record is closed. The soul is filed as complete and goes on.',
  Return: 'The file is sent back. The soul is given time, and the debt is deferred.',
  Retain: 'The file stays here, with you. Some lives are not the Archive\u2019s to finish.'
};

export const VIRTUES = [
  'Endurance', 'Mercy', 'Cunning', 'Duty', 'Appetite', 'Devotion', 'Defiance', 'Curiosity'
];

export const WOUNDS = [
  'Abandonment', 'Betrayal', 'Oblivion', 'Guilt', 'Starvation', 'Displacement', 'Silence', 'Shame'
];

// Near-neighbours: a verdict that names one of these earns partial credit.
export const KIN = {
  Endurance: ['Duty', 'Devotion'],
  Mercy: ['Devotion', 'Curiosity'],
  Cunning: ['Defiance', 'Curiosity'],
  Duty: ['Endurance', 'Devotion'],
  Appetite: ['Curiosity', 'Defiance'],
  Devotion: ['Mercy', 'Duty'],
  Defiance: ['Cunning', 'Appetite'],
  Curiosity: ['Appetite', 'Cunning'],
  Abandonment: ['Displacement', 'Oblivion'],
  Betrayal: ['Shame', 'Guilt'],
  Oblivion: ['Silence', 'Abandonment'],
  Guilt: ['Shame', 'Betrayal'],
  Starvation: ['Displacement', 'Abandonment'],
  Displacement: ['Starvation', 'Abandonment'],
  Silence: ['Oblivion', 'Shame'],
  Shame: ['Guilt', 'Silence']
};

export const KINDS = {
  letter: 'Letter',
  form: 'Form',
  receipt: 'Receipt',
  transcript: 'Transcript',
  photo: 'Photograph',
  object: 'Object',
  margin: 'Margin Note'
};

export const INK_PER_CASE = 5;

export const RANKS = [
  { min: 92, rank: 'S', note: 'The Archivist would have signed this.' },
  { min: 80, rank: 'A', note: 'Close enough to be honest.' },
  { min: 65, rank: 'B', note: 'You saw most of it.' },
  { min: 50, rank: 'C', note: 'Filed without reading it twice.' },
  { min: 0, rank: 'D', note: 'The record goes back into the pile.' }
];

export function rankFor(clarity) {
  return RANKS.find(function (r) { return clarity >= r.min; });
}
