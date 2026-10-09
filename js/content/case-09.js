// case-09 — The Survey Dated After the Fall. A slate quarry in north Wales, 1897–1935. Difficulty 3.
// The file says unreliable. The arithmetic says a report six days after the roof came in.

export default {
  id: 'case-09',
  order: 9,
  title: 'The Survey Dated After the Fall',
  subtitle: 'File 223-C · Closed 1935',
  difficulty: 3,
  era: '1897–1935',
  slots: ['1897', '1905', '1911', '1919', '1927', '1935'],

  dossier: {
    name: 'Owen Prydderch',
    alias: 'O. Prydderch; on the books, ‘the boy from the Twll Coch face’',
    age: '43 at entry',
    occupation: 'Slate quarryman, later clerk of returns',
    place: 'Cae Ddu quarry, Dyffryn Ogwen, near Bethesda',
    cause: 'Silicosis, certified by the company’s own doctor',
    entry: '11 June 1935',
    registrar: 'J. Corlett, duty'
  },

  intake: 'The file arrived with the quarry’s own returns wrapped round it and tied with the tape the company still uses on its ledgers. The registrar before me wrote a single line across the front and drew a line under it: UNRELIABLE — STATEMENT WITHDRAWN. I have filed a hundred men the company called careless. What I have not filed before is the boy who reported the fall, and a survey dated after the fall it says it prevented.',

  fragments: [
    {
      id: 'case-09-f1', kind: 'form', label: 'Burial register, Capel Salem, Dyffryn Ogwen',
      text: 'Prydderch, Robert, quarryman, of Tyn y Ffridd, 34. Killed by a fall of rock at the Cae Ddu quarry, the Twll Coch face, 2 March 1897. Buried 6 March, chapel ground. Entered beneath, in the same hand: his son Owen, aged five, at the graveside; his widow. No inquest held.',
      anchor: '1897',
      note: 'The same face this file will be about buried his father first. The boy was five years old and standing at the hole.'
    },
    {
      id: 'case-09-f2', kind: 'form', label: 'Works roll, engagement',
      text: 'Cae Ddu Slate Company. Engaged: Prydderch, Owen, 13, of Tyn y Ffridd, as lamp-boy and mill hand, wages six shillings the week, boy’s rate. Put to the Twll Coch face at seventeen, on his mother’s word. The undermanager has written in the margin: used to the roof by now.',
      anchor: '1905',
      note: 'The quarry that killed his father takes the boy on at thirteen, and then sends him to the same face.'
    },
    {
      id: 'case-09-f3', kind: 'form', label: 'Accident book, Cae Ddu quarry',
      text: '3 November 1911. Fall of roof, Twll Coch face, morning shift. Killed: Rees, William, 41; Lloyd, Thomas, 29; Jones, Ebenezer, 38. Cause entered: fall of rock from the roof. Reported by O. Prydderch, labourer, at the face. Inquest: none held. The entry is in the undermanager’s hand.',
      anchor: '1911',
      note: 'Three men, three ages that add to a hundred and eight, one face, and no inquest. The ink is the first thing to check.',
      unlocks: 'q1'
    },
    {
      id: 'case-09-f4', kind: 'form', label: 'Surveyor’s report, roof of the Twll Coch face',
      text: 'I have this day inspected and examined the roof of the Twll Coch incline and found it sound, and pronounce the same fit for working. The boy Prydderch was removed from this face on my instruction before the fall, having shown himself careless, and was not at the roof when it came down. Dated 9 November 1911. Signed, J. Ackroyd, surveyor.',
      anchor: '1911',
      note: 'A report that certifies a roof is sound, and dates itself six days after the roof came in.',
      unlocks: 'q3'
    },
    {
      id: 'case-09-f5', kind: 'receipt', label: 'Wage slip, O. Prydderch',
      text: 'Cae Ddu Slate Company. Wages, week beginning 6 November 1911. Prydderch, O. Rate changed this week: from face rate, seventeen shillings, to yarding rate, twelve shillings. Transferred off the Twll Coch face, undermanager’s authority, initials R.H. Deductions: rent, 2s 6d; doctor, 4d.',
      anchor: '1911',
      note: 'The rate changes in the week beginning the sixth — the week after the fall. The week before was the twenty-eighth of October, and the slip has him still on the face.',
      unlocks: 'q2'
    },
    {
      id: 'case-09-f6', kind: 'transcript', label: 'Statement of Owen Prydderch, taken 11 November 1911',
      text: 'Taken before E. Morton, clerk to the company. ‘The roof had been giving these three weeks. This morning it gave, and the three of them were under it. I showed the surveyor the crack at the last inspection. They sent the men in at six.’ Entered across the sheet, in the registrar’s hand: UNRELIABLE — STATEMENT WITHDRAWN.',
      anchor: '1911',
      note: 'He says the fall happened this morning. The sheet is dated eleven November. The single sheet in the file, and the only one the registrar read.'
    },
    {
      id: 'case-09-f7', kind: 'form', label: 'Record book, hours and returns, 1911–1912',
      text: 'The hours of the Twll Coch shift, week by week, in the clerk’s hand. The November entries, the week of the fall among them, are written in the same ink and the same sitting as the entries for the following March and April; the accident week sits on a leaf a season too new. The week of 3 November records the shift at full strength, three men under the roof as usual.',
      anchor: '1911',
      note: 'Two books record the same week. In the accident book the week is old ink. In the record book it is new. One of the two was written late.'
    },
    {
      id: 'case-09-f8', kind: 'letter', label: 'Letter to the Inspector of Mines',
      text: 'Sir — I write again about the fall of the third of November, 1911, at the Twll Coch face, Cae Ddu quarry, in which three men were killed. The survey of the roof is dated six days after the fall. I beg you to examine the date. — Owen Prydderch, Tyn y Ffridd. At the foot, in pencil, initialled E.M.: ‘No purpose. Matter closed 1911. Return to file.’',
      anchor: '1919',
      note: 'He asked for eight years. Somebody put a pencil to it and closed the whole thing in one line.',
      unlocks: 'q4'
    },
    {
      id: 'case-09-f9', kind: 'form', label: 'Returns ledger, Cae Ddu quarry, in his hand',
      text: 'Output returns, quarter by quarter, sixteen years without a gap, in the same upright hand: slate, tons; waste, tons; men on the books. The signature at the foot of every quarter is O. Prydderch, clerk. The hand that opened the accident book in 1911 now closes the company’s own returns.',
      anchor: '1927',
      note: 'Off the face for good, and the man who kept the books the company would rather the Inspectorate never read.'
    },
    {
      id: 'case-09-f10', kind: 'form', label: 'Certificate of the cause of death',
      text: 'Prydderch, Owen, 43, quarryman, of Tyn y Ffridd. Cause of death: silicosis of the lungs, certified by A. Fenn, the company’s surgeon. Employed at the same quarry from 1905 to 1935. No post-mortem. No note of the fall.',
      anchor: '1935',
      note: 'Thirty years in the dust of one quarry, and the company’s own doctor signs him off without a word about the roof.'
    },
    {
      id: 'case-09-f11', kind: 'margin', label: 'Margin note, statement of O. Prydderch',
      text: 'Three weeks of warning, three men, and a certificate dated after the fact. Read the dates before you read the adjectives, and the boy stops being unreliable. — in the margin, in a hand that is not the registrar’s',
      anchor: '1935'
    }
  ],

  contradictions: [
    { a: 'case-09-f3', b: 'case-09-f4', reason: 'The accident book puts the fall on 3 November; the surveyor’s report certifies the roof sound and dates itself 9 November. A report cannot have made safe a roof that came in six days before it was written.' },
    { a: 'case-09-f4', b: 'case-09-f5', reason: 'The surveyor says the boy was removed from the face before the fall for carelessness; the wage slip changes his rate off the face only in the week beginning 6 November, the week after. He was on the roof when it came down.' },
    { a: 'case-09-f3', b: 'case-09-f7', reason: 'Two books record the same November week. In the accident book the week is old ink; in the record book it is written in the same sitting as the following spring. One of the two was written up late.' },
    { a: 'case-09-f3', b: 'case-09-f6', reason: 'His statement says the fall happened this morning, yet it is dated 11 November, eight days after the date the accident book gives. The statement was taken on the day and its date moved.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-09-f3', prompt: 'The accident book says the roof was sound when it fell. Whose words are these?', answer: 'The undermanager’s, and he was not under the roof. I was. Three weeks I watched that crack widen over their heads, and said it to the surveyor at the inspection, and nobody wrote my words down until the men were dead and it suited them to write them wrong.' },
    { id: 'q2', cost: 2, requires: 'case-09-f5', prompt: 'The rate changes in the week beginning the sixth. That is the week after the fall.', answer: 'The week after. Not the week before, which is where they have put it. A careless boy is taken off a face before the roof comes down. I was on it when it came down and taken off it after, and the slip carries the dates the way I was never allowed to say them.' },
    { id: 'q3', cost: 2, requires: 'case-09-f4', prompt: 'You are said to contradict this survey. But the survey is dated after the fall.', answer: 'Then it contradicted nothing and prevented less. I could not contradict a report that had not been written when I spoke. They set my statement after their survey so that a boy who cried warning would read as a boy who cried too late. It is only a date, and a date was all they needed.' },
    { id: 'q4', cost: 1, requires: 'case-09-f8', prompt: 'You wrote to the Inspectorate for eight years. Why stop?', answer: 'Because they answered the same thing every time: no purpose, matter closed. I kept the company’s own returns after that, year on year, in my hand. If the record will not carry the three men, then let the record be mine, and let somebody read it who understands what the dates are doing.' }
  ],

  key: {
    virtue: 'Curiosity',
    wound: 'Silence',
    verdict: 'Return',
    truth: 'Owen Prydderch was the boy at the Twll Coch face on 3 November 1911, when the roof came in and killed William Rees, Thomas Lloyd and Ebenezer Jones. He had watched the crack open for three weeks and said so at the last inspection. To bury the warning, the company back-dated its cover: the surveyor’s report certifying the roof sound carries the date 9 November, six days after the fall it claims to have made safe, and the boy’s own statement, taken on the day, was re-dated to 11 November so that it would read as the grudge of a man contradicting a settled report. The wage slip shows the truth the way arithmetic does: his rate was changed off the face in the week beginning 6 November, the week after and not the week before, so he was under the roof when it fell. The accident book’s ink for that week is old; the record book’s is a season too new. No inquest was held. Owen Prydderch was struck off the face, never re-hired to it, wrote to the Inspector of Mines for eight years, and spent the rest of his working life keeping the company’s own returns. The file says unreliable and withdrew his statement. He was the only one who told the truth.'
  },

  epilogue: {
    Release: 'You signed Release, and UNRELIABLE comes off the front of the file in a line of your own ink. Owen Prydderch is filed as the boy who read the roof and said so, the dates the company shuffled — 3, 9, 6 and 11 — set down in order: the survey after the fall, the statement after the survey, the rate struck the week after the roof came in. The arithmetic is exact, and it is exact in the only office that was never asked to keep it. No jury ever heard these dates. You have closed the file on the strength of paper the company owns, and the record that calls him unreliable is still in the works archive, in the company’s hand, where your line of ink cannot reach it.',
    Return: 'You signed Return, and the file goes back — not to the shelf, to the proceeding it was never given. That is the omission underneath all the others: no inquest on the third of November 1911, and none on his father before him in 1897, and no finding any court ever entered on the three men the accident book names as killed. Their deaths were filed without being tried, and a death filed that way is not finished, however neatly an archivist can set the dates. Return defers the file to the inquest it is owed: let a jury hear the survey dated 9 November, six days after the fall it swears it made safe; the statement taken on the day and dated 11; the rate changed off the face in the week beginning the sixth, the week after and not the week before. The debt is deferred, and the word UNRELIABLE comes off the file in the company’s own hand, where it was written, and not before.',
    Retain: 'You kept the file. That is allowed, and it is the closest of the three to what the man did himself: he kept the company’s own returns because the record would not carry the three men, and you keep his file because the record will not carry him. So he stays on the desk, the accident book open at 3 November and the survey open beside it at 9, and you read the two dates until the light is bad. But keeping it here corrects nothing. The UNRELIABLE is still where the company put it, the inquest the file has been owed since 1897 is still not held, and a file on a desk is not a file sent anywhere. The Department does not notice. It does not correct them either.'
  },

  foreshadow: 'The hand in the margin of his statement is upright and a little too regular, the same hand I have met in other files — always on the page where the registrar’s arithmetic gives itself away.'
};
