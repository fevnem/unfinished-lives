// case-12 — THE SIGNATURE OF A DEAD SCHOOLMASTER.
// A village school in the Yorkshire dales, 1921\u20131965. Difficulty 4.
// One signature on every return for eight years, and a man under the clay for all of them.

export default {
  id: 'case-12',
  order: 12,
  title: 'The Signature of a Dead Schoolmaster',
  subtitle: 'File 12-K \u00b7 Closed 1965',
  difficulty: 4,
  era: '1921\u20131965',
  slots: ['1921', '1924', '1929', '1936', '1947', '1959', '1965'],

  dossier: {
    name: 'Grace Harker',
    alias: 'G. Harker, \u201cthe schoolmistress of Litton\u201d; no other name in the file',
    age: '34 at entry',
    occupation: 'Schoolmistress, the county school at Litton, upper Wharfedale',
    place: 'Litton, upper Wharfedale; a room at the post office in her last years',
    cause: 'A stroke, at home; the file gives no other cause',
    entry: '3 April 1965',
    registrar: 'H. Pickersgill, county clerk'
  },

  intake: 'She comes to me in a bundle of examination returns, one signature to every page, and the cover carries two hands. The registrar before me has written across the top in his flat official style: RESIGNED \u2014 IRREGULARITIES IN EXAMINATION RETURNS. Beneath it, in a rounder and more careful hand, someone has added: reputation since restored by her successor. Two hands on one cover, and the file is all about whose hand is on the returns. I have read a great many schoolmistresses\u2019 files. They are usually quiet. This one signs itself in a dead man\u2019s name for eight years.',

  fragments: [
    {
      id: 'case-12-f1', kind: 'form', label: 'Burial register, the parish church',
      text: 'Buried: Sedgwick, Arnold, schoolmaster of this parish, aged fifty-one, of the school house. Buried in the spring of the year, set down in the rector\u2019s own hand in the parish register. No stone was paid for; a wooden board marks him and the paint has long gone.',
      anchor: '1921',
      note: 'The schoolmaster whose name stands on every return from 1922 to 1929 was under this board before the first of them was filed.'
    },
    {
      id: 'case-12-f2', kind: 'form', label: 'Examination returns, bound in one file',
      text: 'County examination returns for the village school, bound in one cover: 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929. Eight returns, and at the foot of each the same three words in the same hand: A. Sedgwick, master. The hand is small, upright and learned late \u2014 it does not lean at all; it stands straight up and closes its letters tight.',
      anchor: '1924',
      note: 'The registrar has ruled a line beneath the eight signatures and written: the mistress\u2019s hand throughout.'
    },
    {
      id: 'case-12-f3', kind: 'form', label: 'County examination schedule, Whit week 1929',
      text: 'County examination, Whit week 1929. The fourteen names entered from the village school, with their marks: R.A. 61, M.B. 62, F.B. 60, J.C. 61, A.D. 63, E.D. 60, H.G. 62, M.H. 61, T.H. 60, S.K. 62, F.L. 61, W.L. 63, G.P. 60, A.S. 61. Pass mark, 60. The next child below them in the list, entered privately, is marked 38.',
      anchor: '1929',
      note: 'Fourteen children and not one of them more than three marks clear of the line. A school does not pass like that. A hand does.'
    },
    {
      id: 'case-12-f4', kind: 'photo', label: 'Photograph of a class',
      text: 'A class of children outside a low stone school, the fells rising behind them. Fourteen children, and a woman of about thirty in a dark dress and a brooch, one hand resting on the shoulder of the smallest. On the back, in pencil: \u201cLitton, the standard class, 1929,\u201d and beneath it fourteen initials.',
      anchor: '1929',
      note: 'The same fourteen the county passed by a hair. She is in the photograph. She is nowhere in the returns.'
    },
    {
      id: 'case-12-f5', kind: 'letter', label: 'Her letter to a former pupil',
      text: 'A letter to a former pupil, in her own hand \u2014 which is not the hand of the returns at all: large, hurried, looping to the right and running a little downhill across the page. \u201cM.H. \u2014 I hear you are for the training college. They will not ask you to write like a schoolmaster, only to write true. Keep the fells in your letters. Your old teacher, G. Harker.\u201d',
      anchor: '1936',
      note: 'This is her hand. Set it beside the eight signatures and hold them together against the light.'
    },
    {
      id: 'case-12-f6', kind: 'transcript', label: 'Inspectors\u2019 report, visit of 1929',
      text: 'Report of the district inspectors, visit of 1929. \u201cThe top class was examined in reading, writing and number. The standard of work is below the county requirement in every subject; on the day of inspection it would not have carried a single child through the examination. The returns of this school for the past eight years are irregular and are reserved for inquiry. The schoolmistress declines to sign a statement.\u201d',
      anchor: '1929',
      note: 'They tested the real children and could find nobody. The returns had already passed fourteen.'
    },
    {
      id: 'case-12-f7', kind: 'form', label: 'Report to the county, 1947',
      text: 'Report to the county, 1947: \u201cOn the resignation of the schoolmistress the school was left with a damaged name. Under the present headmaster the returns have been regularised and the school\u2019s reputation restored. No further inquiry is recommended.\u201d Signed at the foot: L. Snaith, headmaster.',
      anchor: '1947',
      note: '\u201cRestored.\u201d Hold that word up to the light and see what is standing behind it.'
    },
    {
      id: 'case-12-f8', kind: 'letter', label: 'Letter from the later headmaster',
      text: 'A letter from L. Snaith, headmaster, to G. Harker at the post office, 1959. \u201cMiss Harker \u2014 the returns still go up in his name and they always will while I have the school. I keep his old hand on every one of them, as you did. Whatever they said you did, I have been doing it twenty years now and I will not stop. Do not think I am sorry. I am not. The children are. L.S.\u201d',
      anchor: '1959',
      note: '\u201cAs you did.\u201d He is not restoring the school. He is keeping her arrangement, and calling it a reputation.'
    },
    {
      id: 'case-12-f9', kind: 'margin', label: 'Margin note, in an earlier hand',
      text: 'Eight returns, one signature, and a master under the clay for every one of the eight. Nobody signs a return from the churchyard. Look at the hand and not at the name. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1924'
    },
    {
      id: 'case-12-f10', kind: 'form', label: 'The last return, 1965',
      text: 'A single county return, 1965, the school\u2019s last before it closed. At the foot, in the same small upright hand that has not changed in forty-three years: A. Sedgwick, master. The schoolmaster of Litton has been dead since the spring of 1921, and he is still signing.',
      anchor: '1965',
      note: 'Forty-three years after the burial, and the hand is steady. Whoever now holds the pen, it is not the man.'
    }
  ],

  contradictions: [
    { a: 'case-12-f1', b: 'case-12-f2', reason: 'The parish buried Arnold Sedgwick in the spring of 1921; the returns from 1922 to 1929 all carry his signature. A man does not sign eight years of examination returns from under a churchyard board.' },
    { a: 'case-12-f2', b: 'case-12-f5', reason: 'The registrar has ruled the eight signatures to be the schoolmistress\u2019s hand throughout; her own surviving letters run large and loop to the right, and the signatures stand small and upright. The returns cannot be in her hand and also not in her hand.' },
    { a: 'case-12-f3', b: 'case-12-f6', reason: 'The county schedule passes all fourteen children in 1929 by one to three marks; the inspectors of that same year, testing the same class, found it would not have carried a single child through. The same fourteen cannot have passed and failed the one examination.' },
    { a: 'case-12-f7', b: 'case-12-f8', reason: 'The 1947 report has the headmaster regularising the returns and restoring the school\u2019s reputation; his own letter of 1959 says he has been filing the same returns in a dead man\u2019s hand for twenty years and will not stop. A reputation cannot be both restored and still being forged.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-12-f2', prompt: 'Whose hand is on the returns?', answer: 'Mine, and his name above it. I learned his letters off his own old books \u2014 small and upright, the way a schoolmaster writes, nothing that runs or loops. The county wanted a master\u2019s hand at the foot of a return. It did not want to know that there was no master left to write one.' },
    { id: 'q2', cost: 2, requires: 'case-12-f3', prompt: 'Why do the fourteen marks sit so close to the line?', answer: 'Because a child one mark over passes, and a child one mark under goes into the mill at eleven to learn the machines instead of the letters. I could not make them scholars in a term. I could only carry them across by the width of an eyelash and no further, or the county would have counted how far. Fourteen children within three marks of the line is not a school. It is a hand.' },
    { id: 'q3', cost: 2, requires: 'case-12-f6', prompt: 'The inspectors tested the real children. What did you say to them?', answer: 'Nothing at all. They asked me to sign a statement and I would not set my name to it. What could I say \u2014 that the children could not pass and the returns said they had? They had already decided which of those two things was the crime. So I let them call it irregularities, and I went quietly, and I have never been sorry about the children, only about the pen.' },
    { id: 'q4', cost: 1, requires: 'case-12-f8', prompt: 'Why did the next master keep it up?', answer: 'Because by the time he came the whole school stood on those passes. Every child who left this dale in twenty years left on a return that was not true, and to stop was to unmake all of them at once. He did not restore the school. He kept the lie standing, and the county wrote down the standing of it as a reputation.' }
  ],

  key: {
    virtue: 'Cunning',
    wound: 'Shame',
    verdict: 'Retain',
    truth: 'Grace Harker taught at the village school at Litton through the 1920s, and by the county examination the school\u2019s real results would not have carried a single child over the pass mark. Arnold Sedgwick, the schoolmaster whose name the county expected at the foot of every return, died in the spring of 1921, and she did not report it. She took his old books instead, learned his small upright hand, and signed his name to eight years of examination returns, lifting fourteen children just over the line so they would pass out of the dale instead of into the mill. The 1929 inspectors tested the real children, found the discrepancy and called it irregularities; she would not sign a statement and resigned. Her successor, L. Snaith, found the school\u2019s whole name resting on those forged passes and kept filing the returns in a dead man\u2019s hand for twenty years, which the county recorded as a reputation restored. She was neither saint nor fraud: a teacher who chose the children over the truth of the record, and signed for it in a hand that was never her own.'
  },

  epilogue: {
    Release: 'You released her as a woman who forged a dead schoolmaster\u2019s name to carry fourteen children over a line the school could not carry them over, and the department closes a file it has held since 1929. The name comes off the register of irregularities. Nobody writes down to the county; nobody tells the fourteen, who are grey now and farming and counting themselves lucky. You have decided that mercy done with a pen is still mercy, and you have closed her.',
    Return: 'You sent the file back for a handwriting opinion on the eight signatures, and the opinion will take a year and prove nothing the paper does not already show. Meanwhile the county\u2019s register still calls the school\u2019s reputation restored, and L. Snaith\u2019s last return, in a dead man\u2019s hand, sits filed and true as far as the county knows. Returning her keeps her on the desk, neither saint nor fraud, still waiting on a reader who will not flinch.',
    Retain: 'You kept the file \u2014 not because you could not read it, but because the truth inside it has nowhere honest to go. To release her is to leave the school\u2019s good name standing on a forger\u2019s marks; to return it is to put fourteen now-grown children on trial for passing on paper that is not true. She never wanted the record corrected. She wanted the children through. So you marked the falsehoods, and then you did the thing she did: you held the truth, and you told it to nobody, and you lifted the next file.'
  },

  foreshadow: 'The margin note is not the registrar\u2019s hand. It is small, upright, learned late and practised hard, and I have met it before \u2014 in the margin of a file from a ferry port this registrar never kept. Whoever writes these notes is not filing. They are reading, and they have been reading longer than I have.'
};
