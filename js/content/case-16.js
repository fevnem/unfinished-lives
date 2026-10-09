// case-16 — "The Page Cut Out of the File". A Clyde shipyard, Govan, 1955\u20131999. Difficulty 4.
// The file says a welder took his money and went quietly. Section 9 was lifted out with a blade.

export default {
  id: 'case-16',
  order: 16,
  title: 'The Page Cut Out of the File',
  subtitle: 'File 516-C \u00b7 Closed 1999',
  difficulty: 4,
  era: '1955\u20131999',
  slots: ['1955', '1962', '1968', '1974', '1979', '1986', '1999'],

  dossier: {
    name: 'Thomas Rennie',
    alias: 'Tam Rennie; T. Rennie on the weld tallies',
    age: '67 at entry',
    occupation: 'Welder, later checker of welds; Cairnbrae yard, Govan',
    place: 'Govan, Glasgow, on the Clyde',
    cause: 'Emphysema; the death record calls it the welder\u2019s complaint and leaves it there.',
    entry: '3 December 1999',
    registrar: 'E. Dunlop, junior'
  },

  intake: 'The file came up from the Clyde shelf in two pieces tied with the same tape: the yard\u2019s medical and inspection file, and a bundle of the dead man\u2019s own papers his family would not part with. The file is one sheet short; the bundle is one sheet long; and nobody before me has put the two on the same table. The word written across the top page is SEVERANCE \u2014 VOLUNTARY, and it is not the word I would use.',

  fragments: [
    {
      id: 'case-16-f1', kind: 'form', label: 'Medical and inspection file, contents sheet',
      text: 'Cover and contents, entered in one hand. Sections listed 1 to 9: birth, wages, medicals for 1962, 1968 and 1971, eyesight, and last medical, 1979. Section 9, inspection record, dated in the contents to 14 May 1968. It is not in the file. The binding shows one sheet lifted and cut away level with the stitching; the stub is still under the tape, cut clean with a blade and not torn. The next section is numbered 10, as if nothing had been taken out.',
      anchor: '1979',
      note: 'Nothing in this file is torn. Whoever took section 9 had a blade, a steady hand, and this file open in front of him.',
      unlocks: 'q3'
    },
    {
      id: 'case-16-f2', kind: 'form', label: 'Notice of voluntary severance',
      text: 'Cairnbrae yard, Govan. Notice of severance, voluntary. Name: Rennie, Thomas. Trade: welder, plate. Last employed on hull 1168, No. 3 berth. Reason: redundancy, voluntary. Weeks\u2019 pay: twenty. Signature of employee: T. Rennie. Filed under the yard\u2019s last order book, which closed the same year.',
      anchor: '1979',
      note: 'A man is voluntary when there is nothing else left to be.'
    },
    {
      id: 'case-16-f3', kind: 'form', label: 'Inspection record, carbon copy',
      text: 'Carbon copy, folded to the size of a pay book, found among the dead man\u2019s own papers. Hull 1168, No. 3 berth. Plates examined under the foreman\u2019s order of 14 May 1968. Plates 41 and 44, port side, frames 12 to 15: fault found in the strake beneath the cover plate; the plates above it have been welded over the fault and dressed smooth. Finding: the fault is present and covered. Report submitted to the foreman, 15 May 1968. Date stamp on the carbon: 21 May 1968, six days after the report it copies.',
      anchor: '1968',
      note: 'Six days. The file\u2019s own section 9 was dated 14 May; this copy carries a stamp a week after the finding written on it.',
      unlocks: 'q1'
    },
    {
      id: 'case-16-f4', kind: 'object', label: 'Yard drawings, annotated in his own hand',
      text: 'Fourteen sheets of the yard\u2019s own working drawings for hull 1168, each gone soft and brown at the edges. On every sheet that shows them, plates 41 and 44, port side, frames 12 to 15, are ringed in pencil; beside the ring, in a small even hand, the date 15 May 1968 and three words: welded over, dressed. On the last sheet, a list in the same hand of every hull he had checked since 1962, with a cross set against 1168.',
      anchor: '1974',
      note: 'Eleven years of marks, made after he was told he had read the drawing wrong. His family kept all fourteen sheets.',
      unlocks: 'q2'
    },
    {
      id: 'case-16-f5', kind: 'letter', label: 'Letter from the union, district office',
      text: 'Brother Rennie \u2014 the district has put your complaint of 1968 to the yard, and the yard has answered that hull 1168 was examined, found sound, and that no plate on her was ever questioned. The yard\u2019s inspection is its own record and the district has no power over it. The district has asked the yard to keep your name on the coming list, and the yard has agreed. Sign when you are called, and say nothing of 1968. The order book is thin.',
      anchor: '1974',
      unlocks: 'q4'
    },
    {
      id: 'case-16-f6', kind: 'photo', label: 'Photograph, No. 3 berth',
      text: 'Hull 1168 on the berth, photographed from the crane gantry the year she was laid down. The plating rises in long strakes toward the bow; a line of men works along the port side, hoods down. On the back, in pencil: 1168, port side, frames 9 to 20. Somebody has drawn a thin ring around frames 12 to 15, and drawn it many years later, in a different pencil.',
      anchor: '1955',
      note: 'The photograph was taken in 1955. The ring around frames 12 to 15 was not.'
    },
    {
      id: 'case-16-f7', kind: 'transcript', label: 'Extract, the yard\u2019s final report',
      text: 'Final report of the yard, submitted to the liquidator. Hull 1168 was completed and delivered. On the question of the yard\u2019s inspection standards the report states: no plate on any hull built at this yard during the period under review was questioned, and no finding of a covered fault was ever recorded. Hull 1168 is not named in the report except in the delivery list.',
      anchor: '1986'
    },
    {
      id: 'case-16-f9', kind: 'receipt', label: 'Tally sheet, welds examined, one week',
      text: 'Week ending 16 March 1962. Welds passed for payment: Brown, J. \u2014 118; Morton, A. \u2014 96; Rennie, T. \u2014 74; Coyle, P. \u2014 130. Examined and countersigned, T. Rennie, checker. Same sheet, same week: Rennie certified Coyle\u2019s 130, not one of which he had welded. The initials against the certified lines are the same initials that ring plates 41 and 44 on the drawings.',
      anchor: '1962',
      note: 'He was the man who signed off other men\u2019s work. That is the part the file cannot decide, and neither can I.'
    },
    {
      id: 'case-16-f8', kind: 'margin', label: 'Margin note, page 3',
      text: 'The page is not lost. It was lifted out, and a lost page does not leave a stub. Count the sheets against the contents, hold the binding to the light, read the stamp on the copy he carried in his coat. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1999'
    }
  ],

  contradictions: [
    { a: 'case-16-f1', b: 'case-16-f3', reason: 'The file\u2019s contents dates the inspection record of hull 1168 to 14 May; the carbon copy of that record is stamped 21 May, six days after the finding written on it. A page cannot be dated a week before the finding it holds, and both cannot be the same sheet.' },
    { a: 'case-16-f2', b: 'case-16-f5', reason: 'The severance form records that Thomas Rennie chose to go; the union letter shows his name was put to the list with the yard\u2019s agreement, five years before he signed, on condition he said nothing of 1968. A man kept on a list to be called is not a man volunteering.' },
    { a: 'case-16-f4', b: 'case-16-f7', reason: 'The yard\u2019s final report says no plate on any hull was ever questioned and no covered fault was recorded; his own copies of the yard\u2019s drawings ring plates 41 and 44 on every sheet that shows them and date the finding to 15 May 1968.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-16-f3', prompt: 'You kept a carbon of your own inspection. Why keep a copy of a page you had already handed up?', answer: 'Because he told me I had read the drawing wrong, and a man can lose that argument and still keep the paper. I folded it to the size of a pay book and it lived in my coat for eleven years. Paper does not forget where it was made.' },
    { id: 'q2', cost: 2, requires: 'case-16-f4', prompt: 'Eleven years of rings on the yard\u2019s own drawings. What were you waiting for?', answer: 'For the surveyor\u2019s lamp to come on frames 12 to 15, and hull 1168 to come home for her survey, so a man with no part in it could look at the plates and not have to take my word. I signed off other men\u2019s welds for years to keep that yard open; that part is mine to carry. This is the one I would not sign, and the foreman signed it instead.' },
    { id: 'q3', cost: 2, requires: 'case-16-f1', prompt: 'Section 9 is cut out of your own file. Who held the blade?', answer: 'The file went from my hand to the foreman\u2019s office on the Monday and came back on the Thursday with a section 10 and no section 9. I was a welder. I do not know what hand held it. I know whose order it was, and I know the man who told me I had read the drawing wrong.' },
    { id: 'q4', cost: 1, requires: 'case-16-f5', prompt: 'The union told you to let it lie. You went on marking.', answer: 'The district had a hundred members and one order book. I did not expect it to choose me over the yard. I only asked it to write the date, and it wrote the date, and the date is kept in the letter.' }
  ],

  key: {
    virtue: 'Defiance',
    wound: 'Guilt',
    verdict: 'Retain',
    truth: 'In May 1968 Thomas Rennie, a plate welder and checker at the Cairnbrae yard in Govan, examined hull 1168 on No. 3 berth and found a fault in the strake at plates 41 and 44, port side, frames 12 to 15 \u2014 a fault that had been welded over and dressed smooth. He submitted an inspection report to the foreman on 15 May. The foreman told him he had read the drawing wrong, and the inspection page was cut out of the yard\u2019s file with a blade: the contents still list section 9, the binding still shows the stub, and the next section is numbered 10. He kept a carbon of his report in his coat, and for eleven years, on his own copies of the yard\u2019s drawings, he ringed plates 41 and 44 on every sheet that showed them, so that a surveyor would not have to take his word. In 1974 the union told him the yard had answered that the hull was sound and advised him to sign the severance when it came; it came in 1979 and the form calls it voluntary. His own papers do the accounting the file will not: the tally sheets show a man who countersigned other welders\u2019 work for years to keep the order book from closing, and the drawings show the one plate he would not put his name to. He carried the guilt for the sign-offs himself, and the fault for the rest, and his family buried neither.'
  },

  epilogue: {
    Release: 'You sign Release, and the word voluntary comes off the top page. The record closes on a man who reported a fault to his foreman, was told he had read the drawing wrong, and kept his own copy of the page for eleven years because a copy is a record too. The hull went to the breakers and her plates went with her, and the file closes on section 10, numbered as if nothing had been taken out.',
    Return: 'You send the file back for the missing page. There is no more evidence to find: the file is short a sheet lifted out with a blade, and the only other copy was folded in a dead man\u2019s coat. Returning it keeps him on the shelf another year, still a volunteer, still one page short, waiting for a yard that closed in 1979 to produce the sheet it cut out.',
    Retain: 'You keep the file. That is allowed, and it is what this one asks for. Some archivists cannot close a life whose whole record is a page somebody else removed, so they keep the fourteen drawings on the desk and read the rings at plates 41 and 44 again when the light is bad, and count the sheets against the contents and find them short. The Archive does not mind. The Archive has no column for a fault that was welded over and dressed smooth, and it does not close a file it cannot finish.'
  },

  foreshadow: 'The stub under the tape was cut level and clean, with a blade, not torn. There is a file on the shelf behind me that is also one page short, its contents also numbered as if nothing had been taken out, and I am beginning to think it was the same hand.'
};
