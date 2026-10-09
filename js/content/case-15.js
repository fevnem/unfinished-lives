// case-15 — order 15, difficulty 4. Lagos, 1940\u20131985.
// The file says a disputed estate and irregular accounts. The hand says a daughter.

export default {
  id: 'case-15',
  order: 15,
  title: 'Fourteen Years in Her Mother\u2019s Hand',
  subtitle: 'File 212-C \u00b7 Closed 1985',
  difficulty: 4,
  era: '1940\u20131985',
  slots: ['1940', '1948', '1956', '1961', '1968', '1975', '1985'],

  dossier: {
    name: 'Adunni Ojo',
    alias: 'Mama Yejide, as the market knew her',
    age: '49 at entry',
    occupation: 'Cloth trader, stall 212, Balogun Market',
    place: 'Balogun Market, Lagos Island',
    cause: 'Fever, in the rains',
    entry: '2 August 1961',
    registrar: 'S. Ogunlesi, duty'
  },

  intake: 'The file came up from the market shelf still holding the smell of indigo and kerosene. The stall register is on top, and across it the association has written its verdict before ours: trader; estate disputed; accounts irregular after 1961. Underneath lies a ledger in a hand that looks like one woman\u2019s and reads like two. I have signed a great many irregularities in my time. They are almost never what the register calls them.',

  fragments: [
    {
      id: 'case-15-f1', kind: 'form', label: 'Register of stalls, Balogun Market',
      text: 'Stall 212, cloth. Holder: Ojo, Adunni. Held since 1936. Dues current to March 1961. Under occupation: trader. Under estate: disputed. Accounts irregular after 1961. Every year after the March entry is written in the same word \u2014 carried \u2014 and signed off by B. Salami, clerk, for the association.',
      anchor: '1961',
      note: 'The word irregular is written across four years of entries that never once fail to balance.',
      unlocks: 'q1'
    },
    {
      id: 'case-15-f2', kind: 'receipt', label: 'Association dues receipt, stall 212',
      text: 'Received of Yejide Ojo, on account of stall 212, cloth, the association\u2019s dues for the year, in full. Paid in cash at the gate. Signed for the association, B. Salami, clerk. Filed with the original are thirteen more like it, one for every year from 1962 to 1975.',
      anchor: '1968',
      note: 'The stall is registered in the name Ojo, Adunni. Yejide Ojo appears nowhere on the register at all.',
      unlocks: 'q2'
    },
    {
      id: 'case-15-f3', kind: 'object', label: 'Ledger of stall 212, quarter-bound',
      text: 'Entries from 1940 in a broad, forward-sloping hand. From late 1961 the slant narrows and the letters sit closer, but the day\u2019s total is still squared and underscored twice, and the three poorest customers are still carried in the left column without interest, exactly as before. The hand is learning something. The habits do not change at all.',
      anchor: '1968',
      note: 'Nine years of entries in this hand are dated after the day the register says she died.'
    },
    {
      id: 'case-15-f4', kind: 'form', label: 'Entry of death, Lagos',
      text: 'Ojo, Adunni. Trader, stall 212, Balogun Market. Died of fever, 2 August 1961. Buried by her people at Ikoyi. Husband predeceased; one daughter surviving, Yejide. On the authority of this entry the association\u2019s register marks the stall carried and the estate disputed.',
      anchor: '1961',
      note: 'The death is the last true entry in the whole file, and the register treats it as the first lie.'
    },
    {
      id: 'case-15-f5', kind: 'letter', label: 'Letter in her mother\u2019s hand',
      text: 'Yejide \u2014 if the fever turns, do not trouble the association about the stall. A name is a credit line in this market, and mine is worth more standing than moved. Keep the three poorest on the book as I have kept them, no interest, no matter who asks. Count the day and square it twice. \u2014 Mama.',
      anchor: '1961',
      note: 'Written the week she took to her bed, in the same broad hand as the old ledger.',
      unlocks: 'q3'
    },
    {
      id: 'case-15-f6', kind: 'photo', label: 'Photograph of the stall',
      text: 'Stall 212 seen from the lane: bolts of cloth stacked to the beam, a bench, a tin cash box, a bound ledger open on the left. Two women stand behind the counter, an older in a head-tie and an adolescent beside her, both with their hands laid flat on the same closed book, the way a market teaches a child to swear an account.',
      anchor: '1948'
    },
    {
      id: 'case-15-f7', kind: 'transcript', label: 'Statement of B. Salami, association clerk',
      text: 'Q. Who holds stall 212? A. The register says Ojo, Adunni. Q. And who pays the dues? A. The daughter. Every year. Q. Then why is the estate entered as disputed? A. Because a stall cannot be paid for in the name of a woman who died in 1961, and the association has exactly one word for a bill that keeps coming in paid. The word is dispute.',
      anchor: '1985',
      unlocks: 'q4'
    },
    {
      id: 'case-15-f8', kind: 'margin', label: 'Margin note, in an earlier hand',
      text: 'Two hands in one book are not two traders. Read the slant, then read the habits: the slant narrows, the habits never do. A hand can be learned; a ledger squares its day the same way whoever holds the pen. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1975'
    }
  ],

  contradictions: [
    { a: 'case-15-f1', b: 'case-15-f3', reason: 'The register enters the accounts as irregular after 1961; the ledger squares and underscores every day of those years without a break, carrying the same three names in the same left column.' },
    { a: 'case-15-f4', b: 'case-15-f3', reason: 'She died on 2 August 1961, and the ledger holds nine years of entries dated after that day, in her hand.' },
    { a: 'case-15-f1', b: 'case-15-f2', reason: 'The register says the dues lapsed with her in 1961; the receipts show stall 212 paid in full at the gate every year from 1962 to 1975.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-15-f1', prompt: 'The register says the accounts went irregular after 1961. What changed that year?', answer: 'I died \u2014 that is the only entry in the book that is late. The accounts never changed. A daughter\u2019s hand came in beside mine and learned it, and a hand is not a person. Add up any month of those years; the day still squares to the penny.' },
    { id: 'q2', cost: 2, requires: 'case-15-f2', prompt: 'The dues are paid in a name the register has never held.', answer: 'Yejide is my daughter\u2019s true name, and she would not put it over the stall. Move a market name from mother to child and the association strikes the credit standing under it, and calls in the three I have carried for years. So she paid in her own name and left mine holding the door open.' },
    { id: 'q3', cost: 1, requires: 'case-15-f5', prompt: 'You told her to keep the poorest on the book.', answer: 'Three at a time, since before she could reach the counter, and no interest on them and never was. You do not lend in a market to be paid. You lend so that when your own morning goes badly there is a woman across the lane who will lend you salt.' },
    { id: 'q4', cost: 2, requires: 'case-15-f7', prompt: 'The clerk calls the continuing entries a dispute over the estate.', answer: 'There is nothing to dispute. I left one stall and a good name, and she took neither of them for herself \u2014 she kept them. A dispute is what the association calls a bill that keeps being paid in a dead woman\u2019s name, because the register has no other word for keeping.' }
  ],

  key: {
    virtue: 'Appetite',
    wound: 'Betrayal',
    verdict: 'Release',
    truth: 'Adunni Ojo kept stall 212 in the Balogun Market from 1936 until fever took her on 2 August 1961. Her daughter Yejide did not claim the stall, because moving a market name from mother to child would have struck the credit still standing under Adunni\u2019s name and called in the poorest three customers she had carried on the book without interest all her life. So Yejide kept the accounts in her mother\u2019s hand \u2014 the slant narrowing, the habits unchanged \u2014 for fourteen years, paid the association\u2019s dues every year in her own true name for a stall recorded in her mother\u2019s, and left the estate unclaimed. The register called the accounts irregular after 1961 and the estate disputed. Nothing was irregular and nothing was in dispute: a daughter went on keeping her mother\u2019s books the way her mother kept them, and the record had no word for it but fraud.'
  },

  epilogue: {
    Release: 'You signed Release, and the register stops calling it a dispute. The estate column is struck through; the stall is entered as carried to Yejide Ojo, and the dues she paid for fourteen years in her own name are reconciled against the register that refused to hold her. The three poorest customers stay on the book, because there is no shelf in the Archive that can clear a debt like that.',
    Return: 'You sent the file back for the daughter\u2019s own testimony, and there is none. She never signed the stall, so the only thing in the record with her name on it is a column of receipts. She stays on the shelf beside an entry that says disputed, owing the Archive a signature she would never give and keeping a name she would never spend.',
    Retain: 'You kept the file. It is a market\u2019s habit to keep a good name standing, and the Archive has this much of the market in it: some files you hold open on purpose, so the credit inside them does not lapse. A hand that taught itself to keep a woman\u2019s books is not yours to close. You leave the ledger open at the last square and lift the next file.'
  },

  foreshadow: 'The margin note is not the registrar\u2019s hand. I have met it before \u2014 small, upright, a little too regular, the hand of somebody who learned to write by copying a person she loved and kept the habit long after the hand she copied was gone.'
};
