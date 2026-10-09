// case-25 — The Longer Road That Night. Ambulance service, rural Australia, 1962\u20131999. Difficulty 3.
// Shape copied from case-00; the story and the documents are its own.

export default {
  id: 'case-25',
  order: 25,
  title: 'The Longer Road That Night',
  subtitle: 'File 201-C \u00b7 Closed 1999',
  difficulty: 3,
  era: '1962\u20131999',
  slots: ['1962', '1968', '1973', '1974', '1986', '1999'],

  dossier: {
    name: 'Raymond Joseph Pender',
    alias: 'Ray Pender; R.J.P. on the run sheets',
    age: '56 at entry',
    occupation: 'Ambulance officer, night driver',
    place: 'Tarraga District Ambulance Station, south-western New South Wales',
    cause: 'Sudden heart failure, alone at his own table',
    entry: '6 June 1999',
    registrar: 'P. Halden, junior'
  },

  intake: 'Forty years of night runs out of Tarraga, and the file says he left a dying child at a hospital door. The registrar before me wrote ABANDONED across the top of the service inquiry and drew a line under it twice. I have filed officers who ran and men who froze; I have never filed one who was put out of the service for the times on a sheet rather than for the child on the seat. The run sheet in this file does not add up, and I am beginning to think it was never meant to.',

  fragments: [
    {
      id: 'case-25-f1', kind: 'form', label: 'Motor ambulance run sheet, night of 9 August 1973',
      text: 'Tarraga District Ambulance Service, run sheet, 9 August 1973. Call received 10.55 p.m.; on scene, Whera Downs, 11.10 p.m.; departed 11.20 p.m.; arrived Tarraga District Hospital 11.38 p.m.; female child, aged six, handed over 11.45 p.m. Officer in charge: R. J. Pender. The whole sheet is Pender\u2019s hand. There is no entry for a second hospital and no transfer note.',
      anchor: '1973',
      note: 'Those are the times of the twelve-mile run to the nearest hospital. The rest of the file describes a much longer night.'
    },
    {
      id: 'case-25-f2', kind: 'receipt', label: 'Medical gas delivery dockets, Tarraga District Hospital',
      text: 'Works order 4471. Oxygen manifold and six cylinders ordered for the district hospital, delivery not made: supply plant out of service for repair from 6 to 13 August inclusive. Cylinder bank at Tarraga empty 6\u201313 August; standing supply restored only on 14 August, from the Kandara depot. Docket signed at the warehouse, Kandara.',
      anchor: '1973',
      note: 'The week the run sheet describes is the one week Tarraga had no oxygen at all.'
    },
    {
      id: 'case-25-f3', kind: 'form', label: 'Admission note, Kandara Base Hospital',
      text: 'Kandara Base Hospital, casualty book. 10 August 1973, 12.15 a.m. Female child, aged six, admitted by ambulance from Whera Downs; severe croup with cyanosis; oxygen administered on the road by the ambulance officer and continued on arrival; child conscious and breathing at handover. Attending, Dr H. Vance. The ambulance officer is not named.',
      anchor: '1973',
      note: 'A live child, in the town he was not supposed to drive to, at a quarter past midnight.'
    },
    {
      id: 'case-25-f4', kind: 'form', label: 'Standing orders, Tarraga District Ambulance Service',
      text: 'Standing order 7, adopted by the district committee, 1962: every patient shall be conveyed with all speed to the nearest receiving hospital, and to no other, except upon the written authority of the medical officer first obtained. Any deviation shall be misconduct, whether or not the patient is harmed by it. Signed for the committee, the chairman.',
      anchor: '1962',
      note: 'The order has no clause for a hospital that cannot take a patient. Pender would have known it by heart.'
    },
    {
      id: 'case-25-f5', kind: 'transcript', label: 'Finding of the service inquiry',
      text: 'Inquiry into the conveyance of 9\u201310 August 1973. The board finds the run-sheet entries of R. J. Pender irreconcilable with the station call log; finds that the patient was not conveyed to the nearest receiving hospital as standing order 7 requires; finds the entries were made to conceal that deviation. R. J. Pender is dismissed the service, 4 February 1974. The child is not otherwise mentioned.',
      anchor: '1974',
      note: 'The board tested the times and found them false. It never once tested where the child went.'
    },
    {
      id: 'case-25-f6', kind: 'letter', label: 'Letter from the child\u2019s mother',
      text: 'Dear Ray, you will not remember me; I am Kate\u2019s mother. She is nineteen now and away at teachers\u2019 college, and she is only here at all because of the night you took her to Kandara, past the district hospital, when there was no air there to give her. They told me at the time you were dismissed for it. I never understood, and I never forgot, and I have kept your name thirteen years. \u2014 Hazel Rourke.',
      anchor: '1986',
      note: 'She names the town he was dismissed for reaching.'
    },
    {
      id: 'case-25-f7', kind: 'margin', label: 'Margin note, standing orders',
      text: 'A rule with no page for the reason will be kept by men who write lies instead of run sheets. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1999'
    },
    {
      id: 'case-25-f8', kind: 'photo', label: 'Photograph, the Tarraga ambulance outside the station',
      text: 'A district photograph, dated on the back 1968: the ambulance, a white International, parked at the station doors with two officers in whites beside it. In pencil below, \u201cTarraga, the wet year \u2014 214 calls.\u201d One of the two men is Pender. It is the same station room the inquiry later sat in.',
      anchor: '1968',
      note: 'Endurance, counted in calls.'
    },
    {
      id: 'case-25-f9', kind: 'form', label: 'Certificate of appointment',
      text: 'Tarraga District Ambulance Service. Raymond Joseph Pender is appointed ambulance officer and night driver, 3 March 1962, on the recommendation of the district committee, having served four years before that as a volunteer bearer. Signed for the committee, the chairman \u2014 the same hand that signed standing order 7.',
      anchor: '1962',
      note: 'The same chairman signs him in and signs the order that will finish him.'
    }
  ],

  contradictions: [
    { a: 'case-25-f1', b: 'case-25-f3', reason: 'The run sheet hands the child over at Tarraga at 11.45 p.m.; the Kandara admission note has the same child admitted alive at 12.15 a.m., and the Kandara road is forty minutes from Tarraga \u2014 she cannot have been at both, and the gap is half an hour.' },
    { a: 'case-25-f1', b: 'case-25-f2', reason: 'The run sheet says the child was handed over at Tarraga District Hospital; the gas dockets show the hospital\u2019s plant out of service and its cylinder bank empty from 6 to 13 August \u2014 no child choking for air was handed over at a hospital that could not give her any.' },
    { a: 'case-25-f1', b: 'case-25-f6', reason: 'The run sheet names Tarraga District Hospital as the destination; the mother\u2019s letter, thirteen years later, names Kandara, \u201cpast the district hospital\u201d \u2014 one night cannot have ended at two hospitals.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-25-f1', prompt: 'The times on your run sheet cannot be right. Why did you write them?', answer: 'Because the true times were a confession. I left the farm at twenty past eleven and I did not stop until Kandara, and every minute of that was against order 7. So I wrote the times of the night I was supposed to have had, and made the sheet look compliant. I thought I could keep the child and keep the job. I kept neither.' },
    { id: 'q2', cost: 2, requires: 'case-25-f2', prompt: 'You knew the district hospital had no oxygen that night.', answer: 'I knew it at half past eleven, when I telephoned the sister from the farm and she told me the plant had gone to Kandara for repair and there was not one cylinder left in the building. I could have carried her to that door and let her die in the sister\u2019s arms to keep a rule. I took her to the town that had the air. Every man on that board knew order 7. Not one of them has ever had to choose between a rule and a lung.' },
    { id: 'q3', cost: 1, requires: 'case-25-f3', prompt: 'The child lived.', answer: 'She lived. Oxygen on the road and oxygen when we got her there, and Doctor Vance had her breathing before the sun came up. The board never asked him. It asked the timekeeper.' },
    { id: 'q4', cost: 2, requires: 'case-25-f6', prompt: 'Mrs Rourke\u2019s letter names Kandara. You could have taken it to the board.', answer: 'By the time she wrote it I had been twelve years out of the service and the child was grown. What would it have changed? The rule was still absolute and I had still broken it. And to prove I was right I would have had to say that the district hospital failed its own town that night. I would rather be a liar in the file than do that to Tarraga.' }
  ],

  key: {
    virtue: 'Endurance',
    wound: 'Guilt',
    verdict: 'Release',
    truth: 'On the night of 9 August 1973 Raymond Pender was called to a six-year-old girl choking at Whera Downs. The nearest hospital was at Tarraga, twelve miles off \u2014 but Tarraga\u2019s oxygen plant had gone to Kandara for repair and the district hospital had not a cylinder in the building, so there was nothing there that could keep the child breathing. Pender telephoned the night sister from the farm, learned it, and drove the child fifty-five minutes the other way to Kandara Base Hospital, where she was admitted alive at a quarter past midnight and lived. Standing order 7 of his own service required every patient to be taken to the nearest hospital and to no other, with no exception for a hospital that could not help. Rather than record a deviation he knew he could not defend, and could not make public without shaming the district hospital and the town, he wrote run-sheet times for the compliant night he was meant to have had. The inquiry tested his times against the call log, found them impossible, and dismissed him in 1974 for falsifying the record. No one ever asked where the child had actually gone. The file says he abandoned a patient; the gas dockets, the admission note and a letter from the child\u2019s mother say he took her the only way that kept her alive, and paid for it with his name.'
  },

  epilogue: {
    Release: 'You signed Release, and the word ABANDONED comes off the top of the charge sheet in a line of your own ink. Raymond Pender is filed as an officer who broke an absolute order to keep a child breathing, wrote the run sheet he was supposed to have had rather than the one he had, and let the service take his name instead of the truth. His dismissal is noted and set aside. The order he broke is quoted in the margin, where it will stay; the child is grown, and her mother\u2019s letter is filed with his.',
    Return: 'You sent the file back. There is nothing to fetch: the men on that inquiry are dead, the station has been amalgamated, and the Kandara admission book was culled in the eighties. Returning it keeps him on the shelf as the officer the board dismissed for a falsified sheet \u2014 still a liar, still silent, waiting on a stranger to read the gas dockets he could never have produced for himself.',
    Retain: 'You kept the file, which is allowed. Some archivists will not sign off on a man who lied in his own hand, however good the reason, and some will not sign off on a rule that would have killed a child to be obeyed. So he stays on the desk, the run sheet at August 1973 and the mother\u2019s letter open beside it, and you read both when the light is bad. The department does not object. It does not excuse him either.'
  },

  foreshadow: 'The hand in the margin of the standing orders is upright and a little too regular, the same hand I have met in other files, in other years \u2014 always on the page the registrar did not write.'
};
