import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PLACEHOLDER = /^Option [A-E]$/i;

/** Match question headers like "81.A" or "129.Your" but not "1. The" list items or "198.51" IPs */
function questionMarker(id) {
  return new RegExp(`\\n${id}\\.(?!\\d)(?:(?=\\s+[A-Z])|(?=[A-Z]))`);
}

function cleanRaw(text) {
  return text
    .replace(/Http:\/\/www\.passcert\.com/gi, '')
    .replace(/-- \d+ of \d+ --/g, '')
    .replace(/The safer\s*,\s*easier way to help you pass any IT exams\./gi, '')
    .replace(/\b\d+\s*\/\s*\d+\b/g, '')
    .trim();
}

function splitQuestionBlocks(raw) {
  const blocks = [];

  for (let qid = 1; qid <= 313; qid++) {
    const startMatch = questionMarker(qid).exec(raw);
    if (!startMatch) continue;

    const start = startMatch.index + 1;
    let end = raw.length;

    if (qid < 313) {
      const nextMarker = questionMarker(qid + 1);
      nextMarker.lastIndex = start + 1;
      const nextMatch = nextMarker.exec(raw);
      if (nextMatch) end = nextMatch.index;
    }

    const block = raw.slice(start, end).trim();
    if (!/\nAnswer:/i.test(block)) continue;
    if (!/\nA[\.\)]\s/.test(block)) continue;
    blocks.push({ id: qid, block });
  }

  return blocks;
}

function parseParenOptions(block) {
  const answerIdx = block.search(/\nAnswer:/i);
  const section = answerIdx >= 0 ? block.slice(0, answerIdx) : block;
  const options = {};
  const re =
    /(?:^|\n)([A-E])\)\s*\n([\s\S]*?)(?=\n[A-E]\)\s*\n|\n[A-E]\. Option [A-E]|\n[A-E]\.\s+Option [A-E]|\nAnswer:)/g;
  let match;
  while ((match = re.exec(section)) !== null) {
    const text = match[2].trim();
    if (text) options[match[1]] = text;
  }
  return options;
}

function parseDotOptions(section) {
  const answerIdx = section.search(/\nAnswer:/i);
  const optsOnly = answerIdx >= 0 ? section.slice(0, answerIdx) : section;
  const options = {};
  for (const chunk of optsOnly.split(/\n(?=[A-E]\.)/)) {
    const m = chunk.match(/^([A-E])\.\s*([\s\S]*)/);
    if (!m) continue;
    const text = m[2].trim();
    if (!text || PLACEHOLDER.test(text)) continue;
    options[m[1]] = text;
  }
  return options;
}

function parseOptionsFromExplanation(explanation) {
  const options = {};
  const re =
    /^([A-E])\s*\((?:Correct|Incorrect)\):\s*([\s\S]*?)(?=^\s*[A-E]\s*\((?:Correct|Incorrect)\):|$)/gim;
  let m;
  while ((m = re.exec(explanation)) !== null) {
    options[m[1]] = m[2].trim();
  }
  return options;
}

function parseOptionsFromNarrative(explanation) {
  const options = {};
  const re =
    /Option ([A-E])(?:'s)?\s+([\s\S]*?)(?=Option [A-E](?:'s|\s)|Options [A-E]|$)/gi;
  let m;
  while ((m = re.exec(explanation)) !== null) {
    const letter = m[1].toUpperCase();
    const text = m[2].trim();
    if (text.length > 12 && !PLACEHOLDER.test(text)) {
      options[letter] = text;
    }
  }
  return options;
}

function isPlaceholderOption(text) {
  return !text || PLACEHOLDER.test(String(text).trim());
}

function mergeOptions(primary, fallback) {
  const merged = { ...primary };
  for (const [k, v] of Object.entries(fallback)) {
    if (!v || isPlaceholderOption(v)) continue;
    if (!merged[k] || isPlaceholderOption(merged[k])) {
      merged[k] = v;
    }
  }
  return merged;
}

function stripTrailingQuestionLeak(text, currentId) {
  const nextId = currentId + 1;
  const leak = new RegExp(`\\n${nextId}\\.(?:\\s*)(?=[A-Z])`);
  const idx = text.search(leak);
  if (idx >= 0) return text.slice(0, idx).trim();
  return text;
}

function parseBlock({ id, block }) {
  const ansMatch = block.match(/\nAnswer:\s*([A-E,\s]+?)(?=\nExplanation:|\n\d{1,3}\.|$)/i);
  if (!ansMatch) return { fail: 'no answer' };

  const answer = ansMatch[1]
    .split(',')
    .map((s) => s.trim())
    .filter((k) => /^[A-E]$/.test(k));

  const answerIndex = block.search(/\nAnswer:/i);
  const explMatch = block.match(/\nExplanation:\s*([\s\S]*)$/i);
  let explanation = explMatch ? explMatch[1].trim() : '';
  explanation = stripTrailingQuestionLeak(explanation, id);

  const optParen = block.match(/\nA\)\s*\n/);
  const optDot = block.match(/\nA\.\s/);
  const optionsStart = optParen?.index ?? optDot?.index ?? -1;

  let options = {};
  if (optParen) options = parseParenOptions(block);

  if (optDot) {
    options = mergeOptions(options, parseDotOptions(block.slice(optDot.index)));
  }

  const qTextStart = block.indexOf('.') + 1;
  const qEnd = optionsStart >= 0 ? optionsStart : answerIndex;
  let text = block.substring(qTextStart, qEnd).trim();
  text = stripTrailingQuestionLeak(text, id);

  options = mergeOptions(options, parseOptionsFromExplanation(explanation));
  options = mergeOptions(options, parseOptionsFromNarrative(explanation));

  for (const k of Object.keys(options)) {
    if (isPlaceholderOption(options[k])) delete options[k];
  }

  const answerCovered = answer.every((a) => options[a] && !isPlaceholderOption(options[a]));
  const optionCount = Object.keys(options).length;

  if (!text || answer.length === 0 || !answerCovered) {
    return { fail: 'answer not covered', answer, keys: Object.keys(options) };
  }
  if (optionCount < 2 && answer.length > 1) {
    return { fail: 'multi-answer needs 2+ opts', keys: Object.keys(options) };
  }

  return { id, text, options, answer, explanation };
}

function dedupeById(questions) {
  const byId = new Map();
  const score = (q) => {
    const filled = Object.values(q.options).filter((v) => !isPlaceholderOption(v)).length;
    return filled * 20 + Object.keys(q.options).length * 5 + q.text.length;
  };
  for (const q of questions) {
    const existing = byId.get(q.id);
    if (!existing || score(q) > score(existing)) byId.set(q.id, q);
  }
  return [...byId.values()].sort((a, b) => a.id - b.id);
}

let raw = fs.readFileSync(path.join(__dirname, 'secops_raw.txt'), 'utf8');
raw = cleanRaw(raw);
raw = '\n' + raw;

const blocks = splitQuestionBlocks(raw);
const questions = [];
const failures = [];

for (const item of blocks) {
  const result = parseBlock(item);
  if (result.id) {
    questions.push(result);
  } else {
    failures.push({ id: item.id, ...result });
  }
}

let final = dedupeById(questions);
const missing = [];
for (let i = 1; i <= 313; i++) {
  if (!final.find((q) => q.id === i)) missing.push(i);
}

const placeholders = final.filter((q) =>
  Object.values(q.options).some((v) => isPlaceholderOption(v))
);

console.log(`Parsed: ${final.length} / 313`);
console.log(`Failures: ${failures.length}`);
if (failures.length) console.log(failures);
console.log(`Missing IDs (${missing.length}):`, missing);
console.log(`Placeholder options: ${placeholders.length}`, placeholders.map((q) => q.id));

if (final.length > 0) {
  const output = `import { Question } from './types';\n\nexport const questions: Question[] = ${JSON.stringify(final, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, '../src/secopsData.ts'), output);
}
