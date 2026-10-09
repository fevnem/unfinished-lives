// case-22 - "The Disease Without a Name Yet". A Colorado coal camp, 1929-1968. Difficulty 4.
// The file says the camp doctor was revoked for repeated error of diagnosis. He was describing
// a disease the record had no name for, twenty years before it had one.

export default {
  id: 'case-22',
  order: 22,
  title: 'The Disease Without a Name Yet',
  subtitle: 'File 22-D \u00b7 Closed 1968',
  difficulty: 4,
  era: '1929\u20131968',
  slots: ['1929', '1934', '1940', '1946', '1951', '1957', '1968'],

  dossier: {
    name: 'Owen Trask, M.D.',
    alias: 'O. Trask; the camp doctor at No. 9',
    age: '74 at entry',
    occupation: 'Physician and surgeon; camp doctor, later a practice without a licence',
    place: 'Camp No. 9, Bonito valley, Huerfano County, Colorado',
    cause: 'A disease of the lungs; the death record leaves it unnamed and the family\u2019s physician has written only the word dust.',
    entry: '19 November 1968',
    registrar: 'V. Marek, junior'
  },

  intake: 'The file came up from the Colorado shelf in two hands: the state board\u2019s register of licences, and a bundle of the doctor\u2019s own paper his sister would not surrender. Across the top of the first page the board\u2019s clerk has written LICENCE REVOKED \u2014 REPEATED ERROR OF DIAGNOSIS, and beneath it, in smaller letters, correspondence with the company medical board. I have filed hundreds of revoked licences. Most were revoked for drink, or for a hand that shook, or for a fee taken twice. This one was revoked for being early.',

  fragments: [
    {
      id: 'case-22-f1', kind: 'form', label: 'Employment roll, Camp No. 9',
      text: 'Bonito Valley Coal Company, Camp No. 9. Roll of persons employed underground, quarter ending September 1929. Entries give name, occupation, and the year each was first put below ground. Ochoa, Manuel \u2014 loader, first below 1902. Ferro, Giuseppi \u2014 machine man, first below 1903. Kelly, Patrick \u2014 driller, first below 1901. Novotny, Jan \u2014 timberman, first below 1904. Vasquez, Emil \u2014 loader, first below 1902. The roll is countersigned by the camp superintendent, who notes that no man named on it has ever been refused work on account of his chest.',
      anchor: '1929',
      note: 'The company kept the years underground itself. It never expected anyone to add them up.'
    },
    {
      id: 'case-22-f2', kind: 'form', label: 'Case notes, Camp No. 9 infirmary, 1940',
      text: 'Case note, 11 March 1940. Ochoa, Manuel. Loader, thirty-eight years underground. Dull at both bases, cough four years with black sputum, short on the incline. Case note, 19 March 1940. Ferro, Giuseppi. Machine man, thirty-seven years underground. Same chest, same sputum, same breath. Case note, 2 April 1940. Kelly, Patrick. Driller, thirty-nine years underground. Same. The finding is one finding and the cause is one cause: the dust of the seam, fine enough to reach the smallest air passages. There is no bacillus. It is not tuberculosis. Call it the dust until someone finds a better name.',
      anchor: '1940',
      note: 'Eleven notes, all in this shape: occupation first, then the years, then the chest.',
      unlocks: 'q1'
    },
    {
      id: 'case-22-f3', kind: 'transcript', label: 'Minutes, hearing on the complaint of the company medical board',
      text: 'Minutes of the hearing, 14 June 1951. Exhibits received: No. 1, complaint of the company medical board; No. 2, schedule of medical attendance; No. 3, correspondence; No. 4, employment rolls, Camp No. 9; No. 5, memorandum on diagnosis; No. 6, statement of the examining physician; No. 8, order of revocation. The minutes record that no exhibits were offered on behalf of the respondent beyond his own statement. The number seven does not appear in the list.',
      anchor: '1951',
      unlocks: 'q3'
    },
    {
      id: 'case-22-f4', kind: 'letter', label: 'Letter to the state board of medical examiners',
      text: 'To the State Board of Medical Examiners. I ask the board to read eleven case notes before it acts on any complaint. Each note gives a man\u2019s occupation, the years he has spent underground, and the condition of his chest, and each note ends the same way. I do not ask the board to accept my diagnosis. I ask it to read the notes, and to read them beside the company roll, which I enclose. I have been the physician at Camp No. 9 for seventeen years. I write this in my own hand because a clerk will not. \u2014 Owen Trask, M.D.',
      anchor: '1946',
      unlocks: 'q2'
    },
    {
      id: 'case-22-f5', kind: 'photo', label: 'Photograph, Camp No. 9',
      text: 'Camp No. 9, photographed from the slag heap in the summer of 1929. The tipple and the loading track fill the left of the frame; the company houses stand in rows to the right, each the same, each with the one room of coal. A line of men in work clothes waits at the change house door. On the back, in pencil: Camp 9, the Bonito valley, the year the doctor came. Somebody has drawn a small ring around the men at the door, and drawn it years later, in a different pencil.',
      anchor: '1929'
    },
    {
      id: 'case-22-f6', kind: 'object', label: 'Glass jar, coal dust, Bonito seam',
      text: 'A canning jar, half full, sealed with wax, kept on the infirmary shelf. The contents are the fine dust of the Bonito seam, drawn from the air at the working face where the loaders fill the cars. A strip of paper pasted to the glass, in the doctor\u2019s hand: this is what they breathe. The label also bears two small initials that are not his, and a date in the 1950s, as if the jar had been opened and sealed again after he was gone.',
      anchor: '1934',
      note: 'He carried the seam into the hearing in a jar, and the jar came back without him.'
    },
    {
      id: 'case-22-f7', kind: 'transcript', label: 'Public report on the health of coal miners, 1968',
      text: 'Report of a state commission on the health of coal miners, 1968. The disease of the coal miner is caused by the dust of the seam, and the dust is fine enough to reach the smallest air passages; it is present after many years underground and is not tuberculosis, for there is no bacillus. The report sets the finding down as new. Its central sentence stands word for word as it was written in the case notes of the physician at Camp No. 9 in 1940. The report does not name the physician.',
      anchor: '1968',
      unlocks: 'q4'
    },
    {
      id: 'case-22-f8', kind: 'form', label: 'Order of revocation',
      text: 'In the matter of Owen Trask, physician and surgeon. The board finds repeated error of diagnosis in the treatment of persons employed at Camp No. 9, and correspondence with the company medical board concerning the same. It is ordered that the licence of the said Owen Trask be revoked. The order is entered in the register against his name, and the register notes no further appearance by him before the board.',
      anchor: '1951',
      note: 'The complaint was filed by a board the operators paid. The register does not note that either.'
    },
    {
      id: 'case-22-f9', kind: 'margin', label: 'Margin note, page 4',
      text: 'Read the notes in the order he wrote them: the occupation first, then the years underground, then the chest. Then take the rolls and set each name against the years, and see that every year holds. Count the exhibits in the minutes and you will find one number missing, and the missing number is the number of the notes. Find the report of 1968 and hold its sentence against his, word for word. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1968'
    }
  ],

  contradictions: [
    { a: 'case-22-f3', b: 'case-22-f4', reason: 'The minutes record that no exhibits were offered on the respondent\u2019s behalf beyond his own statement; his letter shows he put eleven case notes before the board, and the minutes\u2019 own exhibit list runs one to six and then eight, leaving the number of those notes missing.' },
    { a: 'case-22-f2', b: 'case-22-f8', reason: 'The order finds repeated error of diagnosis; across eleven men of one trade in one seam the case notes record one finding and one cause, with each man\u2019s occupation and years underground named. A finding repeated for every man is not an error repeated by the physician.' },
    { a: 'case-22-f7', b: 'case-22-f8', reason: 'The public report of 1968 sets out the miner\u2019s disease and its cause in the doctor\u2019s own words; the order of 1951 revoked him for stating that same cause. Both cannot be right.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-22-f2', prompt: 'You set the occupation and the years underground in front of the chest finding. Why that order?', answer: 'Because a chest alone is only a sick man, and a sick man can be called a mistake. A man\u2019s trade and the years he gave to it are not a matter of opinion; they are on the company\u2019s own roll, in the company\u2019s own hand. I set the roll under the chest so that no one could say I had invented either.' },
    { id: 'q2', cost: 2, requires: 'case-22-f4', prompt: 'The board answered you with a revocation. Why keep sending the notes?', answer: 'Because the notes were true whether or not four men at a table agreed with them. I did not write them to be agreed with. I wrote them so that when the disease got its name, the name would have something to stand on, and a man in 1968 could find the years and the jobs already written down.' },
    { id: 'q3', cost: 1, requires: 'case-22-f3', prompt: 'Exhibit seven is missing from the minutes. Who took it out?', answer: 'The clerk wrote the numbers as they were handed to him, and a missing number is not a slip, it is a hand. I put the notes in myself. Somebody with the file open in front of him lifted them out before the board sat, and left the number behind.' },
    { id: 'q4', cost: 2, requires: 'case-22-f7', prompt: 'The report of 1968 is your sentence, and it does not name you. Does that matter?', answer: 'No. I am a camp doctor and I will be dead when it is read. What matters is that the sentence is in it, and that the men dying now will be believed. Let it be new. It was not new the first time I wrote it, but let it be new.' }
  ],

  key: {
    virtue: 'Curiosity',
    wound: 'Silence',
    verdict: 'Release',
    truth: 'Owen Trask was the physician at Camp No. 9, a Bonito Valley Coal Company camp in Huerfano County, Colorado, from 1929. From 1940 he recorded, man by man, a lung disease he called the dust: he set each worker\u2019s occupation and years underground beside the condition of his chest, and matched them against the company\u2019s own employment rolls, finding the same cause in every loader and driller who had given thirty years to the seam. It had no name the record recognised, so the company medical board called his diagnoses repeated error, and in 1951 the state board revoked his licence on that board\u2019s complaint \u2014 a board the operators paid. The hearing\u2019s minutes list exhibits one to six and then eight; the missing seventh was his eleven case notes, which he had submitted and which the minutes record the respondent never offered. In 1968 a state commission published the finding as new, in his own words, and did not name him. He was right twenty-eight years before the report that buried him under it.'
  },

  epilogue: {
    Release: 'You sign Release, and the word error comes off the register. The record closes on a camp doctor who wrote down what he saw \u2014 the occupation, the years, the chest \u2014 and kept writing it after the men who paid his board told him to stop. The disease got its name in the end, and the name stands on eleven notes he had already set down. The state never restored his licence. The Archive does not need the state to.',
    Return: 'You send the file back for the men themselves. There is no more to find: the seam is worked out, Camp No. 9 is gone, and the men of the notes are dead of the thing he named for them. Returning it keeps him on the shelf another year, still a revoked physician, still early, still waiting on a report that has already been written and has already forgotten him.',
    Retain: 'You keep the file. That is allowed. Some archivists cannot close a life whose only crime was being twenty years ahead of the paperwork, so they keep the case notes on the desk and read them in his order \u2014 occupation, years, chest \u2014 and hold the jar of seam dust up to the lamp and watch it hang there. The Archive does not mind. It has no column for a disease before it has a name, and it will not file the man who found it until the name arrives.'
  },

  foreshadow: 'The clerk has written LICENCE REVOKED across the top of the file and ruled a line under it. Under the lamp I can see the rule was drawn twice, and the second line is in a hand I have met before on this shelf.'
};
