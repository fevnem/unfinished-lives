// case-13 — "One Digit Wrong". São Paulo, 1928–1972. A Sicilian family in Brás. Difficulty 3.
// Written to the shape of case-00. Do not "improve" the shape.

export default {
  id: 'case-13',
  order: 13,
  title: 'One Digit Wrong',
  subtitle: 'File 587-C \u00b7 Closed 1972',
  difficulty: 3,
  era: '1928\u20131972',
  slots: ['1928', '1936', '1941', '1949', '1951', '1955', '1963', '1972'],

  dossier: {
    name: 'Concetta Rinaudo',
    alias: 'Concetta lo Presti; "Nonna Concetta" on the parish roll',
    age: '71 at entry',
    occupation: 'Seamstress, Br\u00e1s; later laundress',
    place: 'Rua Aurora, 481, Br\u00e1s, S\u00e3o Paulo',
    cause: 'Stroke, in the back room, alone',
    entry: '3 October 1972',
    registrar: 'D. F. Andrade, second desk'
  },

  intake: 'The file came up from S\u00e3o Paulo in a bundle of its own, tied with string, and the top page says DESERTED BY ELDEST DAUGHTER in the registrar\u2019s capitals. Under it, on a consular form, the same hand has written recusou a repatria\u00e7\u00e3o \u2014 refused repatriation \u2014 as if a woman who would not sail home had no home at all. I have filed abandoned mothers before. This is the first one who left me a savings book with eleven entries in it and no place to spend them.',

  fragments: [
    {
      id: 'case-13-f1', kind: 'form', label: 'Passenger contract, Palermo to Santos',
      text: 'Shipping office contract, 1928. Manifests the family Rinaudo of Palermo \u2014 Concetta, husband, three children \u2014 for steerage to Santos. The destination address is entered in the office\u2019s own hand: Fam\u00edlia Rinaudo, Rua Aurora, 418, Br\u00e1s, S\u00e3o Paulo. The family signed the foot of the page with three crosses, and the clerk wrote the words Fam\u00edlia does not read Portuguese above the line, and left it there.',
      anchor: '1928',
      note: 'The family signed with crosses. The address on this line was written by the office, not by them.'
    },
    {
      id: 'case-13-f2', kind: 'photo', label: 'Photograph in the doorway',
      text: 'A photograph taken in the doorway of the Br\u00e1s house, 1936. The mother stands in the middle with the two boys; a young woman stands at the far edge of the frame, half out of it, holding her hat. On the back, in the mother\u2019s careful hand: Concetta; Rosalia, figlia mia \u2014 my daughter; the boys. The pencil has gone over the daughter\u2019s name twice, the way a hand does when it is not finished writing.',
      anchor: '1936',
      note: 'She wrote figlia mia on the back of the only photograph of all five of them together.'
    },
    {
      id: 'case-13-f3', kind: 'form', label: 'Household register, parish of Br\u00e1s',
      text: 'Parish household register. Rinaudo, Concetta, widow, seamstress, Rua Aurora, 481. Children: Rosalia, elder daughter, departed the household March 1941 \u2014 no further contact; and two sons, resident. Entry closed by the curate. The phrase no further contact is in the same ink and the same slant as the rest of the line, as if there had never been any doubt in it.',
      anchor: '1941',
      note: 'The curate wrote no further contact because that is what the family told him. The family told him because that is what they believed.'
    },
    {
      id: 'case-13-f4', kind: 'object', label: 'Dead-letter bundle, Correios, Br\u00e1s',
      text: 'A bundle of eleven letters, tied crosswise with postal string and stamped ARQUIVO \u2014 DEVOLVIDO. Every envelope is addressed in the same foreign hand to Fam\u00edlia Rinaudo, Rua Aurora, 418, Br\u00e1s. Every envelope is stamped, in red, n\u00e3o reside \u2014 no such resident. The eleven postmarks run from 1941 to 1951 without a gap. The string has been tied once and never untied; a clerk has written on the wrapper: aguardando verifica\u00e7\u00e3o \u2014 awaiting check. The check was never made.',
      anchor: '1955',
      unlocks: 'q3'
    },
    {
      id: 'case-13-f5', kind: 'letter', label: 'Letter from Rosalia, opened at last',
      text: 'One of the eleven, opened for the first time in this office. The envelope says Rua Aurora, 418; the page inside does not. "Mamma \u2014 I write every year to the number the shipping office wrote in the book, and every year nothing comes back from you. But I remember our house: Rua Aurora, 481, the one with the fig tree over the gate, where we kept the saint in the niche. If 418 is wrong, write me at the address below, for I have no other way to find you." Postmarked 1949.',
      anchor: '1949',
      note: 'She remembered the number of her own house. She had been given a different one.',
      unlocks: 'q4'
    },
    {
      id: 'case-13-f6', kind: 'receipt', label: 'Caderneta de poupan\u00e7a, Caixa Econ\u00f4mica',
      text: 'A savings book in Concetta Rinaudo\u2019s name. Eleven deposits, one in each year from 1941 to 1951, every one for the same sum, every one made in the same week of the year. Then no further entry for twenty-one years. The closing balance, to the centavo, is the fare of a second-class passage S\u00e3o Paulo\u2013Santos\u2013Palermo for one passenger, in the tariff of 1951. Against the last line the cashier has written saldo n\u00e3o levantado \u2014 balance never drawn.',
      anchor: '1963',
      note: 'Eleven deposits; eleven letters on a shelf; the same eleven years, 1941 to 1951.',
      unlocks: 'q1'
    },
    {
      id: 'case-13-f7', kind: 'form', label: 'Repatriation assistance, consulate',
      text: 'Consular form, 1949. Application for assisted repatriation to the Kingdom of Italy, granted to Concetta Rinaudo, widow, of Rua Aurora, 481, Br\u00e1s: one passage, Santos\u2013Naples, steerage, at the expense of the mission. Under the offer, in the applicant\u2019s stead and the curate\u2019s hand: recusado \u2014 refused. No reason given. The space for a reason has been left blank and is large enough to hold a sentence.',
      anchor: '1949',
      note: 'The file reads the refusal as a woman turning her back on the old country. The offer was one passage. She had a daughter.',
      unlocks: 'q2'
    },
    {
      id: 'case-13-f9', kind: 'letter', label: 'Letter in Concetta\u2019s hand, in the drawer',
      text: 'A letter found in the drawer of the back room, in Concetta\u2019s hand, folded but never sent. "Figlia mia \u2014 I did not take the passage the consul offered, because it was for me and not for you, and I will not go home and leave you on the wrong side of the sea. I am putting by for your seat, a little each year. Write me the address once more, for I am not sure the office wrote it down right in 1928, and I am afraid to send this and have it come back, and then know."',
      anchor: '1951',
      note: 'She guessed the error twenty-three years before anyone found it, and never once let herself be told.',
      unlocks: 'q5'
    },
    {
      id: 'case-13-f8', kind: 'margin', label: 'Margin note, page 2',
      text: 'Somebody wrote one digit wrong in 1928 and eleven years went into a bundle on a shelf nobody was paid to open. Before you sign her name, open the bundle; then open the caderneta; then lay the two side by side and count. A clerk\u2019s error is nobody\u2019s fault, which is exactly how it lives so long. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1972'
    }
  ],

  contradictions: [
    { a: 'case-13-f3', b: 'case-13-f4', reason: 'The parish register says the elder daughter left in 1941 with no further contact; the dead-letter bundle holds eleven letters in her hand, addressed to the family, postmarked 1941 to 1951 without a gap.' },
    { a: 'case-13-f1', b: 'case-13-f5', reason: 'The shipping office entered the family\u2019s address as Rua Aurora, 418; the daughter names the family\u2019s house as Rua Aurora, 481, the one with the fig tree over the gate. Both cannot be the family\u2019s address.' },
    { a: 'case-13-f7', b: 'case-13-f6', reason: 'The consular form records a woman refusing a passage home; the savings book records eleven years of deposits, to the centavo the fare of one passage. The refusal cannot be the act of a woman who would not go.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-13-f6', prompt: 'You put by money every year for eleven years. For what?', answer: 'For her seat. One passage, S\u00e3o Paulo to Palermo, for Rosalia. The consul\u2019s passage was for me alone, and a passage you use alone is a passage that leaves somebody behind, and I would not do that in either direction.' },
    { id: 'q2', cost: 2, requires: 'case-13-f7', prompt: 'They offered you a passage home and you refused it.', answer: 'They offered one seat, and it had my name on it and not hers. An old woman sailing home while her daughter stays on the far shore \u2014 no. I stayed, and I put by a coin for every year, and I meant to buy us both a cabin on the same boat.' },
    { id: 'q3', cost: 1, requires: 'case-13-f4', prompt: 'There were eleven letters, and you never saw one.', answer: 'I was handed nothing. The number on the envelope was never our door, and the office tied them in a bundle and set the bundle on a shelf and nobody was paid to open it. I died believing she had put us down and gone on, and she died believing the same of me.' },
    { id: 'q4', cost: 2, requires: 'case-13-f5', prompt: 'She wrote your house number on the inside of the page.', answer: 'The 418 was the clerk\u2019s, from the shipping book, in 1928. She wrote it on the envelope her whole life because it was all she was ever given. But the 481 was hers \u2014 that is the house she grew up in, with the fig tree. The wrong digit was never my daughter\u2019s.' },
    { id: 'q5', cost: 1, requires: 'case-13-f9', prompt: 'You wrote to her and never sent the letter.', answer: 'I did not know where it would go. If I sent it and it came back, then I would know for certain that she had forgotten the address and the house and us, and I was not ready to know that. So I kept it in the drawer and kept putting by, and it was easier to hope than to find out.' }
  ],

  key: {
    virtue: 'Endurance',
    wound: 'Abandonment',
    verdict: 'Release',
    truth: 'In 1928 the shipping office entered the family\u2019s address on the immigration contract in its own hand, and wrote Rua Aurora, 418 for the house at Rua Aurora, 481 \u2014 one digit wrong, on a page the family could not read to check. When the elder daughter, Rosalia, left the household in 1941 to work, she wrote home every year for eleven years, addressing every letter to the number the clerk had written. Every one was stamped n\u00e3o reside and tied into a dead-letter bundle that was shelved, marked awaiting check, and never checked. The parish register recorded no further contact because that is what the family believed. In 1949 the consulate offered Concetta a single assisted passage back to Sicily; she refused it, and the file read the refusal as a woman turning her back on the old country. She refused because the passage was for one, and she was putting by, year by year, to buy her daughter\u2019s seat on the same boat. Eleven deposits stand in her savings book for 1941 to 1951, to the centavo the fare of one passage, over the same eleven years as the eleven unopened letters. Concetta died in 1972 still saving, still believing her daughter had abandoned her; and Rosalia, dead in 1951, never learned that a clerk moved one digit and buried eleven years of a family under it.'
  },

  epilogue: {
    Release: 'You sign Release, and both misreadings come off the file. no further contact becomes eleven letters a clerk would not untie; refused repatriation becomes a widow saving for a second seat she never got to buy. The daughter is filed as a woman who wrote home every year of her last eleven, and the mother as a woman who never once stopped expecting her. Both names come off the register of the abandoned, and the shelf where the bundle sat is noted, in the file, as the place the eleven years went.',
    Return: 'You send the file back for more evidence. There is no more evidence to find: the bundle was opened, the caderneta counted, the digits compared. Returning it leaves her on the shelf another year, still DESERTED BY ELDEST DAUGHTER across the top, while the one person who could have explained the letters has been dead since 1951 and the one who saved for her for eleven years is dead too. The passage was never bought. The balance was never drawn.',
    Retain: 'You keep the file. That is allowed. Some archivists cannot close a life that ended the way this one did \u2014 two women on opposite shores, each certain the other had let go, one digit between them all the while. So they keep it on the desk and read the bundle when the light is bad, and count the eleven deposits and the eleven letters again, as if the counting might change the number. The Archive does not mind. It has ink against her name either way.'
  },

  foreshadow: 'The margin note on page 2 is in the same upright hand that has been correcting other files \u2014 a line under one word, a bundle advised, a digit questioned. Whoever she is, she reads the shelves nobody is paid to read, and she has been expecting me.'
};
