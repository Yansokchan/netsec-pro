import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let raw = fs.readFileSync(path.join(__dirname, 'secops_raw.txt'), 'utf8');

raw = raw.replace(/Http:\/\/www\.passcert\.com/gi, '');
raw = raw.replace(/-- \d+ of \d+ --/g, '');
raw = raw.replace(/The safer\s*,\s*easier way to help you pass any IT exams\./gi, '');
raw = raw.replace(/\b\d+\s*\/\s*\d+\b/g, '');

raw = '\n' + raw.trim();
const blocks = raw.split(/(?=\n\d+\.)/);

blocks.forEach(block => {
    block = block.trim();
    if (!block) return;

    const idMatch = block.match(/^(\d+)\./);
    if (!idMatch) return;
    const id = parseInt(idMatch[1], 10);

    const optAMatch = block.match(/\nA\.\s/);
    const ansMatch = block.match(/\nAnswer:\s*/i);

    if (ansMatch && !optAMatch) {
        console.log(`Failed Question ID: ${id}`);
        console.log('Snippet:', block.substring(0, 500));
        console.log('------------------------------------');
    }
});
