// case-05 — "The Cause She Would Not Sign". A hospital in Chicago, 1933\u20131972. Difficulty 3.
// Written to the shape of case-00. Do not "improve" the shape.

export default {
  id: 'case-05',
  order: 5,
  title: 'The Cause She Would Not Sign',
  subtitle: 'File 217-K \u00b7 Closed 1972',
  difficulty: 3,
  era: '1933\u20131972',
  slots: ['1933', '1938', '1944', '1949', '1955', '1963', '1972'],

  dossier: {
    name: 'Ruth Halloran',
    alias: 'R. Halloran; Sister Halloran on the ward book; Ruth to her sister',
    age: '60 at entry',
    occupation: 'Nurse, later ward sister, ward 4',
    place: 'Ward 4, St. Aedan\u2019s Hospital, Chicago; later 14 Auburn Court',
    cause: 'Cerebral hemorrhage, at home',
    entry: '4 January 1972',
    registrar: 'M. Fletcher, junior'
  },

  intake: 'The file came up from the county in one folio: a personnel record, one page of a chart, one certificate, and a second page that is missing from every statement that mattered. The registrar before me wrote across the top in a slow hand \u2014 LEFT WITHOUT NOTICE \u2014 and drew the line under it the way you underline a thing you have already decided. He did not open the chart.',

  fragments: [
    {
      id: 'case-05-f1', kind: 'form', label: 'Personnel record, ward staff',
      text: 'Record opened 3 March 1933. Halloran, Ruth, trained at this hospital, appointed night nurse, ward 4. Below, in a later and darker ink, across the separation line: Separated 1 November 1944. Resigned without notice. Correspondence missing.',
      anchor: '1933',
      note: 'The form is dated 1933. The ending written on it is eleven years in its future.'
    },
    {
      id: 'case-05-f2', kind: 'form', label: 'Case record, ward 4, page 3',
      text: 'Grady, Thomas, male, 58, bed 11, compound fracture of the right femur. 10:40 p.m. morphine quarter-grain, given. 12:55 a.m. morphine quarter-grain repeated for restlessness, as ordered. 1:20 a.m. respirations 8 and shallow. 1:45 a.m. cyanosis; oxygen begun. 2:10 a.m. no pulse. 2:15 a.m. pronounced dead.',
      anchor: '1944',
      note: 'Doses entered as given, times entered as taken. Somebody kept this page honestly.'
    },
    {
      id: 'case-05-f3', kind: 'form', label: 'Certificate of death, Cook County',
      text: 'Grady, Thomas, 58, ward 4, St. Aedan\u2019s Hospital. Cause of death: coronary occlusion. Interval between onset and death: instantaneous. Time of death: 2:15 a.m., 10 October 1944. Attending: A. Reeve, M.D. Entered in the register by the ward sister.',
      anchor: '1944',
      note: 'Instantaneous, and yet the page before this one has him breathing for ninety-five minutes.',
      unlocks: 'q2'
    },
    {
      id: 'case-05-f4', kind: 'form', label: 'Loose memorandum, filed in the chart',
      text: 'Pencil, unsigned, on a half-sheet torn to fit the chart: The interval was not instant. Two quarter-grains in two hours, and the breathing gone by twenty past one. Enter the doses and the hours as given and the cause will not hold.',
      anchor: '1944',
      note: 'Nobody signed it. It was written in the week of the death and says the thing the board was asked to leave alone.',
      unlocks: 'q4'
    },
    {
      id: 'case-05-f5', kind: 'form', label: 'Statement of the medical board',
      text: 'The board sat upon the certificate in the case of T. Grady, ward 4, on 20 October 1944. It examined the ward book, the order sheet and the certificate as entered, and found no cause to alter the record. The matter was closed on 31 October, eleven days after it opened. (Page two of this statement is not in the file.)',
      anchor: '1944',
      note: 'A board that sat once and closed in eleven days did not sit for the man. It sat for the paper.'
    },
    {
      id: 'case-05-f6', kind: 'receipt', label: 'Payroll ledger, nurses, 1944',
      text: 'Halloran, R., ward sister. Notice given 1 November. Last day on the ward 1 December. Wages paid to that day, in full. Opposite the line, in a different hand, a single word: unreported.',
      anchor: '1944',
      note: 'She gave notice the day the board closed and worked a month of it. The ledger says so. The file says otherwise.',
      unlocks: 'q1'
    },
    {
      id: 'case-05-f7', kind: 'transcript', label: 'Deposition of the superintendent',
      text: 'Deposition of A. Reeve, M.D., superintendent, taken at the county review of hospital records, 3 May 1949. Q. Why did Nurse Halloran leave? A. Without notice. Q. Did she raise any question about a certificate? A. There was no complaint. We have no record of one. Q. And the family? A. The family was informed as the law requires.',
      anchor: '1949',
      note: 'He swears there was no record of a complaint while the record of the complaint sits one folio away, one page short.'
    },
    {
      id: 'case-05-f8', kind: 'letter', label: 'Letter to her sister',
      text: 'Kath \u2014 I am well enough. Do not ask me again about the Gradys. I meant to write to his wife every year and I never wrote. There was nothing I could put on paper that they would be allowed to believe. I kept my hand clean and it cost me the ward. That is the whole account and I am not writing more of it. \u2014 R.',
      anchor: '1963',
      note: 'Nineteen years after she left without notice, her own hand, and she still will not tell the one thing the file wants her to have told.',
      unlocks: 'q3'
    },
    {
      id: 'case-05-f9', kind: 'margin', label: 'Margin note, certificate page',
      text: 'What was written on the certificate was not the cause of death. It was what the hospital could afford the cause of death to be. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1944'
    },
    {
      id: 'case-05-f10', kind: 'form', label: 'Reply to a records request, 1972',
      text: 'St. Aedan\u2019s Hospital, records office, to the Department. Your request for the second page of the board\u2019s statement cannot be met. The statement is complete as filed. The matter of the Grady certificate is closed and has been closed since 1944.',
      anchor: '1972',
      note: 'They answered in three days and did not look. The page they call complete is the page that is not there.'
    }
  ],

  contradictions: [
    { a: 'case-05-f1', b: 'case-05-f6', reason: 'The personnel record says she resigned without notice; the payroll ledger in the same folio shows a month\u2019s notice given and worked, paid in full to the last day.' },
    { a: 'case-05-f2', b: 'case-05-f3', reason: 'The certificate calls the death an instantaneous coronary occlusion; the chart records ninety-five minutes of slow breathing after two doses of morphine. Both cannot be the true interval.' },
    { a: 'case-05-f4', b: 'case-05-f5', reason: 'The board says it examined the record and found no cause to alter it; the note filed in the chart that same week names the exact cause, and the board\u2019s own findings are the page lost from its statement.' },
    { a: 'case-05-f7', b: 'case-05-f8', reason: 'The superintendent swears the family was informed as the law requires; her own letter, written years later, says she never told them and never could.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-05-f6', prompt: 'The ledger shows a month\u2019s notice, given and worked. Your file says you left without notice.', answer: 'I gave my notice the morning the board closed and I worked every day of it. Somebody wrote unreported across my name and the file believed them. A paper can be made to say you ran when you walked.' },
    { id: 'q2', cost: 2, requires: 'case-05-f3', prompt: 'You were asked to enter the cause of death. Why would you not?', answer: 'Because it was not true. Two quarter-grains in two hours, and ninety-five minutes of watching him breathe out. That is not an instant coronary. I have written a hundred causes into that register. That one I would not write.' },
    { id: 'q3', cost: 2, requires: 'case-05-f8', prompt: 'The Gradys were never told.', answer: 'No. I meant to write to her every year and I never put a line on paper. To tell them I would have had to name the thing the hospital swore never happened, and the only paper that proves it is the paper they own.' },
    { id: 'q4', cost: 1, requires: 'case-05-f4', prompt: 'The note in the chart \u2014 is that your hand?', answer: 'It is pencil and it is nobody\u2019s. Whoever wrote it knew the thing the board was told to forget. Ask them why the second page of a finding that found nothing is gone from the file.' }
  ],

  key: {
    virtue: 'Mercy',
    wound: 'Guilt',
    verdict: 'Retain',
    truth: 'In October 1944 Ruth Halloran was the night sister on ward 4 at St. Aedan\u2019s, and the doses were entered in her hand: two quarter-grains of morphine two hours apart, and ninety-five minutes in which Thomas Grady stopped breathing. The attending wrote an instantaneous coronary occlusion on the certificate and had her enter it in the ward register; she would not, because the times and doses on her own page will not let it stand \u2014 a death that takes an hour and a half is not an instant coronary, whatever else it is. The board sat once, found no cause to alter the record, and closed in eleven days; its findings, the second page of its statement, are not in the file. She gave her notice the morning it closed and worked the whole month of it, and the personnel file still records her as leaving without notice. She would not be the second hand on a lie about a death, and the Gradys were never told anything. That is the part she carried.'
  },

  epilogue: {
    Release: 'You signed Release. The phrase resigned without notice comes off her name, the word unreported is struck from the ledger, and the file closes clean: a nurse who would not write a false cause. The certificate still stands in Cook County, and the Gradys are still not told, but that was never a page you were given to sign.',
    Return: 'You returned the file for more evidence. There is no more evidence: the chart, the certificate and the two hands that would not match were all in the folio. Returning her keeps the file open another season, still marked as the woman who walked out, while the board\u2019s second page stays missing and the family stays in the dark. Time is not the thing she was ever short of.',
    Retain: 'You kept the file, as the refusal deserves. You wrote MERCY across the top and GUILT under it in a hand that is not hers, because both are true and only one of them is a virtue. The certificate still lies on the record; the family still does not know; you have not finished her and you have not pretended to. Some files are kept precisely because finishing them would be the same lie she would not sign.'
  },

  foreshadow: 'The margin note in this file is in a hand that is not the registrar\u2019s, and there is a small tick beside it in a hand I have met on other files. Somebody read this case before I did and left one line where I would be sure to find it.'
};
