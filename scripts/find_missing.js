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

for (const id of missing) {
  const idx = raw.indexOf(`\n${id}.`);
  const idx2 = raw.indexOf(`\n${id}.A`);
  const idx3 = raw.indexOf(`\n${id}. `);
  console.log(`Q${id}: idx . = ${idx}, .A = ${idx2}, .space = ${idx3}`);
  if (idx >= 0) console.log('  snippet:', JSON.stringify(raw.slice(idx, idx + 120)));
}
