import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ids = [8, 11, 14, 15, 75];

let raw = fs.readFileSync(path.join(__dirname, 'secops_raw.txt'), 'utf8');
raw = raw
  .replace(/Http:\/\/www\.passcert\.com/gi, '')
  .replace(/-- \d+ of \d+ --/g, '')
  .replace(/The safer\s*,\s*easier way to help you pass any IT exams\./gi, '')
  .replace(/\b\d+\s*\/\s*\d+\b/g, '')
  .trim();
raw = '\n' + raw;

const re = /\n(\d{1,3})\.(?!\d)(?=\s*[A-Z])/g;
const starts = [];
let m;
while ((m = re.exec(raw)) !== null) {
  const id = parseInt(m[1], 10);
  if (id < 1 || id > 313) continue;
  starts.push({ id, index: m.index + 1 });
}

console.log('has 15 start:', starts.some((s) => s.id === 15));

for (const targetId of ids) {
  const i = starts.findIndex((s) => s.id === targetId);
  if (i < 0) continue;
  const end = i + 1 < starts.length ? starts[i + 1].index : raw.length;
  const block = raw.slice(starts[i].index, end);
  const optSection = block.slice(block.search(/\nA\.\s/));
  const dotOpts = {};
  const dr = /\n([A-E])\.\s([\s\S]*?)(?=\n[A-E]\.\s|\nAnswer:)/g;
  let dm;
  while ((dm = dr.exec(optSection)) !== null) dotOpts[dm[1]] = dm[2].trim().slice(0, 60);
  console.log('\nQ', targetId, 'dot keys', Object.keys(dotOpts), dotOpts);
}
