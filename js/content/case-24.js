// case-24 — order 24, difficulty 4. A dye-works on Osaka bay, 1950\u20131988.
// The file says industrial espionage. The paper she copied was the works\u2019 own effluent analysis.

export default {
  id: 'case-24',
  order: 24,
  title: 'The Measurements She Copied',
  subtitle: 'File 24-K \u00b7 Closed 1988',
  difficulty: 4,
  era: '1950\u20131988',
  slots: ['1950', '1956', '1962', '1968', '1974', '1981', '1988'],

  dossier: {
    name: 'Fumiko Hara',
    alias: 'F. Hara; on the pay book from 1950, HARA, F.',
    age: '56 at entry',
    occupation: 'Dye-house hand, later sample-room assistant',
    place: 'Shiokaze Dye Works, Konohana, Osaka bay; later a rooming house, Nishinari',
    cause: 'Heart failure, in her room, alone; found by the landlord',
    entry: '2 November 1988',
    registrar: 'P. Halden, junior'
  },

  intake: 'The file is thin, which is the worst sign. Across the top, in fast capitals with a line drawn under them: INDUSTRIAL ESPIONAGE \u2014 DISMISSED \u2014 REFERRED TO THE POLICE. A woman eighteen years at a dye-works on the bay, in the sample room at the end of it. I have filed spies before, and they are never dye-house hands, and they do not keep, in their own hand, the very measurements they are said to have sold.',

  fragments: [
    {
      id: 'case-24-f1', kind: 'form', label: 'Works register, engagement',
      text: 'Shiokaze Dye Works, register of hands. Engaged this day: Hara, Fumiko, 18, of Konohana; dye-house hand, at the vats, night and day in rotation. The works is rebuilding after the war and opens a new page for new hands. She signs her own name, small and even, before the foreman, T. \u014cno.',
      anchor: '1950',
      note: 'Eighteen years separate this line from the last line about her in the same book.'
    },
    {
      id: 'case-24-f2', kind: 'photo', label: 'Photograph, No. 2 outfall',
      text: 'Made for the trade catalogue: the dye-house in the middle distance, the bay behind it, the outfall pipe lying low at the frame\u2019s edge. The water at the pipe\u2019s mouth is a dark plume against the lighter sea, and the photographer has framed past it. On the back, in pencil: Shiokaze works, 1956 \u2014 outfall, no. 2.',
      anchor: '1956',
      note: 'The plume was in the catalogue before it was ever in the file.'
    },
    {
      id: 'case-24-f3', kind: 'object', label: 'Notebook, outfall readings, in her hand',
      text: 'A pocket notebook, oil-stained at the corners. Date, hour, tide, and three figures to each entry: oxygen in the water at the outfall mouth, mg/l; dye concentration, parts per thousand; temperature, \u00b0C. Two summers of entries, taken at the pipe before the morning shift with the tide running against it. The last page is dated the month the catch began to fail.',
      anchor: '1962',
      note: 'She kept her own figures at the pipe\u2019s mouth \u2014 the habit of a woman who has learned to distrust the figures kept indoors.',
      unlocks: 'q4'
    },
    {
      id: 'case-24-f4', kind: 'form', label: 'Effluent analysis sheet, No. 2 outfall',
      text: 'Shiokaze Dye Works, laboratory. Effluent analysis, outfall no. 2, monthly. Discharge, in cubic metres a day; oxygen at the outfall mouth, mg/l; dye concentration, parts per thousand; temperature, \u00b0C; suspended solids. Beneath the columns, in the chemist\u2019s hand: within works limits \u2014 not for circulation. Countersigned, works manager. Dated 6 June 1968.',
      anchor: '1968',
      note: 'This is the paper she is said to have stolen. It is the works\u2019 own account of what it poured into the bay. No dye-house buys another house\u2019s waste.',
      unlocks: 'q1'
    },
    {
      id: 'case-24-f5', kind: 'form', label: 'Fishermen\u2019s cooperative bulletin, no. 14',
      text: '\u014chama Fishermen\u2019s Cooperative, bulletin no. 14, to all members. The catch of the bay is down four parts in five, and the decline falls hardest on the oyster beds. Below the notice, a table: oxygen, dye concentration and temperature at the outfall mouth, month by month. A line under the table reads, these figures were given to the cooperative and confirmed against our own samples; they are the works\u2019 own. Issued under the clerk\u2019s name: K. Doi, clerk. Date of issue: 13 June 1968.',
      anchor: '1968',
      note: 'Printed on the thirteenth of June. The works withdrew its referral on the twenty-first, eight days later.',
      unlocks: 'q2'
    },
    {
      id: 'case-24-f6', kind: 'form', label: 'Referral to the police and disciplinary file',
      text: 'Memorandum, 11 June 1968. Hara, Fumiko, of the sample room, is found to have copied works records and given them into the hands of a person outside the works; the person named as having received them is K. Doi, of the Nishikawa Dye Works, a competitor. The matter is grave and is referred to the police. Recommended: dismissal. At the foot, in another hand and a different ink, dated 21 June: referral withdrawn. No ground is entered.',
      anchor: '1968',
      note: 'The whole file is full of reasons. The one line that matters has none under it.',
      unlocks: 'q3'
    },
    {
      id: 'case-24-f7', kind: 'form', label: 'Notice of dismissal',
      text: 'To Hara, Fumiko. You are dismissed from the works from this date for grave misconduct, having copied the property of the works and given it into the hands of others. No reference will be issued. Signed for the works, the manager. Dated 24 June 1968.',
      anchor: '1968',
      note: 'Three days after the works told the police there was nothing to refer.'
    },
    {
      id: 'case-24-f8', kind: 'transcript', label: 'Deposition of a retired foreman',
      text: 'Q. The referral was withdrawn. Why was she dismissed? A. Because the figures were out and the office wanted a head, and hers was the head that had carried the paper out of the sample room. Q. Did she take anything besides the discharge sheet? A. Nothing. It was the lab\u2019s own sheet, the one the lab fills in every month. Nobody buys that. Nishikawa would not have it in the yard if you carried it there in a crate.',
      anchor: '1974',
      note: 'Even the foreman knows the paper was worth nothing to a competitor. Only the file disagrees.'
    },
    {
      id: 'case-24-f9', kind: 'letter', label: 'Letter in her hand, unsent',
      text: 'To the manager, Shiokaze Dye Works. I was eighteen years in the sample room and my own books stand level with the laboratory\u2019s to the tenth. I copied nothing but what the works measured of itself, and I carried it where the fish had died. I do not ask for the place back. I ask only, for my niece\u2019s school form, that the reason given for my dismissal be the true one. \u2014 F. Hara.',
      anchor: '1981',
      note: 'Never posted; it is in the pile because she kept it.'
    },
    {
      id: 'case-24-f10', kind: 'margin', label: 'Margin note, referral file',
      text: 'A discharge sheet is not a secret; it is a confession the works makes to the bay, once a month, in its own hand. She only carried the confession where it would be read. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1988'
    }
  ],

  contradictions: [
    { a: 'case-24-f4', b: 'case-24-f6', reason: 'The referral enters the copied paper as works records, a rival\u2019s prize; the paper itself is the works\u2019 monthly effluent analysis \u2014 oxygen, dye concentration, discharge temperature \u2014 the works\u2019 own account of what it poured into the bay, and worth nothing to a competitor.' },
    { a: 'case-24-f5', b: 'case-24-f6', reason: 'The referral names K. Doi of the Nishikawa Dye Works as the competitor who received the figures; the cooperative\u2019s bulletin, printed on 13 June, carries K. Doi as the cooperative\u2019s own clerk. One man cannot be the rival and the fishermen\u2019s clerk.' },
    { a: 'case-24-f6', b: 'case-24-f7', reason: 'The works withdrew its own referral on 21 June and entered no ground for the withdrawal; the dismissal entered three days later still stands on the identical charge. The file cannot let the case fall and keep the sentence.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-24-f4', prompt: 'What was on the sheet you carried out of the sample room?', answer: 'The works\u2019 own discharge figures: oxygen at the outfall mouth, dye in parts, the temperature of what was poured out. Its waste, not its recipes. I never saw a recipe, and I would not have known what to do with one; what a dye-house puts into the water is not what a dye-house sells.' },
    { id: 'q2', cost: 2, requires: 'case-24-f5', prompt: 'Why the fishermen, and not a newspaper?', answer: 'Because the bay is theirs. \u014chama was eating off that water before the works came and will be eating off it when the works is gone. The clerk asked me to set down what the water held so the members could see their own sea with their own eyes. A newspaper prints a thing once and it blows away; the bulletin stays pinned in the meeting house where the members can read it again whenever the works says there is nothing the matter with the water.' },
    { id: 'q3', cost: 2, requires: 'case-24-f6', prompt: 'The referral was withdrawn. Why did you not fight the dismissal?', answer: 'Because a withdrawal is a paper, not a wage. The office needed a name off the books and mine was the name already written. To fight it I would have had to say who else carried the figures out, and there was no one else, and the clerk had a wife and the cooperative a licence to keep. Someone had to be dismissed. Let them have their word; I have the figures, and the figures are theirs and mine both.' },
    { id: 'q4', cost: 1, requires: 'case-24-f3', prompt: 'Why keep your own notebook at the pipe, when the laboratory kept its own?', answer: 'The laboratory wrote down what suited the laboratory, and wrote it indoors. I wrote down what stood at the pipe\u2019s mouth before the morning shift, with the tide against it. When their sheet and my notebook came out the same to the tenth, I knew the water was as I had found it, and that it was the works that was not.' }
  ],

  key: {
    virtue: 'Defiance',
    wound: 'Abandonment',
    verdict: 'Release',
    truth: 'Fumiko Hara was taken on at the Shiokaze Dye Works on Osaka bay in 1950 and spent eighteen years there, the last of them in the sample room. In June 1968, with the bay\u2019s catch down four parts in five, she carried the works\u2019 own monthly effluent analysis \u2014 dissolved oxygen, dye concentration, discharge temperature at outfall no. 2 \u2014 to the \u014chama fishermen\u2019s cooperative, whose clerk, K. Doi, printed the figures in bulletin no. 14 on 13 June and confirmed them against the cooperative\u2019s own samples. Her notebook of readings at the pipe\u2019s mouth matched the printed table to the tenth. The works could not make espionage of it: the paper was its own waste and no competitor would want it, the figures were public from the thirteenth, and K. Doi was the fishermen\u2019s clerk and not a rival\u2019s man. So it withdrew the referral on 21 June and entered no reason for the withdrawal \u2014 and dismissed her on the 24th all the same, because someone had to be dismissed. The file remembers a spy. She was a woman who measured her employer\u2019s poison in her own notebook and gave it to the people the poison was killing.'
  },

  epilogue: {
    Release: 'You wrote Release, and INDUSTRIAL ESPIONAGE comes off the top of the page in a line of your own ink. Fumiko Hara is filed as a dye-house hand who kept the works\u2019 own discharge sheet in her pocket and her own readings beside it, and carried both to the fishermen whose bay it was killing. The works kept its pension book and its denial; the bulletin stays in the pile, dated the thirteenth of June, and the notebook matches it to the tenth. The record is closed, and this time it is closed on the figures.',
    Return: 'You sent the file back for more. There is nothing left to fetch: the sheet, the bulletin, the notebook and the referral are all in the pile, and the two men who could have answered \u2014 the manager who signed the dismissal and the clerk who printed the figures \u2014 are gone, and the works has shut its gates years since. Returning it leaves her on the shelf under the registrar\u2019s three words, still the spy of the sample room, while the bay she measured has gone quiet and her figures have been right the whole time.',
    Retain: 'You kept the file. That is allowed. Some archivists will not sign off a woman who was dismissed for the one thing the works could not deny and would not admit \u2014 that the water was poisoned and she had the numbers. So she stays on the desk, the notebook open at the last page before the catch failed, and you read the bulletin when the light is bad. The Archive takes no notice of this. It does not settle it either.'
  },

  foreshadow: 'The hand in the margin of the referral file is even and unhurried, and I have met it in other files \u2014 always on the page the registrar did not write, always one line more honest than the file it sits in, and never once signed.'
};
