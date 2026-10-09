// case-04 — "Eleven Women, One Tremor". Detroit, 1923\u20131961. Difficulty 3.
// Written to the shape of case-00. Do not "improve" the shape.

export default {
  id: 'case-04',
  order: 4,
  title: 'Eleven Women, One Tremor',
  subtitle: 'File 344-D \u00b7 Closed 1961',
  difficulty: 3,
  era: '1923\u20131961',
  slots: ['1923', '1929', '1934', '1938', '1944', '1952', '1961'],

  dossier: {
    name: 'Halina Kowalczyk',
    alias: 'H. Kowalczyk; "Halina" on the wage slips; Mrs Frank Kowalczyk',
    age: '63 at entry',
    occupation: 'Trim-line hand, Kessler Motors; later laundress',
    place: 'Trim line, Kessler plant, Detroit',
    cause: 'Pneumonia, at home. The death record calls the tremor nervous.',
    entry: '9 June 1961',
    registrar: 'T. Ostrander, senior'
  },

  intake: 'The file came up from the Detroit office in one envelope, and the top page says DISMISSED \u2014 NERVOUS COMPLAINT, MALINGERING in the registrar\u2019s capitals. She was dismissed twice, which the file treats as proof. What it does not treat as anything is the barrel at the end of her bench, which has no name on it, or the eleven wage slips pinned behind the form, which have. I have filed eleven women before. This is the first time they arrived in one envelope.',

  fragments: [
    {
      id: 'case-04-f1', kind: 'photo', label: 'Photograph of the trim line',
      text: 'A row of benches under a high window. Nine women sit shoulder to shoulder, each with a length of door trim in both hands. Nobody in the row is wearing gloves. On the back, in pencil: trim line, our row, 1923. The photographer stood behind the foreman, and nobody in the row is looking at the camera.',
      anchor: '1923',
      note: 'Nine at the bench in 1923. Two more were taken on before the year was out.'
    },
    {
      id: 'case-04-f2', kind: 'form', label: 'Dismissal form, first',
      text: 'Employee: Kowalczyk, H. Department: trim line. Grounds: dismissed \u2014 nervous complaint, malingering. The examining physician finds no injury and no disease. Recommend the employee not be re-engaged. Signed, plant medical officer.',
      anchor: '1929',
      note: 'She was taken on again the following spring. They needed hands.'
    },
    {
      id: 'case-04-f3', kind: 'form', label: 'Internal memorandum, plant medical',
      text: 'Memorandum. Plant medical department. Subject: trim line complaints. The tremor reported by certain employees is nervous in origin. The employees affected are of a class given to complaint. There is no process on the trim line capable of producing this symptom and no cause in the plant. Complaints of this nature need not be forwarded. Signed, plant medical officer.',
      anchor: '1929',
      note: 'Dated the same month as the first dismissal. The same hand signed both.',
      unlocks: 'q4'
    },
    {
      id: 'case-04-f4', kind: 'letter', label: 'Letter to the company doctor',
      text: 'Dear Doctor \u2014 since the spring of 1929 my right hand shakes and does not stop, and four of us on the trim line have it. I have asked four times what is in the barrel at the end of the bench. The men fill it from drums and call it the wash. Your plant ordered the drums from the Drummond house in March 1929; I have seen the order in the foreman\u2019s book. Please write down what it is, so that there is a record.',
      anchor: '1934',
      note: 'The first of nine years of letters. He answered this one.',
      unlocks: 'q1'
    },
    {
      id: 'case-04-f5', kind: 'receipt', label: 'Purchasing ledger, page 14',
      text: 'Column: solvent, unclassified. Supplier: Drummond, Detroit. March 1929: two barrels, first order. 1930 to date: one barrel, monthly, no month missed. Grade or specification: none recorded. Price per barrel: four dollars ten, unchanged for ten years. The clerk\u2019s initials stand against every line on this page and against no other page in the book.',
      anchor: '1938',
      note: 'Nothing before March 1929. Whatever the wash is, the plant began buying it the month she complained.'
    },
    {
      id: 'case-04-f6', kind: 'form', label: 'Dismissal form, second',
      text: 'Employee: Kowalczyk, H. Re-engaged 1930. Grounds: dismissed \u2014 nervous complaint, malingering. The examining physician finds no injury and no disease. Recommend the employee not be re-engaged. Signed, plant medical officer. Same form, same grounds, fifteen years after the first.',
      anchor: '1944',
      note: 'The file reads the second dismissal as proof. It is the same sentence, copied.',
      unlocks: 'q3'
    },
    {
      id: 'case-04-f7', kind: 'receipt', label: 'Wage slips, eleven separations',
      text: 'Eleven slips bound with a rubber band. Nowak, Anna; Brennan, Mary; Ostrowska, Sophia; Delgado, Rosa; Novak, Katherine; Brzezinska, Louise; Bannister, Pearl; Matuszak, Josephine; Dombrowska, Eleanor; Wolski, Theresa; Sadowski, Vera. Each stamped MEDICAL \u2014 SEPARATED. Every name is from the trim line. Every separation falls inside eight years. All eleven are women. They came from the payroll office in one envelope and were filed one to a page.',
      anchor: '1952',
      note: 'Eleven hands that shook, kept in eleven separate files, none of which mentions another.',
      unlocks: 'q2'
    },
    {
      id: 'case-04-f8', kind: 'letter', label: 'Letter to the district health officer',
      text: 'Sir \u2014 I am writing to you because the company doctor has not answered me since 1938. I worked the trim line at the Kessler plant from 1923 until they dismissed me in 1944. My right hand shakes. Eleven women out of my row have been let go for their hands. The barrel we filled from has no label on it and never had. If you cannot act on this, please write down that I asked, and the date.',
      anchor: '1952',
      unlocks: 'q5'
    },
    {
      id: 'case-04-f9', kind: 'margin', label: 'Margin note, page 3',
      text: 'She is not nervous and she is not lying. Count the hands and not the forms: eleven women, one barrel, no name on it. She wrote until somebody outside the plant wrote back, which is the whole of what a person can do with a pen. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1961'
    }
  ],

  contradictions: [
    { a: 'case-04-f2', b: 'case-04-f7', reason: 'The first dismissal calls her tremor a nervous complaint and finds no disease; the wage slips show eleven women from the same trim line separated on medical grounds inside eight years of it.' },
    { a: 'case-04-f5', b: 'case-04-f3', reason: 'The medical officer wrote that no process on the trim line could produce the tremor; the purchasing ledger buys the unlabelled solvent by the barrel, monthly, from the month she first complained.' },
    { a: 'case-04-f4', b: 'case-04-f6', reason: 'In 1934 she names the wash and the plant\u2019s own March 1929 order for it; the 1944 form dismisses her again for a nervous complaint with no disease found. Both cannot be the plant\u2019s honest finding.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-04-f4', prompt: 'You name the wash. What was it?', answer: 'I never knew what it was. That was the whole of it \u2014 the men called it the wash and the drums had no name on them. I wrote down the name they used and the date the plant bought it, because a thing with no name on it is nobody\u2019s fault, and that is how they keep it.' },
    { id: 'q2', cost: 2, requires: 'case-04-f7', prompt: 'Eleven women left the same row. Did you know them?', answer: 'I knew all eleven. Anna sat at the next bench. We did not talk about our hands, because talking about it made the foreman look, and a foreman looking is a dismissal. That is why the file has me in it alone.' },
    { id: 'q3', cost: 2, requires: 'case-04-f6', prompt: 'They dismissed you twice with the same words.', answer: 'The same words, copied. The second time I brought them nine years of letters to their own doctor, and they read the file and told me the file said nervous. I was not arguing with a doctor by then. I was arguing with paper, and paper does not tire.' },
    { id: 'q4', cost: 1, requires: 'case-04-f3', prompt: 'The memorandum says no process on the line could produce it.', answer: 'It says no process. The barrel is not a process, it is a supply, and a supply is nobody\u2019s fault. He signed that in 1929 and the plant bought the wash every month after. They kept the sentence and I kept the letters.' },
    { id: 'q5', cost: 1, requires: 'case-04-f8', prompt: 'You wrote to the health officer when you were sixty-three.', answer: 'The company doctor stopped answering me in 1938. After that there was only one place left to send a letter that was not the plant. I asked him to write down the date I asked, that is all. Somebody has to have the date.' }
  ],

  key: {
    virtue: 'Curiosity',
    wound: 'Shame',
    verdict: 'Release',
    truth: 'Halina Kowalczyk worked the trim line at the Kessler plant in Detroit from 1923. The barrel at the end of her bench held an unlabelled solvent the men called the wash; the women filled from it bare-handed all day, and by the spring of 1929 her right hand shook and would not stop. She wrote to the plant\u2019s own doctor for nine years, naming the wash and the March 1929 order for it, then to the district health officer, and kept a copy of every letter. The plant dismissed her twice on the same form, nervous complaint and malingering, while its medical officer wrote that no process on the line could produce the symptom \u2014 though the ledger bought the solvent monthly from the month she complained, and eleven women from her row left on medical grounds inside eight years. The file reads two dismissals as proof of a nervous woman; they are one sentence copied, and the tremor was never hers alone.'
  },

  epilogue: {
    Release: 'You sign Release. The word malingering comes off the top page and the cause goes in where the plant\u2019s medical officer left the line blank: an unlabelled solvent, one trim line, eleven women. She is filed as a woman who asked the same question for thirty years and was answered with her own dismissal form. The record closes. The plant is a parking lot now, and the barrels were never labelled.',
    Return: 'You return the file for more evidence. There is no more evidence to find: she kept a copy of every letter, and the copies are the file. Returning it keeps her on the shelf another year, still nervous, still malingering, still waiting for the plant to write down what was in the barrel. The drums were never labelled. Nobody can label them now.',
    Retain: 'You keep the file. That is allowed. Some archivists cannot close a life that was answered with the same form twice, so they keep it on the desk and read the nine years of letters to a doctor who answered once. The Archive does not mind. The Archive keeps its own ledger, and there is ink against her name either way.'
  },

  foreshadow: 'Under the first dismissal someone has drawn a straight line, in a hand that is not the registrar\u2019s. It is the same weight as a line I have seen under another man\u2019s word, in a file that is not this one.'
};
