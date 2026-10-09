// case-07 — THE ENTRY IN ANOTHER HAND. The Casablanca–Marseille ferry run.
// Difficulty 2. One column, one night, and a hand that does not belong.

export default {
  id: 'case-07',
  order: 7,
  title: 'The Entry In Another Hand',
  subtitle: 'File 07-C \u00b7 Reopened 1991',
  difficulty: 2,
  era: '1958\u20131991',
  slots: ['1958', '1964', '1971', '1979', '1985', '1991'],

  dossier: {
    name: 'Hassan Belkacem',
    alias: 'H. B., and signed so in the roll',
    age: '54 at entry',
    occupation: 'Able seaman, motor ferry Casablanca\u2013Marseille',
    place: 'Casablanca; no address anywhere in the file',
    cause: 'Recorded lost overboard at sea, 1979. He was not at sea.',
    entry: '2 November 1991',
    registrar: 'The harbour office at Casablanca, one unsigned stamp'
  },

  intake: 'He comes to me as water does: without a body. The file says missing, presumed drowned at sea in 1979, and the same page notes he had been reported twice that year for fighting aboard ship \u2014 the registrar has underlined the fighting as if it explained the sea. A man who cannot keep his hands to himself goes over the rail; that is the whole of the reasoning, and it is the reasoning I have been handed. I have filed a hundred drownings. Not one of them left paper behind it. He has left a great deal.',

  fragments: [
    {
      id: 'case-07-f1', kind: 'form', label: 'Muster roll, first entry',
      text: 'Roll of the crew, motor ferry Casablanca\u2013Marseille. Entered at Casablanca: Belkacem, Hassan, able seaman. The mate keeps his section in one hand \u2014 small, left-leaning, one line to a man and the same for every watch \u2014 and he has kept it so since the ship was new.',
      anchor: '1958',
      note: 'One hand, one line a man, eleven years. Hold that steady in your mind.'
    },
    {
      id: 'case-07-f2', kind: 'photo', label: 'Quayside, Casablanca',
      text: 'A man in a seaman\u2019s jersey on the quay, one hand on a bollard, not looking at the lens. A girl of perhaps six stands a half-step behind him, holding the hem of his coat. There is no writing on the back, no studio mark, no date.',
      anchor: '1964',
      note: 'A child. She is in no paper in this file.'
    },
    {
      id: 'case-07-f3', kind: 'letter', label: 'Letter to the child',
      text: 'My small one \u2014 I am at sea this week, but the sea is only a job, like the docks. I keep your name in my head and nowhere else, because a name on paper is a name somebody can take from us. When the ship is finished with me I will come and live where I can see your window. Do not put my name on anything either. \u2014 H.',
      anchor: '1971',
      note: 'Sent or unsent, kept or lost \u2014 it is his hand, and it is the only place she exists.'
    },
    {
      id: 'case-07-f4', kind: 'form', label: 'Muster roll, the night of the loss',
      text: 'Muster roll, watch of the night of 4 October 1979. In the column kept for Belkacem: absent from muster; then, in a second entry beneath it, lost overboard \u2014 presumed drowned. The second entry is not the mate\u2019s. It slants the other way and closes its letters, and it is the only line in his whole section that does.',
      anchor: '1979',
      note: 'Eleven years of one hand, and then this one line.'
    },
    {
      id: 'case-07-f5', kind: 'object', label: 'Seaman\u2019s discharge book',
      text: 'A seaman\u2019s discharge book, worn soft, issued at Casablanca in 1958. The last stamp in it is dated 4 October 1979, and it is a port-office stamp \u2014 shore leave, granted at Casablanca \u2014 and not a ship\u2019s stamp at all. He was on the quay the night the ferry stood out without him.',
      anchor: '1979',
      note: 'A port office does not stamp a man who is going over the rail at sea.'
    },
    {
      id: 'case-07-f6', kind: 'transcript', label: 'Deposition of a shipmate',
      text: 'Q. Was Belkacem aboard that night? A. He was not. He had asked the mate for the night and the mate owed him a favour. Q. Then whose absence was the roll covering? A. Look at the week, not the night. One man is down for two watches in that week and only one of him signed. Somebody was ashore in Tangier who is written at sea.',
      anchor: '1985'
    },
    {
      id: 'case-07-f7', kind: 'receipt', label: 'Rent receipts, Casablanca',
      text: 'Thirty-six receipts for one room, bound with string: rent, paid quarterly, at 14 rue de la Palmeraie, Casablanca, from October 1979 to October 1991. Twelve years, to the month, and the tenant came in person for every one of them. The clerk has written the last receipt in the same hand as the first.',
      anchor: '1991',
      note: 'October 1979 is the month the file says the sea took him.'
    },
    {
      id: 'case-07-f8', kind: 'margin', label: 'Margin note, in an earlier hand',
      text: 'Two entries for one watch in the week of the loss, and only one man to sign them. Look at the hand and not at the column. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1979'
    }
  ],

  contradictions: [
    { a: 'case-07-f4', b: 'case-07-f5', reason: 'The roll has him lost overboard on the night of 4 October 1979; the port office stamped him ashore at Casablanca on the same date. A man cannot be drowned at sea and granted shore leave on the quay in one night.' },
    { a: 'case-07-f4', b: 'case-07-f7', reason: 'The roll drowned him in October 1979; the Casablanca rent receipts run every quarter from that same month for twelve years. The drowned do not pay rent in person.' },
    { a: 'case-07-f1', b: 'case-07-f6', reason: 'The mate\u2019s section gives every man one line and one only; the shipmate says a single man is entered for two watches in the week of the loss. One line to a man cannot also be two.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-07-f4', prompt: 'Whose hand wrote me into that night?', answer: 'Not the mate\u2019s. He wrote us all small and left-leaning for eleven years and would not have spoilt it on my account. Whoever wrote me into the water needed the roll to say a man was aboard who was not. Ask who needed to be somewhere else that week.' },
    { id: 'q2', cost: 2, requires: 'case-07-f6', prompt: 'The man whose absence was covered \u2014 who was he to you?', answer: 'Nothing. He was the mate\u2019s friend and the mate owed him a night ashore in Tangier. It cost one name to pay it, and mine was the name easiest written. I had no wife in the crew list and no address in the file. Nobody would ever have written to me.' },
    { id: 'q3', cost: 2, requires: 'case-07-f3', prompt: 'Why did you never put her name on paper?', answer: 'Her mother\u2019s people would have taken her across the water. So long as there was no paper there was no man to be named, and she stayed where I could reach her. I kept her in one letter and in my coat, and that was the whole of my family.' },
    { id: 'q4', cost: 1, requires: 'case-07-f7', prompt: 'You lived twelve years in Casablanca. Why never tell the Archive?', answer: 'Because I was dead at sea, and a dead man makes no trouble for anybody. If I had shown my face the roll would have had to be corrected, and the man who wrote me into the water would have lost his berth. He had children of his own. So I let him keep it, and I paid my rent.' }
  ],

  key: {
    virtue: 'Devotion',
    wound: 'Displacement',
    verdict: 'Retain',
    truth: 'Hassan Belkacem signed on the Casablanca\u2013Marseille ferry in 1958 and sailed her for twenty-one years. He had a daughter in Casablanca whom he never named on any paper, for fear her mother\u2019s people would take her across the water; a photograph and one unsent letter are the whole of what he left of her. On the night of 4 October 1979 he asked the mate for the night ashore and got it \u2014 the port office stamped his discharge book as he came off the ship \u2014 and another man\u2019s name went into the muster roll, in a different hand, to cover a mate\u2019s friend who was ashore in Tangier that week, a man the roll shows twice. Belkacem let the sea keep his name for twelve years, because a living man\u2019s correction would have cost the man who wrote him into the water his berth and his children their bread. He took a room at 14 rue de la Palmeraie and paid the rent himself every quarter until he died ashore in October 1991, twelve years to the month, within reach of his daughter\u2019s window. The file records only the sea.'
  },

  epilogue: {
    Release: 'You released him as a man who chose the water over the truth, and the department closes a drowning that never happened. His name comes off the roll of the lost. The correction goes down to the harbour office at Casablanca, into a register nobody has opened since the ferries stopped, and the night of 4 October 1979 is written right in a book that will not be read. Somewhere in Tangier, a mate\u2019s friend long retired loses the berth Belkacem bought him with his own death, and never learns from whom.',
    Return: 'You sent the file back to have the correction entered, and the correction is not yours to enter. It waits on a harbour office that no longer keeps the register, on a mate who is dead himself, and on a daughter who never knew there was a file to correct. Belkacem stays reopened \u2014 neither drowned nor finished \u2014 on a shelf that has learned the shape of him, and the sea goes on keeping the name he gave it.',
    Retain: 'You kept the file. You marked the second entry for what it was \u2014 another man\u2019s hand in a column that had held one hand for eleven years \u2014 and then you did what he asked and wrote nothing about him into anything. The sea keeps his name, as he meant it to. You keep the only page in the Archive that says the sea is wrong. Two entries, one man; you leave the false one where he put it, and lift the next file.'
  },

  foreshadow: 'The margin note is not the registrar\u2019s hand, and it is not any hand from this case either. I have met it before \u2014 small, upright, a little too regular, as if learned late and practised hard \u2014 on files this registrar never touched and in margins nobody signed.'
};
