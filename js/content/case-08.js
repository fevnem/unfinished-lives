// case-08 — order 8, difficulty 3. Salvador, Bahia, 1969\u20132003.
// The file says theft. The arithmetic says nine days of plates.

export default {
  id: 'case-08',
  order: 8,
  title: 'Nine Days of Plates',
  subtitle: 'File 314-D \u00b7 Dismissed 1969',
  difficulty: 3,
  era: '1969\u20132003',
  slots: ['1969', '1977', '1985', '1991', '1997', '2003'],

  dossier: {
    name: 'Nair da Silva',
    alias: 'N. da Silva, cook',
    age: '71 at entry',
    occupation: 'Cook; eleven years in a restaurant kitchen',
    place: 'Salvador, Bahia, later Recife',
    cause: 'Cardiac arrest, at her sister\u2019s table',
    entry: '14 March 2003',
    registrar: 'J. Vasconcelos, duty'
  },

  intake: 'The file came up from the coastal shelf with the papers still greasy at the corners. The dismissal is on top, and a word for what she did has been written across it in a hand I have met before, in the margins of other people\u2019s cases. Underneath is a cook who fed a street for nine days, and a register with the nerve to call it theft.',

  fragments: [
    {
      id: 'case-08-f1', kind: 'form', label: 'Dismissal, kitchen record',
      text: 'Da Silva, Nair. Cook, kitchen of the Restaurante Mar\u00e9. Dismissed 12 November, irregularities. Provisions unaccounted for, nine days. Deduction from wages: 675$00. Signed, A. Fonseca, proprietor.',
      anchor: '1969',
      note: 'The figure is entered in the money column. Nobody in the file asks what it is the price of.',
      unlocks: 'q1'
    },
    {
      id: 'case-08-f2', kind: 'receipt', label: 'Delivery notes, week of the strike',
      text: 'Order for the kitchen, covers daily 300. Rice 250 kg; beans 220 kg; farinha 130 kg; oil 45 kg; salted fish 30 kg. Received and checked, N. da Silva. The following week is left blank; the road down to the docks was full of men with nothing to unload.',
      anchor: '1969',
      note: 'Every stamp the cook signed for. Not a sack short.',
      unlocks: 'q2'
    },
    {
      id: 'case-08-f3', kind: 'object', label: 'Portion card, nailed by the stove',
      text: 'One plate, weighed on the scales: 250 grams of provisions, rice and beans and farinha and a spoon of oil. The card is greased at the corners from being read with wet hands. Pencilled under the figures: three hundred plates is what this kitchen can carry.',
      anchor: '1969',
      note: 'Somebody worked out loud, in pencil, what the room could feed.'
    },
    {
      id: 'case-08-f4', kind: 'letter', label: 'Letter to her sister, Recife',
      text: 'Lidia \u2014 I did not take a thing. Three hundred plates a day for nine days, and not one of them sold. The docks were quiet and the street was not. I have never cooked like that in my life and I do not expect to again.',
      anchor: '1977',
      note: 'Written eight years on, in a steady hand, to the only person she told the truth to.',
      unlocks: 'q4'
    },
    {
      id: 'case-08-f5', kind: 'photo', label: 'Photograph, taken from the street',
      text: 'The kitchen, photographed from the pavement. The door is propped wide, the serving table has been carried out whole, and the pots on it are the big ones. In the doorway, half turned, a woman with her sleeves rolled, laughing at somebody out of the frame.',
      anchor: '1985'
    },
    {
      id: 'case-08-f6', kind: 'transcript', label: 'Statement of A. Fonseca, proprietor',
      text: 'Q. Why did you sign the dismissal? A. A kitchen that feeds a strike is a kitchen without a licence, and the licence was my whole family. I signed the paper they put in front of me. Q. Was she a thief? A. No. Q. Then why leave it standing? A. Because I still had a family to feed, and no licence to feed them with.',
      anchor: '1991',
      unlocks: 'q3'
    },
    {
      id: 'case-08-f8', kind: 'form', label: 'Reference, in his own hand',
      text: 'To whom it may concern. Nair da Silva cooked in my kitchen for eleven years. She is honest to the last gram and the best hand I have had at a stove. I would take her back tomorrow if the city would let me. A. Fonseca, proprietor.',
      anchor: '1977',
      note: 'Given eight years after the dismissal that called her a thief, and kept with the file.'
    },
    {
      id: 'case-08-f9', kind: 'receipt', label: 'Settlement of accounts',
      text: 'Wages due, eleven years, paid in full. Deducted: provisions short, 675$00. Balance carried forward, nil. She read the sheet twice, signed her name in full where the space was ruled for a mark, and asked for a copy, which was not given.',
      anchor: '1969'
    },
    {
      id: 'case-08-f7', kind: 'margin', label: 'Margin note, another hand',
      text: 'The shortfall is not money. Add the delivery, weigh the plate, count the street. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1997'
    }
  ],

  contradictions: [
    { a: 'case-08-f1', b: 'case-08-f4', reason: 'The dismissal enters the provisions as theft; her letter to her sister says she cooked and served every one of them, three hundred plates a day, and sold none.' },
    { a: 'case-08-f6', b: 'case-08-f8', reason: 'The proprietor signed a dismissal for theft and then, in his own hand, called her honest to the last gram. A man cannot believe both.' },
    { a: 'case-08-f2', b: 'case-08-f9', reason: 'The same figure, 675, is entered once as kilos of provisions delivered and once as cruzeiros deducted from her wages. One number cannot be both.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-08-f1', prompt: 'The deduction is entered in cruzeiros. What is it actually the price of?', answer: 'Of nothing that was bought or sold. Add the delivery notes and you have the same number in kilos. Nine days, three hundred plates, two hundred and fifty grams apiece. I fed the street, and the street does not sign for anything.' },
    { id: 'q2', cost: 2, requires: 'case-08-f2', prompt: 'There was no delivery the week after. So where did the food go?', answer: 'Into the pots, and the pots out into the street. Every sack is stamped and checked in my own hand. If I had sold it the notes would come up short. They do not. Only the shelves are short.' },
    { id: 'q3', cost: 2, requires: 'case-08-f6', prompt: 'You knew she was not a thief. Why sign it?', answer: 'A licence is a small paper and a large life. I signed the word they put in front of me and she carried it for thirty years. I wrote her a reference and she never once used it. That is the size of what I did.' },
    { id: 'q4', cost: 1, requires: 'case-08-f4', prompt: 'Your letter says you never cooked like that before.', answer: 'Nine days, and the pots never went cold. I have cooked for paying guests my whole life and a paying guest never thanks the stove. On the ninth morning a docker I did not know brought me eggs from his own yard. No. Never like that.' }
  ],

  key: {
    virtue: 'Appetite',
    wound: 'Abandonment',
    verdict: 'Release',
    truth: 'In November 1969 the dock strike emptied the neighbourhood and stopped the deliveries that fed the restaurant. Nair da Silva did not sell the stores and did not lose them: over nine days she cooked every gram already delivered \u2014 six hundred and seventy-five kilos \u2014 into plates of two hundred and fifty grams, three hundred plates a day, and carried them out to whoever was standing in the street. The figure the owners entered as money, 675$00, is a weight, and it matches the delivery notes exactly: 250 kg of rice, 220 of beans, 130 of farinha, 45 of oil, 30 of fish. The proprietor signed a dismissal that said theft to keep the licence a strike-feeding kitchen would have cost him, then wrote her a reference calling her honest to the last gram. The margin note is not the registrar\u2019s hand. It reads the file the way it should be read: add the delivery, weigh the plate, count the street.'
  },

  epilogue: {
    Release: 'You signed Release, and the record stops calling it theft. It never was theft; it was appetite, nine days of it, cooked into plates and carried out to a street that could not pay and did not have to. The deduction of 675$00 is struck through, and in the margin somebody has written the word kg. In the photograph the kitchen door is still propped open.',
    Return: 'You sent the file back for a figure that names what hunger is worth, and there is no such figure anywhere in it. She stays on the shelf beside the year that quieted the docks: a thief to the register, a cook to the street, owed a debt the Archive has no column for and no currency to settle.',
    Retain: 'You kept the file. It is a good one to keep, and you are not the first. Somebody before you kept it, and left a note for the next pair of hands, which is how a case like this keeps its door propped open and keeps meaning to feed whoever walks in.'
  },

  foreshadow: 'The margin note is not the registrar\u2019s hand, but it is the same hand as the previous file, and the one before that \u2014 somebody teaching us all to weigh the plate before we sign the page.'
};
