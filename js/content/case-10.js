// case-10 — "Three Men in One Ledger". Nairobi railway depot, 1905\u20131944. Difficulty 3.
// Written to the shape of case-00. Do not "improve" the shape.

export default {
  id: 'case-10',
  order: 10,
  title: 'Three Men in One Ledger',
  subtitle: 'File 610-N \u00b7 Closed 1944',
  difficulty: 3,
  era: '1905\u20131944',
  slots: ['1905', '1907', '1911', '1913', '1919', '1921', '1931', '1944'],

  dossier: {
    name: 'Suleiman bin Omari',
    alias: 'Sulieman (porter); Suleiman bin Omari (clerk); Sulaiman (linesman) \u2014 one man, three spellings',
    age: '39 at death',
    occupation: 'Porter; office clerk; linesman, Uganda Railway, Nairobi depot',
    place: 'Nairobi depot, Uganda Railway, East Africa Protectorate',
    cause: 'Killed by the down goods train, mile 327, 1919. The file gives three ends for three men.',
    entry: '6 August 1944',
    registrar: 'E. L. Marston, senior'
  },

  intake: 'The file came up with the widow\u2019s last appeal pinned to the front, and the depot\u2019s returns show three men: a porter who deserted, a clerk who was dismissed, and a linesman killed by a train. Three men, three ends, three names, and the registrar before me counted them and was satisfied. I have filed a man who was one man three times before, and I did not learn it until the pension office wrote to ask which of them it should address.',

  fragments: [
    {
      id: 'case-10-f1', kind: 'photo', label: 'Photograph, depot staff, 1905',
      text: 'About forty men outside the depot offices. Porters squat in the front row with their loads, the office staff stand behind, and one man is set apart at the end in a linesman\u2019s coat he has no business wearing yet. On the back, in one clerkly hand: Nairobi depot, 1905. He is the only man in the group not looking at the camera.',
      anchor: '1905',
      note: 'Listed among the porters in 1905. He is a clerk in the ledger of 1911 and a linesman on the gang roll of 1919.',
      unlocks: 'q4'
    },
    {
      id: 'case-10-f2', kind: 'form', label: 'Return of porters, quarter ending June 1907',
      text: 'Handlist of porters, Nairobi depot. Line 14: Sulieman. Deserted, 3 June; struck off the strength; wage number 1,148 closed. Against his name the pay clerk has written: refused a witness, signed for himself, small upright hand. The officer\u2019s minute below reads: no address, no next of kin, nothing owing.',
      anchor: '1907',
      note: 'A number the return closed, and one hand it could not account for.'
    },
    {
      id: 'case-10-f3', kind: 'form', label: 'Office establishment ledger, page 9',
      text: 'Appointments and dismissals, office establishment. 1911: Suleiman bin Omari, clerk, third grade. Dismissed for neglect of duty, 11 October; re-engagement not recommended. At the foot of the entry the man has signed for his own dismissal: Suleiman bin Omari \u2014 the same small upright hand as the porter\u2019s, the same lift of the pen over the last stroke.',
      anchor: '1911',
      unlocks: 'q3'
    },
    {
      id: 'case-10-f4', kind: 'receipt', label: 'Depot pay ledger, page 22',
      text: 'One wage number, 1,148, runs down this page under two spellings: Sulieman, porter, in 1905 and 1907; Sulaiman, linesman, in 1913 and 1919. Against every entry stands the same thumb impression, taken in the paymaster\u2019s ink, the rule of the pay table being that no written signature is accepted from a man on the labour sheets. One thumb, two names, four entries, one column.',
      anchor: '1907',
      unlocks: 'q1'
    },
    {
      id: 'case-10-f5', kind: 'letter', label: 'Letter of application, in his own hand',
      text: 'To the District Engineer, Nairobi depot. Sir \u2014 I ask to be taken on again, as a linesman on the permanent way. I was clerk in the office until 1911; I am not afraid of the work and I can keep the books if they are wanted. I have served the depot since 1905 under whatever name the returns cared to use. I will sign the gang roll every morning myself. \u2014 Suleiman bin Omari.',
      anchor: '1913',
      note: 'Filed with the office establishment papers, and the name on it entered on the permanent way\u2019s.',
      unlocks: 'q2'
    },
    {
      id: 'case-10-f6', kind: 'form', label: 'Accident return and death record, 1919',
      text: 'Permanent way, Nairobi depot. Sulaiman, linesman, killed by the down goods train at mile 327, 4 November. He had signed the gang roll that morning, in a small upright hand. Effects: one coat, one book. Next of kin: not stated. The record is filed by itself, apart from the porter\u2019s return and the clerk\u2019s ledger, and mentions neither.',
      anchor: '1919'
    },
    {
      id: 'case-10-f7', kind: 'letter', label: 'Pension claim of the widow, and its two refusals',
      text: 'Claim of Mariam binti Hassan, widow, of Pangani, for the pension of her husband, a linesman of the depot killed by a train in 1919. First refusal, 1921: no man of the name is on the strength. Second refusal, 1931: the register shows him dismissed for neglect in 1911, and the regulation is that no pension is payable to a dismissed man. Two replies, two grounds, and neither of them names the man she married.',
      anchor: '1921',
      unlocks: 'q5'
    },
    {
      id: 'case-10-f8', kind: 'letter', label: 'Head office letter to the depot',
      text: 'From the General Manager\u2019s office, Nairobi. To the Depot Office. Your returns exhibit three men: a porter, Sulieman, deserted 1907; a clerk, Suleiman bin Omari, dismissed 1911; a linesman, Sulaiman, killed 1919. The widow of one of them has applied for a pension. Be so good as to inform this office which of the three we are to write to, and under which name the pension, if any, is to be made out.',
      anchor: '1931',
      note: 'Three men in the returns, and one woman at the door.'
    },
    {
      id: 'case-10-f9', kind: 'margin', label: 'Margin note, page 3',
      text: 'Three names, one hand, one thumb, one coat, one book. The depot did not lose a man; it lost one name three times and charged the widow the difference. Whoever reads this: count the hands and not the ledgers. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1944'
    }
  ],

  contradictions: [
    { a: 'case-10-f2', b: 'case-10-f4', reason: 'The return strikes the porter off the strength in June 1907 and closes wage number 1,148; the pay ledger pays that same number again, under the second spelling, so a number the depot had closed was drawing wages all along.' },
    { a: 'case-10-f3', b: 'case-10-f6', reason: 'The establishment ledger dismisses the clerk in 1911 and recommends no re-engagement; the accident return has a linesman signing the gang roll in his own hand as late as 1919. A dismissed man cannot be on the strength eight years after he was struck off.' },
    { a: 'case-10-f7', b: 'case-10-f8', reason: 'The pension office refused the widow on the ground that no man of her husband\u2019s name was on the strength; head office\u2019s own letter names three men of that name and asks the depot which of them to write to about her claim.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-10-f4', prompt: 'There is one wage number on that page and two spellings against it. Whose number is it?', answer: 'It is mine. The paymaster took my thumb because a man on the labour sheets is allowed no signature at the table, so the thumb is the only mark of mine the depot ever kept, and it stands against both names. They knew it was one thumb. They kept it in one column and read it as two men.' },
    { id: 'q2', cost: 2, requires: 'case-10-f5', prompt: 'Is that your hand?', answer: 'I had been a clerk before the office dismissed me, so I could write, and I wrote for the linesman\u2019s post because a man must eat. They filed the letter with the office papers and entered my name on the permanent way\u2019s, and by that filing I was two men, and by the accident a third.' },
    { id: 'q3', cost: 1, requires: 'case-10-f3', prompt: 'The ledger says you were dismissed for neglect of duty.', answer: 'I signed for my own dismissal because the officer told me to, and a man who will not sign is no man at all on the returns. The neglect was one page mislaid in a file I was never given. I signed it in my own hand; they kept the hand and lost the man.' },
    { id: 'q4', cost: 2, requires: 'case-10-f1', prompt: 'Who is the man at the end of the row?', answer: 'That is me, the year they took us all out for the photograph. Porters in front, office behind, and me at the end in the linesman\u2019s coat I did not have yet. I am in every ledger in that building and in none of them twice under the same spelling of my name.' },
    { id: 'q5', cost: 1, requires: 'case-10-f7', prompt: 'Your wife was refused twice.', answer: 'She was refused as the widow of a dismissed man, and again as the widow of a man who never served. She is neither. I served the depot nineteen years under three arrangements of my own name, and the only paper they will let her have is the difference between them.' }
  ],

  key: {
    virtue: 'Duty',
    wound: 'Displacement',
    verdict: 'Release',
    truth: 'Suleiman bin Omari came to the Nairobi depot in 1905 and served it until 1919 \u2014 porter, then office clerk, then linesman on the permanent way \u2014 while the ledger clerks spelt his name three ways on three separate handlists. Each spelling was entered as its own man: Sulieman the porter, who deserted in 1907; Suleiman bin Omari the clerk, dismissed in 1911; Sulaiman the linesman, killed by the down goods train in 1919. The records are one man: the same small upright hand signs all three entries, the same thumb impression stands against one wage number under two spellings, and the same coat and book are returned as his effects. Head office, asked for the pension, could not decide which of the three to write to and so wrote to none, and his wife was refused twice \u2014 once as the widow of a dismissed man, once as the widow of a man who never served. He did his duty under whatever name the returns allowed him, and the returns displaced him three times over.'
  },

  epilogue: {
    Release: 'You sign Release. The three names are struck through and one is written against all three of them in the margin: Suleiman bin Omari, porter, clerk, linesman, one man, nineteen years. The register of desertions and the register of dismissals are corrected in the same hand that corrected them, and the pension the depot could never decide to pay is made out to a widow in Pangani under the name she was married with. The record is closed. Wage number 1,148 is retired, and no man is to be paid on it again.',
    Return: 'You send the file back for more evidence. There is no more evidence: the hand, the thumb and the number are all lying in the file already, and head office has said in its own letter that it cannot choose between three men. Returning it keeps him on the shelf another year, still three men, still nobody to write to, and his wife one year older as the widow of nobody in particular.',
    Retain: 'You keep the file. That is allowed. Some archivists cannot close a life the record opened three times over, so they keep it on the desk and read the three ledgers side by side until one hand bleeds into the next. The Archive does not object. There is room on the shelf, and the shelf, unlike the depot, does not make you choose a spelling.'
  },

  foreshadow: 'The line under DESERTED in the 1907 return is drawn in a hand that is not the officer\u2019s. It is the hand from the margins of other files, and it was in this one before the widow ever applied.'
};
