// case-02 — THE WOMAN WHO KEPT THE BOOK. Order 2, difficulty 2.
// Newfoundland outport, 1901–1938. Same shape as case-00; a different story.

export default {
  id: 'case-02',
  order: 2,
  title: 'The Woman Who Kept the Book',
  subtitle: 'File 118-C \u00b7 Closed 1938',
  difficulty: 2,
  era: '1901\u20131938',
  slots: ['1901', '1908', '1914', '1919', '1927', '1938'],

  dossier: {
    name: 'Bridget Nolan',
    alias: 'Mrs Thomas Nolan; the widow Nolan',
    age: '58 at entry',
    occupation: 'Filed as none. Kept the harbour wage book, 1908\u20131919',
    place: 'Nolan\u2019s Cove, a fishing outport on the northeast coast',
    cause: 'Want; the schedule enters it as starvation',
    entry: '4 January 1938',
    registrar: 'H. Pike, district'
  },

  intake: 'The file came up from the coast in a mailbag with two others and a note from the district registrar: woman, widow, pauper, relief case, nothing here to interest us. The schedule is in order. There is a ruled book bound in behind it that nobody has accounted for, and the book is in a firm upright hand. The schedule says the woman could not write.',

  fragments: [
    {
      id: 'case-02-f1', kind: 'form', label: 'Parish register, entry of marriage',
      text: 'Nolan, Bridget \u2014 spinster, 19, of this harbour. Nolan, Thomas \u2014 fisherman, of the same. The clergyman has written at the foot of the entry: the bride cannot write; signed with her mark, a cross. The two witnesses have signed for four other brides on the same page.',
      anchor: '1901'
    },
    {
      id: 'case-02-f2', kind: 'form', label: 'Settlement of a crew, schooner Ada May',
      text: 'Settlement of the crew, twelve hands, for the voyage to the Labrador, paid in full. Signed per procurationem by B. N. The signature is firm and upright and slants the same way as the small initials at the foot of the relief ledger. Paid to the penny.',
      anchor: '1908',
      note: 'Per procurationem: signed on another\u2019s behalf. The clergyman of 1901 says she could not hold a pen.',
      unlocks: 'q1'
    },
    {
      id: 'case-02-f3', kind: 'receipt', label: 'Relief ledger, pages for 1914',
      text: 'A ruled book, one page to a week. Forty families entered, with the measure allowed to each. Every entry is in the same upright hand. At the foot of each page: total issued, checked, and a small neat N. No keeper\u2019s name is written anywhere in the book.',
      anchor: '1914',
      note: 'The book runs eleven years. The registrar filed it under its first page and never turned it.'
    },
    {
      id: 'case-02-f4', kind: 'receipt', label: 'Merchant\u2019s store receipt, 1919',
      text: 'Received from the relief account, eleven pounds of flour and nine of meal, issued to the families of the sealing crews lost on the ice. Signed: B. Nolan, for the committee. The storekeeper has written underneath: widow Nolan\u2019s own allowance this quarter \u2014 two pounds of meal.',
      anchor: '1919'
    },
    {
      id: 'case-02-f5', kind: 'letter', label: 'Letter of the merchant\u2019s agent',
      text: 'To the firm, St John\u2019s: I have been four years ashore at this harbour and the books were kept by a person I have never met. The settlements are correct to the penny and I did not make them. Whoever it is signs nothing but initials. I am asking again that the keeper be named in the accounts.',
      anchor: '1919',
      unlocks: 'q3'
    },
    {
      id: 'case-02-f6', kind: 'letter', label: 'Letter to her son, Michael',
      text: 'Michael \u2014 the boat went all right this spring and there is flour in the barrel. Your name is on the crew sheet at eleven shares, the same as the married men. Do not come home for me. I have the book to finish. \u2014 Mother.',
      anchor: '1938',
      note: 'The hand is the same upright hand as the ledger.',
      unlocks: 'q4'
    },
    {
      id: 'case-02-f7', kind: 'form', label: 'Schedule of relief, harbour poor',
      text: 'Nolan, Bridget \u2014 widow. Pauper. Dependent on relief. Occupation: none. Wages: none. Six in family. Allowance: two pounds of meal, one quarter-barrel of flour, monthly. The columns for occupation and wages have been ruled through with a single line.',
      anchor: '1927',
      unlocks: 'q2'
    },
    {
      id: 'case-02-f8', kind: 'transcript', label: 'Deposition of a harbour man',
      text: 'Q. Who kept the wage book in these years? A. The agent\u2019s clerk, as anywhere. There was never any hand but the agent\u2019s own in that book. Q. And the widow Nolan? A. On relief. She had nothing to do with the wages, nor any woman.',
      anchor: '1927',
      note: 'Depositions are memory wearing a uniform.'
    },
    {
      id: 'case-02-f9', kind: 'margin', label: 'Margin note, file 118-C',
      text: 'She signed for forty families and her own name appears nowhere in the book. Give her the hand, not the column. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1914'
    }
  ],

  contradictions: [
    { a: 'case-02-f1', b: 'case-02-f2', reason: 'The parish register certifies in 1901 that the bride cannot write; the 1908 settlements carry a firm signature, per procurationem, in the same initials. Somebody taught her, or the register was told a convenient thing.' },
    { a: 'case-02-f7', b: 'case-02-f3', reason: 'The schedule files her with no occupation and no wages; the 1914 ledger that fed forty families is in one upright hand, and the hand is hers.' },
    { a: 'case-02-f5', b: 'case-02-f8', reason: 'The agent swears the books were kept by a person he had never met; the harbour man swears there was never any hand but the agent\u2019s own in the wage book. One of them never opened it.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-02-f2', prompt: 'The hand in the settlements \u2014 is it yours?', answer: 'I taught it to myself out of a store ledger, by lamplight, the winter Thomas was on the ice. I signed per pro when the agent was in St John\u2019s. He never once asked whose the initials were. The books balanced and that was enough for him.' },
    { id: 'q2', cost: 2, requires: 'case-02-f7', prompt: 'The schedule files you as a pauper with no occupation and no wages.', answer: 'The form offers a woman two lines and no others: widow, and dependent on relief. It has no column for the person who keeps the wage book. I did not argue with the form. I fed the harbour out of the column it left me.' },
    { id: 'q3', cost: 2, requires: 'case-02-f5', prompt: 'The agent wrote that the books were kept by a person he had never met.', answer: 'He was in St John\u2019s half the year and ashore in Halifax the other half. He came back to settlements already done and crews already paid. He did not want to meet me. Meeting me meant writing my name into his accounts, and there was no line for it.' },
    { id: 'q4', cost: 1, requires: 'case-02-f6', prompt: 'You tell your son you have the book to finish.', answer: 'Eleven years of it. I wanted the last page in my own hand, even if the ledger keeps nothing of me but a small neat N.' }
  ],

  key: {
    virtue: 'Endurance',
    wound: 'Starvation',
    verdict: 'Release',
    truth: 'For eleven years the harbour\u2019s wage book and the relief ledger were kept by Bridget Nolan, the widow the schedule files as a pauper with no occupation. When the merchant\u2019s agent was in St John\u2019s she made out the crews\u2019 settlements and signed them per procurationem; after the sealing losses of 1914 she ran the relief ledger that fed forty families. Every entry is in her upright hand and her own name appears in none of them. The agent wrote to the firm that the books were kept by a person he had never met, because naming her would have meant giving a woman a column in his accounts. The parish register said she could not write; a deposition of 1927 said she had nothing to do with the wages. Both were told, and neither was ever checked, because the form had already decided what she was: widow, and dependent.'
  },

  epilogue: {
    Release: 'You filed her as what she was: the woman who kept the book. The stamp is Release, the record closes, and the schedule that called her a pauper is amended in the one column it left her \u2014 occupation: kept the harbour accounts, eleven years, unpaid. The men who swore she had nothing to do with the wages are not named again. That is how it goes with depositions.',
    Return: 'You sent the file back for the agent\u2019s accounts from St John\u2019s, to see the initials entered in his own hand. They will not come. He has been dead nine years, the firm\u2019s books went into the harbour in the fire, and she stays on the shelf another year, filed as pauper, while you wait on a page that was never written.',
    Retain: 'You kept the file. Some archivists cannot sign off a woman who fed forty families and left her own name out of the book on purpose, so they keep her on the desk and read the ledger when the light is bad. It is allowed. The Archive does not mind a keeper. It only minds an empty column.'
  },

  foreshadow: 'The signature in the settlements matches the relief ledger and not the agent\u2019s. Somebody taught the widow to write, and I have seen that hand before \u2014 in the margins of files no living registrar has touched.'
};
