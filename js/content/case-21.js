// case-21 — "The Confession He Dictated". Lisbon, 1918–1952. A dressmaker's shop in the Bairro Alto. Difficulty 3.
// Written to the shape of case-00. Do not "improve" the shape.

export default {
  id: 'case-21',
  order: 21,
  title: 'The Confession He Dictated',
  subtitle: 'File 604-C \u00b7 Closed 1952',
  difficulty: 3,
  era: '1918\u20131952',
  slots: ['1918', '1926', '1934', '1941', '1947', '1952'],

  dossier: {
    name: 'Alda Marques',
    alias: 'Alda, costureira; \u201cthe seamstress of the Atalaia\u201d on the parish roll',
    age: '54 at entry',
    occupation: 'Seamstress, Bragan\u00e7a, Rua da Atalaia; later laundress',
    place: 'Rua da Atalaia, 44, Bairro Alto, Lisbon',
    cause: 'Inanition, in her rented room, the rent three months unpaid',
    entry: '9 February 1952',
    registrar: 'J. A. Perestrello, third desk'
  },

  intake: 'The file came up from Lisbon with a single page worn soft at the folds, because it has been read more than the rest of the bundle together. Across the top, in the registrar\u2019s capitals, it says THEFT OF STOCK \u2014 DISMISSED, and beneath, in the same hand, confessed, never denied it. I have filed a great many confessions. This is the first one I have held where the shop\u2019s own initials stand in the margin of every line of the theft.',

  fragments: [
    {
      id: 'case-21-f1', kind: 'letter', label: 'Letter home, the hungry winter',
      text: 'A letter from a village in the Beira to a cousin in Lisbon, in a young woman\u2019s hand: \u201cThe potato field gave nothing this year and we have eaten the seed. They say the dressmaker on the Atalaia will take a girl who can hold a needle. If I can walk as far as the train I am not coming back.\u201d It is signed Alda, and the ink has been thinned, the way ink is thinned when there is only a little of it left.',
      anchor: '1918'
    },
    {
      id: 'case-21-f2', kind: 'receipt', label: 'Fire policy, premium receipt',
      text: 'The premium receipt of the Companhia de Seguros: Senhor Anselmo Bragan\u00e7a, of the shop at Rua da Atalaia 44, has paid the year\u2019s premium on a policy insuring the premises and the stock therein against fire. The sum insured is entered in the clerk\u2019s hand, and it is more than the shop is worth. The receipt is stamped, and folded into the shop\u2019s own ledger, where it has stayed.',
      anchor: '1926'
    },
    {
      id: 'case-21-f5', kind: 'form', label: 'Order book, purchases received',
      text: 'The shop\u2019s order book, in which every length of cloth brought into the house was entered as it was received \u2014 the supplier, the date, the price. In no year of the book is there a line for blue taffeta, or for beige serge, or for grey wool, or for pale silk. The last entry before the fire is twenty-two metres of black wool and a dozen cards of buttons, and the sheet after it is blank.',
      anchor: '1934'
    },
    {
      id: 'case-21-f4', kind: 'object', label: 'Remnant ledger, with margins',
      text: 'A shop ledger of remnants \u2014 the offcuts and bolt-ends too short to cut a woman\u2019s dress from. The ruled columns are in the shop\u2019s hand, but the margins are not: down page after page, in a small careful hand, stand children\u2019s sizes \u2014 a coat for a boy of eight, a dress for a girl of six \u2014 with the measurements beneath them. There is one such line for each year from 1936 to 1946, eleven of them, and at the foot of every line stand the two initials A.B., in the owner\u2019s own ink.',
      anchor: '1941',
      unlocks: 'q1'
    },
    {
      id: 'case-21-f3', kind: 'form', label: 'Confession, in her name',
      text: 'A single ruled sheet, headed Declara\u00e7\u00e3o and dated 12 September 1947. It states that Alda Marques, seamstress, did on the nights of the 4th to the 8th of September 1947 carry from the shop, for her own gain, six metres of blue taffeta, four metres of beige serge, a bolt of grey wool and three metres of pale silk. It closes: \u201cI did this of my own free will and no one compelled me.\u201d The body is in an even scrivener\u2019s hand; the signature at the foot is hers.',
      anchor: '1947',
      unlocks: 'q2'
    },
    {
      id: 'case-21-f6', kind: 'form', label: 'Fire assessor\u2019s schedule of loss',
      text: 'The schedule of loss sworn before the fire assessor after the fire of 3 September 1947: the stock destroyed, priced item by item \u2014 six metres of blue taffeta, four metres of beige serge, a bolt of grey wool, three metres of pale silk; the same cloths, in the same lengths, that the confession names as stolen. The whole is valued at a sum that would clear the shop\u2019s debts and leave the owner a living besides. The assessor has signed it without a note.',
      anchor: '1947',
      unlocks: 'q4'
    },
    {
      id: 'case-21-f7', kind: 'transcript', label: 'Deposition of the shop assistant',
      text: 'Q. You worked in the shop? A. Four years, from the spring of 1943. Q. Did the seamstress keep cloth back? A. She was always carrying off the offcuts, the pieces too small to be kept, yes. And in the last spring a length came up short and the Senhor shouted about it, and I said nothing, and neither did anyone else.',
      anchor: '1947',
      unlocks: 'q3'
    },
    {
      id: 'case-21-f8', kind: 'margin', label: 'Margin note, page 4',
      text: 'Whoever wrote it stood over her, for the dates are the tell: the shop burned on the third of September and she is made to steal on the nights after it. Read the order book before you credit a word of the confession, then open the ledger and count the little sizes down the margins, one year to the next, and the two initials beside every one. A theft does not leave the owner\u2019s own initials behind it. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1952'
    }
  ],

  contradictions: [
    { a: 'case-21-f3', b: 'case-21-f5', reason: 'The confession names blue taffeta, beige serge, grey wool and pale silk as stolen from the stock; the order book records every length brought into the house and never once lists any of the four, so there was nothing there to take.' },
    { a: 'case-21-f3', b: 'case-21-f6', reason: 'The same four cloths, in the same lengths, are called stolen on the nights of 4 to 8 September 1947 and burned in a fire of 3 September 1947; they cannot have been carried off after the shop that held them had already burned.' },
    { a: 'case-21-f4', b: 'case-21-f3', reason: 'The confession says she took the stock for her own gain; the remnant ledger carries eleven years of children\u2019s sizes in her hand, every line initialed by the owner, who therefore knew of and allowed each one.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-21-f4', prompt: 'The margins are full of children\u2019s sizes, and two letters stand beside every one of them.', answer: 'His letters. He read every line before he set his name to it, and he set his name to it because a scrap of cloth cost him nothing. The pieces I used were ends of bolts, too short for a grown woman\u2019s dress, fit only for the ragman. He said a child should not go cold over a length of cloth he meant to throw away.' },
    { id: 'q2', cost: 2, requires: 'case-21-f3', prompt: 'You put your name to a confession. Whose words were they?', answer: 'Not mine. He said them and I set them down, for he said the shop would not stand without the paper and the paper would not stand without me in it. He stood at my shoulder and gave me the dates himself, and I did not know they were wrong. I only knew what I owed him.' },
    { id: 'q3', cost: 1, requires: 'case-21-f5', prompt: 'The cloth you confessed to stealing is nowhere in the order book.', answer: 'It never came through the door. I could not steal what the shop never bought; he named those cloths out of his own head, and I wrote down the names he gave me, the way he gave them.' },
    { id: 'q4', cost: 2, requires: 'case-21-f6', prompt: 'The assessor\u2019s schedule lists the same cloth, for the same lengths.', answer: 'Then he claimed the same cloth twice \u2014 once against me, and once against the fire. He needed a loss to live on. I was where he put it, because I was the one in his shop who could not say no.' }
  ],

  key: {
    virtue: 'Mercy',
    wound: 'Starvation',
    verdict: 'Release',
    truth: 'Alda Marques came to Lisbon out of a hungry winter and took a place at the dressmaker\u2019s shop of Anselmo Bragan\u00e7a in the Bairro Alto. For eleven years, from 1936 to 1946, she cut children\u2019s clothes from the shop\u2019s remnants \u2014 the offcuts and bolt-ends too short to be worth keeping \u2014 with the owner\u2019s full knowledge; one line for each year stands in the remnant ledger\u2019s margin in her hand, and every line carries his initials. In September 1947 the shop burned. The owner, in debt and needing a loss to live on, dictated a confession to her, naming four fine cloths he had invented \u2014 blue taffeta, beige serge, grey wool, pale silk \u2014 and gave her dates that fall after the fire had already taken the shop. She set her name to it because she owed him. The same four cloths, valued as stock destroyed, stand in the fire assessor\u2019s schedule of loss, so the owner claimed the same imagined cloth twice: once against her, once against the insurer. The shop\u2019s own order book shows none of the four was ever brought into the house, so nothing named in the confession was ever there to steal. Marked a thief, she found no other place, and by February 1952 she had starved in a rented room with the rent unpaid \u2014 a mercy the file read backwards into a theft.'
  },

  epilogue: {
    Release: 'You sign Release. THEFT OF STOCK comes off the file and so does confessed, never denied it, and the shop\u2019s own initials in the margin of eleven years are entered at last as what they are: permission. Alda Marques is filed as a woman who took the worthless pieces of cloth and warmed the neighbourhood\u2019s children with them, who signed a paper to spare the man who had let her, and who waited out the rest of a short life under a name that was never hers. The four invented cloths are struck from the record, and the sum insured is noted to be more than the shop was worth.',
    Return: 'You send the file back for more evidence, and there is none to be had. The owner is dead; the assessor signed without a note and will not be asked again; the order book is closed. Returning it leaves her on the shelf another year, still a dismissed thief with a signed confession in her name, while the only people who could have told the truth are dead and the cloth that was never there cannot be produced. The dates on the page she set her hand to \u2014 after the fire \u2014 will still be wrong.',
    Retain: 'You keep the file. That is allowed. Some archivists cannot put down a confession that a dying man leaned over a frightened woman to write, and pretend the reading of it is settled by a signature. So they keep it on the desk and read the ledger\u2019s margins when the light is bad, counting the eleven years of children\u2019s sizes and the owner\u2019s own initials beside every one, as if the counting might undo the dates. The Archive does not mind. It has ink against her name either way.'
  },

  foreshadow: 'The margin note on page 4 is not the registrar\u2019s hand, and it is not the first of its kind I have met \u2014 the same upright line, a word struck through, a date questioned, a direction to read one page before another. Whoever leaves them has walked these shelves longer than I have, and she is reading the files that were closed too early. There are a great many of them.'
};
