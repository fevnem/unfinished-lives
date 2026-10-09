// case-01 — The Furnace Under Another Name. Tyneside glassworks, 1889–1922. Difficulty 2.
// Shape copied from case-00; the story and the documents are its own.

export default {
  id: 'case-01',
  order: 1,
  title: 'The Furnace Under Another Name',
  subtitle: 'File 017-T \u00b7 Closed 1922',
  difficulty: 2,
  era: '1889\u20131922',
  slots: ['1889', '1896', '1903', '1907', '1914', '1922'],

  dossier: {
    name: 'Alfred Rennick',
    alias: 'A. Rennick; on the books 1903\u20131911 as T. Rennick',
    age: '58 at entry',
    occupation: 'Glass furnaceman, night hand',
    place: 'Bailey\u2019s Court, then No. 3 furnace, Tyneside',
    cause: 'Found at the furnace mouth before the morning shift',
    entry: '9 January 1922',
    registrar: 'P. Halden, junior'
  },

  intake: 'The works roll calls him the absentee of Bailey\u2019s Court. Three weeks in the spring of 1907 he did not come in, and after that he never came in again, and the glassworks shut its gate on him for good. I have filed a hundred men who walked off a night shift. What I have not filed before is a man the works would not describe, because the works could not say which of two brothers he was.',

  fragments: [
    {
      id: 'case-01-f1', kind: 'form', label: 'Works roll, engagement',
      text: 'Tyne Plate & Flint Glass Works. Engaged the same morning: Thomas Rennick, furnaceman, 22, and Alfred Rennick, his brother, night hand, 25, both of Bailey\u2019s Court. Thomas sets his name to the roll; Alfred sets his mark, a cross, before two witnesses.',
      anchor: '1889',
      note: 'One man signs and one man cannot. In this town that is a fact about the future.'
    },
    {
      id: 'case-01-f2', kind: 'photo', label: 'Photograph, night shift at the furnace',
      text: 'A works photographer posed the night shift before No. 3 furnace: nine men, one lit mouth, and one figure standing a little apart at the furnace, his back to the camera. The chalk on the back of the card reads \u2018Nights \u201996 \u2014 Rennick, furnace.\u2019 It does not give a first name.',
      anchor: '1896',
      note: 'In 1896 both brothers answer to Rennick, furnace.'
    },
    {
      id: 'case-01-f3', kind: 'form', label: 'Burial register, parish of St Cuthbert',
      text: 'Rennick, Thomas, furnaceman, of Bailey\u2019s Court. Died 4 November 1903, aged 34, of a fall taken at the furnace mouth; no inquest held. Buried 7 November, parish ground. Informant and signatory: A. Rennick, brother, who signed in a steady, upright hand.',
      anchor: '1903',
      note: 'He signed his brother into the ground. That hand will be signed to a great many things afterwards.'
    },
    {
      id: 'case-01-f4', kind: 'form', label: 'Works time book, absence entry',
      text: 'A. Rennick, night hand, absent without notice from 2 April to 23 April. No word sent to the office. Struck off the books 30 April. Foreman\u2019s remark: spoke to him at the gate, got no answer.',
      anchor: '1907'
    },
    {
      id: 'case-01-f5', kind: 'form', label: 'Shift cards, No. 3 furnace, night',
      text: 'Nineteen cards, one for each night of 2\u201323 April. Every card is signed at the foot in the same upright hand, and every card is headed with the furnaceman\u2019s name: T. Rennick. The timekeeper has stamped each one in red: PAY \u2014 NIGHT RATE.',
      anchor: '1907',
      note: 'A. Rennick was struck off for those nights. Somebody worked them.'
    },
    {
      id: 'case-01-f6', kind: 'receipt', label: 'Publican\u2019s slate, the Glassmakers\u2019 Arms',
      text: 'Chalked on the slate and later inked in, nights of April 1907: A. Rennick, arrears of Mrs Rennick, widow, 27 Bailey\u2019s Court \u2014 five shillings and sixpence, week by week, in his own name. Entered settled 27 April. Landlord\u2019s initials, W.H.',
      anchor: '1907',
      note: 'Absent without notice, and in the town in his own name every night the works missed him.'
    },
    {
      id: 'case-01-f7', kind: 'form', label: 'Widow\u2019s pension book',
      text: 'Contributory pension, class 3. Named contributor: T. Rennick, furnaceman, No. 3 furnace, deceased. Contributions stamped paid each week without a gap from January 1904 to March 1911, and drawn down throughout by M. Rennick, widow. The clerk\u2019s initials are the same on every page.',
      anchor: '1914',
      note: 'Thomas Rennick was buried in 1903. Somebody was paying into his name for eight years after.'
    },
    {
      id: 'case-01-f8', kind: 'letter', label: 'Letter in A. Rennick\u2019s hand',
      text: 'Margaret \u2014 the boy stays in school; I am sending what I said I would. Do not come to the works for me and do not ask after me there. Whatever they have put down about me, let them keep it. \u2014 A.R.',
      anchor: '1914'
    },
    {
      id: 'case-01-f9', kind: 'transcript', label: 'Deposition of a furnaceman, relief board',
      text: 'Q. Who worked No. 3 those nights? A. The cards say T. Rennick. Q. Thomas Rennick was four years in his grave. A. Then whoever signed for him wanted it believed he was not. I stood at that furnace beside him and asked him nothing \u2014 there was a widow up the court and wages wanted. A correction is a confession, and the fund reads confessions too.',
      anchor: '1922',
      note: 'Everything in this file has to be assembled from the cards. Start there.'
    },
    {
      id: 'case-01-f10', kind: 'margin', label: 'Margin note, works roll',
      text: 'Absent without notice is a phrase about a man who was not found. It is not a phrase about a man who was not there. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1922'
    }
  ],

  contradictions: [
    { a: 'case-01-f3', b: 'case-01-f5', reason: 'The burial register put Thomas Rennick in the ground in 1903; nineteen night shift cards for April 1907 are signed in his name.' },
    { a: 'case-01-f4', b: 'case-01-f6', reason: 'The works struck A. Rennick off for vanishing without a word; the publican\u2019s slate has him in the town, in his own name, every week of those same three weeks.' },
    { a: 'case-01-f5', b: 'case-01-f8', reason: 'The 1907 shift cards and the 1914 letter are plainly one hand, yet the cards are signed T. Rennick and the letter is signed A.R.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-01-f5', prompt: 'Whose hand is on the shift cards for April 1907?', answer: 'Mine. Two names came out of one hand at that works for eight years and nobody at the office could be troubled to look at either. I signed for Thomas because the wage book was his, and the pension was hers.' },
    { id: 'q2', cost: 2, requires: 'case-01-f7', prompt: 'Why keep a dead man on the pension book?', answer: 'Because a widow\u2019s book needs a contributor who is not dead yet. While his name was paid into, hers was drawn down. The day the name stopped, the book stopped, and she went into the relief house, and I could not have that.' },
    { id: 'q3', cost: 2, requires: 'case-01-f4', prompt: 'You were struck off as an absentee. You could have said where you were.', answer: 'And taken the widow\u2019s book off her to clear my own name. The office would have clawed back eight years from her to pay for my correction. I let them write absentee. It was a cheap word, and I could afford it, and she could not.' },
    { id: 'q4', cost: 1, requires: 'case-01-f8', prompt: 'Why did you tell her to let them keep their word for you?', answer: 'Because she was the only one who knew, and a secret holds only if it is never defended. I told her to say nothing, and she said nothing, and for eight years it held.' }
  ],

  key: {
    virtue: 'Duty',
    wound: 'Oblivion',
    verdict: 'Release',
    truth: 'Alfred Rennick was a furnaceman, and in 1903 his brother Thomas died at the furnace mouth. The works meant to close Thomas\u2019s wage book and stop the widow\u2019s pension with it. So Alfred worked Thomas\u2019s shifts under Thomas\u2019s name, in a hand close enough to pass, and paid into the contributor\u2019s name of a man he had buried \u2014 week by week for eight years, while Margaret Rennick drew the book down. In April 1907 the office caught the two names and the one hand; to fight it would have meant the fund clawing eight years back out of the widow. Alfred let them strike him off as an absentee, gave the foreman no answer at the gate, and said nothing. The works never took him back. The record calls him a man who walked off the night shift; the truth is that he was two men for eight years, so that his brother\u2019s wife would not be a pauper, and he paid for it with his own name.'
  },

  epilogue: {
    Release: 'You wrote Release, and ABSENTEE comes off the works roll in a line of your own ink. Alfred Rennick is filed as a furnaceman who worked nineteen unbroken nights for a dead man\u2019s wage and let the record call him a deserter rather than reclaim a widow\u2019s pension. The gate at the Tyne Plate works never reopened for him. It does not have to. The name goes back on the roll, and this time it is his.',
    Return: 'You sent the file back. The widow is dead, the works is shut, and the timekeeper who stamped those cards is not answering a letter. There is nothing to fetch. Returning it keeps him on the shelf as the absentee of Bailey\u2019s Court \u2014 still struck off, still silent \u2014 while the ink dries on a question he already answered nineteen times in a hand that was not his own.',
    Retain: 'You kept the file, which is allowed. Some archivists will not sign a man off for the one thing he was never charged with: being two men at once. So he stays on the desk, the cards pinned at April 1907 and the widow\u2019s book beside them, and you read the slate when the light is bad. The department takes no notice of this. It does not settle it either.'
  },

  foreshadow: 'The hand in the margin of the works roll is upright and a little too regular, and I have met it before \u2014 in other files, in other years, always on the page the registrar did not write.'
};
