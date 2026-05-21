import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ids = [8, 11, 14, 15, 75, 208, 209];

let raw = fs.readFileSync(path.join(__dirname, 'secops_raw.txt'), 'utf8');
raw = raw
  .replace(/Http:\/\/www\.passcert\.com/gi, '')
  .replace(/-- \d+ of \d+ --/g, '')
  .replace(/The safer\s*,\s*easier way to help you pass any IT exams\./gi, '')
  .replace(/\b\d+\s*\/\s*\d+\b/g, '')
  .trim();
raw = '\n' + raw;

const re = /\n(\d{1,3})\.(?!\d)(?=[A-Z])/g;
const starts = [];
let m;
while ((m = re.exec(raw)) !== null) {
  const id = parseInt(m[1], 10);
  if (id < 1 || id > 313) continue;
  starts.push({ id, index: m.index + 1 });
}

for (const targetId of ids) {
  const i = starts.findIndex((s) => s.id === targetId);
  if (i < 0) {
    console.log('NO START', targetId);
    continue;
  }
  const end = i + 1 < starts.length ? starts[i + 1].index : raw.length;
  const block = raw.slice(starts[i].index, end);
  console.log('\n=== Q', targetId, '===');
  console.log('has Answer:', /\nAnswer:/i.test(block));
  console.log('has A.:', /\nA\.\s/.test(block));
  console.log('has A):', /\nA\)\s*\n/.test(block));
  console.log('Option A lines:', (block.match(/\nA\. Option A/g) || []).length);
  const tail = block.slice(-800);
  console.log('TAIL:\n', tail);
}
