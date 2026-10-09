// case-19 — "What He Burned to Stay Alive". A mail route in the Yukon, 1890–1925. Difficulty 3.
// The file says he destroyed the mail in his charge and confessed. The confession is true and the file is still wrong.

export default {
  id: 'case-19',
  order: 19,
  title: 'What He Burned to Stay Alive',
  subtitle: 'File 848-A \u00b7 Closed 1925',
  difficulty: 3,
  era: '1890\u20131925',
  slots: ['1890', '1898', '1902', '1908', '1916', '1925'],

  dossier: {
    name: 'Amos Ferrier',
    alias: 'A. Ferrier, carrier; the Dawson walker, on the route',
    age: '58 at entry',
    occupation: 'Mail carrier, Dawson\u2013Forty Mile trail; later store clerk, Dawson',
    place: 'the Dawson\u2013Forty Mile trail, Yukon Territory',
    cause: 'Pneumonia, in the Dawson hospital, of the winter cough he carried from 1902',
    entry: '19 February 1925',
    registrar: 'C. E. Mabon, first desk'
  },

  intake: 'The file came up from the Yukon shelf with a single page on top, and the page is the registrar\u2019s, in his own capitals: DISMISSED \u2014 DESTROYED THE MAIL IN HIS CHARGE; CONFESSED. He did confess. The confession is in the file, in his own words, and it says the thing the top page says it says. What the file does not contain is a single line telling me what the weather was doing, or who else was on that trail, or why a man who had carried the mail for eighteen winters would burn it in the ninth year of his service. I have dismissed men on less. I have never before been handed a confession that agrees with the charge and still leaves me unable to sign it.',

  fragments: [
    {
      id: 'case-19-f1', kind: 'form', label: 'Carrier\u2019s contract, Dawson',
      text: 'Departmental contract, 1890. Amos Ferrier is appointed carrier of Her Majesty\u2019s mail between the post at Dawson and the post at Forty Mile, twice each month, by the winter road and the river. He binds himself to deliver the mail in his charge, whole, into the hands of the postmaster at the far end. Signed at the foot in a firm hand: Amos Ferrier. Below it, in the office hand: carries his own grub; no dog team allowed on the contract.',
      anchor: '1890',
      note: 'He carried the mail on the strength of this one page for eighteen years, and he carried his own food to do it.'
    },
    {
      id: 'case-19-f2', kind: 'photo', label: 'Photograph of the cache',
      text: 'A photograph, 1898, of the supply cache at the summit of the trail: a platform of logs on four posts, a tarpaulin, a sack of flour, and a man in a fur cap standing beside it with one hand flat on the post, not smiling. On the back, in pencil: the cache, mile thirty-one; the year the river went out early. The same hand has written the carrier\u2019s own name underneath.',
      anchor: '1898',
      note: 'Mile thirty-one. A man keeps one photograph of the place he nearly died, and writes on the back the year he nearly died there.'
    },
    {
      id: 'case-19-f3', kind: 'form', label: 'Weather log, Dawson station, 1\u20139 September 1902',
      text: 'Daily log of the Dominion meteorological station at Dawson. 1 to 9 September 1902, the same entry made nine times: wind north-east, gale; snow, heavy; mercury falling; no travel on the trails; nothing moved in the valley or over the summit. On the ninth day the clerk has written, and then stopped: first let-up at dusk. No party has come in or gone out since the first.',
      anchor: '1902',
      note: 'Nine days in which nothing on the trail moved. The Department\u2019s minute says the load was put to the fire in fair weather.',
      unlocks: 'q3'
    },
    {
      id: 'case-19-f4', kind: 'form', label: 'Docket of the sealed packet',
      text: 'The covering docket of the sealed packet carried on the September 1902 trip \u2014 the single leaf the office kept when the packet itself went forward. Entered in the Deputy Minister\u2019s hand: one sealed packet, Census of Canada, 1901 \u2014 the returns of two districts, the Yukon and the Athabasca \u2014 to be delivered to the Department, seals unbroken on dispatch. Under it, on the same leaf: the district letters for the Forty Mile, forty-one in number, entered to the carrier separately.',
      anchor: '1902',
      note: 'Two things travelled with him: one sealed census packet and forty-one letters. The file has never once separated them.',
      unlocks: 'q5'
    },
    {
      id: 'case-19-f5', kind: 'transcript', label: 'Confession of Amos Ferrier, sworn',
      text: 'Sworn before the stipendiary magistrate at Dawson, October 1902. \u201cOn the ninth day I could not keep the fire. I burned the mail in my charge, the packet and the paper, to keep the man alive and to get him down to a settlement. I confess it whole and I will not have it set down any other way. I know what I have done. Let the surveyor\u2019s account stand beside this one, for he was there and I was there, and I will not have him speak for me alone.\u201d Signed with his name, not a cross.',
      anchor: '1902',
      note: 'He confessed the charge in full and then asked that a second account be read beside his. No one ever read it.',
      unlocks: 'q1'
    },
    {
      id: 'case-19-f6', kind: 'receipt', label: 'Register of letters delivered, Forty Mile',
      text: 'Postmaster\u2019s register, Forty Mile, September 1902. Forty-one letters entered to the carrier Ferrier; against every line the signature of the man or woman it was written to, and the date. None returned, none wanting, none lost. At the foot of the page the postmaster has written: the bearer came in on the tenth day, half-frozen, with another man, and delivered every letter on his list before he would sit down.',
      anchor: '1902',
      note: 'Every letter delivered, on the tenth day, before he would sit down. The top page says he destroyed the mail in his charge.'
    },
    {
      id: 'case-19-f7', kind: 'transcript', label: 'Report of the surveying party',
      text: 'Report of the Dominion Land Surveyor, October 1902, filed with the Department and copied into the carrier\u2019s file only as a marginal reference. \u201cOn the first of September I was taken in the storm above mile thirty-one and could not move. The mail carrier Ferrier reached me on the third day and put his own grub into me. We lay nine days, and on the ninth, the fire failing, he burned the packet he was carrying, against my protests, and would not let me burn the letters. On the tenth he got me down to the settlement on his arm and would not leave me until a doctor had looked at me. I would have died on that hill.\u201d',
      anchor: '1902',
      note: 'The load went into the fire to keep the other man on his feet, and it is written in the surveyor\u2019s own hand, in the file, in a line nobody carried up to the top page.',
      unlocks: 'q2'
    },
    {
      id: 'case-19-f8', kind: 'form', label: 'Departmental minute, dismissal',
      text: 'Minute of the Department, 1908. Ferrier, Amos, carrier. Charge: destroyed the mail in his charge. He has confessed the same, in full, and no other person was travelling the route. The load was put to the fire on the open trail, in fair weather, of his own motion, and the returns for the district cannot now be recovered. The carrier is dismissed from the service. No further action.',
      anchor: '1908',
      note: 'DISMISSED \u2014 destroyed the mail in his charge; confessed. That is the whole of the file\u2019s reading, and every clause of it belongs to the registrar and not to the man.'
    },
    {
      id: 'case-19-f9', kind: 'letter', label: 'Letter of the surveyor, unacknowledged',
      text: 'A letter in a stranger\u2019s hand, found loose at the back of the file and entered in no index. To the Department, 1916. \u201cFourteen winters ago, in a storm of nine days on the Dawson trail, the carrier Ferrier burned the census packet of two districts to keep me alive, and walked me down to a settlement on his arm. I have written to you of this once before, in 1909, and had no answer then or now. He is dismissed for it and I am alive for it. Set that beside his confession, for it is the second account, and without it the file is only the one.\u201d',
      anchor: '1916',
      note: 'The letter the file never mentions. It was written, and it was shelved unindexed, and the second account it asks for is the one this file has never had.',
      unlocks: 'q4'
    },
    {
      id: 'case-19-f10', kind: 'margin', label: 'Margin note, page 4',
      text: 'Read the weather before you read the confession; read the docket before you read the minute; read the surveyor before you sign. A charge can be true and still be the wrong question, and a man who confessed to the wrong question sits filed for seventeen years on a page that never asked him the right one. What is missing from this file is not evidence. It is a column. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1925'
    }
  ],

  contradictions: [
    { a: 'case-19-f8', b: 'case-19-f6', reason: 'The Department\u2019s minute records that Ferrier destroyed the mail in his charge; the Forty Mile register records every one of the forty-one letters delivered with a signature against it. If the mail in his charge was destroyed, the letters cannot have been delivered, and both pages cannot be the truth.' },
    { a: 'case-19-f8', b: 'case-19-f7', reason: 'The minute says the load was burned on the open trail in fair weather and that no other person was travelling the route; the surveyor\u2019s report places himself with Ferrier on that trail for nine days and names the day he was carried down. A man cannot have been alone on a trail another man travelled beside him all nine days.' },
    { a: 'case-19-f8', b: 'case-19-f3', reason: 'The minute dates the burning to fair weather; the station weather log makes the same entry of gale and heavy snow on each of the first nine days of September 1902 and notes that nothing moved on the trails. A load cannot be burned of a man\u2019s own motion in weather that kept every other man in the valley indoors.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-19-f5', prompt: 'You confessed the charge in full. Why confess a thing you could have left unspoken?', answer: 'Because there was another man on that hill, and if I said nothing the only account of the nine days would be his, and a debt like that must not be carried by the one who was saved. I set my name to it whole so that nobody could say it was done behind my back \u2014 and I asked them to read his page and mine together. They read one.' },
    { id: 'q2', cost: 2, requires: 'case-19-f7', prompt: 'The surveyor was on that trail with you for nine days. Why does the file say no other person was there?', answer: 'The file has a line for the load and a line for the carrier, and no line for a passenger. I brought him down on my arm and left him with a doctor, and when the paper was written up there was nowhere to write him. I did not put him in the confession for my sake. I put him in so that his page would stand, and they filed the page and never called it.' },
    { id: 'q3', cost: 1, requires: 'case-19-f3', prompt: 'Nine days. What did the cold leave you to burn?', answer: 'The grub went first, mine and his together. Then the caches were behind us and the storm was on us, and there was the packet and there was the letters, and I have thought about which I burned every day since. I burned the packet because the letters belonged to people who were waiting, and the packet belonged to a government that was not.' },
    { id: 'q4', cost: 2, requires: 'case-19-f9', prompt: 'The surveyor wrote to the Department twice. Why is his letter not in this file?', answer: 'It is in the file. It is at the back of the file, folded, in no index, and nobody entered it, because the minute was already written in 1908 and a dismissal does not care to be told it was wrong. He wrote once the year after and once again in 1916, and had no answer either time. The second account was asked for and made and shelved.' },
    { id: 'q5', cost: 1, requires: 'case-19-f4', prompt: 'What was in the packet you put to the fire?', answer: 'The census returns for two districts, sealed at Dawson. Not the letters \u2014 the letters went in at Forty Mile with a signature against every one. The file calls the packet the mail in my charge because the docket and the register were put on two different pages and the minute read only the one.' }
  ],

  key: {
    virtue: 'Endurance',
    wound: 'Oblivion',
    verdict: 'Release',
    truth: 'In September 1902 Amos Ferrier, a mail carrier of eighteen years\u2019 standing on the Dawson\u2013Forty Mile trail, was overtaken by the storm the Dawson station logged on every day from the first to the ninth, during which nothing on the trail moved. On the third day he found the Dominion land surveyor taken in the snow above mile thirty-one, and put his own food into him. For nine days the two lay in a shelter while the weather made travel impossible. On the ninth, the fire failing, Ferrier burned the load he was carrying to keep the surveyor alive and to get him down to a settlement \u2014 the sealed packet, which the docket shows to have been the 1901 census returns of two districts, not the forty-one district letters that the Forty Mile register records as delivered, every one, before he would sit down. He reached the settlement on the tenth day with the surveyor on his arm. He confessed in full and at once because he would not let the surveyor\u2019s account be the only account of the nine days; but the Department\u2019s minute of 1908 had no field for why, and read the confession as proof of the charge it already believed: dismissed, destroyed the mail in his charge. The surveyor wrote to the Department in 1909 and again in 1916; the second letter was shelved, unindexed, at the back of the file. The record has a column for what was burned and none for why it was burned, and so it filed a man as a failure for seventeen years.'
  },

  epilogue: {
    Release: 'You sign Release, and the top page comes off. Destroyed the mail in his charge becomes forty-one letters delivered and one sealed packet put to the fire on the ninth day to keep a man alive. The dismissal is struck, the eighteen years stand, and the census returns of two districts go into the record beside the surveyor\u2019s second account at last. The file closes on a man who confessed to the wrong question and waited seventeen years for someone to ask him the right one.',
    Return: 'You send the file back for more evidence. There is none to find: the weather is logged, the docket is entered, the letters are signed for, the surveyor\u2019s own report sits in the file and his second account is folded at the back, unindexed. Returning it keeps him on the shelf another year, still dismissed, still destroyed the mail in his charge across the top, while the one voice that could be read beside his own lies unentered at the back of the file. The Archive will read his confession again, and read the weather never.',
    Retain: 'You keep the file. That is allowed. Some archivists cannot close a life a form spent seventeen years misreading, so they keep it on the desk and read the weather log and the docket and the surveyor\u2019s two accounts side by side, and set the nine days against the column that has no room for them. The Archive does not mind. It has a column for what a man burned. It has never had one for why, and this file is what that costs.'
  },

  foreshadow: 'The margin note is in the hand that has been questioning other files \u2014 a digit, a bundle, a page cut out. Whoever leaves them reads the charges nobody else reads and writes in the one place no registrar looks, and this one has been waiting on the same question I am.'
};
