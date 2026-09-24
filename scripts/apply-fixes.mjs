import fs from 'fs';
import path from 'path';

const BASE_DIR = path.resolve('C:/Users/zenno/.gemini/antigravity/scratch/gion-route-z');

function updateFile(relativePath, modifier) {
  const filePath = path.join(BASE_DIR, relativePath);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = modifier(content);
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${relativePath}`);
  } else {
    console.log(`No changes needed: ${relativePath}`);
  }
}

// 1. Fix System
updateFile('system/index.html', (html) => {
  // meta description
  html = html.replace(/BOXチャージ2,000円/g, 'BOXチャージ1,500円');
  // drink prices
  html = html.replace('ハウスハイボール¥900〜、ウイスキー¥1,400〜。', 'ハイボール¥800〜、ウイスキー¥700〜。');
  // payments
  html = html.replace(
    '<span class="payment-badge">📱 LINE Pay</span>',
    '<span class="payment-badge">📱 d払い</span>\n                    <span class="payment-badge">📱 au PAY</span>\n                    <span class="payment-badge">📱 楽天ペイ</span>'
  );
  // remove U+FFFD
  html = html.replace(/\uFFFD\uFFFD?\s*LINE/g, '💬 LINE');
  return html;
});

// 2. Fix FAQ
updateFile('faq/index.html', (html) => {
  // charges in schema and body
  html = html.replace(/BOX席チャージ2,000円/g, 'BOX席チャージ1,500円');
  html = html.replace(/BOXチャージ2,000円/g, 'BOXチャージ1,500円');
  // payment in schema and body
  html = html.replace(
    'QRコード決済（PayPay・LINE Pay等）',
    'QRコード決済（PayPay・d払い・au PAY・楽天ペイ等。※LINE Payは終了）'
  );
  html = html.replace(
    'QRコード決済（PayPay・LINE\n                            Pay等）',
    'QRコード決済（PayPay・d払い・au PAY・楽天ペイ等）'
  );
  html = html.replace(
    'QRコード決済（PayPay・LINE\r\n                            Pay等）',
    'QRコード決済（PayPay・d払い・au PAY・楽天ペイ等）'
  );
  // remove U+FFFD
  html = html.replace(/\uFFFD\uFFFD?\s*LINE/g, '💬 LINE');
  return html;
});

// 3. Fix Contact
updateFile('contact/index.html', (html) => {
  html = html.replace('BOX席 ¥2,000 / カウンター席 ¥1,500', 'BOX席 ¥1,500 / カウンター席 ¥1,500');
  html = html.replace(/\uFFFD\uFFFD?\s*LINE/g, '💬 LINE');
  return html;
});

// 4. Fix Access
updateFile('access/index.html', (html) => {
  html = html.replace(/BOX席\s*¥?2,000/g, 'BOX席 ¥1,500');
  html = html.replace(/\uFFFD\uFFFD?\s*LINE/g, '💬 LINE');
  return html;
});

// 5. Fix Concept, Menu, News, Privacy
for (const page of ['concept/index.html', 'menu/index.html', 'news/index.html', 'privacy/index.html']) {
  updateFile(page, (html) => {
    html = html.replace(/\uFFFD\uFFFD?\s*LINE/g, '💬 LINE');
    return html;
  });
}

// 6. Fix English Page
updateFile('en/index.html', (html) => {
  // Service fee & tax removal: strictly tax included, 0% service charge
  html = html.replace(
    '<p><strong>10% Service Fee & Tax</strong> will be added to your total bill.</p>',
    '<p><strong>All Prices Include Tax & No Service Fee</strong>. Transparent pricing: Table Charge + Drink Price only.</p>'
  );
  // drinks consistency
  html = html.replace(
    '<div class="menu-item"><span class="menu-item__name">Hakushu / Yoichi / Taketsuru</span><span class="menu-item__dots"></span><span class="menu-item__price">¥2,000</span></div>',
    '<div class="menu-item"><span class="menu-item__name">Yoichi / Chita</span><span class="menu-item__dots"></span><span class="menu-item__price">¥1,200</span></div>\n                                <div class="menu-item"><span class="menu-item__name">Hakushu / Taketsuru / Yamazaki NV</span><span class="menu-item__dots"></span><span class="menu-item__price">¥2,000</span></div>'
  );
  html = html.replace(
    '<div class="menu-item"><span class="menu-item__name">Yamazaki NV / Yamazaki 12</span><span class="menu-item__dots"></span><span class="menu-item__price">¥2,500+</span></div>',
    ''
  );
  // charges
  html = html.replace(/BOX Seat Charge\s*<\/p>\s*<p class="pricing-card__price">¥2,000/g, 'BOX Seat Charge</p>\n                    <p class="pricing-card__price">¥1,500');
  // remove U+FFFD
  html = html.replace(/\uFFFD\uFFFD?\s*LINE/g, '💬 LINE');
  return html;
});

console.log('--- All emergency fixes applied successfully ---');
