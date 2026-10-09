// case-29 — The Ship That Did Not Sail. A lighthouse on the Danish coast, 1930–1971. Difficulty 4.
// Shape copied from case-00; the log, the weather and the sailing list are its own.

export default {
  id: 'case-29',
  order: 29,
  title: 'The Ship That Did Not Sail',
  subtitle: 'File 061-H \u00b7 Closed 1971',
  difficulty: 4,
  era: '1930\u20131971',
  slots: ['1930', '1939', '1943', '1946', '1954', '1971'],

  dossier: {
    name: 'Kirsten Holm',
    alias: 'K. Holm; the watch log signed K.H.',
    age: '64 at entry',
    occupation: 'Assistant keeper, then keeper, Havbjerg light',
    place: 'Havbjerg Fyr, the Kattegat coast of Jutland',
    cause: 'Found on the shore path below the light, the winter the tower went automatic',
    entry: '4 December 1971',
    registrar: 'P. Halden, junior'
  },

  intake: 'The registrar before me wrote a single word across the top of this file and left it there: FALSE. I have filed keepers who drank, keepers who slept, keepers who let a light go dark. This is the first I have filed who wrote down a ship, was told the ship never sailed, and was dismissed for putting it in the book. Her whole record is a watch log and a weather summary, and between the two of them I cannot find a thing that is not true.',

  fragments: [
    {
      id: 'case-29-f1', kind: 'form', label: 'Appointment of an assistant keeper',
      text: 'Danish Lighthouse Service. Havbjerg Fyr, Kattegat. Appointed assistant keeper from 1 April 1930: Kirsten Holm, 23, of the keeper\u2019s house, on the recommendation of the keeper, her father. Duties: the watch, the lantern from sunset to sunrise, and the log. The appointment is in the district officer\u2019s hand; she signed beneath it, K. Holm, in a small steady hand that fills every line.',
      anchor: '1930',
      note: 'The log is hers from the first night. Everything after this file turns on that.'
    },
    {
      id: 'case-29-f2', kind: 'photo', label: 'Photograph, the light at Havbjerg',
      text: 'A photograph of the tower from the shore path: squat, red-washed, the lantern gallery and the north face of the keeper\u2019s house. A woman stands at the door with a log book under her arm, turned to the light, not to the camera. On the back, in pencil: Havbjerg, Sept. 1939.',
      anchor: '1939',
      note: 'The book under her arm is in every photograph of her.'
    },
    {
      id: 'case-29-f3', kind: 'form', label: 'Watch log, night of 3 October 1943',
      text: 'Weather log and vessel book, Havbjerg Fyr. 3 Oct., sunset 18.12. Wind WSW 6, veering 7 by 22.00; rain; visibility two miles and falling. 23.40 \u2014 vessel, bearing NNE, close in on the inner passage, running without a light, making north, speed about seven knots. 23.52 \u2014 bearing NE by N. 00.20 \u2014 lost to the rain, bearing NE. No signal shown. K.H. The entry is in one hand, one pass, no correction.',
      anchor: '1943'
    },
    {
      id: 'case-29-f4', kind: 'form', label: 'Meteorological summary, 3\u20134 October 1943',
      text: 'Danish Meteorological Institute, summary for the Kattegat, night of 3\u20134 October: WSW gale, force 6 rising to 7 after 21.00; heavy rain; visibility two miles falling to half a mile before midnight. No coastwise vessel without a pilot is reported on the inner passage after 20.00 that night. The hours in this summary are local time.',
      anchor: '1943',
      note: 'Her weather, her hour for hour. What the summary does not give is a reason to doubt her.'
    },
    {
      id: 'case-29-f5', kind: 'form', label: 'Sailing list, D/S Kattegat, October 1943',
      text: 'Owners\u2019 sailing list, October 1943. MARIENLYST, 2,300 tons, master J. Bruun. The entry for 2 Oct. reads \u2018sailed, Grenaa, for the north,\u2019 struck through with a ruler and superseded above, in a second ink, by the words \u2018in drydock, Grenaa.\u2019 At the foot of the page, same second ink: no sailing from this port in October. Signed by the company secretary.',
      anchor: '1943',
      note: 'Two hands, two inks, one amended line. The vessel\u2019s name was not changed. Only the sea was.'
    },
    {
      id: 'case-29-f6', kind: 'receipt', label: 'Salvage return, the board at Kullen',
      text: 'Return of salvage, 14 October 1943: a steel steamer, tonnage 2,300, found derelict and waterlogged off Kullen, no crew aboard, towed in and sold by the board. Owners named as D/S Kattegat. The hull carried no name and no port of registry. Paid by the board, 6 November 1943.',
      anchor: '1943',
      note: 'A ship of the same tonnage, without a name, eleven days later, a coast away. The list says she never left Grenaa.'
    },
    {
      id: 'case-29-f7', kind: 'transcript', label: 'Admiralty inquiry into the Kattegat losses',
      text: 'Q. On what information does the committee place the vessel\u2019s crossing? A. On the meteorological record and on the report of the light. The committee finds that a vessel of some two thousand tons passed Havbjerg at about 23.40 on 3 October and cleared the Swedish coast before daylight. Q. And the keeper\u2019s log? A. The committee has taken the times from the record. It does not rest on that log, which was not kept in a proper form. \u2014 from the transcript, pp. 40\u201341.',
      anchor: '1946',
      note: 'It used her hours and disowned her hand. The times are hers. The credit is not.'
    },
    {
      id: 'case-29-f8', kind: 'form', label: 'Minute of the Lighthouse Board, dismissal',
      text: 'Lighthouse Board, minute of 19 March 1946. K. Holm, keeper of Havbjerg Fyr, found to have entered in her watch log, for the night of 3 October 1943, the passage of a vessel of a size and on a route that the record shows to be impossible. The entry is held to be false. The keeper is dismissed for negligence and for the keeping of a false record. Pension forfeit. Signed for the board.',
      anchor: '1946',
      note: 'The only false record in this file is the one that struck the sailing out.'
    },
    {
      id: 'case-29-f9', kind: 'letter', label: 'Letter in her hand, 1954',
      text: 'To the Lighthouse Board. I kept that log for sixteen years and I never wrote a thing in it I did not see. I have asked once before and I will not ask again. If the sea is not to be written down as it was, then this light does not need a keeper, and I am content to be no keeper. \u2014 K. Holm.',
      anchor: '1954',
      note: 'She asked twice. The file answers neither letter.'
    },
    {
      id: 'case-29-f10', kind: 'margin', label: 'Margin note, watch log',
      text: 'They struck out a vessel\u2019s sailing and called it a keeper\u2019s lie. The sea keeps a better list than any company, and the sea has never learned to amend it. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '1971'
    }
  ],

  contradictions: [
    { a: 'case-29-f3', b: 'case-29-f5', reason: 'The watch log has a vessel close in on the inner passage at 23.40, bearing north-north-east; the owners\u2019 sailing list, in the company\u2019s own amended hand, says no vessel sailed from that port in all of October.' },
    { a: 'case-29-f5', b: 'case-29-f6', reason: 'The sailing list puts the MARIENLYST in drydock for the whole of October; the salvage return has a nameless steamer of the same 2,300 tons derelict off Kullen eleven days after the night she logged \u2014 which it cannot have reached without that passage.' },
    { a: 'case-29-f7', b: 'case-29-f8', reason: 'The Lighthouse Board dismissed her for logging times the board called impossible; the later admiralty inquiry adopted those same times as its own finding. The hours cannot be both a false record and the committee\u2019s fact.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-29-f3', prompt: 'Tell me about the night of 3 October 1943.', answer: 'A south-westerly at seven and the rain down like a wall. She came in close on the inner passage with no light showing, and I put her down at 23.40, bearing north-north-east, making north. I have set down every vessel I ever saw off this light, and I set her down like the rest of them.' },
    { id: 'q2', cost: 2, requires: 'case-29-f5', prompt: 'The owners say no ship of theirs sailed that month.', answer: 'The owners say what the winter needed them to say. That ship was not carrying cargo on that charter. She was carrying people, north, to Sweden, in the October the arrests began. If the company had written that in a sailing list, the Germans would have taken the ship and every man aboard her, and the company knew it. So the company wrote drydock.' },
    { id: 'q3', cost: 2, requires: 'case-29-f6', prompt: 'A steamer of the same tonnage, derelict off Kullen, eleven days later.', answer: 'Then she was there. A light hull does not swim from Grenaa to Kullen by standing still. Eleven days is time enough for one crossing and one landing and one last run north, and then the weather took her, and the sea did the one thing the office would not: it put her where she could be found.' },
    { id: 'q4', cost: 1, requires: 'case-29-f7', prompt: 'The inquiry took your times and left your name out of it.', answer: 'They took the hours because the hours were true. They left out the hand because the hand was mine, and the man who struck the sailing out was sitting on the committee. That is how a record closes a thing: it keeps the fact and loses the keeper.' }
  ],

  key: {
    virtue: 'Duty',
    wound: 'Silence',
    verdict: 'Release',
    truth: 'Kirsten Holm kept the Havbjerg light and its log for sixteen years, and on the night of 3 October 1943 she recorded a vessel close in on the inner passage at 23.40, in a westerly gale, making north. The vessel was the MARIENLYST, on charter to a company that later said she had never sailed that month, because what she carried \u2014 people, bound for Sweden in the October the arrests began \u2014 could not be written into a sailing list without the ship and her crew answering to the Germans for it. So the owners amended the list, ruled out the sailing, and wrote drydock in its place. Eleven days later a steamer of the same tonnage was found derelict off Kullen, a coast away and reachable only by the passage the keeper had logged. The Lighthouse Board, reading the amended list, called her entry impossible and dismissed her for keeping a false record. Six years later an admiralty inquiry adopted her times for its own finding and did not name her. She had done nothing but write down what she saw.'
  },

  epilogue: {
    Release: 'You wrote Release, and the false-record line comes off the minute of 1946 in a stroke of your own ink. Kirsten Holm is filed as a keeper who logged a vessel everyone else had agreed not to see, and was dismissed for the one thing she did right. The Havbjerg light is automatic now and the tower is dark, and the log is no longer the record\u2019s to keep. The sea keeps its own list, unamended. This time so does the file.',
    Return: 'You sent the file back. The company is dissolved, the board is abolished, and the MARIENLYST is scrap on a Kullen beach, settled long ago with the men who towed her in. There is nothing left to fetch. Returning it keeps her on the shelf as the keeper who kept a false record, her log marked impossible, while the sea goes on quietly having been right.',
    Retain: 'You kept the file, which is allowed. Some archivists will not sign a woman off on the strength of a log the age called impossible and no living hand will confirm but the weather\u2019s. So she stays on the desk, the watch log open at 3 October and the salvage return beside it, and you read the bearings against the wind when the light is bad. The department takes no notice. It does not set her down either.'
  },

  foreshadow: 'The hand in the margin is not the registrar\u2019s, and it wrote this file\u2019s one true sentence. I have seen the same hand close other files, and it is always the last word and never the recorded one.'
};
