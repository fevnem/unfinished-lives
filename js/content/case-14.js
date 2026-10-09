// case-14 — The Dress List for a Lost Film. A Bombay film studio's wardrobe, 1934–1978. Difficulty 3.
// Shape copied from case-00; the story and the documents are its own.

export default {
  id: 'case-14',
  order: 14,
  title: 'The Dress List for a Lost Film',
  subtitle: 'File 212-M \u00b7 Closed 1963',
  difficulty: 3,
  era: '1934\u20131978',
  slots: ['1934', '1936', '1941', '1950', '1956', '1963', '1978'],

  dossier: {
    name: 'Shanta Rane',
    alias: 'S. Rane; on the studio rolls as \u201cdresser, uncredited\u201d',
    age: '51 at entry',
    occupation: 'Costume maker, later wardrobe assistant',
    place: 'Room 4, Nirmal Chawl, Dadar, then the wardrobe, Roshni Studios, Bombay',
    cause: 'Failure of the heart, at home; no doctor called',
    entry: '9 September 1963',
    registrar: 'P. Halden, junior'
  },

  intake: 'The registrar before me wrote one line at the head of the file and ruled a line under it: DISMISSED 1950 \u2014 REMOVAL OF STUDIO PROPERTY. Costume assistant, uncredited. I have filed a great many thieves. What I have not filed is a woman accused of stealing back the clothes she had stitched with her own hands, who kept to the end of her life the one list that proves which picture every one of them dressed.',

  fragments: [
    {
      id: 'case-14-f1', kind: 'form', label: 'Dress and continuity ledger, first leaves',
      text: 'A bound notebook in a fine upright hand, ruled by the owner into columns: picture, year, actress, dress. Chandni Raat, 1934 \u2014 the wedding lehenga, forty-two seams, worked at home in Dadar. Mehndi, 1936 \u2014 the jasmine-sprig bodice and its odhni, cut to the director\u2019s own sketch. Every leaf is headed with the same banner: Roshni Film & Theatrical Company.',
      anchor: '1934',
      note: 'The banner on the leaf is not the name the studio answers to now, and there is no wardrobe department in the ledger at all.',
      unlocks: 'q1'
    },
    {
      id: 'case-14-f6', kind: 'object', label: 'A dress, returned with the file',
      text: 'One garment was found in her room and sent with the papers: a bodice in raw silk, the jasmine sprig worked in floss, every seam turned by hand and the raw edges overcast. Inside the left placket, stitched small, a monogram in thread: S.R. The ledger describes this bodice leaf by leaf, and the description holds.',
      anchor: '1936',
      note: 'Hand-turned, overcast seams. The wardrobe the studio sold in 1950 was machine-ruled throughout.',
      unlocks: 'q2'
    },
    {
      id: 'case-14-f9', kind: 'form', label: 'Certificate of name, Registrar of Companies, Bombay',
      text: 'Roshni Film & Theatrical Company, registered 1931. Change of name entered 14 April 1941: the company shall henceforth be known as Roshni Studios. A wardrobe department is constituted the same year, and its standing rule entered: all costume to be made henceforward in the department\u2019s workroom.',
      anchor: '1941',
      note: 'Before 1941 there was no wardrobe and no workroom. There was only a room in a chawl in Dadar.'
    },
    {
      id: 'case-14-f4', kind: 'photo', label: 'Publicity photograph, undated in the pile',
      text: 'A still pasted in the file, its face worn: a young actress posed against a painted flat, wearing the jasmine-sprig bodice and the odhni that the ledger enters under Mehndi. The face of the card carries no date. On the reverse, added by another hand, a publicity stamp: ROSHNI STUDIOS, 1951.',
      anchor: '1936',
      note: 'The props are the ledger\u2019s, to the sprig. The date on the back belongs to whoever held the stamp.',
      unlocks: 'q3'
    },
    {
      id: 'case-14-f2', kind: 'form', label: 'Wardrobe department, dismissal entry',
      text: 'Roshni Studios, Wardrobe Department. Dismissed with effect from 30 September 1950: S. Rane, dresser, uncredited. Reason entered: removal of studio property. Property not recovered. No hearing held and none requested; the decision of the department stands as entered.',
      anchor: '1950'
    },
    {
      id: 'case-14-f3', kind: 'receipt', label: 'Sale of wardrobe stock',
      text: 'Roshni Studios to the Bombay Rag & Pulp Company: the whole of the early wardrobe stock \u2014 hangings, patterns, fittings, and every hand-worked piece of the 1934\u201338 pictures \u2014 sold as one lot on 30 September 1950, for pulp by weight. The re-shoots of the old pictures will be dressed out of the machine workroom.',
      anchor: '1950',
      note: 'The studio pulped the early costumes the same month it dismissed the woman who had made them, for taking some.'
    },
    {
      id: 'case-14-f5', kind: 'letter', label: 'Letter in her hand, to her niece',
      text: 'Nalini \u2014 the notebook is the only thing I ask you to keep. Every dress I made is in it, and which picture it dressed, and the year. When they sold the old wardrobe they called the rest of it their property; the pieces I made at my own table I took back, and I would take them again. Whatever they wrote about me in \u201950, let it stand.',
      anchor: '1956',
      note: 'She kept the list and gave nobody leave to defend her with it.',
      unlocks: 'q4'
    },
    {
      id: 'case-14-f7', kind: 'transcript', label: 'Deposition of the studio\u2019s last dresser',
      text: 'Q. Was S. Rane credited on the pictures she dressed? A. Never. The credit went to the director and the stars. Q. And after 1950? A. The workroom copied her old pieces by machine and never once said whose they were. When the fire took the early negatives in \u201963, the only list of what the heroines had worn was in her notebook. I have searched. There is no other.',
      anchor: '1963',
      note: 'The lost pictures have no costume continuity left except a dress list in a dresser\u2019s hand.'
    },
    {
      id: 'case-14-f8', kind: 'margin', label: 'Margin note, wardrobe department file',
      text: 'It is not the studio that decides what was its property. It is the list that decides, and the list is in her hand \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1978'
    }
  ],

  contradictions: [
    { a: 'case-14-f1', b: 'case-14-f2', reason: 'The dismissal charges her with removing studio property in 1950; her ledger enters those same dresses against the 1934\u201338 pictures of a company that kept no wardrobe department and did not yet answer to its later name.' },
    { a: 'case-14-f4', b: 'case-14-f1', reason: 'The photograph shows the bodice the ledger enters under Mehndi, 1936, yet the reverse is stamped by the studio\u2019s publicity office 1951. One dress cannot have been made for a picture of 1936 and issued new fifteen years later.' },
    { a: 'case-14-f2', b: 'case-14-f3', reason: 'The studio dismissed her for taking wardrobe property in September 1950 and in the same month sold that entire wardrobe for pulp; it cannot have valued as stolen what it was itself discarding.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-14-f1', prompt: 'Are the dresses in this ledger your own making?', answer: 'Every one. I made them at my own table, in my room in Dadar, before the studio had a workroom or a name worth the paint on its gate. The book is mine. The hands moving on the screen are theirs; the cloth is mine.' },
    { id: 'q2', cost: 2, requires: 'case-14-f6', prompt: 'The bodice carries your monogram. Why did the wardrobe not claim it?', answer: 'Because they could not have made it. Not in \u201950, not at any time. Every seam in it was turned by hand, and their workroom never did anything by hand in its life. They could copy what I made. They could not own the making of it.' },
    { id: 'q3', cost: 2, requires: 'case-14-f4', prompt: 'The photograph on the file is stamped 1951. Is that when the dress was made?', answer: 'The dress was made in \u201936, for Mehndi, and the girl in the frame wore it then. Somebody in the publicity office put a later date on the back, years after, so the picture would look new. A date on a photograph is only a clerk\u2019s opinion.' },
    { id: 'q4', cost: 1, requires: 'case-14-f5', prompt: 'You kept the list, and let the charge stand. Why?', answer: 'Because the list is the truth and the truth does not need a lawyer. Let them write thief by my name in \u201950. The book will still be read when their word is dust, and their word is not in it.' }
  ],

  key: {
    virtue: 'Devotion',
    wound: 'Oblivion',
    verdict: 'Release',
    truth: 'Shanta Rane dressed the early pictures of the Roshni studio out of her own room in Dadar, years before the company kept a wardrobe department or answered to its present name. She made every costume by hand and entered each one in a ledger \u2014 the dress, the picture, the year \u2014 because no one else kept such a list. In 1950 the studio turned to machine-made wardrobe and sold the old stock for pulp; Shanta took back the pieces she had made at her own table and was dismissed for removal of studio property, uncredited, with no hearing. She kept the ledger and told nobody to defend her. When the fire of 1963 took the early negatives, her dress list became the only surviving record of the costume continuity of the lost pictures. The file calls her a thief; the truth is that the studio\u2019s property was her work, and the record it kept of her was the only thing it ever stole.'
  },

  epilogue: {
    Release: 'You wrote Release, and the line at the head of the file \u2014 REMOVAL OF STUDIO PROPERTY \u2014 is struck out in your own ink. Shanta Rane is filed as the woman who dressed the early pictures out of her father\u2019s chawl and kept the only list of what the lost films had worn. The credit she was never given does not exist to give; the Archive can only set down that the dresses were hers, and that the studio that called them its property threw them on the rag heap. Her name goes on the register of makers. The negatives are ash, but the ledger is filed, and it is legible.',
    Return: 'You sent the file back. The studio is gone, the negatives burned in the fire of 1963, and the dresser who deposed for her is not answering a letter. There is nothing to fetch and no one left to fetch it from. Returning it keeps her on the shelf as an uncredited dresser dismissed for theft \u2014 still anonymous, still charged \u2014 while the notebook sits in the pile and waits for a stranger to read the second leaf.',
    Retain: 'You kept the file, which is allowed. Some archivists will not sign off a woman who could have cleared herself in a single afternoon and chose to say nothing instead, and let a thief\u2019s word stand against her for thirteen years. So she stays on the desk, the monogrammed bodice pinned beside the ledger at 1936, and you read the dress list when the light is bad. The department takes no notice of this. It does not correct the entry either.'
  },

  foreshadow: 'The hand in the margin of the wardrobe file is upright and a little too regular, and I have met it before \u2014 on the glassworks roll, on the works time book, wherever a life was written down as a thing that may not own what it made. It is always on the page the registrar did not write.'
};
