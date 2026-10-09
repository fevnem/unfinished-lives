// case-26 — order 26, difficulty 4. A national records digitisation unit, 1974–2011.
// The file says an operator deleted eleven boxes of scanned images without authority and was
// dismissed for gross misconduct in 2011. The manifest counts the leaves that went in; the
// delivery log counts the images that came out; the two columns were never meant to be read together.

export default {
  id: 'case-26',
  order: 26,
  title: 'The Pages That Were Never Scanned',
  subtitle: 'File 326-W \xb7 Closed 2011',
  difficulty: 4,
  era: '1974\u20132011',
  slots: ['1974', '1981', '1988', '1993', '1998', '2004', '2011'],

  dossier: {
    name: 'Winifred Calder',
    alias: 'W. Calder; on the shift returns, operator 11',
    age: '59 at entry',
    occupation: 'Scanning operator, grade 3, later supervisor, Site 2',
    place: 'National Records Digitisation Unit, Site 2',
    cause: 'Cause of closure: dismissal for gross misconduct, 2011',
    entry: '4 October 2011',
    registrar: 'S. Pemberton, junior'
  },

  intake: 'The file came up from the regions in a transfer of dismissed staff, and the registrar before me wrote one phrase across the covering sheet and underlined it twice: GROSS MISCONDUCT \u2014 UNAUTHORISED DELETION. A digitisation unit is a place where the paper goes in and a copy comes out, and the copy is kept and the paper is not. I have read a great many files about people who destroyed things. This is the first one where the destruction may have been the only honest thing in the room.',

  fragments: [
    {
      id: 'case-26-f1', kind: 'form', label: 'Staff at post, Site 2',
      text: 'National Records Digitisation Unit, Site 2. Return of staff at the establishment of the unit, March 1974. Eleven operators, two graders, one engineer. Line 11: Calder, Winifred, operator, grade 3, transferred from the manuscript room; certificate in document handling, 1969. The sheet is typed on a machine whose letter e sits low, and every date on it was entered by hand afterwards.',
      anchor: '1974',
      note: 'The unit opened, and it was already a place built on a bargain: the paper goes in, the copy is kept, the paper is not.'
    },
    {
      id: 'case-26-f2', kind: 'photo', label: 'Photograph, scanning line, Site 2',
      text: 'A colour print, faded to orange, of the scanning line at Site 2. Of the two flatbed cameras, one is running: a bound volume lies open on the glass, and a stack of loose leaves waits at the automatic feeder behind it. A woman in a blue coat stands at the console with one hand on the feed tray and does not turn to the camera. A strip of tape on the machine reads, in the print, only: DO NOT LIFT LID WHILE \u2014. On the back, in ballpoint: Site 2, camera A, 1981.',
      anchor: '1981',
      note: 'The tape warns about the lid. The fault that would matter sat behind the feeder, where the operator\u2019s hand already is.',
      unlocks: 'q4'
    },
    {
      id: 'case-26-f3', kind: 'form', label: 'Batch manifest, series A/C',
      text: 'Batch manifest, series A/C, boxes 108 to 120. Each box is listed with its accession and its leaf count, checked and initialled in the searcher\u2019s hand: box 108, 1,214 leaves; box 109, 988; box 110, 1,402; box 111, 1,336; box 112, 1,480; and so to box 120, 906. Total for the series, 14,327 leaves. Handed over for scanning, 14 June 1988, Calder, W., operator 11.',
      anchor: '1988',
      note: 'Thirteen boxes, each with a number of leaves written beside it. This is the count of what was there.'
    },
    {
      id: 'case-26-f4', kind: 'receipt', label: 'Scan delivery log, series A/C',
      text: 'Delivery log, images accepted into the store. Box 108, 1,214 images. Box 109, 988. Box 110, 1,377. Box 111, 1,336. Box 112, 1,411. And so to box 120, 906. The counts for boxes 110 and 112, and for nine others in the series, fall short of the leaf count entered at the manifest by between two and seventy-one. The column has no field for the difference; the shortfall is carried forward as \u20140\u2014. Received, Calder, W.; accepted, S. Grebe, store officer.',
      anchor: '1988',
      note: 'Eleven boxes, and every one of them short. The column keeps a running total and nowhere to put a remainder.',
      unlocks: 'q1'
    },
    {
      id: 'case-26-f5', kind: 'form', label: 'Certificate of destruction, series A/C',
      text: 'Certificate of destruction. The paper originals of series A/C, boxes 108 to 120, having been scanned and accepted, are hereby pulped under standing instruction D/14 \u2014 originals are not retained after acceptance. Certificate dated 8 March 1993 and signed for the unit, T. Amory, records officer. The certificate lists all thirteen boxes by number. It lists no shortages.',
      anchor: '1993',
      note: 'The paper of thirteen boxes became pulp, and the only thing that outlived it was a set of copies that did not add up.'
    },
    {
      id: 'case-26-f6', kind: 'form', label: 'Defect report, feeder assembly, ref 1187',
      text: 'Equipment defect report, ref 1187, raised 2 September 1998 by Calder, W., operator 11, Site 2. Fault: the automatic feeder, on some leaf weights, advances two leaves and presents one, without a jam and without a warning to the operator. Frequency: not reproducible on demand; observed on bound and on loose stock alike. Action taken: camera A feeder isolated; the batches scanned to date to be listed. Response: none. The counterfoil is initialled W.C. and stamped RECEIVED, 3 September 1998, in the supplier\u2019s service office.',
      anchor: '1998',
      note: 'A defect report with a counterfoil. The unit kept its own copy for thirteen years, which is not the same thing as the supplier having read it.',
      unlocks: 'q2'
    },
    {
      id: 'case-26-f7', kind: 'receipt', label: 'Audit of images removed from the store',
      text: 'Migration audit, 2004. Reconciliation of series A/C, images in the store against the manifests. Images found short in the eleven boxes whose originals were pulped under D/14 in 1993. Images removed from the store on the instruction of W. Calder from 19 April 2004: the eleven short boxes in their entirety. Images removed from boxes that agreed: none. Each removal is entered in the operator\u2019s own name, signed box by box, and on every entry the reason field reads: COPY INCOMPLETE \u2014 ORIGINAL DESTROYED 1993.',
      anchor: '2004',
      note: 'She took out the boxes that did not add up, and left alone the two that did.'
    },
    {
      id: 'case-26-f8', kind: 'form', label: 'Disciplinary finding and dismissal',
      text: 'National Records Digitisation Unit. Disciplinary finding, 27 September 2011. Subject: W. Calder, supervisor grade 2, Site 2. The officer deleted, on and after 19 April 2004, eleven boxes of scanned images belonging to series A/C, without authority and outside any records procedure. No defect in the scanning equipment was reported by the officer at any time before the deletions, and the equipment was in good order. The images deleted were whole and correct records. The paper originals remained available for re-scanning. Finding: gross misconduct; unauthorised deletion of records. The officer is dismissed with immediate effect.',
      anchor: '2011',
      note: 'Four findings, and each of them is answered by a page above it in the same file.',
      unlocks: 'q3'
    },
    {
      id: 'case-26-f9', kind: 'form', label: 'Service bulletin, feeder assembly, series 4',
      text: 'Service bulletin 44/11, issued 12 December 2011 to all holders of the feeder assembly, series 4. The bulletin advises that under certain leaf weights the series 4 automatic feeder may advance two leaves while presenting one, without a jam and without an operator warning, producing an image in which a page is absent. The condition has been traced to the vacuum pad and is present in all assemblies supplied before 2006. Holders are advised to reconcile any images produced on series 4 feeders against their source documents and to re-scan where the source survives.',
      anchor: '2011',
      note: 'Thirteen years after report 1187, and eleven weeks after the dismissal, the fault the officer named has a bulletin and a part number.'
    },
    {
      id: 'case-26-f10', kind: 'margin', label: 'Margin note, batch manifest, series A/C',
      text: 'The manifest counts the leaves that were there. The delivery log counts the images that came out. The two were kept in different books, and every clerk read them apart. Read them together: eleven boxes come up short, and they are the same eleven whose paper went to pulp. A copy short of its page is not the page. She took the short copies out, and the file calls that the crime. \u2014 in the margin, in a hand that is not the registrar\u2019s',
      anchor: '2011'
    }
  ],

  contradictions: [
    { a: 'case-26-f8', b: 'case-26-f4', reason: 'The finding says the images the officer deleted were whole and correct records; the delivery log for those same eleven boxes records fewer images received than leaves in the manifest, by between two and seventy-one, and carries the shortage forward as nothing at all.' },
    { a: 'case-26-f8', b: 'case-26-f5', reason: 'The finding says the paper originals remained available for re-scanning; the certificate of destruction, signed in 1993, records the originals of all thirteen boxes of the series pulped under standing instruction D/14.' },
    { a: 'case-26-f8', b: 'case-26-f6', reason: 'The finding records that no defect in the scanning equipment was reported by the officer at any time; report 1187, raised by the officer in 1998 and counterfoiled by the supplier, names the feeder by the very fault the supplier put a part number to thirteen years later.' }
  ],

  questions: [
    { id: 'q1', cost: 2, requires: 'case-26-f4', prompt: 'Eleven boxes came out short. What did you do when you first saw the counts?', answer: 'I counted them the first week and I counted them for seventeen years after. The store accepted what came off the machine, and the column had nowhere to put a difference, so the difference went nowhere. I put the eleven boxes into a defect report and I waited for the supplier to answer it. It was still waiting when the paper went to pulp.' },
    { id: 'q2', cost: 2, requires: 'case-26-f6', prompt: 'You raised report 1187 and nobody answered. What did you expect would happen?', answer: 'A fitter. I expected a fitter and I got a counterfoil and a stamp. After that I had two facts and no way to make them meet: the copies were short, and the paper that could have been scanned again was pulp. A report is not a repair.' },
    { id: 'q3', cost: 2, requires: 'case-26-f8', prompt: 'Why not leave the short copies in the store and note the shortfall on them?', answer: 'Because a note is not a record. The next hand to open that box would have seen a full run of images and taken it for the run. Every page that was never scanned would have lived on as a page that was, and there would have been nothing left anywhere to say otherwise. I took the eleven boxes out so that the gap would be a gap. That is the thing the file calls the deletion.' },
    { id: 'q4', cost: 1, requires: 'case-26-f2', prompt: 'You are the woman at the feed tray in the photograph.', answer: '1981. The tape on the lid was the only warning the machine ever carried, and it was about the lid. The fault was behind the feeder, where no warning reached and where the machine gave no sign when it dropped a leaf. After that I kept my hand on that tray for twenty years, and I listened.' }
  ],

  key: {
    virtue: 'Curiosity',
    wound: 'Oblivion',
    verdict: 'Release',
    truth: 'The unit ran under one standing instruction, D/14: scan the paper, accept the images, pulp the paper. In 1988 thirteen boxes of series A/C went through camera A at Site 2, and eleven of them came out short \u2014 the delivery log counted fewer images than the manifest counted leaves, by between two and seventy-one, and the column had no field for the difference, so the difference was carried as nothing and the boxes were accepted. In 1993 the paper of all thirteen boxes was pulped, as D/14 required. Winifred Calder had raised report 1187 in 1998, naming the feeder and the batches; the supplier counterfoiled it and never answered. In 2004, reconciling the store against the manifests for a migration, she found the shortage standing in exactly the eleven boxes whose originals no longer existed, and she deleted those short images box by box in her own name, so that a page never scanned would not survive as a page that was. The unit disciplined her in 2011 for deleting records it had itself certified as pulped, on equipment it had been warned in writing was faulty; the supplier gave that fault a part number in December 2011, eleven weeks too late. Her dismissal is the file\u2019s word for the only act that kept a copy from lying.'
  },

  epilogue: {
    Release: 'You sign Release, and the finding of gross misconduct is struck through on the top sheet. The record closes on an operator who counted the leaves that went in and the images that came out, found eleven boxes where the two refused to agree, and took the copies out rather than let a page that was never scanned pass for a page that was. The unit pulped what it was told to pulp and called that policy; she deleted what did not add up and called that a crime. The Archive files it under the plainer word.',
    Return: 'You send the file back for the supplier\u2019s service record of report 1187. The supplier counterfoiled the report and lost the job; the fitter has retired and the feeder assembly is scrap. There is nothing to fetch. Returning it keeps her on the shelf as the officer who deleted eleven boxes, still waiting on an answer that took thirteen years to arrive and came after the dismissal.',
    Retain: 'You keep the file, which is allowed. Some archivists will not sign off a woman whose whole guilt is a shortage she was the only one to notice, so they hold the manifest open beside the delivery log and read one column against the other when the light is bad. The Archive does not object. It keeps a column for a crime and a column for a shortage, and it has never kept one for the difference.'
  },

  foreshadow: 'The margin note on the manifest is in the small upright hand that has followed me from file to file, always on the page the registrar did not write. Whoever held that pen read two columns the way they were meant to be read together, and left the reading where the next hand would find it.'
};
