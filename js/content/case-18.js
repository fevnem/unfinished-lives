// case-18 — "The Register That Burned". A rural parish, Sörby, Västmanland, 1883–1919. Difficulty 3.
// The file says an unlicensed woman practised superstition. Her licence was in a register that burned.

export default {
  id: 'case-18',
  order: 18,
  title: 'The Register That Burned',
  subtitle: 'File 411-B \u00b7 Closed 1919',
  difficulty: 3,
  era: '1883\u20131919',
  slots: ['1883', '1894', '1901', '1908', '1914', '1919'],

  dossier: {
    name: 'Brita Nilsdotter',
    alias: 'the parish midwife; "jordegumman" in the church books',
    age: '69 at entry',
    occupation: 'Parish midwife, Sörby',
    place: 'Sörby parish, Västmanland',
    cause: 'Old age; entered in the burial book without remark.',
    entry: '2 April 1919',
    registrar: 'A. Fälth, junior'
  },

  intake: 'The file came up folded inside the parish\u2019s own copy of the fire inventory, as though the clerk who closed it had wanted the two kept together and had not the courage to say so. Across the top of the first page, in a firm and tidy hand that is not the registrar\u2019s, stands the phrase UNLICENSED PRACTICE; SUPERSTITION; REPORTED BY THE DISTRICT PHYSICIAN. I have filed the superstitious before, and they are usually women who have cost a doctor his fees.',

  fragments: [
    {
      id: 'case-18-f1', kind: 'form', label: 'Parish register of births, entry for 1883',
      text: 'Births and baptisms, Sörby parish. Child born 14 February 1883 at Backstugan to Johan Olsson, crofter, and his wife. The words \u201cdelivered by\u201d are entered in the registrar\u2019s steady hand: Brita Nilsdotter, parish midwife. Beneath it the midwife\u2019s own name, signed into the register as witness in a hand with the letters closed and small, and countersigned by the rector. She signs in the same form in every volume that follows, for thirty-six years.',
      anchor: '1883',
      note: 'A woman with no authority does not sign the parish register as its midwife and go on signing it for thirty-six years.'
    },
    {
      id: 'case-18-f2', kind: 'form', label: 'Inventory of the parish records lost in the fire, 1894',
      text: 'Inventory of the parish archive, drawn up 3 March 1894 after the fire at the parsonage. Of the volumes burned or damaged past reading the inventory lists, in careful order: the register of communicants, 1860 to 1884; the accounts of the poor fund, 1879 to 1891; and third, the register of licences granted to midwives and lay practitioners, kept since 1831. The inventory records that no duplicate of the licensing volume was kept elsewhere in the province, and that the volume is wholly lost.',
      anchor: '1894',
      note: 'The licence was never \u201cmissing\u201d. It burned, in a volume the parish itself names, and nobody was asked to rebuild it until now.',
      unlocks: 'q1'
    },
    {
      id: 'case-18-f3', kind: 'receipt', label: 'The midwife\u2019s account book, fair copy',
      text: 'Her own account book, kept in a small even hand, one line to every attendance: \u201cattended, fee 1 krona\u201d against the names of farmers and their wives; \u201cattended, free\u201d against crofters and the poor; \u201cgift\u201d against the poorest, with no sum entered and no line drawn through. Four hundred and eleven attendances stand in the book. Against no family that had nothing to pay does any sum appear. One line stands apart, dated November 1901: \u201ccalled, but the doctor sent for first; not admitted\u201d \u2014 and no fee.',
      anchor: '1901',
      note: 'She took the farmer\u2019s money and gave the crofter her time. The book is in her hand, and no sum in it is left owing.',
      unlocks: 'q2'
    },
    {
      id: 'case-18-f4', kind: 'letter', label: 'Letter from the district physician to the provincial board',
      text: 'District Physician R. Sandell to the Provincial Board, 11 October 1908. \u201cI am obliged to report the woman Nilsdotter in Sörby, who continues to attend confinements in this parish without any authority on file. I hold the practice here and a fixed scale of fees, and the poor come to her because hers cost nothing. She has taken from me in the past year alone nineteen confinements. I ask that she be served with notice to cease.\u201d The letter alleges no harm to any mother or child. It does not once speak of the mothers\u2019 health, and the word it repeats is not \u201cdanger\u201d but \u201cfees\u201d.',
      anchor: '1908',
      unlocks: 'q3'
    },
    {
      id: 'case-18-f5', kind: 'transcript', label: 'Deposition of a crofter\u2019s widow, taken by the rector',
      text: 'Deposition taken at the parsonage, 1914. \u201cWhen my last child came, in the frost, the doctor would not come out to the croft; he said the road was not worth his horse. The midwife came on foot through the snow in the night and stayed till morning. She would take nothing, and would not let us thank her. I have said the same to the doctor to his own face.\u201d Signed with a cross. The clerk notes that the deponent cannot write, and that the midwife read the deposition back to her aloud before she set her cross to it.',
      anchor: '1914'
    },
    {
      id: 'case-18-f6', kind: 'form', label: 'Minute of the provincial board, entered on the file',
      text: 'Minute of the Provincial Board, sitting 1908. Present the chairman and two members. On the report of the district physician: the woman Brita Nilsdotter of Sörby is found to have practised midwifery without licence, in a manner the physician reports as superstitious, to the risk of the parishioners; and whereas no register of such licences appears to have been kept in this parish, and none can be produced, the Board cautions her to cease, and orders the caution entered upon her file. The minute is written in a firm and tidy hand and is signed by the chairman.',
      anchor: '1908'
    },
    {
      id: 'case-18-f7', kind: 'form', label: 'Register of deaths, the entry for November 1901',
      text: 'Register of deaths, Sörby. November 1901: Anna, wife of Olof Larsson, farmer at Nordanå, died in childbed. In the column \u201cattended by\u201d a later hand has entered the midwife\u2019s name. Two lines below, in the same later hand and the same ink, the poor fund is debited for the physician\u2019s attendance at that same confinement, and his fee is paid. Of the four hundred and eleven confinements only this one ended badly, and at this one the doctor had been sent for, and came, and was paid.',
      anchor: '1901',
      note: 'The file charges her with the one death in the book. The parish\u2019s own lines pay the doctor for it.',
      unlocks: 'q4'
    },
    {
      id: 'case-18-f8', kind: 'object', label: 'Instrument case, catalogued with the parish effects',
      text: 'A flat case of black leather, catalogue number 7 among the parish effects, opened and listed when the parsonage was cleared after her death. Inside: a pair of forceps of polished steel, a pewter syringe, a small stone bottle still corked and holding the smell of chloride of lime, and a linen apron boiled to the colour of tea. The steel is oiled and free of rust. No charm, no written word, no talisman of any kind is in the case, and the inventory was made by a man who listed everything, down to the aprons.',
      anchor: '1919',
      note: 'The minute calls it superstition. The case nobody opened holds a midwife\u2019s instruments and a bottle of disinfectant, and nothing else.'
    },
    {
      id: 'case-18-f9', kind: 'margin', label: 'Margin note, page 3',
      text: 'The licence is not missing. It burned, and the inventory says so, and a fire is not a sin. Set the inventory against the Board\u2019s minute and it is the minute that is lying, and it lies in a firm and tidy hand. I have seen that hand before, on the shelf behind me, in a file whose register also burned and whose inventory also names the volume it took. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1919'
    }
  ],

  contradictions: [
    { a: 'case-18-f6', b: 'case-18-f2', reason: 'The Board\u2019s minute holds that no register of midwives\u2019 licences was ever kept in the parish; the parish\u2019s own inventory of the fire four years before lists that very register \u2014 licences granted to midwives, kept since 1831 \u2014 among the volumes burned. A register cannot both have been kept and never kept.' },
    { a: 'case-18-f7', b: 'case-18-f3', reason: 'The register of deaths enters the midwife\u2019s name as the one who attended the confinement of November 1901; her own account book, in her hand, records that date as \u201ccalled, but the doctor sent for first; not admitted\u201d. She cannot have attended the confinement at which the record says she was not admitted.' },
    { a: 'case-18-f6', b: 'case-18-f4', reason: 'The Board\u2019s minute records that she was reported for superstition, to the risk of the parishioners; the physician\u2019s letter that prompted it alleges no harm to any mother or child and asks only that she stop taking his nineteen confinements and his fees. Both documents cannot be the same complaint.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-18-f2', prompt: 'The register that held your licence burned in 1894 and was never rebuilt. Did you never ask them to write it again?', answer: 'I was the parish\u2019s midwife, and the parish paid me, and the rector\u2019s own book has my name at every birth. What was there to write again? The inventory names the volume. It burned with the poor fund\u2019s accounts and the communicants\u2019 roll, and they rebuilt neither of those either. They rebuilt only what they had to, and they did not have to rebuild me.' },
    { id: 'q2', cost: 2, requires: 'case-18-f3', prompt: 'You charged the farmers and gave your time to the crofters for nothing. Why keep the account book at all?', answer: 'Because a midwife who keeps no book is a woman they can say anything about. Every line is my hand and my date. If they had opened it they would have found four hundred and eleven and one death, and the death is not mine. They never opened it. They opened the physician\u2019s letter instead.' },
    { id: 'q3', cost: 2, requires: 'case-18-f4', prompt: 'The physician complains you took nineteen confinements from him in a single year. What did he want you to stop?', answer: 'He wanted me to charge. He told me so in the road once \u2014 that a midwife who does not charge is a midwife who ruins the market. I said the crofters have nothing, and he said then they can die in the field like their fathers. I would not say that. So he wrote the word superstitious, and it read better than the truth, which was money.' },
    { id: 'q4', cost: 1, requires: 'case-18-f7', prompt: 'The one death in the book \u2014 the doctor was sent for and came and was paid. You were not admitted. Did you grieve for her all the same?', answer: 'I stood in the yard the whole night. They had called him first and would not let me in, and I did not go home. At first light he came out and told me the woman was dead and that it was God\u2019s will, and drove away. I have her name. The register puts mine against her, and his fee two lines under it.' }
  ],

  key: {
    virtue: 'Devotion',
    wound: 'Shame',
    verdict: 'Release',
    truth: 'Brita Nilsdotter was the midwife of Sörby parish from 1883 until her death in 1919, signing the parish register as its midwife for the whole of it and attending four hundred and eleven confinements. The parish\u2019s register of licences granted to midwives, kept since 1831, burned with the parsonage in 1894; because no duplicate was kept, the record of her licence was gone, and nobody rebuilt it. The district physician, R. Sandell, whose fees she undercut by attending the poor for nothing, reported her in 1908 as an unlicensed and superstitious practitioner, and his letter asks the Board to stop her, speaks only of the nineteen confinements and the fees he has lost, and never alleges any harm. The Board could produce no licence, because the volume that held it had burned, and it entered the words unlicensed practice and superstition on her file. The parish\u2019s own books carry her signature at every birth for thirty-six years; her account book charges the farmers and gives the crofters and the poorest everything for nothing; and the one maternal death among the four hundred and eleven was the physician\u2019s own case, which he attended and was paid for. She was written down as a superstition by the man whose income she had cost, and the paper that would have answered him had gone up in smoke thirty years before anyone thought to ask.'
  },

  epilogue: {
    Release: 'You sign Release, and the words unlicensed practice come off the top page. The record closes on a woman who signed the parish\u2019s own register as its midwife for thirty-six years and was called a superstition by a physician whose fees she had cost. The licensing volume burned in 1894 and was never rebuilt; you do not need it rebuilt now, and the file will say so. Four hundred and eleven confinements stand to her name in a book she kept herself, and the one death is entered against a doctor who was sent for, came, and was paid.',
    Return: 'You send the file back for the licence. There is no licence to be found: the register that held it burned with the parsonage in 1894, the inventory says as much, and no duplicate was ever kept. Returning it keeps her on the shelf another year, still unlicensed in the record\u2019s own word, still waiting for a volume the parish itself declared wholly lost, and growing no truer for the wait.',
    Retain: 'You keep the file. That is allowed. It is hard to close the life of a woman who nursed a whole parish and cannot produce a piece of paper for it, so you leave her on the desk and open the account book again when the light is bad, and read the four hundred and eleven and the one line that says called but not admitted. The Archive does not mind a file kept open. It has a shelf for lives the paper ruined, and this one will not stop being true because you have not signed it.'
  },

  foreshadow: 'The licensing volume burned in 1894 and no one rebuilt it, and the Board found that convenient. There is another file on the shelf behind me, older, whose register also burned, whose inventory also names the volume it took \u2014 and I am beginning to think the fires are kept for the pages that would settle things.'
};
