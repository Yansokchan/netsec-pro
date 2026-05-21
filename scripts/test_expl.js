const expl = `This question assesses the ability.
A (Incorrect): While XSOAR can integrate with NGFWs.
B (Correct): This is a prime example of dynamic micro-segmentation.
C (Correct): This is a core capability of Cortex XDR.
D (Correct): XSOAR can effectively operationalize domain.
E (Incorrect): While 'Live Terminal' can be used for remediation.`;

const re =
  /^([A-E])\s*\((?:Correct|Incorrect)\):\s*([\s\S]*?)(?=^\s*[A-E]\s*\((?:Correct|Incorrect)\):|$)/gim;
const o = {};
let m;
while ((m = re.exec(expl))) o[m[1]] = m[2].trim().slice(0, 50);
console.log('keys', Object.keys(o), o);
