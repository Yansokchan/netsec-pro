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
const i = starts.findIndex((s) => s.id === 15);
const block = raw.slice(starts[i].index, starts[i + 1].index);
const explMatch = block.match(/\nExplanation:\s*([\s\S]*)$/i);
console.log('expl tail 200:', explMatch[1].slice(-200));
console.log('has A (Incorrect):', /A \(Incorrect\)/.test(explMatch[1]));

const PLACEHOLDER = /^Option [A-E]$/i;
const isPlaceholderOption = (text) => !text || PLACEHOLDER.test(String(text).trim());

const re2 =
  /^([A-E])\s*\((?:Correct|Incorrect)\):\s*([\s\S]*?)(?=^\s*[A-E]\s*\((?:Correct|Incorrect)\):|$)/gim;
const fromExpl = {};
let m2;
while ((m2 = re2.exec(explMatch[1]))) fromExpl[m2[1]] = m2[2].trim().slice(0, 40);
console.log('fromExpl keys', Object.keys(fromExpl));

const options = {};
const dotSection = block.slice(block.search(/\nA\.\s/));
for (const chunk of dotSection.split(/\n(?=[A-E]\.)/)) {
  const cm = chunk.match(/^([A-E])\.\s*([\s\S]*)/);
  if (!cm) continue;
  let text = cm[2].trim();
  if (text.startsWith('Option ') && PLACEHOLDER.test(text)) continue;
  if (text) options[cm[1]] = text;
}
console.log('after dot', Object.keys(options));

const merged = { ...options };
for (const [k, v] of Object.entries(fromExpl)) {
  if (!v || isPlaceholderOption(v)) continue;
  if (!merged[k] || isPlaceholderOption(merged[k])) merged[k] = v;
}
console.log('after merge', Object.keys(merged), merged);
