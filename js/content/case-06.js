// case-06 — THE TECHNICIAN WITH NO FILE. Tashkent, 1947-1980. Difficulty 4.
// Frozen shape: see case-00.js. One author, one file, nothing else touched.

export default {
  id: 'case-06',
  order: 6,
  title: 'The Technician With No File',
  subtitle: 'File 061-T \u00b7 No register entry',
  difficulty: 4,
  era: '1947\u20131980',
  slots: ['1947', '1953', '1961', '1966', '1971', '1978', '1980', 'unrecorded'],

  dossier: {
    name: 'Rustam Ibragimovich Akhmedov',
    alias: 'the technician; R.A.',
    age: '34 at entry',
    occupation: 'Radio technician, later unnamed caretaker of the transmitter',
    place: 'Tashkent broadcasting centre, Uzbek SSR',
    cause: 'Not recorded',
    entry: 'Not entered; the file was opened on inquiry, 1980',
    registrar: 'No registrar of record'
  },

  intake: 'The department\u2019s answer to every inquiry about this man is the same sentence, typed from a stencil: the record was cancelled and no such person was ever employed at the Tashkent transmitter. I have read that sentence eleven times. A stencil does not wear smooth from truth. It wears smooth from use.',

  fragments: [
    {
      id: 'case-06-f1', kind: 'object', label: 'Transmitter log, hardbound',
      text: 'One line per shift, kept in the hand of whoever was on duty. The names beside the entries change with the years \u2014 Gromov, Akhmedov, then a long series of signatures, none of them repeated. The writing under them does not change: the same leftward slant, the same closed numeral 4, the same flat cross on the 7. The hand is the same on the first page, in 1947, and on the last, in 1980.',
      anchor: '1947',
      note: 'Signatures can be supplied. A hand is harder to borrow.'
    },
    {
      id: 'case-06-f2', kind: 'form', label: 'Personnel card, station duplicate',
      text: 'A personnel card, issued 1953. The line for the name has been cut out with a razor, neatly, taking the corner of the photograph with it. What remains is legible enough: year of birth, blood group, the post \u2014 senior technician \u2014 and one thumbprint, rolled in ink, quite clear.',
      anchor: '1953',
      note: 'The register copy is missing. This one turned up in the station\u2019s own drawer, under the spare valves.'
    },
    {
      id: 'case-06-f3', kind: 'form', label: 'Commendation after the earthquake',
      text: 'Tashkent, April 1966. For keeping the regional transmitter on the air without interruption for thirty-one hours after the earthquake, a commendation is entered for the senior technician. The field for the name has been left blank. The field for the signature has been signed firmly, and signed well.',
      anchor: '1966',
      note: 'Drawn up late. By the time the form was made, there was no name left to enter.'
    },
    {
      id: 'case-06-f4', kind: 'form', label: 'Station staff list, reorganisation',
      text: 'Fifty-one names, typed, then corrected in ink. At No. 12 the name Gromov, S. S. is ruled through with a single stroke, unhurried, not typed over. Above the line, in a smaller hand, someone has written: Akhmedov, R. I. The post of senior technician is entered once. It now holds a different man.',
      anchor: '1971',
      note: 'One stroke. Whoever drew it did not intend it as a mistake.'
    },
    {
      id: 'case-06-f5', kind: 'letter', label: 'Letter to his daughter, sent to Kuibyshev',
      text: 'Tamara \u2014 they have taken my name off the book again and it does not matter, I am still at the transmitter, still nobody, and nobody is a fine thing to be. Bring the boy in the summer. I will be where I always am, at the second switch, and I will not have moved. \u2014 Papa',
      anchor: '1971',
      note: 'He is cheerful. Men are cheerful once a decision is behind them.'
    },
    {
      id: 'case-06-f6', kind: 'receipt', label: 'Requisition slips, bound with wire',
      text: 'Forty-one slips for transformer oil, valves and copper wire, 1953 to 1978. Each is headed with the name Gromov, S. S.; on every slip after 1971 that name is ruled through with a single stroke. In the bottom corner of each, in the same small hand, the same two initials: R.A.',
      anchor: '1978',
      note: 'A struck name requisitioned a transmitter for twenty-five years. Somebody kept signing for it.'
    },
    {
      id: 'case-06-f7', kind: 'photo', label: 'Photograph, station steps',
      text: 'Six men on the steps of the broadcasting centre, 1978. Five are in uniform and their names are written on the back. The sixth stands at the left edge, apart from the rest, and has been shaded out \u2014 not cut, not torn, shaded from the neck down in pencil, carefully, so that the paper is whole and the man is not.',
      anchor: '1978',
      note: 'Five names on the back. Six men on the steps.'
    },
    {
      id: 'case-06-f8', kind: 'transcript', label: 'Deposition of the station director',
      text: 'Q. Was there a technician named Akhmedov at this station? A. There was no such post and no such man. The record was cancelled at the reorganisation. Q. Then who kept the transmitter running for the last nine years? A. The technician. Q. His name? A. He had no name. We called him the technician.',
      anchor: '1980',
      note: 'The director is not lying. He is reading the register aloud.'
    },
    {
      id: 'case-06-f9', kind: 'margin', label: 'Margin note, previous Archivist',
      text: 'You will not find him by his name; his name is the thing that was taken. Follow the hand. Every page that ever needed a man carries the same one. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: 'unrecorded'
    },
    {
      id: 'case-06-f10', kind: 'form', label: 'Reply to inquiry, department file',
      text: 'Inquiry 61-T. The register holds no personnel file for any technician of this name, and no record of such a person having been employed at the Tashkent transmitter at any date. The record is cancelled. No further inquiry will be answered.',
      anchor: 'unrecorded',
      note: 'The same sentence, from the same stencil, eleven times in eleven years.'
    }
  ],

  contradictions: [
    { a: 'case-06-f10', b: 'case-06-f6', reason: 'The department says no such person was ever employed; forty-one requisitions, in one unbroken hand and one set of initials, describe a transmitter that ran for twenty-five years on somebody\u2019s signature.' },
    { a: 'case-06-f4', b: 'case-06-f1', reason: 'The staff list gives the post to a succession of named men, one after another in ink; the transmitter log is written in a single hand from 1947 to 1980 and changes only the name it signs.' },
    { a: 'case-06-f5', b: 'case-06-f8', reason: 'The letter says he is still at the transmitter and has not moved; the station\u2019s own deposition says no such man was ever on the staff of that station.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-06-f1', prompt: 'The log is one hand from the first page to the last. Whose hand?', answer: 'Mine. The names were the station\u2019s \u2014 Gromov\u2019s for a while, then mine, then the station stopped bothering. The hand was always the same, because there was only ever one man standing at the switch.' },
    { id: 'q2', cost: 2, requires: 'case-06-f6', prompt: 'The name on these slips was struck off the list in 1971. Why do the slips go on?', answer: 'Because the transmitter did not stop needing valves when the department stopped needing me. The slips carried Gromov\u2019s name because the paper had always carried it. My initials were in the corner. Nobody ever read the corner.' },
    { id: 'q3', cost: 2, requires: 'case-06-f4', prompt: 'Whose name did you write into the gap on the staff list?', answer: 'Gromov\u2019s was to come off \u2014 for the transfer, the one they do not come back from. I put mine in the space. Then I took my file out of the register, so the order would have nothing to pick up. A man without a file cannot be moved anywhere.' },
    { id: 'q4', cost: 1, requires: 'case-06-f5', prompt: 'Why did you want to be nobody?', answer: 'Because nobody is the one thing this state cannot give an order to. A man it does not acknowledge cannot be reassigned, summoned, or sent. It cannot even let him go. For nine years, nobody has been my only freedom.' }
  ],

  key: {
    virtue: 'Defiance',
    wound: 'Silence',
    verdict: 'Retain',
    truth: 'For twenty-four years Rustam Akhmedov kept the Tashkent transmitter running under Gromov\u2019s name. In 1971, when the reorganisation meant to move Gromov out, Akhmedov wrote his own name into the gap on the staff list \u2014 one stroke, unhurried \u2014 and then took his personnel file out of the register so that the order would have nothing to act on. A man the state does not acknowledge cannot be reassigned, summoned, or sent anywhere; he had made himself nameless and immovable in the same motion. He stayed at the transmitter nine more years, unpaid, signing nothing, requisitioning valves and wire under the struck name with his own initials in the corner, keeping the log in the one hand the station never managed to change. The department answered every inquiry with a stencil: the record was cancelled and no such person was ever employed. Both halves of that sentence are true. Neither of them is the truth.'
  },

  epilogue: {
    Release: 'You signed Release, which closes the record and files him as complete. There is no crime in this file and no debt against it; the department is left holding a stencil with nothing left to print. Akhmedov is named once, in the register, in a name he spent nine years trying to lose. Somewhere the transmitter is still warm. The file says he has gone on \u2014 and he had already gone on without it, for nine years, and never needed your permission.',
    Return: 'You sent the file back for more evidence, and there is none to send for: the man removed himself from the evidence on purpose. He stays open, the technician with no file, and the department answers one more inquiry with the same sentence it has always answered with. Returning him is the kindest way of admitting you could not decide. He waited nine years for a stranger to read the log. He can wait a little longer.',
    Retain: 'You kept the file, which is what he was waiting for and could not ask for. You wrote DEFIANCE across the top and under it SILENCE, and you left the field for the name empty, because the emptiness is the document. The file stays on your desk, unclosed, exactly as he kept himself: unrecorded, unsummoned, still at the second switch. Some lives are not the Archive\u2019s to finish. This one is not finished refusing.'
  },

  foreshadow: 'The photograph has one figure shaded out in pencil, from the neck down, so that the paper stays whole and the man does not. It is done too well to be anybody\u2019s first.'
};
