// case-30 — The Wardrobe Nobody Collected. A hospital laundry in Marseille, 1968–2005. Difficulty 2.
// Shape copied from case-00; the stock-take, the receipts and the ward are its own.

export default {
  id: 'case-30',
  order: 30,
  title: 'The Wardrobe Nobody Collected',
  subtitle: 'File 226-L \u00b7 Closed 2005',
  difficulty: 2,
  era: '1968\u20132005',
  slots: ['1968', '1974', '1979', '1986', '1993', '2005'],

  dossier: {
    name: 'Marthe Roux',
    alias: 'M. Roux; on the buanderie books, initialled M.R.',
    age: '68 at entry',
    occupation: 'Laundress, hospital laundry',
    place: 'The buanderie, H\u00f4pital de la Conception, Marseille',
    cause: 'Died at home four months after the dismissal',
    entry: '2 June 2005',
    registrar: 'P. Halden, junior'
  },

  intake: 'The file came up from the buanderie in a laundry bag, which is a first. The finding is written across the top in the storekeeper\u2019s hand: DISMISSED \u2014 340 PIECES OF HOSPITAL LINEN UNACCOUNTED FOR. I have filed laundresses who stole: they take towels and sheets, and there is a market for both. Nobody steals a dead man\u2019s cardigan, and the catalogue in this file is almost nothing but cardigans.',

  fragments: [
    {
      id: 'case-30-f1', kind: 'photo', label: 'Photograph, the buanderie, 1968',
      text: 'A photograph of the hospital laundry: steam, a row of mangles, a deep sink, and a woman at the folding table with her sleeves turned up and her face away from the camera. On the back, in the ward clerk\u2019s pencil: Buanderie, H\u00f4pital de la Conception, Marseille, 1968.',
      anchor: '1968',
      note: 'In every photograph of that room she is folding, never posing.'
    },
    {
      id: 'case-30-f2', kind: 'form', label: 'Engagement, hospital laundry',
      text: 'H\u00f4pital de la Conception, Marseille. Engaged from 2 September 1968 as laundress, \u00e0 la buanderie: Marthe Roux, 31, of the rue de la Pi\u00e9t\u00e9. The duties are set out in two lines: hospital linen, in and out. Signed for the hospital, and beneath it, in a small careful hand, \u2014 M. Roux.',
      anchor: '1968',
      note: 'Two lines of duty. Everything that follows was done outside them.'
    },
    {
      id: 'case-30-f3', kind: 'form', label: 'Repair log, the buanderie',
      text: 'Repair log, kept at the mending bench. Columns: date, article, repair, wage. The entries run the length of the book in one hand, initialled M.R.: a child\u2019s coat relined; cardigans darned at the elbow; a woman\u2019s nightdress mended; a button sewn on a shirt that is not a hospital shirt. Against every one of her entries the wage column stands empty.',
      anchor: '1974',
      note: 'Initialled, and never credited. The laundry kept no other record of it.'
    },
    {
      id: 'case-30-f4', kind: 'form', label: 'Night sister\u2019s duty note',
      text: 'Duty note, night sister, ward 6: send the personal things down to the buanderie with the linen \u2014 the woman who does the abandoned ones takes them as they are and they come back clean and whole, and those who have nobody else have something of their own to put on. Do not put them in the hospital count.',
      anchor: '1974',
      note: 'The ward knew. The count did not.'
    },
    {
      id: 'case-30-f5', kind: 'receipt', label: 'Purchase receipts, four years',
      text: 'A bundle of receipts, four years of them, from the mercerie and the friperie on the boulevard, bound with string. Rows of garments and sums: children\u2019s frocks, women\u2019s blouses, cardigans, small coats, in sizes from two years to forty-four. The pencil tally at the foot of the bundle, in her hand, reads: 340.',
      anchor: '1979',
      note: 'Four years, one hand, one number. It is the same number as the charge.'
    },
    {
      id: 'case-30-f6', kind: 'form', label: 'Standing order, hospital stores',
      text: 'H\u00f4pital de la Conception, stores. Standing order for linen, entered each quarter: sheets, draw-sheets, pillow-slips, gowns, towels, in fixed counts. No item of children\u2019s or women\u2019s clothing appears in any order for the period. The clerk\u2019s line at the foot: the hospital does not issue or replace private garments.',
      anchor: '1986',
      note: 'Read the catalogue against this. The hospital never bought a single one.'
    },
    {
      id: 'case-30-f7', kind: 'receipt', label: 'Payslips, the laundry',
      text: 'Payslips, one a month, in a rubber band. Hours, rate, net. Twice a year at the foot, in the paymaster\u2019s hand: avance \u2014 r\u00e9gl\u00e9e. She drew her wage forward again and again, in small sums, and paid the advances back in small sums, on a laundress\u2019s pay, for years.',
      anchor: '1986',
      note: 'The advances are in the file. The receipts are in the file. Nobody joined the two.'
    },
    {
      id: 'case-30-f8', kind: 'form', label: 'Stock-take of the buanderie',
      text: 'Stock-take, buanderie, 12 November 1993. Counted in: 2,140 pieces of hospital linen. Unaccounted for against the issue book: 340 pieces, entered as hospital linen. The catalogue beneath lists them in full: 118 children\u2019s frocks and pinafores, 96 women\u2019s blouses, 74 cardigans, 52 small coats and overalls, sizes two years to ten and women\u2019s thirty-eight to forty-four.',
      anchor: '1993',
      note: 'Sizes of children the hospital never had, in garments the hospital never ordered.'
    },
    {
      id: 'case-30-f9', kind: 'form', label: 'Finding and dismissal',
      text: 'H\u00f4pital de la Conception, administration, 2005. M. Roux, laundress, buanderie, dismissed. Finding: 340 pieces of hospital linen unaccounted for and not recovered. No shortage is traced to any other member of the staff. Dismissal takes effect at once. Pension reduced by the value of the linen, to be assessed.',
      anchor: '2005',
      note: 'The charge and the catalogue are one number and one hand. Neither is hers.'
    },
    {
      id: 'case-30-f10', kind: 'margin', label: 'Margin note, stock-take',
      text: 'They counted her kindness as stock and called the shortage a theft. A hospital measures what it owns; she measured what was needed, and the two ledgers never agreed. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '2005'
    }
  ],

  contradictions: [
    { a: 'case-30-f6', b: 'case-30-f8', reason: 'The stock-take catalogues children\u2019s frocks, women\u2019s blouses and cardigans as hospital property; the hospital\u2019s own standing orders, every quarter of the period, contain no such item. The hospital cannot have lost what it never bought.' },
    { a: 'case-30-f5', b: 'case-30-f8', reason: 'The stock-take puts 340 pieces of hospital linen beyond account; the receipts in her hand, four years of them, add up to exactly 340 garments bought with her own money.' },
    { a: 'case-30-f4', b: 'case-30-f9', reason: 'The finding calls the 340 pieces hospital linen; the ward\u2019s own duty note says the garments sent down to the buanderie are the abandoned patients\u2019 personal clothes, and warns the ward not to put them in the hospital count.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-30-f5', prompt: 'You bought the garments yourself. How many were there?', answer: 'Three hundred and forty, over four years, one and two at a time, out of the friperie and the market. I kept every receipt because I could not have said it any other way. When they counted the laundry they counted my receipts, and never once asked me what they were.' },
    { id: 'q2', cost: 2, requires: 'case-30-f8', prompt: 'The stock-take numbers the 340 as hospital linen.', answer: 'The hospital has no children\u2019s frocks. It has no cardigans and no women\u2019s blouses, not one, not in any order it ever placed. The things it could not find were the things it never had, and the things it never had were the things I put back on the ward.' },
    { id: 'q3', cost: 1, requires: 'case-30-f3', prompt: 'Your mending is initialled in the log and never paid.', answer: 'Mending the hospital\u2019s linen was the wage. The rest was after the shift and off the book, so it stayed off the book. Nobody pays you for a thing they have decided is not theirs.' },
    { id: 'q4', cost: 2, requires: 'case-30-f4', prompt: 'Who were the abandoned ones?', answer: 'The ones with nobody to fetch their things. They came in with all they owned in a paper bag, and the bag went to the incinerator with the dressings. I washed what they had and mended what would mend, and when it would not mend I bought it out of my pay, so they would have something of their own to wear and not the paper.' }
  ],

  key: {
    virtue: 'Devotion',
    wound: 'Abandonment',
    verdict: 'Release',
    truth: 'The hospital laundry at the Conception took in hospital linen and, unofficially, the personal clothing of patients nobody came for \u2014 the abandoned ones, the ward\u2019s own name for them. Marthe Roux washed and mended those garments after her shift, and when one was past mending she bought the replacement herself from her wage at the mercerie and the friperie, and put it back on the ward so that a patient would not have to wear hospital paper. Over four years her receipts came to exactly 340 pieces. In 1993 a stock-take counted the buanderie\u2019s unaccounted stock and set those 340 pieces down as hospital linen \u2014 children\u2019s frocks, women\u2019s blouses, cardigans, small coats, in sizes the hospital had never ordered and never possessed. The repair log shows her mending initialled beside an empty wage column; the ward\u2019s own duty note names her. In 2005 the administration read the count and dismissed her for it, and reduced her pension by the value of the linen. The record says a laundress stole 340 pieces of hospital linen. The truth is that she bought them, gave them away, and was charged with their theft.'
  },

  epilogue: {
    Release: 'You wrote Release, and the finding comes off the top of the file in a stroke of your own ink. Marthe Roux is filed as a laundress who bought 340 garments out of her own wage and put them back on the ward, and was dismissed for the one ledger she kept. The pension line is struck through with the rest. It is a small correction, and it is the last one you will make; there is one file left after this, and it is not hers.',
    Return: 'You sent the file back. The hospital is under a new administration, the storekeeper is dead, and the friperie on the boulevard has been a pharmacy for twenty years. There is nothing left to fetch. Returning it keeps her on the shelf under the finding \u2014 dismissed, 340 pieces missing \u2014 while the receipts sit in the bundle beside her, still adding up to what they always added up to.',
    Retain: 'You kept the file, which is allowed. Some archivists will not sign off the woman who laundered the abandoned and was charged with it by a stock-take, and would rather keep her on the desk than let the count have the last word. She stays, the catalogue pinned to the stock-take and the bundle of receipts beneath it, and you read the two numbers against each other when the light is bad. The department takes no notice. It does not strike the charge either.'
  },

  foreshadow: 'The hand in the margin of the stock-take is upright and a little too regular, and it has written the only sentence in this file that is neither an order nor a count. I have seen it close other files, always on the page the registrar did not write \u2014 and there is one file left in the pile.'
};
