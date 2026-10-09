// case-11 — order 11, difficulty 3. Dublin, 1912\u20131950.
// The file says the stock was short. The stock was returned.

export default {
  id: 'case-11',
  order: 11,
  title: 'Two Hundred and Fourteen Items',
  subtitle: 'File 214-K \u00b7 Closed 1950',
  difficulty: 3,
  era: '1912\u20131950',
  slots: ['1912', '1918', '1925', '1934', '1938', '1943', '1950'],

  dossier: {
    name: 'Norah Nolan',
    alias: 'N. Nolan; Mrs Thomas Nolan; \u201cthe widow\u201d in the hearing note',
    age: '68 at entry',
    occupation: 'Pawnbroker\u2019s wife, later pawnbroker, 41 Meath Street',
    place: '41 Meath Street, the Liberties, Dublin',
    cause: 'Want. Found dead at home; the record notes she had been long without proper food.',
    entry: '4 November 1950',
    registrar: 'M. Hanley, junior'
  },

  intake: 'It came up from the Dublin shelf with a pawn ticket still in it, and the top page is the hearing note \u2014 pledges unredeemed, stock short by two hundred and fourteen items, widow unfit to hold a licence. I have read files that call a woman dishonest. This one does not bother; it simply counts what is missing and draws a line under the count. Underneath are nine years of her handwriting, and a column of money paid out that nobody ever asked her to explain.',

  fragments: [
    {
      id: 'case-11-f1', kind: 'form', label: 'Pawnbroker\u2019s certificate, Meath Street',
      text: 'Certificate to carry on the business of a pawnbroker at 41 Meath Street, in the city of Dublin, granted to Thomas Nolan, his executors and assigns. Two sureties entered, both publicans of the Liberties. The shop is known in the street by the three brass balls and by no name at all.',
      anchor: '1912',
      note: 'The licence is in his name for twenty-two years. It never had a place for a second name.'
    },
    {
      id: 'case-11-f2', kind: 'form', label: 'Pledge book, ordinary page',
      text: 'Pledge book, page 61. Every line gives the thing, the sum advanced, the name of the pledger, and the address \u2014 always the address, for the book is the shop\u2019s whole protection. 12 March, a man\u2019s boots, 1s. 6d., Peter Doyle, 9 Chamber Street. 13 March, a flat-iron, 9d., Mary Keegan, 4 Cook Street. Signed at the foot, Nolan, T., for the house.',
      anchor: '1918',
      note: 'A name and an address against every pledge. That is the rule this book keeps \u2014 on this page.'
    },
    {
      id: 'case-11-f3', kind: 'form', label: 'Pledge book, pages bound in at the back',
      text: 'Seven pages bound in at the back, all in his hand, all in the last years before he died. Against each line only a letter, or a name that never comes again anywhere in the book: a silver watch; a christening cup; two yards of silk; a seaman\u2019s glass. No address against any of them. The sums advanced are out of all keeping with the street, and the goods are not things this street ever owned.',
      anchor: '1925',
      note: 'A pledge with no address is a pledge that was never meant to be asked about.',
      unlocks: 'q3'
    },
    {
      id: 'case-11-f4', kind: 'receipt', label: 'Redemption slips, a bundle in her hand',
      text: 'A bundle of slips, two hundred and fourteen in all, every one in the same narrow hand: a name, an item, the sum it had fetched, and the word returned. Not one of the names appears anywhere in the pledge book, in any year. They are the names of people who never pawned a thing in this shop. The sums written on the slips are the sums the shop advanced, to the halfpenny, and not a penny besides.',
      anchor: '1938',
      note: 'Two hundred and fourteen slips. Two hundred and fourteen items short. Nobody put the two pages side by side.',
      unlocks: 'q1'
    },
    {
      id: 'case-11-f5', kind: 'receipt', label: 'Cash book, page 14',
      text: 'Cash book, page 14, in her hand throughout. Received: pledges advanced, redemption money, sales of the unredeemed. Paid: rent, licence duty, the light, and one line with no heading at all \u2014 to make good, entered every week, in every year, nine years and not a week missed. The paid column is the longer one. Set the two columns against each other and the shop paid out more than it ever took in.',
      anchor: '1943',
      note: 'She wrote the money down herself. A woman robbing the till does not keep the page that shows it.',
      unlocks: 'q2'
    },
    {
      id: 'case-11-f6', kind: 'letter', label: 'Letter, unsigned and unaddressed',
      text: 'Sir or Madam \u2014 the brooch was my mother\u2019s and I had given it up for gone these three years. I do not know how it came back into your window and I will not ask. You took from me the sum it had fetched and not a halfpenny more, which no shop in this city would do, and you would not give your name. So I am writing to the shop. Thank you, whoever you are.',
      anchor: '1938',
      note: 'Thanks to the shop, never to a person. By 1938 the street had stopped asking who stood behind the counter.',
      unlocks: 'q4'
    },
    {
      id: 'case-11-f7', kind: 'form', label: 'Licence hearing, note of evidence',
      text: 'Application to transfer the pawnbroker\u2019s licence, 41 Meath Street, to Norah Nolan, widow. The inspector takes the stock and finds it does not balance: pledges unredeemed, and the goods not in the shop, and not sold. Stock short by two hundred and fourteen items. Asked to account for them she said they were gone, and did not deny it \u2014 in nine years never once denied it. The bench finds her unfit to hold a licence.',
      anchor: '1943',
      note: 'She could have said the goods were stolen. She could have said they were lost. She said they were gone.'
    },
    {
      id: 'case-11-f8', kind: 'form', label: 'Inventory, taken at her death',
      text: 'Shop at 41 Meath Street, stock and fittings. Pledges outstanding: none. The books balance to the halfpenny, and the shop owes nobody and nobody owes the shop. Household and personal effects: one chair, one bed, a good coat, no food in the house and no money in it. Cause of death, want. Buried at the city\u2019s expense.',
      anchor: '1950',
      note: 'Nine years of to make good, and the woman who kept the books died of want.'
    },
    {
      id: 'case-11-f10', kind: 'form', label: 'Registration of the licensee\u2019s death',
      text: 'Thomas Nolan, pawnbroker, of 41 Meath Street. Died 3 February 1934, aged fifty-eight, of a growth in the stomach. Buried at Glasnevin, paid for by the widow. The pawnbroker\u2019s licence stood in his name and was not transferred.',
      anchor: '1934',
      note: 'The counter stayed open. The name over the door did not change, because she did not change it.'
    },
    {
      id: 'case-11-f9', kind: 'margin', label: 'Margin note, licence hearing',
      text: 'She is not lying. She is accounting. Count the pledge and count the slip and count the names that stand on one and not on the other: two hundred and fourteen, and every one of them went home. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1950'
    }
  ],

  contradictions: [
    { a: 'case-11-f7', b: 'case-11-f4', reason: 'The bench enters the two hundred and fourteen items as goods gone and calls the widow unfit; two hundred and fourteen slips in her own hand give every one of them a name, an item and the sum it fetched, and the word returned.' },
    { a: 'case-11-f3', b: 'case-11-f2', reason: 'The book\u2019s rule is a name and an address against every pledge; the pages in his hand give neither, and silver and silk have no business in a street of tenements.' },
    { a: 'case-11-f6', b: 'case-11-f7', reason: 'A letter thanking the shop for taking the sum a thing had fetched and not a halfpenny more cannot stand beside a finding that the same shop was two hundred and fourteen items short and its keeper unfit.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-11-f4', prompt: 'These names are not in the pledge book. Whose are they?', answer: 'The people the things belonged to. My husband took them from men who had no right to them and gave no address, so I waited for the owners to come and ask, and when they came I gave the goods back and took the sum that had been advanced and not a penny over. A name that was never in the pledge book is a name that never pledged anything. That is the whole of it.' },
    { id: 'q2', cost: 2, requires: 'case-11-f5', prompt: 'What is the money under to make good?', answer: 'It is what he took for other people\u2019s things, paid back by me, a week at a time, so the shop\u2019s book would be honest where he was not. I could not take it from the till; the till was his shop, and I would not rob it to clean it. So it came out of my own pocket, and the pocket has a bottom, and I found it.' },
    { id: 'q3', cost: 2, requires: 'case-11-f3', prompt: 'Why keep his pages, where anyone could find them?', answer: 'Because a thing burned is a thing denied, and I would not deny him. The owners came to me for their watches and their cups and I gave them back and wrote each one down, and if the writing of it is proved against the shop, then let it be. I would rather keep the pages and lose the licence than keep the licence and his lie.' },
    { id: 'q4', cost: 1, requires: 'case-11-f6', prompt: 'The letter thanks the shop. Did you never give your name?', answer: 'It is a pawnshop. You do not give your name and you do not ask the other man\u2019s, and that is why the street trusted the counter. The ones who came for their goods were ashamed to be seen at my door at all. Let them have the brooch back and forget the rest of it.' }
  ],

  key: {
    virtue: 'Mercy',
    wound: 'Starvation',
    verdict: 'Release',
    truth: 'Thomas Nolan kept a pawnbroker\u2019s shop at 41 Meath Street and, in his last years, quietly lent against goods he knew were stolen \u2014 silver and silk pledged by men who gave no address, because he asked for none and could not be asked about them. He died in 1934. His widow Norah knew what the pledges were the moment the owners began to come asking after their things, and she did not turn them away and she did not keep the goods. For nine years she bought every bad pledge back out of her own pocket \u2014 two hundred and fourteen items \u2014 and returned each one to the person who had never pawned it, taking only the sum the shop had advanced. The shortfall the hearing counted against her is that money, entered in her own hand, week on week, under the words to make good. She never denied the stock was short, because denying it would have named her husband; and to keep the shop\u2019s book honest she went without, and died of want in 1950. The file says she was unfit to hold a licence. The file is the last page her mercy was written on.'
  },

  epilogue: {
    Release: 'You sign Release. The two hundred and fourteen items come off the charge of the hearing and go back where they always were \u2014 in the hands of the people they belonged to. The file stops counting what is missing and starts counting what went home. She is filed as a woman who kept her husband\u2019s name and spent nine years and her own hunger buying the honesty back into it. In the margin, in a hand that is not yours, the number is written the other way up: two hundred and fourteen, returned.',
    Return: 'You return the file for the names of the men who pledged the silver. They are not in it and they were never going to be: no address was taken and none was asked, which is the whole of how the thing was done. Sending it back keeps her on the shelf as the hearing left her \u2014 a widow unfit to hold a licence, with two hundred and fourteen things gone quietly home and nobody to say where they went.',
    Retain: 'You keep the file. It is a hard one to close, because the only witness who could have said the word stolen is the man she spent nine years protecting, and he is in Glasnevin. So you keep it on the desk and read the slips, two hundred and fourteen of them in the one narrow hand, and you do the summing yourself: goods returned, sums advanced, no names besides. The Archive does not object. It keeps its own count either way.'
  },

  foreshadow: 'Somebody counted the slips before I did, in a hand I have met in the margin of a case about plates and a case about eleven women. Whoever it is keeps leaving us the column the clerk did not add.'
};
