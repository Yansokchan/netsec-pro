import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = fs.readFileSync(path.join(__dirname, 'secops_raw.txt'), 'utf8');
const data = fs.readFileSync(path.join(__dirname, '../src/secopsData.ts'), 'utf8');

const ids = [];
for (const m of raw.matchAll(/\n(\d+)\.(?=[A-Za-z(])/g)) ids.push(+m[1]);
const unique = [...new Set(ids)].sort((a, b) => a - b);
const missing = [];
for (let i = 1; i <= 313; i++) if (!unique.includes(i)) missing.push(i);

const parsed = [...data.matchAll(/"id": (\d+)/g)].map((m) => +m[1]);
const parsedSet = new Set(parsed);
const missingParsed = [];
for (let i = 1; i <= 313; i++) if (!parsedSet.has(i)) missingParsed.push(i);

const placeholder = [];
const blocks = data.split(/\n  \{/);
for (const block of blocks) {
  const idM = block.match(/"id": (\d+)/);
  if (!idM) continue;
  const id = +idM[1];
  if (/"Option [A-E]"/.test(block)) placeholder.push(id);
}

console.log('unique in raw:', unique.length, 'max', Math.max(...unique));
console.log('missing from raw:', missing);
console.log('parsed:', parsed.length);
console.log('missing from parsed:', missingParsed);
console.log('placeholder options:', placeholder.length, placeholder);

const dup = parsed.filter((id, i) => parsed.indexOf(id) !== i);
console.log('duplicate parsed ids:', [...new Set(dup)]);
console.log('parsed max id:', Math.max(...parsed));
console.log('parsed min id:', Math.min(...parsed));
const extra = parsed.filter((id) => id > 313);
console.log('ids > 313:', extra.length, extra.slice(0, 10));
