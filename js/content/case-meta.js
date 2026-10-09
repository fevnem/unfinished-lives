// case-meta — THE FINALE. order 99. Owned by the manager; hands do not touch this file.
// The finale must deliver the meta-story that every case's `foreshadow` has been hinting at:
// a registrar erased herself from the Archive, and her unfinished file is on your desk.

export default {
  id: 'case-meta',
  order: 99,
  title: 'The Forty-Fourth Archivist',
  subtitle: 'File 000 · never closed',
  difficulty: 5,
  era: 'Unrecorded',
  slots: ['1901', '1919', '1946', '1974', '1999', 'Never'],

  dossier: {
    name: 'Not recorded',
    alias: 'Archivist #44',
    age: 'not recorded',
    occupation: 'Registrar, Department of Unfinished Lives',
    place: 'This desk',
    cause: 'Unfinished',
    entry: 'not recorded',
    registrar: 'her own hand, and then nobody\u2019s'
  },

  intake: 'There is no intake paragraph. The file was already open when you sat down. The first page is a form in a hand you have been reading in the margins since file 001 \u2014 steady, upright, slightly too regular, the hand of somebody who taught herself. Every page after it is blank. The registrar has taken the truth out of her own record and left the paper.',

  fragments: [
    {
      id: 'cmeta-f1', kind: 'form', label: 'Personnel form, department',
      text: 'Post: Registrar. Term: indefinite. Signature of the officer: (a line, drawn very straight, in the hand from the margins). Signature of the department: the same line twice.',
      anchor: '1901',
      note: 'One hand signed both sides of this form. Nobody signs for themselves.'
    },
    {
      id: 'cmeta-f2', kind: 'margin', label: 'Margin note, file 001-A',
      text: 'He is not lying, he is repeating. The street is where the registrar listened. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1919'
    },
    {
      id: 'cmeta-f3', kind: 'receipt', label: 'Requistion: one measure of ink',
      text: 'One. And one. And one. Seventeen requisitions in one term, each for a single measure, each signed for by the registrar, each stamped approved by nobody.',
      anchor: '1946',
      note: 'Ink is meant to be spent on the living. She was spending it on something.'
    },
    {
      id: 'cmeta-f4', kind: 'transcript', label: 'Interview, department, undated',
      text: 'Q. Whose file is on your desk? A. Mine. Q. Then file it. A. Not while I am still in it.',
      anchor: '1974'
    },
    {
      id: 'cmeta-f5', kind: 'photo', label: 'Photograph of the desk',
      text: 'The desk. Two hands on the blotter, one of them holding a pen. The other one is already shaded out \u2014 not torn, shaded, carefully, as if the archivist were practising for something.',
      anchor: '1999'
    },
    {
      id: 'cmeta-f6', kind: 'object', label: 'Numbered brass tag',
      text: 'A brass tag, 44, on a short chain. Underneath it, in the drawer, an identical tag stamped 45. It has your number on it and it has been there a long time.',
      anchor: 'Never',
      note: 'The tag is warm. Nothing in this room is warm.'
    },
    {
      id: 'cmeta-f7', kind: 'letter', label: 'Unsigned instruction to her successor',
      text: 'You will find my file on the desk on your first morning. Do not read the intake paragraph, there is not one. File the pages, mark what cannot both be true, and then seal a verdict on me. Anything you sign, I will have to live with. That is the whole of it, and it is the only fair trial I could give myself.',
      anchor: 'Never'
    },
    {
      id: 'cmeta-f8', kind: 'form', label: 'Blank verdict slip, pre-signed',
      text: 'A verdict slip with all three boxes already ticked, and the fields for virtue and wound left empty for you. The registrar has ticked Release, Return and Retain in the same steady hand.',
      anchor: 'Never',
      note: 'She is not asking to be released. She is asking not to be the one who signs.'
    }
  ],

  contradictions: [
    { a: 'cmeta-f1', b: 'cmeta-f4', reason: 'The personnel form says the registrar was appointed indefinitely; she says she is still inside her own file, which cannot be closed. One of the two is a promise she broke.' },
    { a: 'cmeta-f6', b: 'cmeta-f8', reason: 'A tag numbered 45 was waiting in the drawer \u2014 and a verdict slip pre-ticked in her hand. She wrote the terms of her own replacement before you ever arrived.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'cmeta-f2', prompt: 'Why did you write in the margins of other people\u2019s files?', answer: 'Because nobody writes in yours. I read four hundred lives and only ever signed the bottom. The margins were the only pages I was allowed to be a person on.' },
    { id: 'q2', cost: 2, requires: 'cmeta-f3', prompt: 'What were you buying with all that ink?', answer: 'Time. A file that is not closed does not move on, and a registrar whose file is still open cannot be reassigned. I was buying myself one more morning, at one measure a morning, for seventeen years.' },
    { id: 'q3', cost: 2, requires: 'cmeta-f7', prompt: 'You could have signed it yourself.', answer: 'I could. But a life signed off by its own hand is not a verdict, it is an excuse. I have read four hundred of those. I did not want to be one.' },
    { id: 'q4', cost: 1, requires: 'cmeta-f6', prompt: 'Was the tag numbered 45 always there?', answer: 'The drawer is stocked in advance. Somebody upstairs has been expecting you for a long time, Archivist. You were issued to this desk. You were not hired to it.' }
  ],

  key: {
    virtue: 'Duty',
    wound: 'Oblivion',
    verdict: 'Retain',
    truth: 'Archivist #44 spent seventeen years closing other people\u2019s lives and never once let her own file be closed, because closing it meant being reassigned \u2014 or worse, being filed. She kept the file open one measure of ink at a time, wrote herself only in other people\u2019s margins, and finally emptied her own record so that whoever took the desk would have to reconstruct her from nothing. She was not hiding a crime. She was hiding that there was no crime: she was an ordinary registrar who did her work well and could not bear the last form. What she did not say, on any page, is that the tag numbered 45 was in the drawer before you arrived. You were made to finish her file. Every margin note you have been reading since file 001 was written to you.',
    // virtue read: the department never disciplined her, which means her work was correct
  },

  epilogue: {
    Release: 'You signed Release in the pre-ticked box and put the tag around your own neck. The file closes. #44 is reassigned, filed, and paid; the department sends up a note that the desk is once again in order. On the first morning of your successor, there is a brass tag in the drawer. It says 46. The margins of the new files are empty, and you find that you have begun, very carefully, to write in them.',
    Return: 'You returned her file for more evidence. There is no more evidence; the pages she emptied are the evidence. She stays open, one measure of ink a morning, on your desk and not on hers, and you sign nothing, and nothing about the Archive changes except that somebody else is doing the waiting now.',
    Retain: 'You kept the file, as she asked. You wrote DUTY across the top in the steady hand she taught herself, and under it you wrote the only true thing the department never records: that a life can be finished and still not be closed. The desk keeps two files now \u2014 #44 and #45 \u2014 and the department does not notice, because departments do not read the margins. On the last page, in a hand that is not hers and not quite yours, somebody has written: thank you for reading me.'
  },

  foreshadow: ''
};
