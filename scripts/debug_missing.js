import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const missing = [81, 82, 129, 184, 193, 194, 195, 197, 228, 237, 256, 302];

let raw = fs.readFileSync(path.join(__dirname, 'secops_raw.txt'), 'utf8');
raw = raw
  .replace(/Http:\/\/www\.passcert\.com/gi, '')
  .replace(/-- \d+ of \d+ --/g, '')
  .replace(/The safer\s*,\s*easier way to help you pass any IT exams\./gi, '')
  .replace(/\b\d+\s*\/\s*\d+\b/g, '')
  .trim();
raw = '\n' + raw;

const QUESTION_START = /\n(\d{1,3})\.(?!\d)(?=\s*[A-Z])/g;
const starts = [];
let m;
while ((m = QUESTION_START.exec(raw)) !== null) {
  const id = parseInt(m[1], 10);
  if (id >= 1 && id <= 313) starts.push({ id, index: m.index + 1 });
}

for (const targetId of missing) {
  const i = starts.findIndex((s) => s.id === targetId);
  if (i < 0) {
    console.log(`Q${targetId}: NO START MATCH`);
    continue;
  }
  const end = i + 1 < starts.length ? starts[i + 1].index : raw.length;
  const block = raw.slice(starts[i].index, end);
  const hasAnswer = /\nAnswer:/i.test(block);
  const hasA = /\nA[\.\)]\s/.test(block);
  console.log(
    `Q${targetId}: start ok, Answer=${hasAnswer}, A-option=${hasA}, nextId=${starts[i + 1]?.id}, len=${block.length}`
  );
  if (!hasA) {
    const aIdx = block.search(/\nA\./);
    console.log('  first \\nA. at', aIdx, block.slice(aIdx, aIdx + 40));
  }
}
