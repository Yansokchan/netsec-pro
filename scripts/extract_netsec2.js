import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFParse } from 'pdf-parse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pdfPath = path.join(__dirname, '..', 'NetSec-Pro_with_discussion.pdf');

const parser = new PDFParse({ data: fs.readFileSync(pdfPath) });
const result = await parser.getText();
const out = path.join(__dirname, 'netsec2_raw.txt');
fs.writeFileSync(out, result.text, 'utf8');
console.log('Wrote', out, 'length:', result.text.length);
