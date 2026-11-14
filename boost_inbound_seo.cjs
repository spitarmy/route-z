const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname);

// 1. Update en/index.html
const enIndexPath = path.join(BASE_DIR, 'en/index.html');
if (fs.existsSync(enIndexPath)) {
  let enIndexHtml = fs.readFileSync(enIndexPath, 'utf8');

  enIndexHtml = enIndexHtml.replace(
    /<title>.*?<\/title>/,
    '<title>Gion Bar Route Z | Foreigner Friendly Bar in Gion Kyoto (English Speaking, Japanese Whisky, Karaoke)</title>'
  );

  enIndexHtml = enIndexHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="Top-rated foreigner friendly bar in Gion, Kyoto (1 min from Yasaka Shrine) with English-speaking staff! Transparent pricing: ¥1,500 table charge or ¥5,000 all-you-can-drink & karaoke (tax included, no hidden fees). Savor Yamazaki, Hakushu, Hibiki Japanese whiskies & craft cocktails. Solo travelers & walk-ins warmly welcome!"'
  );

  enIndexHtml = enIndexHtml.replace(
    /<meta name="keywords" content="[^"]*?"/,
    '<meta name="keywords" content="gion foreigner friendly bars, gion bar, bar gion, japanese whiskey bar near me, foreigner friendly bar in gion, english speaking bar kyoto, karaoke bar gion, route z">'
  );

  enIndexHtml = enIndexHtml.replace(
    /<meta property="og:title" content="[^"]*?"/,
    '<meta property="og:title" content="Foreigner Friendly Bar in Gion Kyoto | Bar Route Z (English Speaking, Japanese Whisky & Karaoke)"'
  );

  enIndexHtml = enIndexHtml.replace(
    /<meta property="og:description" content="[^"]*?"/,
    '<meta property="og:description" content="Top-rated foreigner friendly bar in Gion, Kyoto near Yasaka Shrine. English speaking staff, transparent pricing (¥1,500 charge / ¥5,000 all-you-can-drink & karaoke). Yamazaki & Hakushu whisky tasting. Solo travelers welcome!"'
  );

  fs.writeFileSync(enIndexPath, enIndexHtml, 'utf8');
  console.log('✅ Updated en/index.html');
}

// 2. Update en/gion-bar/index.html
const enGionBarPath = path.join(BASE_DIR, 'en/gion-bar/index.html');
if (fs.existsSync(enGionBarPath)) {
  let enGionBarHtml = fs.readFileSync(enGionBarPath, 'utf8');

  enGionBarHtml = enGionBarHtml.replace(
    /<title>.*?<\/title>/,
    '<title>Foreigner Friendly Bar in Gion Kyoto — Bar Route Z | English OK, Japanese Whisky Tasting & Karaoke</title>'
  );

  enGionBarHtml = enGionBarHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="Searching for foreigner friendly bars in Gion, Kyoto? Bar Route Z is an authentic 4F hidden bar near Yasaka Shrine with English-speaking staff. 100% transparent pricing: ¥1,500 table charge (no hidden fees) or ¥5,000 all-you-can-drink with karaoke. Yamazaki & Hakushu whisky, cocktails, and great music. Walk-ins & solo travelers welcome!"'
  );

  enGionBarHtml = enGionBarHtml.replace(
    /<meta property="og:title" content="[^"]*?"/,
    '<meta property="og:title" content="Foreigner Friendly Bar in Gion Kyoto — Bar Route Z (English Speaking Staff)"'
  );

  enGionBarHtml = enGionBarHtml.replace(
    /<meta property="og:description" content="[^"]*?"/,
    '<meta property="og:description" content="Searching for foreigner friendly bars in Gion, Kyoto? Bar Route Z is an authentic hidden bar near Yasaka Shrine with English-speaking staff. Transparent pricing: ¥1,500 table charge or ¥5,000 all-you-can-drink with karaoke."'
  );

  fs.writeFileSync(enGionBarPath, enGionBarHtml, 'utf8');
  console.log('✅ Updated en/gion-bar/index.html');
}

// 3. Update en/japanese-whisky/index.html
const enWhiskyPath = path.join(BASE_DIR, 'en/japanese-whisky/index.html');
if (fs.existsSync(enWhiskyPath)) {
  let enWhiskyHtml = fs.readFileSync(enWhiskyPath, 'utf8');

  enWhiskyHtml = enWhiskyHtml.replace(
    /<title>.*?<\/title>/,
    '<title>Japanese Whisky Bar Near Me in Gion Kyoto — Yamazaki, Hakushu, Hibiki Tasting | Bar Route Z</title>'
  );

  enWhiskyHtml = enWhiskyHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="Looking for an authentic Japanese whisky & whiskey bar near Yasaka Shrine in Gion, Kyoto? Taste Yamazaki NV, Hakushu, Hibiki, Yoichi, and Chita at transparent fair prices. ¥1,500 table charge, no hidden service fees. English menu & English-speaking staff. Open until 3:00 AM!"'
  );

  enWhiskyHtml = enWhiskyHtml.replace(
    /<meta property="og:title" content="[^"]*?"/,
    '<meta property="og:title" content="Japanese Whisky Bar Near Me in Gion Kyoto — Yamazaki, Hakushu & Hibiki Tasting | Route Z"'
  );

  fs.writeFileSync(enWhiskyPath, enWhiskyHtml, 'utf8');
  console.log('✅ Updated en/japanese-whisky/index.html');
}

// 4. Update en/nightlife-guide/index.html
const enGuidePath = path.join(BASE_DIR, 'en/nightlife-guide/index.html');
if (fs.existsSync(enGuidePath)) {
  let enGuideHtml = fs.readFileSync(enGuidePath, 'utf8');

  enGuideHtml = enGuideHtml.replace(
    /<title>.*?<\/title>/,
    '<title>Gion Nightlife Guide for Foreigners — Safe Foreigner Friendly Bars, Cover Charges & Karaoke | Bar Route Z Kyoto</title>'
  );

  enGuideHtml = enGuideHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="Everything international travelers need to know about Gion nightlife in Kyoto. How to find foreigner friendly bars, avoid cover charge traps, enjoy Japanese whisky tasting, and experience karaoke safely. Visit Bar Route Z near Yasaka Shrine (English speaking staff)."'
  );

  fs.writeFileSync(enGuidePath, enGuideHtml, 'utf8');
  console.log('✅ Updated en/nightlife-guide/index.html');
}

// 5. Update index.html (Japanese homepage English snippet)
const indexPath = path.join(BASE_DIR, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexHtml = fs.readFileSync(indexPath, 'utf8');

  indexHtml = indexHtml.replace(
    /English-friendly bar in Gion Kyoto\./,
    'Top foreigner friendly bar in Gion Kyoto (English speaking). Table charge ¥1,500, all-you-can-drink & karaoke ¥5,000.'
  );

  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('✅ Updated index.html English snippet');
}

console.log('🎉 ALL INBOUND SEO OPTIMIZATIONS COMPLETED!');
