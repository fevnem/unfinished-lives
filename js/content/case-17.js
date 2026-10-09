// case-17 — "The Man He Pulled Out". A Chicago packing house, 1871–1908. Difficulty 3.
// The file says accident, deceased’s own negligence, and closes in five days.

export default {
  id: 'case-17',
  order: 17,
  title: 'The Man He Pulled Out',
  subtitle: 'File 017-D \u00b7 Closed 1901',
  difficulty: 3,
  era: '1871\u20131908',
  slots: ['1871', '1884', '1893', '1901', '1902', '1908'],

  dossier: {
    name: 'Anton Rehak',
    alias: 'A. Rehak; Rehak, A. on the shift cards',
    age: '50 at entry',
    occupation: 'Hog floor; killer, later hasher man, No. 4 hasher',
    place: 'the packing yards, Chicago',
    cause: 'Accident; the deceased\u2019s own negligence, as written',
    entry: '11 November 1901',
    registrar: 'J. Quirk, junior'
  },

  intake: 'The file closed in five days, which is faster than this office closes anything, and it closed on the yard\u2019s own account or written from it. Cause of death: accident; and the rest of the line: the deceased\u2019s own negligence. The account under the line was taken at the packing house the day the man died, from the foreman, and no workman is named on it. I have filed a great many careless men. It is the ones nobody asked that come back to the shelf.',

  fragments: [
    {
      id: 'case-17-f1', kind: 'form', label: 'Register of hands, hog floor',
      text: 'Register of hands, hog floor, entered by the yard clerk. Rehak, Anton; hired 3 July 1871; age 20; Pilsen by way of Bremen; 9 cents the hour; entered on the word of Foreman Kub\u00edk. Eleven other names are entered the same week on the same page. At the foot of the page, in a second hand and dated 1884: still on the floor.',
      anchor: '1871'
    },
    {
      id: 'case-17-f2', kind: 'form', label: 'Register of hands, second book, 1884',
      text: 'Register of hands, second book. Kub\u00edk, Josef; hired 2 June 1884; age 16; entered as nephew of Foreman Kub\u00edk in the column kept for kin; hog floor, 7 cents the hour. Against the name, in the training column, the letter R: broken in at the knife by Rehak, A. The foreman signed the page and the clerk entered the line.',
      anchor: '1884'
    },
    {
      id: 'case-17-f3', kind: 'photo', label: 'The hog floor, as built',
      text: 'Hog floor, photographed for the yard\u2019s exhibit at the World\u2019s Columbian Exposition, 1893. Rails, killing beds, and the line of hashers along the left wall. The machine third from the wall is marked on the print in a drafting hand: No. 4 hasher. The feed mouth stands open; the print shows no guard on the machine and no bracket where one would hang. On the back, in pencil: No. 4, as built, 1889.',
      anchor: '1893',
      note: 'The yard kept this print to show what its floor could do. It shows the machine as it stood for twelve years.'
    },
    {
      id: 'case-17-f4', kind: 'form', label: 'Shift card, Rehak, A., week of 11 Nov 1901',
      text: 'Shift card, No. 4 hasher, week of 11 November 1901. Punched by the clock at the door. Monday 11 Nov: in 06:02; out 09:40, entered after the fact by the clerk. Rehak, A., hog floor. His regular shift, entered on the same card, begins at 07:00, six days the week. He was through the door and on the floor fifty-eight minutes before his own shift.',
      anchor: '1901',
      note: 'A man clocks on when he steps through the door. Fifty-eight minutes is not a man arriving early for his own work.',
      unlocks: 'q1'
    },
    {
      id: 'case-17-f5', kind: 'form', label: 'Shift card, Kub\u00edk, Josef, week of 11 Nov 1901',
      text: 'Shift card, No. 4 hasher, week of 11 November 1901. Kub\u00edk, Josef; hog floor. No punches for Monday 11 Nov; the clerk has written absent across the day. The same man\u2019s cards run absent to 22 December 1901, six weeks to the day, and the first punch after them is entered hog floor, light work. No injury and no report of one is entered on any of the six cards.',
      anchor: '1901',
      unlocks: 'q2'
    },
    {
      id: 'case-17-f6', kind: 'form', label: 'Order book, requisition, No. 4 hasher',
      text: 'Yard order book, requisitions, 1901. No. 4 hasher, hog floor. Requisition entered 9 September 1901 for one guard, bar and hinge, to be fitted at the feed mouth. In the column headed On hand, the clerk has entered the same date, 9 September 1901, and the machine is carried in the book as guarded from that day.',
      anchor: '1901',
      note: 'The book puts the guard on the machine in September. The book is written in an office.',
      unlocks: 'q3'
    },
    {
      id: 'case-17-f7', kind: 'receipt', label: 'Delivery note, guard, No. 4 hasher',
      text: 'Delivery note, folded into the back of the order book. One guard, bar and hinge, for No. 4 hasher, hog floor. Delivered at the yard gate and signed for 14 December 1901: Kub\u00edk, foreman. The note is dated thirty-three days after the man who worked the machine was carried out of the yard.',
      anchor: '1901'
    },
    {
      id: 'case-17-f8', kind: 'form', label: 'Coroner\u2019s sheet, Cook County',
      text: 'Coroner\u2019s sheet, Cook County, entered 12 November 1901. Deceased: Rehak, Anton, 50, hog floor, No. 4 hasher. Cause of death: accident; deceased\u2019s own negligence. The account on the sheet was taken at the yard on 11 November, from the foreman, and written out the same day; no workman is named on it. The sheet records that the deceased was alone at the machine, busy at his own work, and reached past the guard. Filed and closed 16 November 1901, five days after the death.',
      anchor: '1901',
      unlocks: 'q4'
    },
    {
      id: 'case-17-f9', kind: 'transcript', label: 'Deposition, Vyhn\u00e1lek, Karel',
      text: 'Deposition taken by the county inspector, 14 February 1902. Deponent: Vyhn\u00e1lek, Karel; hog floor, No. 4 hasher; in the yard since 1888. Q. Who was at the machine with Rehak? A. The foreman\u2019s nephew, Josef Kub\u00edk. His hand was at the feed and the rollers took his sleeve, and Rehak put his own arm in and pulled him clear. The boy went home and the yard wrote him down absent. Q. Did you say this in November? A. I was on the floor. Nobody asked me in November.',
      anchor: '1902'
    },
    {
      id: 'case-17-f10', kind: 'margin', label: 'Margin note, against the shift card',
      text: 'Read the hour he clocked on, fifty-eight minutes before his own shift. Read the boy\u2019s card and count six weeks the yard wrote as absent. Hold the order of 9 September against the delivery note of 14 December and put the death of 11 November between them. Read the deposition that was taken in February and never filed. Four papers, four dates, and every one of them in the yard\u2019s own hand. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1908'
    }
  ],

  contradictions: [
    { a: 'case-17-f8', b: 'case-17-f9', reason: 'The coroner\u2019s sheet records the deceased alone at the machine and busy at his own work, on the foreman\u2019s account alone; the deposition names a second man at the feed mouth, the man Rehak pulled clear. A machine cannot have held one man and two.' },
    { a: 'case-17-f6', b: 'case-17-f7', reason: 'The order book carries the guard as on hand and the machine as guarded from 9 September 1901; the delivery note has the guard signed for at the yard gate on 14 December 1901, thirty-three days after the death. The guard cannot be on the machine in September and at the gate in December.' },
    { a: 'case-17-f5', b: 'case-17-f9', reason: 'The boy\u2019s card writes absent for 11 November and for the six weeks after; the deposition puts him at the machine that morning and sends him home with his sleeve torn. Six weeks absent is the shape of an injured arm, not of a man who was never on the floor.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-17-f4', prompt: 'Your card is punched at two minutes past six. Your shift begins at seven. What were you doing on the floor an hour early?', answer: 'The foreman sent for me at the boarding house before six. The boy was at the hasher on his own and could not hold it, and Kub\u00edk wanted the machine running and no hand to say otherwise. I came to hold it for him. Read the card and you read the hour I was called.' },
    { id: 'q2', cost: 2, requires: 'case-17-f5', prompt: 'The boy\u2019s card says absent, six weeks of absent. What does a card write when a man is hurt?', answer: 'It writes what the clerk is told to write. He was on the floor at ten minutes to seven and he went home at seven with his arm through his sleeve. The six weeks are the six weeks that arm took. A card that says injured is a card the inspector asks to see, and the yard had the card in its own hand.' },
    { id: 'q3', cost: 2, requires: 'case-17-f6', prompt: 'The order book carries the guard on the machine from September. The delivery note says December. Which date is true?', answer: 'Ask the gate. The guard came through the gate on the fourteenth of December and the foreman signed for it. The feed mouth stood open the whole autumn and the machine ran every day. The book is written in an office; the gate is not.' },
    { id: 'q4', cost: 1, requires: 'case-17-f8', prompt: 'The sheet says you were alone and busy at your own work. Were you?', answer: 'My work was at the killing bed, not at the hasher. I was at the hasher because the boy was in it. The sheet was written from one account, taken at the yard the day I died, by the man who signed for the guard six weeks later.' }
  ],

  key: {
    virtue: 'Mercy',
    wound: 'Guilt',
    verdict: 'Release',
    truth: 'On the morning of 11 November 1901 Anton Rehak, thirty years a hog-floor man in a Chicago packing house, was sent for before his shift because the foreman\u2019s nephew, Josef Kub\u00edk, was alone at the No. 4 hasher and losing it. The boy\u2019s sleeve went into the feed and Rehak put his own arm in and pulled him clear; the rollers took Rehak\u2019s arm and he died in the yard. The boy went home, and the yard wrote him absent for six weeks \u2014 the shape of the arm he nearly lost. No guard stood on the machine: it was ordered on 9 September 1901, the order book entered it as on hand the same day, and it came through the gate on 14 December, thirty-three days after the death. The coroner\u2019s sheet was written from the foreman\u2019s account alone and closed in five days, calling it the deceased\u2019s own negligence, because a dead man\u2019s fault closes a file and a missing guard opens a yard to the inspector. The workman who saw it gave his account in February 1902; nobody had asked him in November. Rehak reached into the machine for another man and was buried as a careless one, and the guilt the file pinned on him belonged to the yard and the boy and the men who kept quiet.'
  },

  epilogue: {
    Release: 'You sign Release, and the words his own negligence come off the cause of death. The record closes on a man sent for before his shift to hold a machine another man could not hold, who reached in and pulled a boy out and was buried for it. The guard he did not have came through the gate on the fourteenth of December. The file closes on the truth, and the yard is not named in the closing, which is the most an archivist can do with a book that writes itself.',
    Return: 'You send the file back for the yard\u2019s inspection record and the rest of the boy\u2019s cards. There is no more to find: the machine was broken up years ago, the foreman is dead, and the only man who saw it spoke once, in February 1902, to an inspector who never filed it. Returning the file leaves Rehak on the shelf another year, still negligent, still alone at the machine, waiting on a deposition that was taken and lost.',
    Retain: 'You keep the file. That is allowed. Some archivists cannot close a life a company\u2019s convenience wrote in five days, so they keep it on the desk and read the two cards and the two dates again when the light is bad \u2014 the hour he clocked on, the six weeks the boy was absent, the guard that came in December. The Archive does not punish this. It has no shelf for a man careless with his own arm and careful with another man\u2019s life.'
  },

  foreshadow: 'The hand in the margin counts the same four things in every file I open \u2014 the hour, the date, the missing page, the man nobody asked. It is not the registrar\u2019s hand, and it has been keeping this count on this shelf longer than I have.'
};
