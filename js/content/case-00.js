// case-00 — THE REFERENCE CASE. Tutorial, difficulty 1.
// Every other case file is written to this shape. Copy it, do not "improve" it.

export default {
  id: 'case-00',
  order: 0,
  title: 'The Ledger of Small Debts',
  subtitle: 'File 001-A · Closed 1951',
  difficulty: 1,
  era: '1911\u20131951',
  slots: ['1911', '1919', '1927', '1935', '1943', '1951'],

  dossier: {
    name: 'Marguerite Voss',
    alias: 'M. Klein, Mrs August Klein',
    age: '61 at entry',
    occupation: 'Baker, later cook',
    place: '6 rue des Tanneurs, then Marseille',
    cause: 'Pneumonia, unattended',
    entry: '14 March 1951',
    registrar: 'P. Halden, junior'
  },

  intake: 'The file arrived in a sack with three others. Her brother signed every form, and his hand is steady on all of them. The registrar before me wrote a single word at the top and drew a line under it: DESERTER. I have filed hundreds of deserters. They are usually men.',

  fragments: [
    {
      id: 'c00-f1', kind: 'form', label: 'Register of marriages, 1911',
      text: 'Voss, Marguerite, baker\u2019s daughter, 21, of 6 rue des Tanneurs, married to Klein, August, cooper. The officiating clerk has written in the margin: bride cannot write; signed with a cross.',
      anchor: '1911'
    },
    {
      id: 'c00-f2', kind: 'receipt', label: 'Rent, paid in full',
      text: 'Received of M. Voss, for the premises at 6 rue des Tanneurs, four terms, in full. Signed in a fine upright hand: M. Voss.',
      anchor: '1919',
      note: 'The clerk of 1911 said she could not write. Somebody taught her.'
    },
    {
      id: 'c00-f3', kind: 'form', label: 'Transfer of deed',
      text: 'The bakery at 6 rue des Tanneurs passes from M. Voss to E. Voss, her brother, for the consideration of one franc. Both parties present.',
      anchor: '1919'
    },
    {
      id: 'c00-f4', kind: 'transcript', label: 'Deposition of a neighbour',
      text: 'Q. When did she leave? A. Autumn. The year the bakery went to the boy. She walked out and never wrote to him again, not once, and him only nineteen.',
      anchor: '1919',
      note: 'Depositions are memory wearing a uniform.'
    },
    {
      id: 'c00-f5', kind: 'receipt', label: 'Postal order stubs, bound with string',
      text: 'Six stubs, in her hand: 1927, 1931, 1935, 1939, 1941, 1943. Each payable to E. Voss, 6 rue des Tanneurs. Each for the same sum.',
      anchor: '1935'
    },
    {
      id: 'c00-f6', kind: 'form', label: 'Death certificate, Marseille',
      text: 'Voss, Marguerite. Cook, H\u00f4tel Beau-S\u00e9jour. Died of pneumonia in the charity ward. No next of kin present. Buried at municipal expense.',
      anchor: '1943'
    },
    {
      id: 'c00-f7', kind: 'letter', label: 'Letter in her hand, 1951',
      text: 'Emil \u2014 I am well. Keep the boy in school another year and I will send more. Do not write back, the address changes. \u2014 Mag.',
      anchor: '1951',
      note: 'Postmarked eight years after she died.'
    }
  ],

  contradictions: [
    { a: 'c00-f4', b: 'c00-f5', reason: 'The neighbour swears she never wrote to him; six stubs in her own hand say she sent money to his door for sixteen years.' },
    { a: 'c00-f6', b: 'c00-f7', reason: 'She died in 1943 and cannot have written a letter in 1951.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'c00-f5', prompt: 'Why money, and never a letter?', answer: 'A letter argues. Money does not ask to be forgiven. He could take the money and keep on telling them I walked out.' },
    { id: 'q2', cost: 2, requires: 'c00-f7', prompt: 'Is that your hand?', answer: 'I have been dead nine years. Whoever wrote that learned my letters and my sums, and learned them well. Ask who needed me to still be alive.' },
    { id: 'q3', cost: 2, requires: 'c00-f4', prompt: 'The neighbour says you never wrote to the boy.', answer: 'She is not lying. She is repeating him. He has said it so long that the street believes it, and the street is where the registrar listened.' }
  ],

  key: {
    virtue: 'Devotion',
    wound: 'Abandonment',
    verdict: 'Release',
    truth: 'In 1919 the bakery\u2019s debts would have taken the family name with them. Marguerite signed the deed to her brother for one franc so the name would survive, taught herself to read and write, and went south to cook in a hotel kitchen. For twenty-four years she sent money home in her own hand and demanded nothing. Her brother told the street she had walked out \u2014 a cheaper story than the true one. When she died in 1943 the payments stopped, and so he began writing her letters himself. The file says deserter because the only witness the registrar bothered to interview was the man who took her shop.'
  },

  epilogue: {
    Release: 'You filed her as a woman who kept a promise nobody asked her to keep. The stamp is Release: the record is closed and the name comes off the register of deserters. Emil Voss is not mentioned in the file again, which is its own kind of verdict.',
    Return: 'You sent the file back for more evidence. There is no more evidence. She is in Marseille, in a charity grave, and the man who forged her handwriting is the only witness left alive. Returning the file keeps her on the shelf for another year, still a deserter, still waiting on a stranger.',
    Retain: 'You kept the file. That is allowed. Some archivists cannot sign the name of a woman who gave away a bakery and got called a coward for it, so they keep her on the desk and read her stubs when the light is bad. The Archive does not punish this. It does not pay for it either.'
  },

  foreshadow: 'The registrar before me wrote DESERTER at the top of the file and drew a line under it. The line does not look like the rest of his hand.'
};
