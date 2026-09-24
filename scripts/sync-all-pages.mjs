import fs from 'fs';
import path from 'path';

const BASE_DIR = path.resolve('C:/Users/zenno/.gemini/antigravity/scratch/gion-route-z');

// 1. Update privacy/index.html
{
  const file = path.join(BASE_DIR, 'privacy/index.html');
  let content = fs.readFileSync(file, 'utf8');

  // Add hreflang if missing
  if (!content.includes('hreflang="ja"')) {
    content = content.replace(
      '<link rel="canonical" href="https://gion-route-z.com/privacy/">',
      `<link rel="canonical" href="https://gion-route-z.com/privacy/">
    <link rel="alternate" hreflang="ja" href="https://gion-route-z.com/privacy/">
    <link rel="alternate" hreflang="en" href="https://gion-route-z.com/en/">
    <link rel="alternate" hreflang="x-default" href="https://gion-route-z.com/">`
    );
  }

  // Ensure phone & hours in footer info
  if (!content.includes('070-3616-9115')) {
    content = content.replace(
      '20:00 — Last',
      '20:00 — Last<br><a href="tel:070-3616-9115" style="color:var(--color-gold);">070-3616-9115</a>'
    );
  }

  // Ensure floating CTA
  if (!content.includes('id="floating-cta"')) {
    content = content.replace(
      '</body>',
      `  <!-- Floating CTA -->
  <div class="floating-cta" id="floating-cta">
    <a href="https://www.google.com/maps/search/?api=1&query=京都市東山区林下町422+円山ビル" target="_blank" rel="noopener" class="btn btn--outline" id="float-map-btn" data-action="map_click">📍 Map</a>
    <a href="https://lin.ee/xKJlAsO" target="_blank" rel="noopener" class="btn btn--primary" id="float-line-btn" data-action="line_click" style="background:linear-gradient(135deg, #06c755, #05a847); border-color:#06c755; color:#fff; font-weight:700;">💬 空席確認</a>
    <a href="tel:070-3616-9115" class="btn btn--outline" id="float-tel-btn" data-action="call_click">📞 電話</a>
  </div>
</body>`
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated privacy/index.html');
}

// 2. Update review/index.html
{
  const file = path.join(BASE_DIR, 'review/index.html');
  let content = fs.readFileSync(file, 'utf8');

  // Add canonical
  if (!content.includes('rel="canonical"')) {
    content = content.replace(
      '<meta name="robots" content="noindex, follow">',
      `<meta name="robots" content="noindex, follow">
  <link rel="canonical" href="https://gion-route-z.com/review/">
  <link rel="alternate" hreflang="ja" href="https://gion-route-z.com/review/">
  <link rel="alternate" hreflang="en" href="https://gion-route-z.com/en/">
  <link rel="alternate" hreflang="x-default" href="https://gion-route-z.com/">`
    );
  }

  // Add phone, address, hours and floating CTA
  if (!content.includes('070-3616-9115')) {
    content = content.replace(
      '</div>\n</body>',
      `  <div style="margin-top: 30px; text-align: center; font-size: 0.82rem; color: var(--color-text-muted);">
      <p>Bar Route Z ｜ 京都市東山区林下町422 円山ビル4F ｜ 20:00 〜 Last</p>
      <p>お電話: <a href="tel:070-3616-9115" style="color:var(--color-gold);">070-3616-9115</a> ｜ <a href="https://lin.ee/xKJlAsO" target="_blank" rel="noopener" style="color:var(--color-gold);">公式LINE</a> ｜ <a href="https://www.google.com/maps/search/?api=1&query=京都市東山区林下町422+円山ビル" target="_blank" rel="noopener" style="color:var(--color-gold);">Google Maps</a></p>
    </div>
  </div>

  <div class="floating-cta" id="floating-cta">
    <a href="https://www.google.com/maps/search/?api=1&query=京都市東山区林下町422+円山ビル" target="_blank" rel="noopener" class="btn btn--outline" id="float-map-btn" data-action="map_click">📍 Map</a>
    <a href="https://lin.ee/xKJlAsO" target="_blank" rel="noopener" class="btn btn--primary" id="float-line-btn" data-action="line_click" style="background:linear-gradient(135deg, #06c755, #05a847); border-color:#06c755; color:#fff; font-weight:700;">💬 空席確認</a>
    <a href="tel:070-3616-9115" class="btn btn--outline" id="float-tel-btn" data-action="call_click">📞 電話</a>
  </div>
</body>`
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated review/index.html');
}

// 3. Update all core pages to have mutual hreflang tags
const corePages = [
  'concept/index.html',
  'menu/index.html',
  'system/index.html',
  'access/index.html',
  'faq/index.html',
  'news/index.html',
  'contact/index.html'
];

for (const p of corePages) {
  const file = path.join(BASE_DIR, p);
  let content = fs.readFileSync(file, 'utf8');
  const slug = p.split('/')[0];
  const pageCanonical = `https://gion-route-z.com/${slug}/`;

  if (!content.includes('hreflang="ja"')) {
    const canonicalTag = `<link rel="canonical" href="${pageCanonical}">`;
    const replacement = `${canonicalTag}
    <link rel="alternate" hreflang="ja" href="${pageCanonical}">
    <link rel="alternate" hreflang="en" href="https://gion-route-z.com/en/">
    <link rel="alternate" hreflang="x-default" href="https://gion-route-z.com/">`;

    if (content.includes(canonicalTag)) {
      content = content.replace(canonicalTag, replacement);
    } else {
      // Find head
      content = content.replace('</head>', `  <link rel="alternate" hreflang="ja" href="${pageCanonical}">\n  <link rel="alternate" hreflang="en" href="https://gion-route-z.com/en/">\n  <link rel="alternate" hreflang="x-default" href="https://gion-route-z.com/">\n</head>`);
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Added hreflang to ${p}`);
  }
}

// 4. Update guide/index.html to have hreflang and SSOT
{
  const file = path.join(BASE_DIR, 'guide/index.html');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('hreflang="ja"')) {
      content = content.replace(
        '<link rel="canonical" href="https://gion-route-z.com/guide/">',
        `<link rel="canonical" href="https://gion-route-z.com/guide/">
  <link rel="alternate" hreflang="ja" href="https://gion-route-z.com/guide/">
  <link rel="alternate" hreflang="en" href="https://gion-route-z.com/en/gion-bar/">
  <link rel="alternate" hreflang="x-default" href="https://gion-route-z.com/">`
      );
    }
    content = content.replace(/¥3,000〜¥6,000/g, '¥1,500〜¥4,000');
    content = content.replace(/BOX席 ¥2,000/g, 'BOX席 ¥1,500');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated guide/index.html');
  }
}

// 5. Redirect legacy guide pages to canonical long-tail guide pages
// guide/gion-late-night -> guide/gion-after-bar
{
  const file = path.join(BASE_DIR, 'guide/gion-late-night/index.html');
  if (fs.existsSync(file)) {
    const redirectHtml = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=https://gion-route-z.com/guide/gion-after-bar/">
  <title>祇園で深夜まで飲めるBar｜Bar Route Z</title>
  <link rel="canonical" href="https://gion-route-z.com/guide/gion-after-bar/">
  <link rel="alternate" hreflang="ja" href="https://gion-route-z.com/guide/gion-after-bar/">
  <link rel="alternate" hreflang="en" href="https://gion-route-z.com/en/gion-bar/">
  <link rel="alternate" hreflang="x-default" href="https://gion-route-z.com/">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <p>リダイレクト中... <a href="/guide/gion-after-bar/">祇園 アフターバー（深夜営業）のご案内はこちら</a></p>
  <p>20:00 — Last ｜ 〒605-0062 京都市東山区林下町422 円山ビル4F ｜ <a href="tel:070-3616-9115">070-3616-9115</a></p>
  <div class="floating-cta" id="floating-cta">
    <a href="https://www.google.com/maps/search/?api=1&query=京都市東山区林下町422+円山ビル" id="float-map-btn">📍 Map</a>
    <a href="tel:070-3616-9115" id="float-tel-btn">📞 電話</a>
    <a href="https://lin.ee/xKJlAsO" id="float-line-btn">💬 LINE</a>
  </div>
</body>
</html>`;
    fs.writeFileSync(file, redirectHtml, 'utf8');
    console.log('Redirected guide/gion-late-night to guide/gion-after-bar');
  }
}

// guide/gion-whisky -> guide/gion-japanese-whisky
{
  const file = path.join(BASE_DIR, 'guide/gion-whisky/index.html');
  if (fs.existsSync(file)) {
    const redirectHtml = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=https://gion-route-z.com/guide/gion-japanese-whisky/">
  <title>祇園でウイスキーが飲めるBar｜Bar Route Z</title>
  <link rel="canonical" href="https://gion-route-z.com/guide/gion-japanese-whisky/">
  <link rel="alternate" hreflang="ja" href="https://gion-route-z.com/guide/gion-japanese-whisky/">
  <link rel="alternate" hreflang="en" href="https://gion-route-z.com/en/gion-bar/">
  <link rel="alternate" hreflang="x-default" href="https://gion-route-z.com/">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <p>リダイレクト中... <a href="/guide/gion-japanese-whisky/">祇園 ジャパニーズウイスキー完全案内はこちら</a></p>
  <p>20:00 — Last ｜ 〒605-0062 京都市東山区林下町422 円山ビル4F ｜ <a href="tel:070-3616-9115">070-3616-9115</a></p>
  <div class="floating-cta" id="floating-cta">
    <a href="https://www.google.com/maps/search/?api=1&query=京都市東山区林下町422+円山ビル" id="float-map-btn">📍 Map</a>
    <a href="tel:070-3616-9115" id="float-tel-btn">📞 電話</a>
    <a href="https://lin.ee/xKJlAsO" id="float-line-btn">💬 LINE</a>
  </div>
</body>
</html>`;
    fs.writeFileSync(file, redirectHtml, 'utf8');
    console.log('Redirected guide/gion-whisky to guide/gion-japanese-whisky');
  }
}

// 6. Update vercel.json with clean 301 redirects
const vercelConfig = {
  cleanUrls: true,
  trailingSlash: true,
  redirects: [
    {
      source: "/guide/gion-late-night/(.*)",
      destination: "/guide/gion-after-bar/",
      permanent: true
    },
    {
      source: "/guide/gion-late-night",
      destination: "/guide/gion-after-bar/",
      permanent: true
    },
    {
      source: "/guide/gion-whisky/(.*)",
      destination: "/guide/gion-japanese-whisky/",
      permanent: true
    },
    {
      source: "/guide/gion-whisky",
      destination: "/guide/gion-japanese-whisky/",
      permanent: true
    }
  ],
  headers: [
    {
      source: "/(.*)",
      has: [
        {
          type: "host",
          value: "^(?!gion-route-z\\.com$).*"
        }
      ],
      headers: [
        {
          key: "X-Robots-Tag",
          value: "noindex, nofollow"
        }
      ]
    },
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN"
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(BASE_DIR, 'vercel.json'), JSON.stringify(vercelConfig, null, 2), 'utf8');
console.log('Updated vercel.json with 301 redirects');

// 7. Update sitemap.xml to include guide/
{
  const sitemapFile = path.join(BASE_DIR, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapFile, 'utf8');
  if (!sitemap.includes('https://gion-route-z.com/guide/')) {
    sitemap = sitemap.replace(
      '</urlset>',
      `  <url>
    <loc>https://gion-route-z.com/guide/</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`
    );
    fs.writeFileSync(sitemapFile, sitemap, 'utf8');
    console.log('Added guide/ to sitemap.xml');
  }
}

console.log('--- All pages and configurations synchronized! ---');
