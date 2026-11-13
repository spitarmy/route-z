const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname);

// 1. Update guide/gion-charter-party-bar/index.html
const charterPath = path.join(BASE_DIR, 'guide/gion-charter-party-bar/index.html');
if (fs.existsSync(charterPath)) {
  let charterHtml = fs.readFileSync(charterPath, 'utf8');

  charterHtml = charterHtml.replace(
    /<title>.*?<\/title>/,
    '<title>【8〜15名フロア貸切】祇園のバー貸切・忘年会二次会ならRoute Z｜飲放＆歌放5,000円ポッキリ（八坂神社すぐ・幹事安心の明朗会計）</title>'
  );

  charterHtml = charterHtml.replace(
    /<meta name="description" content="[^"]*?"\s*\/?>/,
    '<meta name="description" content="京都祇園・八坂神社すぐの隠れ家Bar Route Z。8名〜15名様のフロア完全貸切・忘年会・二次会に最適！2時間飲み放題＋カラオケ歌い放題＋チャージ料込みでお一人様5,000円ポッキリ明朗会計。インボイス対応領収書即時発行。フード持ち込み自由。公式LINEから最短5分で日程の空き状況確認・予約可能！">'
  );

  charterHtml = charterHtml.replace(
    /<meta property="og:title" content="[^"]*?"/,
    '<meta property="og:title" content="【8〜15名フロア貸切】祇園のバー貸切・忘年会二次会ならRoute Z｜飲放＆歌放5,000円ポッキリ（八坂神社すぐ）"'
  );

  charterHtml = charterHtml.replace(
    /<meta property="og:description" content="[^"]*?"/,
    '<meta property="og:description" content="京都祇園・八坂神社すぐ。8名〜15名様のフロア完全貸切・忘年会・二次会に最適！2時間飲み放題＋カラオケ歌い放題付きで1名5,000円ポッキリ明朗会計。インボイス領収書即時発行。"'
  );

  fs.writeFileSync(charterPath, charterHtml, 'utf8');
  console.log('✅ Updated guide/gion-charter-party-bar/index.html');
}

// 2. Add charter & karaoke feature cards to guide/index.html
const guideIndexPath = path.join(BASE_DIR, 'guide/index.html');
if (fs.existsSync(guideIndexPath)) {
  let guideHtml = fs.readFileSync(guideIndexPath, 'utf8');

  const charterCard = `
        <div style="background:linear-gradient(135deg, rgba(201,164,74,0.18), rgba(15,12,10,0.98)); border:2px solid var(--color-gold); border-radius:var(--radius-md); padding:24px 28px; box-shadow:0 6px 25px rgba(201,164,74,0.2);">
          <span style="font-size:0.75rem; background:var(--color-gold); color:#000; font-weight:800; padding:2px 8px; border-radius:4px; letter-spacing:0.05em;">🎉 幹事様必見！忘年会・二次会 特集</span>
          <h2 style="font-size:1.25rem; font-family:var(--font-japanese); margin:8px 0 12px;"><a href="gion-charter-party-bar/" style="color:var(--color-gold-light); text-decoration:none;">【8〜15名フロア貸切】祇園のバー貸切・忘年会二次会ならRoute Z｜飲放＆歌放5,000円ポッキリ</a></h2>
          <p style="font-size:0.9rem; color:var(--color-text-secondary); line-height:1.8; margin-bottom:16px;">京都祇園・八坂神社すぐ。8名〜15名様のフロア完全貸切・忘年会・二次会に最適！2時間飲み放題＋カラオケ歌い放題＋チャージ料込みで1名5,000円ポッキリ。インボイス対応領収書即時発行、フード持込自由。</p>
          <a href="gion-charter-party-bar/" style="color:var(--color-gold); font-size:0.88rem; font-weight:600; text-decoration:underline;">貸切・忘年会プラン詳細を見る →</a>
        </div>
`;

  if (!guideHtml.includes('gion-charter-party-bar/')) {
    guideHtml = guideHtml.replace(
      '<div style="display:grid; gap:24px; margin:40px 0;">',
      '<div style="display:grid; gap:24px; margin:40px 0;">' + charterCard
    );
    fs.writeFileSync(guideIndexPath, guideHtml, 'utf8');
    console.log('✅ Added Charter feature card to guide/index.html');
  }
}

// 3. Add prominent 忘年会・団体予約 Banner to Homepage (index.html) right under hero
const indexPath = path.join(BASE_DIR, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexHtml = fs.readFileSync(indexPath, 'utf8');

  const bannerHtml = `
  <!-- ═══ Seasonal Event Banner: 忘年会・貸切 ═══ -->
  <div style="background: linear-gradient(90deg, #18120c, #2a1f14, #18120c); border-top: 1px solid var(--color-gold); border-bottom: 1px solid var(--color-gold); padding: 14px 20px; text-align: center;">
    <div class="container" style="display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap;">
      <span style="background: var(--color-gold); color: #000; font-size: 0.78rem; font-weight: 900; padding: 3px 10px; border-radius: 4px; letter-spacing: 0.05em;">🎉 忘年会・二次会予約受付中</span>
      <span style="font-size: 0.95rem; color: #fff; font-weight: 700;">
        8〜15名様フロア完全貸切！飲放＆歌放チャージ込 5,000円ポッキリ（インボイス領収書OK）
      </span>
      <div style="display: flex; gap: 8px;">
        <a href="/guide/gion-charter-party-bar/" style="background: rgba(201, 164, 74, 0.2); border: 1px solid var(--color-gold); color: var(--color-gold-light); font-size: 0.82rem; font-weight: 700; padding: 6px 14px; border-radius: 20px; text-decoration: none;">詳細を見る →</a>
        <a href="https://lin.ee/xKJlAsO" target="_blank" rel="noopener" style="background: #06c755; color: #fff; font-size: 0.82rem; font-weight: 700; padding: 6px 14px; border-radius: 20px; text-decoration: none;">LINEで空き確認</a>
      </div>
    </div>
  </div>
`;

  if (!indexHtml.includes('忘年会・二次会予約受付中')) {
    indexHtml = indexHtml.replace(
      '</section>\n\n  <!-- ═══ Section: AIO & GEO Fast-Facts Box',
      '</section>\n' + bannerHtml + '\n  <!-- ═══ Section: AIO & GEO Fast-Facts Box'
    );
    fs.writeFileSync(indexPath, indexHtml, 'utf8');
    console.log('✅ Added 忘年会・貸切 Banner to index.html');
  }
}

console.log('🎉 ALL GROUP RESERVATION BOOSTS COMPLETED!');
