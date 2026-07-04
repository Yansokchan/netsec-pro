import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const text = fs.readFileSync(path.join(__dirname, 'netsec2_raw.txt'), 'utf8');

const blocks = text.split(/\n(?=Topic \d+\s+Question #)/);

const parsed = [];

for (const block of blocks) {
    const lines = block.trim().split('\n');
    if (lines.length < 3) continue;
    
    const header = lines[0]; // e.g. "Topic 1	Question #1"
    const idMatch = header.match(/Question #(\d+)/);
    if (!idMatch) continue;
    const id = parseInt(idMatch[1], 10);
    
    let optStartIndex = -1;
    for (let i = 1; i < lines.length; i++) {
        if (/^[A-E]\.\s/.test(lines[i].trim())) {
            optStartIndex = i;
            break;
        }
    }
    
    if (optStartIndex === -1) {
        console.log(`Failed to find options for Question #${id}`);
        continue;
    }
    
    const questionText = lines.slice(1, optStartIndex).join('\n').trim();
    const remainder = lines.slice(optStartIndex).join('\n');
    
    const options = {};
    const optRegex = /^([A-E])\.\s*([\s\S]*?)(?=\n[A-E]\.\s*|\nComments|\nCorrect Answer:|\nCommunity vote distribution|$)/gm;
    let match;
    while ((match = optRegex.exec(remainder)) !== null) {
        options[match[1]] = match[2].trim();
    }
    
    const ansLineMatch = remainder.match(/\nCorrect Answer:\s*(.*)/i);
    const ansText = ansLineMatch ? ansLineMatch[1].trim() : '';
    const answer = ansText.match(/[A-E]/g) || [];
    
    const commentsMatch = remainder.match(/\nComments\s*\n([\s\S]*?)(?=\nCorrect Answer:|\nCommunity vote distribution|$)/);
    let explanation = '';
    if (commentsMatch) {
        explanation = commentsMatch[1].trim();
        if (explanation.includes('Currently there are no comments in this discussion')) {
            explanation = '';
        }
    }
    
    parsed.push({
        id,
        text: questionText,
        options,
        answer,
        explanation
    });
}

console.log('Parsed questions:', parsed.length);

if (parsed.length > 0) {
    const output = `import { Question } from './types';\n\nexport const questions: Question[] = ${JSON.stringify(parsed, null, 2)};\n`;
    fs.writeFileSync(path.join(__dirname, '../src/netsec2Data.ts'), output);
    console.log('Successfully generated src/netsec2Data.ts');
}
