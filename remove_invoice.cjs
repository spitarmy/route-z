const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname);

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replacements
  content = content.replace(/領収書即時発行/g, '領収書即時発行');
  content = content.replace(/領収書即時発行/g, '領収書即時発行');
  content = content.replace(/領収書/g, '領収書');
  content = content.replace(/領収書即時発行/g, '領収書即時発行');
  content = content.replace(/領収書発行対応/g, '領収書発行対応');
  content = content.replace(/領収書発行OK/g, '領収書発行OK');
  content = content.replace(/領収書発行対応/g, '領収書発行対応');
  content = content.replace(/領収書発行/g, '領収書発行');
  content = content.replace(/領収書即時発行/g, '領収書即時発行');
  content = content.replace(/適格請求書（領収書発行）に対応。/g, '');
  content = content.replace(/適格請求書（領収書発行）/g, '領収書');
  content = content.replace(/領収書/g, '領収書');
  content = content.replace(/領収書/g, '領収書');

  // FAQ cleanups
  content = content.replace(/領収書の発行は可能ですか？/g, '領収書の発行は可能ですか？');
  content = content.replace(/はい、会社の経費精算や接待利用に必要な領収書をその場ですぐに発行いたします。宛名や但し書きのご指定も承ります。/g, 'はい、会社の経費精算や接待利用に必要な領収書をその場ですぐに発行いたします。宛名や但し書きのご指定も承ります。');
  content = content.replace(/はい、会社の経費精算や接待利用に必要な領収書をその場ですぐに発行いたします。宛名や但し書きのご指定も承ります。/g, 'はい、会社の経費精算や接待利用に必要な領収書をその場ですぐに発行いたします。宛名や但し書きのご指定も承ります。');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Cleaned: ${path.relative(BASE_DIR, filePath)}`);
  }
}

function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.json') || entry.name.endsWith('.mjs') || entry.name.endsWith('.cjs') || entry.name.endsWith('.txt'))) {
      cleanFile(full);
    }
  }
}

walkDir(BASE_DIR);
console.log('🎉 ALL INVOICE REFERENCES REMOVED!');
