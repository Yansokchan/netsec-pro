import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFParse } from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfPath = path.join(__dirname, '..', 'SecOps-Pro.pdf');

const parser = new PDFParse({ data: fs.readFileSync(pdfPath) });
const result = await parser.getText();
const out = path.join(__dirname, 'secops_raw.txt');
fs.writeFileSync(out, result.text, 'utf8');
console.log('Wrote', out, 'length:', result.text.length);

// Spot-check Q8
const idx = result.text.indexOf('8.A global');
console.log('Q8 index:', idx);
if (idx >= 0) console.log(result.text.slice(idx, idx + 2500));
