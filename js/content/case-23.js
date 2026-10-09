// case-23 — order 23, difficulty 3. A railway signal box, Ivory Coast, 1940\u20131979.
// The file says a signalman, a collision and drink. The four slips in his own hand say otherwise.

export default {
  id: 'case-23',
  order: 23,
  title: 'Four Reports and No Action',
  subtitle: 'File 619-K \u00b7 Closed 1979',
  difficulty: 3,
  era: '1940\u20131979',

  dossier: {
    name: 'Boureima Kabor\u00e9',
    alias: '"Boubou" on the line; the signalman of box 9',
    age: '63 at entry',
    occupation: 'Signalman, Abidjan\u2013Niger railway; later yard gatekeeper',
    place: 'Signal box 9, K junction, the Abidjan\u2013Niger line, Ivory Coast',
    cause: 'Heart failure, in the gatekeeper\u2019s hut, alone',
    entry: '7 September 1979',
    registrar: 'A. Manlan, third desk'
  },

  slots: ['1940', '1951', '1955', '1956', '1963', '1979'],

  intake: 'The top of the page is in the registrar\u2019s fast capitals and it is a charge before it is a name: SIGNALMAN \u2014 COLLISION AT K JUNCTION \u2014 DRINK TAKEN ON DUTY. Under it, in the same hand, the man\u2019s name, and under that the sum of what was done to him, which was nothing and a posting to the gate. I have filed a hundred men for drink. This is the first of them whose own writing is the top sheet of his file, and the first whose writing is a complaint he never once got to make with his mouth. I read the four slips before I read the finding. It was not the order I was taught; it was the order the man left them in.',

  fragments: [
    {
      id: 'case-23-f1', kind: 'photo', label: 'The box at K junction',
      text: 'A photograph, dry season, the glare flat along the rails. A cabin of corrugated iron raised on stilts above the ballast, twelve levers in a frame at the window, the name board K, the paling fence. On the back, in a slow pencilled hand: the box, the year it was given me. A second line, pressed later and hard enough to score the card: the locking bar between three and four does not hold.',
      anchor: '1940',
      note: 'He wrote the fault on the back of his own photograph before he wrote it on any form.'
    },
    {
      id: 'case-23-f2', kind: 'form', label: 'Fault reports, four of them, in his hand',
      text: 'Four report slips bound in the file in date order: 1951, 1952, 1953, 1954. Every one names the same defect in the frame at box 9 \u2014 the approach locking will not engage; the road can be cleared to the loop while the home signal stands at danger \u2014 and every one asks for a renewal of the locking bar between levers three and four. Beside each, in a different hand, one word: NIL. The initials against the four are the same initials, and the last slip carries a red note in the margin: no action \u2014 frame down for renewal, not before the next estimates.',
      anchor: '1951',
      note: 'Four years, one fault, and someone wrote no action beside it four times.',
      unlocks: 'q1'
    },
    {
      id: 'case-23-f3', kind: 'form', label: 'Train register, box 9, the night of the collision',
      text: 'The register for the night of 14 March 1955, one line to a movement. 20:58, down goods cleared through K junction into the section. 21:06, in pencil, in a hurried hand: COLLISION at the junction, wagons on the up road. 21:12, the up night passenger reported into the K block from Yopougon. 21:41, the up night passenger stopped and set back, obstruction at PK 9 plus 600. At the foot of the page, in the same pencil: section blocked, flag. There is no hour against it.',
      anchor: '1955'
    },
    {
      id: 'case-23-f4', kind: 'transcript', label: 'Court of enquiry, K junction collision',
      text: 'The finding of the court of enquiry, 1955. The collision is attributed to the signalman of box 9, who permitted the down goods to enter an occupied section and had taken drink on duty; the apparatus is found in good order and last overhauled in 1948; a bottle of spirits recovered from the box is entered as the property of the signalman; and no person is found to have been in the box that night but the signalman himself. The red flag recovered at PK 9 plus 600 \u2014 one kilometre six hundred metres south of the box \u2014 is described as a false flag, set by some hand unknown, since the signalman did not quit his post.',
      anchor: '1955',
      note: 'A court that has named the man before it weighs the frame.',
      unlocks: 'q2'
    },
    {
      id: 'case-23-f5', kind: 'form', label: 'Transfer note; remarks of the district inspector',
      text: 'The district inspector asked for a transfer in 1956 and his note of posting was filed with the office. Under remarks he lists the night inspections he has made over the previous five years, and among the dull entries sits this line: box 9, K junction, the night of the collision \u2014 came down with the breakdown gang after the wreck and stopped in the box until the line was clear. The note was written a year after the court and says nothing more about it.',
      anchor: '1956',
      unlocks: 'q4'
    },
    {
      id: 'case-23-f6', kind: 'object', label: 'Bottle, half full, kept with the file',
      text: 'The bottle itself, kept in the envelope with the enquiry papers and never returned: dark glass, half full, a paper chit gummed round the neck. The chit reads, in a clerk\u2019s hand: R.A.N. Mess, Inspectors\u2019 \u2014 one bottle, issued to the visiting inspector, K junction, 15 March 1955. The enquiry has entered the bottle as the signalman\u2019s.',
      anchor: '1955',
      unlocks: 'q3'
    },
    {
      id: 'case-23-f7', kind: 'letter', label: 'Letter to his brother at Kaya',
      text: 'A letter in his own hand, 1963, addressed to his brother at Kaya and sent back unopened, the address no longer known. \u201cThe office moved me off the box and onto the gate, which is quieter. I check the points still, every train that comes down. I have never once left the levers with the road open and I will not begin now to suit them. I did not take the drink they wrote about, and I will not put that in a letter where the office can read it, so I put it here and you may keep it. If I had stayed at home I would be a farmer with a bad back and my name good. Here I am a name with no farm.\u201d',
      anchor: '1963'
    },
    {
      id: 'case-23-f8', kind: 'margin', label: 'Margin note, page 1',
      text: 'Whoever wrote the name at the top of the page wrote it before he read the rest, and the rest is why he was wrong to. Read the file in the order it was made: the four slips first, then the frame they are about, then the night, then the walk that only two feet can make. A clerk\u2019s no action, initialled, is a decision too, and the file that carries four of them is not a file about drink. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1979'
    }
  ],

  contradictions: [
    { a: 'case-23-f2', b: 'case-23-f4', reason: 'The court of enquiry certifies the apparatus in good order and last overhauled in 1948; the four slips in the signalman\u2019s own hand condemn the same locking fault in 1951, 1952, 1953 and 1954. The apparatus cannot be in good order and have been named as faulty four times over four years.' },
    { a: 'case-23-f3', b: 'case-23-f4', reason: 'The register has the up night passenger entering the K block at 21:12 and stopped at PK 9 plus 600 at 21:41; the court finds that no one was in the box but the signalman and that he did not quit his post. Both cannot be true of a flag set a kilometre and a half down the line.' },
    { a: 'case-23-f5', b: 'case-23-f4', reason: 'The court finds the signalman alone in the box that night; the district inspector\u2019s own transfer note records that he came down with the breakdown gang after the wreck and stopped in the box until the line was clear. The box cannot have held one man and two.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-23-f2', prompt: 'Four times you wrote the same fault, and four times it came back no action.', answer: 'The locking bar between three and four. I drew it for them once, on the back of the photograph they took of the box, and still they wrote no action. A man can stand at a frame his whole service and watch a fault he has named go on being a fault, and there is nothing to be done with that but keep naming it. So I kept naming it. That is the whole of what I did, and I would do it the same again.' },
    { id: 'q2', cost: 2, requires: 'case-23-f4', prompt: 'The court found you never left the box that night.', answer: 'I left it with the lamp and the flag and I went south. A kilometre and six hundred metres on the ballast in the dark, and I am not a young man, and I heard the passenger coming before I had the flag up and I got it up. Ask them how the flag stood at nine-six if the man who set it was sitting in the box. Ask them the hour. The register has the hours in it, and the register is not mine to argue with or to alter.' },
    { id: 'q3', cost: 1, requires: 'case-23-f6', prompt: 'The bottle was yours, the enquiry says.', answer: 'The bottle came down with the inspector and the breakdown gang, off the mess, signed out to him, the morning after the wreck. He sat in my chair to write his note and he left it behind when he went. I have never in my life asked a man for his bottle, and I did not ask him to admit it either, which is maybe where I went wrong.' },
    { id: 'q4', cost: 2, requires: 'case-23-f5', prompt: 'He put that night in a list of dull inspections he had made.', answer: 'He put it in a column of dull things and hoped no one reads a column of dull things. That is how an honest man writes down the one line that would hang him: in the middle of a list, where his own hand can be certain and his mouth can go on saying he was never there. Ask him why he asked for the transfer the year after.' }
  ],

  key: {
    virtue: 'Duty',
    wound: 'Displacement',
    verdict: 'Release',
    truth: 'Boureima Kabor\u00e9 took the frame at box 9, K junction, in 1940, and reported the same defect four times between 1951 and 1954 \u2014 the approach locking would not engage, and the road could be cleared into the loop while the home signal stood at danger \u2014 and each report came back no action, initialled, the renewal deferred. On the night of 14 March 1955 the fault did exactly what he had said it would do: the down goods was admitted to an occupied section at K junction and struck the wagons on the up road at 21:06. He took his lamp and his flag and walked one kilometre six hundred metres south in the dark and set the flag that stopped the up night passenger at 21:41, saving the second train and everyone in it. The court of enquiry attributed the collision to drink, certified the apparatus in good order, entered a bottle as his own, and called the flag a false one set by an unknown hand, because it had already decided that he never left the box. The bottle was the district inspector\u2019s, signed out of the mess and carried down with the breakdown gang after the wreck; the inspector was in the box that night and admitted it a year later in the one place he thought no one reads, the remarks column of his own transfer note. The man whose name stands at the top of the page was the wrong man. The frame had been condemned in his handwriting four times, and the office had answered no action.'
  },

  epilogue: {
    Release: 'You sign Release. drink taken on duty comes off the top of the page and the enquiry is struck through line by line: the apparatus was not in good order, it was in the order his four slips said it was in; the flag was not false, it was set by the man the court swore never left the box; the bottle was not his. He is filed as the signalman who did his duty four times on paper and once on the ballast in the dark, and the second train is noted, in the margin, as the one nobody ever thanked him for.',
    Return: 'You send the file back for another reading. There is nothing more to find: the four slips are in it, the register is in it, the chit is gummed round the neck of the bottle, and the inspector\u2019s own hand is in the transfer note. Returning it leaves the name at the top of the page where the registrar put it, still drink taken on duty, while the man who walked the ballast has been dead since 1979 and the inspector whose bottle it was can no longer be asked.',
    Retain: 'You keep the file. That is allowed. Some archivists cannot close a life that ended the way this one did \u2014 a man off the box and onto the gate, writing to a brother who had gone, still checking points nobody asked him to check. So they keep it on the desk and read the four slips again and count the metres between the box and the flag, as if the counting might put his name back at the top of the page where it belongs. The Archive does not punish this. It has his ink and not his name, and either way the second train got through.'
  },

  foreshadow: 'The margin hand is the same upright hand that has been questioning other files \u2014 a digit doubted, a bundle advised, and now a name written before the page was read. Whoever she is, she reads what she is not paid to read and leaves one line where the registrar should have looked, and she has been expecting me at this desk for a long while.'
};
