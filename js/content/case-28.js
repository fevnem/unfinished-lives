// case-28 — The Shift That Wasn't There. A nitrate works in the Atacama, 1908–1945. Difficulty 4.
// Shape copied from case-00; the story and the documents are its own.

export default {
  id: 'case-28',
  order: 28,
  title: 'The Shift That Wasn\u2019t There',
  subtitle: 'File 341-K \u00b7 Closed 1945',
  difficulty: 4,
  era: '1908\u20131945',
  slots: ['1908', '1913', '1920', '1926', '1934', '1945'],

  dossier: {
    name: 'Eusebio Morales',
    alias: 'E. Morales, barretero; \u201ccuadrilla 7\u201d in the pulper\u00eda book',
    age: '61 at entry',
    occupation: 'Barretero (driller), capataz of cuadrilla 7',
    place: 'Oficina Salitrera San Lorenzo, Cant\u00f3n El Toco, then the dumps at Pozo Almonte',
    cause: 'Starvation, with the lungs gone years before',
    entry: '3 September 1945',
    registrar: 'P. Halden, junior'
  },

  intake: 'The roll of Oficina San Lorenzo calls him the man who would not go down. On the night of 11 August 1920 cuadrilla 7 is written off in red as refused, malingerers, struck from the roll \u2014 and four men died under the north gallery the same night, on paper the company says was a working shift. I have filed men who ran from a shift. What I have not filed is a docket and an insurance schedule that disagree about whether the shift happened at all.',

  fragments: [
    {
      id: 'case-28-f1', kind: 'form', label: 'Engagement book, Oficina San Lorenzo',
      text: 'Entered 14 March 1908: Morales, Eusebio \u2014 barretero (driller), 24 years, of the province of Coquimbo, taken on to cuadrilla 7, galer\u00eda norte, at 3.20 pesos the day and tonnage over the barra paid at the month\u2019s end. He does not sign; the bookkeeper has written the name and Morales has set his mark, a cross, before two witnesses.',
      anchor: '1908',
      note: 'Three pesos twenty a day, and a cross where the name should be. The rest of this file is written by men who could sign.'
    },
    {
      id: 'case-28-f2', kind: 'photo', label: 'Photograph, cuadrilla 7 at the north gallery',
      text: 'A works photographer lined cuadrilla 7 up at the mouth of the north gallery: eleven men, barretas and bags of caliche at their feet. On the back of the card, chalked and later inked: \u201cCuadrilla 7 \u2014 San Lorenzo \u2014 1913 \u2014 capataz Morales.\u201d Eleven men stood for it, and eleven names are struck through in the docket of 1920.',
      anchor: '1913'
    },
    {
      id: 'case-28-f3', kind: 'form', label: 'Shift docket, night of 11\u201312 August 1920',
      text: 'Ficha de turno. Galer\u00eda norte, cuadrilla 7, turno noche, 11\u201312 August 1920. Through all eleven names the timekeeper has drawn a line and written in red above them: NO TRABAJARON \u2014 refused the shift \u2014 malingerers \u2014 baja con la cuadrilla. At the foot, in the jefe de m\u00e1quina\u2019s hand: unauthorised absence; struck from the roll. Initials A.C.R. Stamped across the sheet: NO WAGES.',
      anchor: '1920',
      note: 'A shift that did not work, written off in red by a man who was not standing in it.',
      unlocks: 'q1'
    },
    {
      id: 'case-28-f4', kind: 'form', label: 'Wage sheet, cuadrilla 7, August 1920',
      text: 'Cuadrilla 7, August 1920, paid by tonnage raised over the barra. Against the night of 11\u201312 August the sheet carries 41 quintales of caliche at 4.60, and the eleven names are paid through that shift at the day rate. Bookkeeper\u2019s hand, initials J.M.S. The August sheet balances to the centavo.',
      anchor: '1920',
      note: 'Forty-one quintales raised and paid, on the shift the docket says was never worked at all.'
    },
    {
      id: 'case-28-f5', kind: 'form', label: 'Collapse log, north gallery',
      text: 'Libro de derrumbes. 12 August 1920 \u2014 galer\u00eda norte, planch\u00f3n 6: derrumbe at 03.10, roughly twenty metres of section down. Four men of cuadrilla 9 (cargadores, relief shift) recovered dead at 05.40. Timbering at planch\u00f3n 6 noted as in place the morning of the 11th; no fault found in the supports. Signed by the engineer, initials F.B.O.',
      anchor: '1920',
      note: 'Ten past three in the morning, in the engineer\u2019s own hand. He did not say who was below.'
    },
    {
      id: 'case-28-f6', kind: 'form', label: 'Insurance schedule, Compa\u00f1\u00eda Salitrera San Lorenzo',
      text: 'Cuadro de seguros, death and damages, policy 4.118. For 11\u201312 August 1920 the north gallery, cuadrilla 7, is entered EN PRODUCCI\u00d3N \u2014 in production, night shift worked \u2014 and the four dead of cuadrilla 9 are claimed under that shift\u2019s cover, 1,200 pesos each, paid at the cant\u00f3n office. A shift not at work is not covered; the schedule shows the shift at work.',
      anchor: '1920',
      note: 'The same shift the docket struck. The company could not have filed both.',
      unlocks: 'q2'
    },
    {
      id: 'case-28-f7', kind: 'transcript', label: 'Deposition of a survivor, cuadrilla 7',
      text: 'Q. What time did you leave the gallery? A. Half past two, or near it. Morales was down the face and he called us up \u2014 he said the ground was talking, the timbers were creaking at planch\u00f3n 6, and the dust was hanging instead of rising. Eleven of us came up together. Q. And the section? A. Ten past three. Forty minutes, more or less, and it was down. We heard it from the camp. Q. Were you paid for the shift? A. We were paid. The next month the docket said we never went down.',
      anchor: '1920',
      note: 'Half past two and ten past three. The only man in the file who gives the clock both ways.',
      unlocks: 'q3'
    },
    {
      id: 'case-28-f8', kind: 'receipt', label: 'Pulper\u00eda book, account E. Morales',
      text: 'Pulper\u00eda (company store), account E. Morales, cuadrilla 7. 1926: maize, beans, a blanket, all against wages. Between June and December the account is carried in debt and the debit runs to 63 pesos 40 centavos. In January the storekeeper writes at the foot: no longer employed; account closed, not settled. Initialled J.M.S.',
      anchor: '1926',
      note: 'Sixty-three pesos owed to the shop that fed him. After this he is not on the works at all.'
    },
    {
      id: 'case-28-f9', kind: 'letter', label: 'Letter written by a public scribe, Pozo Almonte',
      text: 'Se\u00f1or \u2014 I am the man who took the eleven out at San Lorenzo. Every office I go to says I am on the docket a malingerer, and they will not take a malingerer. My lungs are gone and I have not eaten meat since the anniversary of the collapse. If the company will strike one line from one docket I will work anywhere. Per the signer, who does not write. \u2014 E. Morales, his mark; taken down at Pozo Almonte, this 2nd of May 1934, for 40 centavos.',
      anchor: '1934',
      note: 'He could not read the docket that ruined him, and could not write to have it read. He paid a scribe to say so.',
      unlocks: 'q4'
    },
    {
      id: 'case-28-f10', kind: 'margin', label: 'Margin note, shift docket, August 1920',
      text: 'A docket says the gang refused the shift. The insurance says the shift was worked. The mountain says the section came down at ten past three. One of these was written to pay a man, and one to bury him. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1945'
    }
  ],

  contradictions: [
    { a: 'case-28-f3', b: 'case-28-f6', reason: 'The docket struck all eleven names as having refused the shift; the insurance schedule enters that same night\u2019s shift as in production, and a shift not at work is not covered.' },
    { a: 'case-28-f3', b: 'case-28-f4', reason: 'The docket says the gang did not work and is stamped NO WAGES; the wage sheet pays all eleven through the shift and credits forty-one quintales raised that night.' },
    { a: 'case-28-f3', b: 'case-28-f7', reason: 'The docket says cuadrilla 7 refused to go down; the survivor says the gang was below the face and came up together at half past two.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-28-f3', prompt: 'Why are your gang\u2019s names struck through in red?', answer: 'Because I brought them up. The timekeeper wanted eleven names below at midnight and eleven names on the boxes by morning, and at half past two I took them out. A gang that walks out is a gang that refused; it is cheaper to write, and it pays no wages.' },
    { id: 'q2', cost: 2, requires: 'case-28-f6', prompt: 'The company entered your shift as working \u2014 for the insurance.', answer: 'They had four dead men of the relief under the section and a claim to make, and the claim only stands on a shift that was worked. So the schedule says we worked. The docket says we did not. They kept both, because the two pages were never read in the same room.' },
    { id: 'q3', cost: 2, requires: 'case-28-f7', prompt: 'Forty minutes. How did you know the ground was already going?', answer: 'I had been at that face four hundred nights. When the timber at planch\u00f3n 6 starts to creak a note lower and the dust hangs instead of rising, the section has decided already; it is only waiting. I did not save the morning. I read it early, and the mountain kept the time for me.' },
    { id: 'q4', cost: 1, requires: 'case-28-f9', prompt: 'You never worked another gallery.', answer: 'No office takes a name off the struck docket. I walked eleven men out of a roof that was coming down and they wrote me a malingerer, and the word followed me from Toco to Pozo Almonte until the nitrate failed and there was no work left to be refused.' }
  ],

  key: {
    virtue: 'Endurance',
    wound: 'Starvation',
    verdict: 'Release',
    truth: 'In August 1920 Eusebio Morales, capataz of cuadrilla 7 at Oficina San Lorenzo, heard the timber at planch\u00f3n 6 change pitch and the caliche dust hang wrong, and walked all eleven of his gang up out of the north gallery at half past two in the morning. Forty minutes later the section came down. Four men of the relief shift were below it and died. The company needed that night\u2019s shift to have been a working shift so the four dead would carry on its insurance, and it needed the gang to have refused the shift so it could dismiss them without wages \u2014 so the insurance schedule enters cuadrilla 7 in production and the docket strikes all eleven names as malingerers, two records that cannot both be true. The struck docket was the one that travelled, and no oficina in the cant\u00f3n would hire a malingerer. Morales worked the dumps, then nothing; the nitrate that fed the whole region failed in the 1930s and he starved. He was not a man who would not go down. He was the only man that night who knew when to come up.'
  },

  epilogue: {
    Release: 'You wrote Release, and the red line comes off the docket: cuadrilla 7 is filed as the gang that was warned and came up, not the gang that refused. The four men of the relief shift died at planch\u00f3n 6, and the record now says so without laying them at the feet of the men who walked out in time. Morales comes off the malingerers\u2019 roll of the cant\u00f3n of El Toco. He starved years before you read this, and no stamp feeds him; it only stops the file from calling the starvation earned.',
    Return: 'You sent the file back for the company to answer for the docket and the schedule together. There is no company left to answer: Oficina San Lorenzo closed with the nitrate and its books went down to Antofagasta. Returning keeps him on the shelf as the man who refused the shift, while the wage sheet that pays him forty-one quintales sits underneath it, unread, for another year.',
    Retain: 'You kept the file, which is allowed. Some archivists will not sign off on a man who was right once and paid for it for twenty-five years, so they keep the docket on the desk with the insurance schedule clipped behind it and let the two impossible sentences stand side by side. The department holds no opinion on this. It does not feed him either.'
  },

  foreshadow: 'The line in the margin is written in a hand I have met in other files \u2014 upright, a little too regular, always on the page the registrar did not write. Whoever he was, he had the docket in front of him, and he read it like a man looking for the shift underneath the words.'
};
