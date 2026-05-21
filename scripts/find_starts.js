import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
  if (id >= 1 && id <= 313) starts.push({ id, index: m.index + 1 });
}

const idx81 = starts.findIndex((s) => s.id === 81);
console.log('idx81', idx81, 'total starts', starts.length);
console.log('around 81:', starts.slice(idx81 - 2, idx81 + 4));

const end = starts[idx81 + 1].index;
const block = raw.slice(starts[idx81].index, end);
console.log('block has Answer', /\nAnswer:/i.test(block));
console.log('block has A.', /\nA[\.\)]\s/.test(block));
console.log('block end chars', block.slice(-200));
