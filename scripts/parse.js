import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let raw = fs.readFileSync(path.join(__dirname, 'raw.txt'), 'utf8');

raw = '\n' + raw.trim();

const questions = [];
const blocks = raw.split(/(?=\n\d+\.)/);

blocks.forEach(block => {
    block = block.trim();
    if (!block) return;
    
    // Match question text
    let headerMatch = block.match(/^\d+\.\s*([\s\S]*?)(?=\nA\.\s)/);
    if (!headerMatch) return;
    
    let text = headerMatch[1].trim();
    const id = parseInt(block.match(/^\d+/)[0], 10);

    // Match options
    const options = {};
    const optRegex = /\n([A-Z])\.\s(.*?)(?=\n[A-Z]\.\s|\nAnswer:)/gs;
    let match;
    while ((match = optRegex.exec(block)) !== null) {
        options[match[1]] = match[2].trim();
    }

    // Match answers
    const ansMatch = block.match(/\nAnswer:\s*([A-Z,\s]+?)(?=\nExplanation:)/);
    const answer = ansMatch ? ansMatch[1].split(',').map(s => s.trim()) : [];

    // Match matching explanation
    const explMatch = block.match(/\nExplanation:\s*([\s\S]*)/);
    const explanation = explMatch ? explMatch[1].trim() : "";

    if (text && answer.length > 0) {
        questions.push({
            id,
            text,
            options,
            answer,
            explanation
        });
    }
});

const output = `import { Question } from './types';\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, '../src/data.ts'), output);
console.log('Successfully generated src/data.ts with ' + questions.length + ' questions.');
