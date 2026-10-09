// case-20 \u2014 order 20, difficulty 4. The jute mills on the Hooghly at Barrackpore, 1900\u20131936.
// The file says a loom hand stopped four machines without authority and was struck off as an agitator.
// The stoppage book keeps one column for a stoppage, and the one column says unauthorised.

export default {
  id: 'case-20',
  order: 20,
  title: 'The Stoppage Entered as Sabotage',
  subtitle: 'File 320-C \xb7 Closed 1936',
  difficulty: 4,
  era: '1900\u20131936',
  slots: ['1900', '1906', '1912', '1919', '1926', '1930', '1936'],

  dossier: {
    name: 'Ramdin Mahto',
    alias: 'R. Mahto on the mill books; \u201cthe hand of 47\u201d in shed C',
    age: '44 at entry',
    occupation: 'Loom hand, shed C, Nilkanta Jute Mills',
    place: 'Nilkanta Jute Mills, Barrackpore, on the Hooghly; the lines at Ghoshpara',
    cause: 'A tightness of the chest. The mill\u2019s doctor writes \u201cthe jute cough\u201d and leaves it there.',
    entry: '4 November 1936',
    registrar: 'A. C. Roy, junior'
  },

  intake: 'The file came off the mill shelf in a bundle of stoppage books with one thin folder on top, marked AGITATOR. The word is written across the folder in the mill agent\u2019s own hand. Under it lies the stoppage book, which keeps exactly one column for a stoppage, and the one column says unauthorised. I have read a great many unauthorised things. They are almost never unauthorised for the reason that is set down.',

  fragments: [
    {
      id: 'case-20-f1', kind: 'form', label: 'Stoppage book, shed C, book 4',
      text: 'Shed C, book 4, the stoppage of the morning of 14 July 1919. Looms 43, 44, 46 and 47 stopped at 11.20 by the hand of 47, Mahto, R., who threw the driving belt off its pulley. Time lost to the shift: six hours, the shed not running again until the afternoon bell. Column 7, cause of stoppage: unauthorised. Column 8, damage to machinery: none; a fresh belt sheathed by the fitter within the hour and the loom back on. Signed, Bhagwan Das, jobber; entered, B. R. Sen, clerk. In the discharge column, in a later hand: struck off, agitator.',
      anchor: '1919',
      note: 'One column for a reason, and the reason is a word that means only that nobody gave leave.',
      unlocks: 'q1'
    },
    {
      id: 'case-20-f2', kind: 'form', label: 'Accident register, mill dispensary',
      text: 'Register of accidents, dispensary, the same morning. At 11.20, a half-timer from shed C, loom 47, right hand caught between the belt and the pulley; the loom stopped and the hand freed, two fingers laid open. Brought up to the dispensary by the hand of 47 himself, off his own loom. The boy gives his name as Budhan; age entered twelve; wage two annas the day, half-timer. Dressed and sent back to the lines the same evening.',
      anchor: '1919',
      note: 'Two books of the same mill, written the same morning by two clerks who never once compared the hour.',
      unlocks: 'q2'
    },
    {
      id: 'case-20-f3', kind: 'receipt', label: 'Wage roll, half-timers, shed C',
      text: 'Wage roll, shed C, half-timers, paid at the gate each Saturday. Line 61: Budhan, half-timer, two annas the day. At the head of the same roll, in the checking clerk\u2019s fist, against the boy\u2019s line: admitted under the standing rule. The rule pasted inside the roll\u2019s cover reads, in part: no half-timer to be taken on under twelve years, and none to work at a machine under fourteen.',
      anchor: '1919',
      note: 'The mill\u2019s rule set against the mill\u2019s own roll, in the hand of the man who did the admitting.'
    },
    {
      id: 'case-20-f4', kind: 'object', label: 'Union membership ledger, quarter-bound',
      text: 'A quarto ledger, the property of the Barrackpore Jute Workers\u2019 Union. At the head of the first page, in the secretary\u2019s hand: every man who pays his pice is entered, and no man entered who does not pay. The book opens with the founding, August 1920, and carries names, thumbs and dues to the last page, 1936. Three hundred and eleven entries. Mahto, Ramdin appears nowhere in it. The founding organiser, entered with his thumb at the head of the list, is Bansi Lal, then of shed D.',
      anchor: '1930',
      note: 'A union that entered every pice a man paid, and has not one pice of his.',
      unlocks: 'q3'
    },
    {
      id: 'case-20-f5', kind: 'transcript', label: 'Deposition of Bhagwan Das, jobber',
      text: 'Taken at the mill gate, 1926. Q. Who threw the belt? A. The hand of 47, Mahto. Q. And you? A. At the far end of the shed. Q. The book entered him absent that morning. A. The book is written to the office. The office keeps one column for a stoppage, and the column says unauthorised. There is no column for what a belt is thrown off for, so the stoppage goes down unauthorised, and unauthorised reads as wilful. Q. And his name struck off? A. Struck, and let go, and I signed the book because it was the book.',
      anchor: '1926',
      note: 'The jobber does not defend him. He explains the form, which is the more useful thing.',
      unlocks: 'q4'
    },
    {
      id: 'case-20-f6', kind: 'form', label: 'Report of the mill agent, and the discharge',
      text: 'Report of the agent to the managing board, 18 July 1919, with the discharge entered beneath it. The hand Mahto, R., loom 47, shed C: absent from his work the whole of that morning; stopped four looms without authority; wilful damage to the mill\u2019s machinery; six hours lost to the shed. Struck off the books as an agitator and dispensed with his lines. The report finds him the ringleader of the trouble in the sheds, and the man who has been putting the other hands up to a union.',
      anchor: '1919',
      note: 'Four days after the stoppage, and the union it names had not yet been founded. The mill needed a name to strike off, and had the shed to itself to choose one.'
    },
    {
      id: 'case-20-f7', kind: 'photo', label: 'Photograph, shed C',
      text: 'A cabinet print, foxed at the corners, of shed C in the early years: two long rows of looms under the shafting, belts rising to the line-shaft like reins, a gang of hands at the frames. In the foreground a single loom carries a card on its beam. On the back, in pencil: shed C, new belt on 47. The print has gone brown with age; the card on the beam has been written much later, in a sharper pencil.',
      anchor: '1906',
      note: 'The new belt on 47 was in 1919. The photograph is a dozen years older than the belt it was made to show.'
    },
    {
      id: 'case-20-f8', kind: 'form', label: 'Standing rule, pasted in the shed',
      text: 'Nilkanta Jute Mills. Standing rule, dated 1905, pasted within the cover of every wage roll in shed C. One: no half-timer to be taken on under twelve years. Two: no woman or child to work at a machine under fourteen. Three: the jobber answers for the age of every hand he puts to a frame. Signed for the mill, the agent.',
      anchor: '1906',
      note: 'The rule is older than the boy it was broken for, and it is pasted inside the very roll that enters him.'
    },
    {
      id: 'case-20-f9', kind: 'margin', label: 'Margin note, stoppage book, page 88',
      text: 'The book keeps one column for a stoppage, and the column says unauthorised, so every stoppage in it is wilful and every wilful one is given a name. Read the hour on this page, then read the hour in the accident register; they are the same hour. Read the roll for the boy, then read the rule pasted in the roll. Then read the union\u2019s own book, which entered every pice a man paid, and read what is not in it. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1936'
    }
  ],

  contradictions: [
    { a: 'case-20-f1', b: 'case-20-f6', reason: 'The stoppage book, written the same morning, enters the stoppage as unauthorised with damage to machinery: none, the loom back on within the hour; the agent\u2019s report of the same stoppage, four days later, enters it as wilful damage to the mill\u2019s machinery. A stoppage cannot at once have broken nothing and have been wilful damage to four looms.' },
    { a: 'case-20-f2', b: 'case-20-f6', reason: 'The accident register has the hand of 47 himself bring the boy up from loom 47 at 11.20 that morning; the agent\u2019s report discharges him for being absent from his work the whole of that morning. A man cannot be at his own frame at 11.20 and absent from the shed the whole of the same morning.' },
    { a: 'case-20-f4', b: 'case-20-f6', reason: 'The agent\u2019s report of July 1919 names Mahto the man putting the sheds up to a union; the union was founded in August 1920, and its own ledger, entered from that founding, has no Mahto in it and names Bansi Lal its organiser. The hand struck off for the union is not in the union.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-20-f1', prompt: 'The stoppage book keeps one column for a reason. What stands in it?', answer: 'Unauthorised. It is the only word the office keeps for a stoppage. Not careless, not a hand under a belt \u2014 only unauthorised, which means nobody gave leave, which means nothing more than that. But a stoppage that was not given leave reads as a stoppage that was done to hurt, and the file reads it that way and stops there.' },
    { id: 'q2', cost: 2, requires: 'case-20-f2', prompt: 'The boy at loom 47, in the register on the same morning. Whose was the hand that threw the belt?', answer: 'Mine. I threw the belt off my own loom and three more came down with it, and I did not wait on the jobber for leave. It cost the shed six hours and the office a week\u2019s count. It also left the boy his hand. Put it in the book as the book has it, if it must be put somewhere.' },
    { id: 'q3', cost: 1, requires: 'case-20-f4', prompt: 'The union entered every pice a man paid from its first day. Is your name in it?', answer: 'No. And I will not say it should be. They struck me off the mill for a union, and the union never had me, and I have spent seventeen years not knowing which of those two words is the harder. Let them keep Bansi; he did the work of it. I only threw a belt.' },
    { id: 'q4', cost: 2, requires: 'case-20-f5', prompt: 'What did you do that morning, before the book was written?', answer: 'I threw a belt off my own frame and stopped three others with it, four looms down for six hours, and that is in the book and it is true. The rest \u2014 the trouble in the sheds, the putting-up of other men, the union \u2014 was written in the office by men who were not in the shed. I never answered it. A hand cannot answer a book.' }
  ],

  key: {
    virtue: 'Defiance',
    wound: 'Betrayal',
    verdict: 'Retain',
    truth: 'On the morning of 14 July 1919 a half-timer\u2019s hand was caught between the belt and the pulley at loom 47 in shed C of the Nilkanta Jute Mills, Barrackpore. Ramdin Mahto, the hand of that loom, threw the driving belt off the pulley and brought three more looms down with it; the hand was freed, and the shed lost six hours. The mill\u2019s stoppage book keeps one column for a stoppage, and the column says unauthorised, so the throwing of a belt that freed a hand was entered as a stoppage without leave; four days later the agent entered the same stoppage again as wilful damage to machinery, called the hand absent from a shed he was standing in, and discharged him as an agitator and the organiser of a union. The facts contradict the entry on the file\u2019s own paper: the accident register carries the same hour for the boy that the stoppage book carries for the stoppage, the wage roll enters the boy as a half-timer against the mill\u2019s own standing rule on the age of half-timers and machine hands, and the union\u2019s ledger, which entered every pice a man paid from its founding in 1920, has no Mahto in it and names Bansi Lal its organiser. The file calls him an agitator with a word that the only book able to prove it refused to hold.'
  },

  epilogue: {
    Release: 'You sign Release, and the file closes clean: a loom hand who threw a belt off his own frame on a July morning, brought four looms down to free a boy\u2019s hand, and lost his lines and his name for it. The Archive keeps the hour, and it is the same hour in the stoppage book and in the accident register. It is a true reading and a tidy one. But the word struck off still stands on the mill\u2019s book, in the mill\u2019s one column that says only unauthorised; a file you close cannot correct the paper it came out of.',
    Return: 'You send the file back for the mill to enter what its one column never had room for. It cannot answer: the mill wrote the only record of that morning and closed its books on him, and the union it struck him off for never had his name in it. Returning it keeps a hand on the shelf another year, still struck off, still the ringleader of a union of one, waiting on a book that has no column for him and no hand left to write in it.',
    Retain: 'You keep the file, and it is the honest seal, not the timid one. The word struck off cannot come off the paper, because the mill wrote the only record of that morning: its stoppage book keeps one column, the column says unauthorised, and there is no column in it for a belt thrown off a pulley to free a boy\u2019s hand. You will not close a life on a word the only book able to hold it refused to keep. So the book stays open at page 88, its one column and its one word standing where the office left them, and the boy\u2019s own entry \u2014 a half-timer put to a machine against the rule pasted in his roll \u2014 stays open beside it, accounted to nobody. The Archive does not mind.'
  },
  foreshadow: 'The margin note is in the small upright hand I have met before, and it counts columns the way I count them. Whoever held that pen read the stoppage book the way the office should have read it, thirty years before the file came down to me, and left the reading where the next hand would find it.'
};
