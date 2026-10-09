// case-03 — ORDER 3, DIFFICULTY 3. Warsaw to Buenos Aires, 1914–1946.
// The file reads the hand in the registers as an informer's. The hand was a gate.

export default {
  id: 'case-03',
  order: 3,
  title: 'The Names He Made Up',
  subtitle: 'File 088-K \u00b7 Closed 1946',
  difficulty: 3,
  era: '1914\u20131946',
  slots: ['1914', '1921', '1929', '1936', '1941', '1943', '1946'],

  dossier: {
    name: 'Ignacy Wolny',
    alias: 'I. W.; the clerk Wolny',
    age: '58 at entry',
    occupation: 'Clerk, registration office',
    place: 'Warsaw, then Buenos Aires',
    cause: 'Cardiac failure, in a rented room',
    entry: '2 September 1946',
    registrar: 'M. Kroll, assistant'
  },

  intake: 'A clerk\u2019s file is mostly his own hand, and this one is. Page after page of the transit and deportation registers, the same upright hand in every column, and stamped across the top in a different ink: COLLABORATOR; INFORMER. I have closed informers before. This is the first one whose informing named more people than the office ever had.',

  fragments: [
    {
      id: 'case-03-f1', kind: 'form', label: 'Register of deportations, sheet 14',
      text: 'Register of deportations, sheet 14. Sheet dated 6 April 1941. Eleven names, entered in one hand in a single sitting. Occupation: none. Destination: east. In the column for date of birth the same date has been written eleven times over: 6 April 1888.',
      anchor: '1941',
      note: 'A clerk filling a birth date copies the line above him. A clerk inventing one copies whatever is nearest, and the nearest date on any sheet is the sheet itself.'
    },
    {
      id: 'case-03-f2', kind: 'form', label: 'Permit of transit, 1943',
      text: 'Permit of transit, one person. Zaremba, Kazimierz, born 6 April 1888, Warsaw. Destination: Buenos Aires, by way of Lisbon. Issued 19 July 1943 at the registration office, single journey, no return. Signed for the office: I. Wolny, clerk.',
      anchor: '1943',
      note: 'Zaremba, K. is the fourth name on sheet 14.'
    },
    {
      id: 'case-03-f3', kind: 'form', label: 'Personnel record, registration office',
      text: 'Registration office, Warsaw. Wolny, Ignacy. Entered 1914, second clerk. Duties: permits of transit; lists of removal; the registers that carry both. Retained through the change of administration, 1915, and the change of currency, 1921. Hand described by the registrar as the steadiest in the office.',
      anchor: '1921'
    },
    {
      id: 'case-03-f4', kind: 'transcript', label: 'Deposition of a witness, 1946',
      text: 'Q. They asked you for a name. A. They put a pen in my hand and told me to give them one Pole who had worked for the office. I gave them the clerk. Q. Why him? A. Because I had a name to give, and his was the one name I had that did not belong to anyone still living. Q. Where is he now? A. Buenos Aires, under the name he gave me when he wrote me onto a list.',
      anchor: '1946',
      note: 'Depositions are memory wearing a uniform.'
    },
    {
      id: 'case-03-f5', kind: 'form', label: 'Index of denunciations, file cover',
      text: 'Index of denunciations. Subject: Wolny, Ignacy, clerk, registration office. Named 4 January 1946 by a witness as one who worked for the occupying administration, 1939\u20131944. Cross-reference: registers of transit and deportation, 1914\u20131944, all entries in the subject\u2019s hand. Classification: COLLABORATOR; INFORMER.',
      anchor: '1946',
      note: 'The cross-reference is what convicts him. Nobody reads past the cross-reference.'
    },
    {
      id: 'case-03-f6', kind: 'margin', label: 'Margin note, register of deportations',
      text: 'Eleven names, one birth date, and not one of them in any register of arrivals, at any port, in any year. Men do not vanish. Names do. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1946'
    },
    {
      id: 'case-03-f7', kind: 'photo', label: 'Photograph, office staff',
      text: 'Nine men in dark coats outside the registration office, the door open behind them. The ninth from the left is the youngest and the only one not facing the camera; he is looking down at what he holds, which is a pen. On the back, in pencil: the clerks, 1929. Under it, later, in a second hand: he kept the lists after the others stopped.',
      anchor: '1929'
    },
    {
      id: 'case-03-f8', kind: 'letter', label: 'Letter of application, 1914',
      text: 'To the registrar, registration office. I ask for the post of clerk. I can read and write in three languages, and I am not wanted at the front on account of my chest. I will keep whatever books you give me as carefully as if the people in them were real. \u2014 I. Wolny.',
      anchor: '1914'
    }
  ],

  contradictions: [
    { a: 'case-03-f1', b: 'case-03-f2', reason: 'Sheet 14 sends Kazimierz Zaremba east in 1941; the transit pass sends the same name, born the same date, to Buenos Aires in 1943. A man cannot be removed and leave in the same breath, so one of the two entries is a name and not a person.' },
    { a: 'case-03-f4', b: 'case-03-f5', reason: 'The index card files the 1946 deposition as a witness naming a collaborator; the deposition is a man naming the clerk who had already got him out, because that was the only name he had that belonged to no one still living.' },
    { a: 'case-03-f2', b: 'case-03-f6', reason: 'A transit pass was issued to a name that appears in no register of arrivals at any port; a pass that carries a man from Warsaw to Buenos Aires must leave a trace somewhere, and this one leaves none, because the name was made up to carry somebody else.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-03-f1', prompt: 'Eleven men, and one birthday between them.', answer: 'I opened the calendar at the day the sheet was headed and took the date off the top of the page. A name needs a birthday the way a door needs a hinge. I gave all eleven the date that was already lying under my hand.' },
    { id: 'q2', cost: 2, requires: 'case-03-f2', prompt: 'You deported Zaremba east, and signed him a passage to Buenos Aires.', answer: 'Zaremba went nowhere. The list was written so that the office would stop looking for the man behind the name, and the pass was written so that the man could leave under it. One name, used twice, and neither time by anyone called Zaremba.' },
    { id: 'q3', cost: 2, requires: 'case-03-f4', prompt: 'The witness named you.', answer: 'They gave him a pen and asked for a Pole who had worked for the office. He gave them the only name he had that belonged to nobody living. I wrote him onto a list and the list took him out; he wrote me onto a list and it stayed here. I do not hold it against him.' },
    { id: 'q4', cost: 1, requires: 'case-03-f5', prompt: 'The file calls you an informer.', answer: 'An informer names people. Open my registers and count what I named. Then open the arrival registers and count how many of them ever arrived. You will find none, because I never wrote down a person. I wrote down a name.' }
  ],

  key: {
    virtue: 'Cunning',
    wound: 'Betrayal',
    verdict: 'Retain',
    truth: 'From 1914 to 1944 Ignacy Wolny kept the transit and deportation registers of the Warsaw registration office, and the hand in every column of them is his. He could not stop the office removing people, so he taught it to remove men who had never existed: he took the date off the head of a page, invented eleven names to carry it, entered them as deported east, and then spent those names on real people who needed to leave. Zaremba travelled to Buenos Aires in 1943 on a pass issued to a man that same office had deported two years before, and neither Zaremba nor any of the eleven appears in an arrival register anywhere, because none of them was ever a person. In 1946 a man he had already got out was held and asked for a name to give, and gave his \u2014 the one name he had that cost no living person anything. The file says collaborator and informer because the denunciation is real and the handwriting is real, and the Archive has never learned to read the difference between a man who signs a list and a man who writes one.'
  },

  epilogue: {
    Release: 'You cleared the name. The classification comes off the file; the books write him down as a man who saved others, and it is true. It is not enough. Sheet 14 stays bound into the file behind your signature, eleven names and one birthday and no note to explain either, and the next clerk who opens it will read a deportation list the way the office always read it \u2014 as people who died, not as people who left.',
    Return: 'You sent it back for evidence that does not exist. The eleven names can be checked against no register, and the witness has already given everything he has. The file goes onto the shelf under informer, beside the man who named him, and waits for a reader who can look at a list of the dead and see a list of the living.',
    Retain: 'You kept it. You wrote CUNNING across the top, and in the space for the wound you wrote BETRAYAL, because both are true of the same man and neither cancels the other. The file stays on the desk with eleven invented names in it that will never be checked against anything. Some lives are not the Archive\u2019s to finish, and a man whose whole virtue was that the record should lie is one of them.'
  },

  foreshadow: 'Eleven names, one birthday, and somebody has already counted them. The note in the margin is not in the registrar\u2019s hand, and it is not in mine.'
};
