// case-27 — Sixty-One Plates Nobody Paid For. A New York photographic studio, 1868–1905. Difficulty 3.
// Shape copied from case-00; the story and the documents are its own.

export default {
  id: 'case-27',
  order: 27,
  title: 'Sixty-One Plates Nobody Paid For',
  subtitle: 'File 121-P \u00b7 Closed 1905',
  difficulty: 3,
  era: '1868\u20131905',
  slots: ['1868', '1874', '1882', '1890', '1898', '1905'],

  dossier: {
    name: 'Mary Anne Keegan',
    alias: '\u2018the girl at the counter\u2019; M. A. Keegan on the day-book',
    age: '53 at entry',
    occupation: 'Printer\u2019s hand and counter girl, photographic studio',
    place: 'Broadway and Cherry Street, New York',
    cause: 'Consumption, in the almshouse infirmary',
    entry: '17 April 1905',
    registrar: 'P. Halden, junior'
  },

  intake: 'The file came in with the studio\u2019s complaint still pinned to it. A photographic studio on Broadway, a plate-room, and a girl who kept the counter for near forty years. The sheet on top says she stole sixty-one photographic plates from the stock. The same sheet, in the same ink, admits that the counter money balanced to the penny every week she had it. I have filed a great many thieves. I have not filed one who left the till full and the column empty.',

  fragments: [
    {
      id: 'case-27-f1', kind: 'form', label: 'Wage book, engagement',
      text: 'Vollmer & Kapp, artistic photographers, Broadway, New York. Engaged this day: Mary Anne Keegan, sixteen years, as printer\u2019s hand and girl at the counter, at four dollars the week. She sets her own name to the wage book in a round, firm hand. The counter, the prints, and the plate-room besides are to be hers.',
      anchor: '1868'
    },
    {
      id: 'case-27-f2', kind: 'photo', label: 'Cabinet card, a child, verso',
      text: 'A cabinet card of a child laid out on a sofa, eyes open, hands folded over the breast. On the back, in a mother\u2019s sloping hand: \u2018Copied again for me from the old plate when I had nothing to pay. The girl at the counter. She would take no money and said it was done with.\u2019',
      anchor: '1874',
      note: 'The card is hers and the hand on the back is not. Photographs travel; explanations do not.'
    },
    {
      id: 'case-27-f3', kind: 'letter', label: 'Letter to the studio',
      text: 'Gentlemen \u2014 I write to thank the young woman at your counter, whose name I do not know. My Katie\u2019s picture she made over again for me from the little one I had, and when I told her I had no money for it she put it into my hand and said it was already paid. I have buried two children and have no likeness of either but this one. God keep her. \u2014 Mrs J. Fallon, 44 Cherry Street.',
      anchor: '1882',
      unlocks: 'q4'
    },
    {
      id: 'case-27-f4', kind: 'form', label: 'Day-book, folios 88 and 89',
      text: 'Day-book of sittings. Each line gives a plate number, a sitter, and a charge. Sixty-one lines carry the charge column struck through and the words NO CHARGE written over it, in the same hand and ink as the entry above \u2014 among their numbers, 214, 226, 240, 253, 270 and 284. The folios are ruled, totalled, and initialled M.A.K. at the foot. The cash for these weeks agrees to the penny with the box.',
      anchor: '1890',
      unlocks: 'q1'
    },
    {
      id: 'case-27-f5', kind: 'receipt', label: 'Invoice, photographic stock',
      text: 'The Photographic Stock Co., New York. Sold to M. A. Keegan, on her own account: three dozen rejected and time-expired dry plates, and one pint of old collodion, at half charge, paid in her hand. Deliver to the Broadway studio, attention the counter. The studio\u2019s name does not appear on the bill anywhere.',
      anchor: '1898',
      unlocks: 'q2'
    },
    {
      id: 'case-27-f6', kind: 'form', label: 'Register of negatives, later folios',
      text: 'Register of negatives, kept from 1890. Plate numbers 214, 226, 240, 253, 270 and 284, and others of the struck-through lines, are entered again in 1893, 1896 and 1898, issued to fresh sitting sitters and charged in full. The hand that keeps this register is the studio\u2019s own.',
      anchor: '1898'
    },
    {
      id: 'case-27-f7', kind: 'form', label: 'Dismissal note',
      text: 'Vollmer & Kapp, photographic studio, Broadway. Dismissed this day M. A. Keegan, counter-hand, for theft of studio stock. Sixty-one plates wanting from the plate-room count. Nothing wanting at the till. Entered to the loss book under THEFT.',
      anchor: '1905',
      unlocks: 'q3'
    },
    {
      id: 'case-27-f8', kind: 'transcript', label: 'Statement of the plate-room boy',
      text: 'Q. Did she take plates from the room? A. Never from the room. She bought her own, the spoiled ones, half price, and kept them in the drawer under the counter. When a poor body came in for a picture of a child she would copy it off the old negative and charge them nothing, and write it in the book as nothing, so the week\u2019s money would come out even. Q. Why write it at all? A. Because the book had to balance. She would not have a week go short on her account.',
      anchor: '1905'
    },
    {
      id: 'case-27-f9', kind: 'margin', label: 'Margin note, dismissal note',
      text: 'A loss set down as theft is not a finding. It is a missing column. The book can tell us what it had room to hold, and not one thing more. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1905'
    }
  ],

  contradictions: [
    { a: 'case-27-f7', b: 'case-27-f4', reason: 'The dismissal counts sixty-one plates missing from the studio stock; the studio\u2019s own day-book strikes through sixty-one charges and writes NO CHARGE over each of them, one line for one plate, and still balances to the penny. A plate cannot be both stolen and never billed.' },
    { a: 'case-27-f7', b: 'case-27-f6', reason: 'The dismissal has the sixty-one plates gone out of the house; the later register issues numbers 214, 226, 240, 253, 270 and 284 again to paying sitters in 1893, 1896 and 1898. Plates carried off cannot be reissued from the studio\u2019s own shelf.' },
    { a: 'case-27-f7', b: 'case-27-f5', reason: 'The file lays the loss to stock taken out; the supplier\u2019s invoice has her buying rejected plates in her own name and her own money, so that the studio\u2019s counted stock would never move. The plates were put in, not carried off.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-27-f4', prompt: 'Why strike the charge through and write NO CHARGE in your own book?', answer: 'Because a line that is billed keeps the plate in the ledger, and the ledger is always looking for its money. I set it down as no charge so the week would come out even and nobody would be sent to the address for the price of a dead child\u2019s picture.' },
    { id: 'q2', cost: 2, requires: 'case-27-f5', prompt: 'You bought the plates out of your own wage. Why?', answer: 'The studio counts its stock. If I drew a fresh plate the count would come short and they would ask the plate-room where it went. So I bought the spoiled ones, three dozen at a time, out of my four dollars, and the count never moved.' },
    { id: 'q3', cost: 1, requires: 'case-27-f7', prompt: 'The loss book has you down for stealing sixty-one plates.', answer: 'That book has one column for a thing that is gone, and the column is theft. I never took them. I gave them, and there is no column anywhere on the page for gave.' },
    { id: 'q4', cost: 1, requires: 'case-27-f3', prompt: 'The mother writes to you and does not know your name.', answer: 'She knows the only name I ever gave at that counter. It is better a woman has no name of mine to put in a file. The picture was hers before ever my name could be.' }
  ],

  key: {
    virtue: 'Mercy',
    wound: 'Oblivion',
    verdict: 'Release',
    truth: 'For thirty-seven years Mary Anne Keegan kept the counter at Vollmer & Kapp, and the plate-room besides. When a family came for a picture of a child it had just buried, or a child it could not afford to have taken, she copied the portrait again from an old negative, using rejected and time-expired plates she bought with her own wage so that the studio\u2019s counted stock would not move. She wrote the sittings into the day-book as NO CHARGE and struck the money through, so the week\u2019s totals would balance and no bill would ever be sent to the address. The loss was real, but it was a loss of price, not of plates. When the studio counted its stock in 1905 it found sixty-one plates wanting and wrote them down as theft, because the loss book had no column for anything a studio gives away. She died in the almshouse infirmary a month after they put her out, and the paper that buried her is the same paper that named her a thief.'
  },

  epilogue: {
    Release: 'You wrote Release, and THEFT comes off the loss book in a line of your own ink. Mary Anne Keegan is filed as a counter-hand who bought her own spoiled plates to make pictures for people who could not pay, and who balanced a book that had no column for mercy. The complaint sheet is closed. For the first time in the whole file the girl at the counter is called by her own name, and the sixty-one plates are entered as given, not taken.',
    Return: 'You sent the file back for the missing plates. There are no plates to fetch. The studio is shut, the plate-room is gone, and the man who counted them is dead. Returning it keeps her on the shelf still charged with theft \u2014 still only the girl at the counter, still without her name \u2014 while the one witness who could have cleared her lies in the almshouse ground with the answer already written in her own hand.',
    Retain: 'You kept the file. It is allowed. Some archivists will not sign off a woman who was put into the street for a kindness the book had no word for, so she stays on the desk, the day-book open at folio 88 and the child\u2019s card beside it, and you read the struck-through lines when the light is poor. The department says nothing of this. It does not forgive it either.'
  },

  foreshadow: 'The hand in the margin of the dismissal note is upright and a little too regular, and it is not the registrar\u2019s. I have met it before, on the page the file was never meant to keep.'
};
