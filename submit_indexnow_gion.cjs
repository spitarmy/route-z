const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');

const urlMatches = sitemap.match(/<loc>(https:\/\/gion-route-z\.com\/[^<]*)<\/loc>/g);
const urls = urlMatches ? urlMatches.map(m => m.replace(/<\/?loc>/g, '')) : [];

console.log(`Submitting ${urls.length} URLs to IndexNow for gion-route-z.com...`);

async function submit() {
  const payload = {
    host: 'gion-route-z.com',
    key: 'c0be09658bea671f9907e06bbf856b2c',
    keyLocation: 'https://gion-route-z.com/c0be09658bea671f9907e06bbf856b2c.txt',
    urlList: urls
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });

    console.log('IndexNow response status:', res.status, res.statusText);
    const text = await res.text();
    console.log('IndexNow response body:', text || '(empty 200 OK)');
  } catch (err) {
    console.error('IndexNow submission failed:', err);
  }
}

submit();
