import fs from 'fs';
import path from 'path';

const gionDir = 'C:/Users/zenno/.gemini/antigravity/scratch/gion-route-z';
const mapDirUrl = 'https://www.google.com/maps/dir/?api=1&destination=35.00332,135.77764';

// 1. Update index.html
let indexHtml = fs.readFileSync(path.join(gionDir, 'index.html'), 'utf8');
indexHtml = indexHtml.replace('"openingHours": "Mo-Su 20:00-05:00"', '"openingHours": "Mo-Su 20:00-03:00"');
indexHtml = indexHtml.replace('20:00 — Last（不定休）', '20:00 — 翌3:00（※状況により深夜延長あり / 不定休）');
indexHtml = indexHtml.replace(/https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=[^"']+/g, mapDirUrl);
fs.writeFileSync(path.join(gionDir, 'index.html'), indexHtml, 'utf8');
console.log('✅ Updated index.html');

// 2. Update access/index.html
let accessHtml = fs.readFileSync(path.join(gionDir, 'access/index.html'), 'utf8');
accessHtml = accessHtml.replace('"openingHours": "Mo-Su 20:00-05:00"', '"openingHours": "Mo-Su 20:00-03:00"');
accessHtml = accessHtml.replace('20:00 — Last（不定休）', '20:00 — 翌3:00（※状況により深夜延長あり / 不定休）');
accessHtml = accessHtml.replace(/https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=[^"']+/g, mapDirUrl);
fs.writeFileSync(path.join(gionDir, 'access/index.html'), accessHtml, 'utf8');
console.log('✅ Updated access/index.html');

// 3. Update en/index.html
let enIndexHtml = fs.readFileSync(path.join(gionDir, 'en/index.html'), 'utf8');
enIndexHtml = enIndexHtml.replace('"openingHours": "Mo-Su 20:00-05:00"', '"openingHours": "Mo-Su 20:00-03:00"');
enIndexHtml = enIndexHtml.replace('20:00 — Last', '20:00 — 3:00 AM (Extended hours available upon request)');
enIndexHtml = enIndexHtml.replace(/https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=[^"']+/g, mapDirUrl);
// English floating CTA
enIndexHtml = enIndexHtml.replace('💬 今夜の空席確認', '💬 Check Seats');
enIndexHtml = enIndexHtml.replace('📞 電話', '📞 Call');
enIndexHtml = enIndexHtml.replace('📍 Map', '📍 Directions');
fs.writeFileSync(path.join(gionDir, 'en/index.html'), enIndexHtml, 'utf8');
console.log('✅ Updated en/index.html');

// 4. Update en subpages
const enSubs = ['gion-bar', 'japanese-whisky', 'nightlife-guide'];
for (const sub of enSubs) {
  const f = path.join(gionDir, 'en', sub, 'index.html');
  if (fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace('"openingHours": "Mo-Su 20:00-05:00"', '"openingHours": "Mo-Su 20:00-03:00"');
    c = c.replace('20:00 — Last', '20:00 — 3:00 AM (Open late / Extended hours upon request)');
    c = c.replace(/https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=[^"']+/g, mapDirUrl);
    c = c.replace('💬 今夜の空席確認', '💬 Check Seats');
    c = c.replace('📞 電話', '📞 Call');
    c = c.replace('📍 Map', '📍 Directions');
    fs.writeFileSync(f, c, 'utf8');
    console.log(`✅ Updated en/${sub}/index.html`);
  }
}

console.log('--- Gion Route Z Hours & Maps Update Completed ---');
