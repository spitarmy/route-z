const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve('C:/Users/zenno/.gemini/antigravity/scratch/gion-route-z');

// 1. Update index.html
const indexPath = path.join(BASE_DIR, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

indexHtml = indexHtml.replace(
  /<title>.*?<\/title>/,
  '<title>京都祇園のカラオケバー Route Z【飲放＆歌放5,000円・チャージ1,500円明朗会計】八坂神社すぐ・一人飲み歓迎・深夜3時（English OK）</title>'
);

indexHtml = indexHtml.replace(
  /<meta name="description"[\s\S]*?content="[^"]*?"/,
  '<meta name="description" content="【八坂神社すぐ・完全明朗会計】京都祇園の隠れ家カラオケバーRoute Z。チャージ一律¥1,500（深夜料・サービス料なし）・2時間飲み放題＆カラオケ歌い放題¥5,000！山崎・白州等ウイスキー多数。カウンター一人飲み・女性一人・二次会・接待アフター大歓迎。English-friendly bar in Gion Kyoto."'
);

indexHtml = indexHtml.replace(
  /<meta property="og:title" content="[^"]*?"/,
  '<meta property="og:title" content="京都祇園のカラオケバー Route Z【飲放＆歌放5,000円・チャージ1,500円明朗会計】八坂神社すぐ"'
);

indexHtml = indexHtml.replace(
  /<meta name="twitter:title" content="[^"]*?"/,
  '<meta name="twitter:title" content="京都祇園のカラオケバー Route Z【飲放＆歌放5,000円・チャージ1,500円明朗会計】八坂神社すぐ"'
);

indexHtml = indexHtml.replace(
  /<meta property="og:description" content="[^"]*?"/,
  '<meta property="og:description" content="【八坂神社すぐ・完全明朗会計】京都祇園の隠れ家カラオケバーRoute Z。チャージ一律¥1,500（深夜料・サービス料なし）・2時間飲み放題＆カラオケ歌い放題¥5,000！山崎・白州等ウイスキー多数。一人飲み・二次会大歓迎。"'
);

indexHtml = indexHtml.replace(
  /<meta name="twitter:description" content="[^"]*?"/,
  '<meta name="twitter:description" content="【八坂神社すぐ・完全明朗会計】京都祇園の隠れ家カラオケバーRoute Z。チャージ一律¥1,500（深夜料・サービス料なし）・2時間飲み放題＆カラオケ歌い放題¥5,000！山崎・白州等ウイスキー多数。一人飲み・二次会大歓迎。"'
);

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('✅ Updated index.html');

// 2. Update guide/gion-karaoke-bar/index.html (Top query: 祇園 カラオケバー 125 imp)
const karaokePath = path.join(BASE_DIR, 'guide/gion-karaoke-bar/index.html');
if (fs.existsSync(karaokePath)) {
  let karaokeHtml = fs.readFileSync(karaokePath, 'utf8');
  karaokeHtml = karaokeHtml.replace(
    /<title>.*?<\/title>/,
    '<title>祇園でカラオケバーならRoute Z【飲放＆歌放5,000円・チャージ1,500円】八坂神社すぐ・二次会＆一人飲み</title>'
  );
  karaokeHtml = karaokeHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="京都祇園のカラオケバーならRoute Z。祇園破格の『2時間飲み放題＆カラオケ歌い放題5,000円（税込・チャージ込）』！チャージ単品は一律1,500円（深夜料・サービス料0円）。ボックス席・カウンター完備で宴会後の二次会や一人飲みにおすすめ。八坂神社徒歩2分。"'
  );
  karaokeHtml = karaokeHtml.replace(
    /<meta property="og:title" content="[^"]*?"/,
    '<meta property="og:title" content="祇園でカラオケバーならRoute Z【飲放＆歌放5,000円・チャージ1,500円】八坂神社すぐ・二次会＆一人飲み"'
  );
  fs.writeFileSync(karaokePath, karaokeHtml, 'utf8');
  console.log('✅ Updated guide/gion-karaoke-bar/index.html');
}

// 3. Update guide/gion-after-bar/index.html (Query: 祇園 アフターバー 44 imp)
const afterPath = path.join(BASE_DIR, 'guide/gion-after-bar/index.html');
if (fs.existsSync(afterPath)) {
  let afterHtml = fs.readFileSync(afterPath, 'utf8');
  afterHtml = afterHtml.replace(
    /<title>.*?<\/title>/,
    '<title>祇園のアフターバー・深夜営業ならRoute Z【チャージ1,500円明朗会計】深夜3時以降Last対応・接待同伴後</title>'
  );
  afterHtml = afterHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="京都祇園で接待のアフターや同伴後・深夜の二軒目に選ばれる隠れ家バーRoute Z。20:00〜翌3:00（Last対応）。ゆったり寛げるBOX席・チャージ一律¥1,500・深夜料・サービス料なしの完全明朗会計。山崎・白州等の銘酒ウイスキーと最新カラオケ完備。"'
  );
  fs.writeFileSync(afterPath, afterHtml, 'utf8');
  console.log('✅ Updated guide/gion-after-bar/index.html');
}

// 4. Update guide/gion-solo-bar/index.html (Query: 祇園 一人飲み 15 imp)
const soloPath = path.join(BASE_DIR, 'guide/gion-solo-bar/index.html');
if (fs.existsSync(soloPath)) {
  let soloHtml = fs.readFileSync(soloPath, 'utf8');
  soloHtml = soloHtml.replace(
    /<title>.*?<\/title>/,
    '<title>祇園で一人飲みならBar Route Z【チャージ1,500円明朗会計】一見・女性一人客歓迎・カウンター席</title>'
  );
  soloHtml = soloHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="京都祇園で一人飲みを楽しむなら隠れ家バーRoute Z。八坂神社すぐ円山ビル4F。カウンター席完備・チャージ一律¥1,500（深夜料・サービス料なし）の安心明朗会計。観光客や出張中の方、女性の一人飲みも大歓迎。気さくなバーテンダーが迎えます。"'
  );
  fs.writeFileSync(soloPath, soloHtml, 'utf8');
  console.log('✅ Updated guide/gion-solo-bar/index.html');
}

// 5. Update guide/gion-hidden-bar/index.html (Query: 祇園 バー 隠れ家 27 imp)
const hiddenPath = path.join(BASE_DIR, 'guide/gion-hidden-bar/index.html');
if (fs.existsSync(hiddenPath)) {
  let hiddenHtml = fs.readFileSync(hiddenPath, 'utf8');
  hiddenHtml = hiddenHtml.replace(
    /<title>.*?<\/title>/,
    '<title>祇園の隠れ家バー Route Z【円山ビル4F・明朗会計チャージ1,500円】八坂神社すぐ・大人の夜の終点</title>'
  );
  hiddenHtml = hiddenHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="京都祇園・八坂神社すぐの雑居ビル4Fに佇む大人の隠れ家バーRoute Z。知る人ぞ知る隠れ家空間でチャージ一律1,500円（深夜料なし）・飲放歌放5,000円。ジャパニーズウイスキーや本格カクテルとともに上質な京都の夜を。一見・一人飲み大歓迎。"'
  );
  fs.writeFileSync(hiddenPath, hiddenHtml, 'utf8');
  console.log('✅ Updated guide/gion-hidden-bar/index.html');
}

// 6. Update en/index.html (Query: gion bar 79 imp, bar gion 18 imp)
const enIndexPath = path.join(BASE_DIR, 'en/index.html');
if (fs.existsSync(enIndexPath)) {
  let enIndexHtml = fs.readFileSync(enIndexPath, 'utf8');
  enIndexHtml = enIndexHtml.replace(
    /<title>.*?<\/title>/,
    '<title>Gion Bar Route Z | Best Japanese Whisky & Karaoke Bar in Gion Kyoto (Yasaka Shrine 1 min)</title>'
  );
  enIndexHtml = enIndexHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="Top-rated hidden bar in Gion, Kyoto (1 min from Yasaka Shrine). Transparent pricing: Table charge ¥1,500 (No service fees, tax included), All-You-Can-Drink & Karaoke ¥5,000. Savor Yamazaki, Hakushu, Hibiki whiskies & Japanese gin. English-friendly & solo travelers warmly welcomed!"'
  );
  fs.writeFileSync(enIndexPath, enIndexHtml, 'utf8');
  console.log('✅ Updated en/index.html');
}

// 7. Update en/gion-bar/index.html
const enGionBarPath = path.join(BASE_DIR, 'en/gion-bar/index.html');
if (fs.existsSync(enGionBarPath)) {
  let enGionBarHtml = fs.readFileSync(enGionBarPath, 'utf8');
  enGionBarHtml = enGionBarHtml.replace(
    /<title>.*?<\/title>/,
    '<title>Gion Bar Guide | Bar Route Z Kyoto — Authentic Japanese Whisky & Late Night Karaoke Bar</title>'
  );
  enGionBarHtml = enGionBarHtml.replace(
    /<meta name="description"[\s\S]*?content="[^"]*?"/,
    '<meta name="description" content="Looking for the best bar in Gion, Kyoto? Bar Route Z is an authentic 4F hidden bar near Yasaka Shrine. Transparent pricing (Table charge ¥1,500, no service fee). Enjoy Yamazaki, Hakushu, Yoichi Japanese whiskies, craft beers, and karaoke until 3:00 AM. English OK!"'
  );
  fs.writeFileSync(enGionBarPath, enGionBarHtml, 'utf8');
  console.log('✅ Updated en/gion-bar/index.html');
}

console.log('🎉 ALL CTR OPTIMIZATIONS COMPLETED!');
