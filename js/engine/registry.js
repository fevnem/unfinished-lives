// Case registry. The list is frozen; a missing or broken file is skipped with a warning
// instead of taking the whole Archive down with it (ten authors, ten files, no build step).

export const CASE_IDS = [
  'case-00',
  'case-01', 'case-02', 'case-03', 'case-04', 'case-05', 'case-06', 'case-07', 'case-08',
  'case-09', 'case-10', 'case-11', 'case-12', 'case-13', 'case-14', 'case-15', 'case-16',
  'case-17', 'case-18', 'case-19', 'case-20', 'case-21', 'case-22', 'case-23', 'case-24',
  'case-25', 'case-26',
  'case-meta'
];

let cache = null;

export async function loadCases() {
  if (cache) return cache;
  const out = [];
  for (const id of CASE_IDS) {
    try {
      const mod = await import('../content/' + id + '.js');
      const def = mod.default;
      if (!def || !def.fragments) throw new Error('no default export with fragments');
      if (def.id !== id) console.warn('[registry] ' + id + ': id field is "' + def.id + '"');
      out.push(def);
    } catch (e) {
      console.warn('[registry] skipped ' + id + ': ' + (e && e.message));
    }
  }
  out.sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  cache = out;
  return out;
}

export function findCase(cases, id) {
  return cases.find(function (c) { return c.id === id; }) || null;
}
