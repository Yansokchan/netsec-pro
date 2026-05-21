import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let raw = fs.readFileSync(path.join(__dirname, 'secops_raw.txt'), 'utf8');

// Clean headers and page numbers
raw = raw.replace(/Http:\/\/www\.passcert\.com/gi, '');
raw = raw.replace(/-- \d+ of \d+ --/g, '');
raw = raw.replace(/The safer\s*,\s*easier way to help you pass any IT exams\./gi, '');
raw = raw.replace(/\b\d+\s*\/\s*\d+\b/g, '');

const lines = raw.split(/\r?\n/);
const questionBlocks = [];
let currentBlock = null;
let currentId = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) {
        if (currentBlock) currentBlock.lines.push(line);
        continue;
    }

    // Check if line starts a new question
    const match = trimmed.match(/^(\d+)\.(?!\d)/);
    if (match) {
        const id = parseInt(match[1], 10);
        if (id > currentId && id <= currentId + 3) {
            if (currentBlock) {
                questionBlocks.push(currentBlock);
            }
            currentBlock = {
                id: id,
                lines: [line]
            };
            currentId = id;
            continue;
        }
    }

    if (currentBlock) {
        currentBlock.lines.push(line);
    }
}

if (currentBlock) {
    questionBlocks.push(currentBlock);
}

const parsedQuestions = [];
const failures = [];

questionBlocks.forEach(qb => {
    const blockText = qb.lines.join('\n');
    const id = qb.id;

    // Extract Answer
    const ansMatch = blockText.match(/\nAnswer:\s*([A-E,\s]+?)(?=\nExplanation:|$)/i);
    if (!ansMatch) {
        failures.push({ id, reason: 'No Answer found', snippet: blockText.substring(0, 200) });
        return;
    }
    const answer = ansMatch[1].split(',').map(s => s.trim()).filter(Boolean);

    // Extract Explanation
    const explMatch = blockText.match(/\nExplanation:\s*([\s\S]*)$/i);
    const explanation = explMatch ? explMatch[1].trim() : "";

    // Find Option A start
    const optAMatch = blockText.match(/\n([A-E])(?:\.|\))(?:\s|$)/);
    if (!optAMatch) {
        failures.push({ id, reason: 'Option A not found', snippet: blockText.substring(0, 200) });
        return;
    }
    const qTextEnd = optAMatch.index;
    const qTextStart = blockText.indexOf('.') + 1;
    let text = blockText.substring(qTextStart, qTextEnd).trim();

    // Match options
    const options = {};
    const optRegex = /\n([A-E])(?:\.|\))\s*([\s\S]*?)(?=\n[A-E](?:\.|\))\s*|\nAnswer:)/g;
    let match;
    const optionsSubstring = blockText.substring(qTextEnd);
    while ((match = optRegex.exec(optionsSubstring)) !== null) {
        options[match[1]] = match[2].trim();
    }

    if (Object.keys(options).length === 0) {
        failures.push({ id, reason: 'No options parsed', snippet: blockText.substring(qTextEnd, qTextEnd + 200) });
        return;
    }

    parsedQuestions.push({
        id,
        text,
        options,
        answer,
        explanation
    });
});

console.log(`Successfully parsed: ${parsedQuestions.length} / ${questionBlocks.length} questions.`);
if (failures.length > 0) {
    console.log('Failures count:', failures.length);
    console.log(JSON.stringify(failures, null, 2));
}
