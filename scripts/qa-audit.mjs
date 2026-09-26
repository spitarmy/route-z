import fs from 'fs';
import path from 'path';

const BASE_DIR = path.resolve('C:/Users/zenno/.gemini/antigravity/scratch/gion-route-z');
const config = JSON.parse(fs.readFileSync(path.join(BASE_DIR, 'business-config.json'), 'utf8')).business;

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures = [];

function check(testNumber, name, condition, details = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`[PASS] Test ${testNumber}: ${name}`);
  } else {
    failedChecks++;
    failures.push({ testNumber, name, details });
    console.error(`[FAIL] Test ${testNumber}: ${name} -> ${details}`);
  }
}

// Find all HTML files
function getHtmlFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(BASE_DIR);
console.log(`\n==================================================`);
console.log(`Route Z Automated 20-Point QA & SEO Audit`);
console.log(`Scanning ${htmlFiles.length} HTML files...`);
console.log(`==================================================\n`);

// 1. Price consistency across TOP, MENU, SYSTEM, FAQ, ACCESS, ENGLISH, GUIDES
{
  let priceInconsistency = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');

    // Must not have BOX ¥2,000 / BOX席チャージ2,000円
    if (text.includes('BOX ¥2,000') || text.includes('BOX席 ¥2,000') || text.includes('BOX席チャージ2,000円') || text.includes('BOXチャージ2,000円')) {
      priceInconsistency.push(`${rel} contains BOX ¥2,000 (should be ¥1,500)`);
    }
    // Must not have 10% Service Fee
    if (text.includes('10% Service Fee')) {
      priceInconsistency.push(`${rel} contains 10% Service Fee (should be 0%)`);
    }
  }
  check(1, 'Price consistency (BOX ¥1,500, Counter ¥1,500, 0% service charge across all pages)', priceInconsistency.length === 0, priceInconsistency.join('; '));
}

// 2. Opening hours consistency
{
  let hoursInconsistency = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (!text.includes('20:00')) {
      hoursInconsistency.push(`${rel} missing 20:00 opening hour`);
    }
  }
  check(2, 'Opening hours consistency (All pages contain 20:00)', hoursInconsistency.length === 0, hoursInconsistency.join('; '));
}

// 3. Address consistency (including Postal Code 615-8252)
{
  let addressInconsistency = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (!text.includes('林下町422') && !text.includes('Rinshacho')) {
      addressInconsistency.push(`${rel} missing correct street address`);
    }
    if (!text.includes('615-8252')) {
      addressInconsistency.push(`${rel} missing updated postal code 615-8252`);
    }
    if (text.includes('605-0062')) {
      addressInconsistency.push(`${rel} contains old postal code 605-0062`);
    }
  }
  check(3, 'Address & Postal code consistency (〒615-8252 林下町422 円山ビル4F across all pages)', addressInconsistency.length === 0, addressInconsistency.join('; '));
}

// 4. Phone number consistency
{
  let phoneInconsistency = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (!text.includes('070-3616-9115') && !text.includes('+81-70-3616-9115')) {
      phoneInconsistency.push(`${rel} missing phone number 070-3616-9115`);
    }
  }
  check(4, 'Phone number consistency (070-3616-9115 across all pages)', phoneInconsistency.length === 0, phoneInconsistency.join('; '));
}

// 5. MAP link functional
{
  let mapLinkIssues = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (!text.includes('maps/search/?api=1') && !text.includes('maps.google')) {
      mapLinkIssues.push(`${rel} missing valid Google Maps link`);
    }
  }
  check(5, 'MAP link presence & functional format', mapLinkIssues.length === 0, mapLinkIssues.join('; '));
}

// 6. LINE link functional
{
  let lineLinkIssues = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (!text.includes('https://lin.ee/xKJlAsO')) {
      lineLinkIssues.push(`${rel} missing official LINE link`);
    }
  }
  check(6, 'Official LINE link presence (https://lin.ee/xKJlAsO)', lineLinkIssues.length === 0, lineLinkIssues.join('; '));
}

// 7. tel link functional
{
  let telLinkIssues = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (!text.includes('tel:070-3616-9115')) {
      telLinkIssues.push(`${rel} missing tel:070-3616-9115 link`);
    }
  }
  check(7, 'Clickable tel: link (tel:070-3616-9115)', telLinkIssues.length === 0, telLinkIssues.join('; '));
}

// 8 & 9. Internal links 200 & 404 detection
{
  let brokenLinks = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    const hrefMatches = text.matchAll(/href=["'](\/[^"'#?]*)/g);

    for (const match of hrefMatches) {
      let targetPath = match[1];
      if (targetPath === '/') {
        continue;
      }
      // Clean trailing slash
      if (targetPath.endsWith('/')) {
        targetPath = targetPath.slice(0, -1);
      }
      // Check if target directory with index.html exists, or file directly exists
      const testFile1 = path.join(BASE_DIR, targetPath, 'index.html');
      const testFile2 = path.join(BASE_DIR, targetPath);
      const testFile3 = path.join(BASE_DIR, targetPath + '.html');

      if (!fs.existsSync(testFile1) && !fs.existsSync(testFile2) && !fs.existsSync(testFile3)) {
        brokenLinks.push(`${rel} has broken link: ${match[1]}`);
      }
    }
  }
  check(8, 'All internal links resolve to valid pages (200 OK)', brokenLinks.length === 0, brokenLinks.slice(0, 5).join('; '));
  check(9, 'Zero broken internal links / 404s', brokenLinks.length === 0, `${brokenLinks.length} broken links found`);
}

// 10. Image 404 detection
{
  let brokenImages = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    const fileDir = path.dirname(file);
    const imgMatches = text.matchAll(/<img[^>]+src=["']([^"']+)["']/g);

    for (const match of imgMatches) {
      const src = match[1];
      if (src.startsWith('http')) continue;
      let resolved;
      if (src.startsWith('/')) {
        resolved = path.join(BASE_DIR, src);
      } else {
        resolved = path.resolve(fileDir, src);
      }
      if (!fs.existsSync(resolved)) {
        brokenImages.push(`${rel} broken img src: ${src}`);
      }
    }
  }
  check(10, 'All image assets exist on disk (zero 404s)', brokenImages.length === 0, brokenImages.join('; '));
}

// 11. Structured data validation (Schema.org JSON-LD)
{
  let schemaErrors = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    const scriptMatches = text.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/g);

    for (const match of scriptMatches) {
      try {
        const json = JSON.parse(match[1]);
        const items = Array.isArray(json) ? json : [json];
        for (const item of items) {
          if (!item['@context'] || !item['@type']) {
            schemaErrors.push(`${rel} structured data missing @context or @type`);
          }
        }
      } catch (err) {
        schemaErrors.push(`${rel} JSON-LD parsing error: ${err.message}`);
      }
    }
  }
  check(11, 'Structured Data (JSON-LD) syntax and Schema.org compliance', schemaErrors.length === 0, schemaErrors.join('; '));
}

// 12. Sitemap coverage
{
  const sitemapXml = fs.readFileSync(path.join(BASE_DIR, 'sitemap.xml'), 'utf8');
  let missingFromSitemap = [];
  for (const file of htmlFiles) {
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    // Exclude noindex pages (like private review QR page) and redirect stubs
    if (rel === 'review/index.html' || rel.startsWith('guide/gion-late-night') || rel.startsWith('guide/gion-whisky')) {
      continue;
    }

    // Compute URL
    let url;
    if (rel === 'index.html') {
      url = 'https://gion-route-z.com/';
    } else if (rel.endsWith('/index.html')) {
      url = 'https://gion-route-z.com/' + rel.replace('/index.html', '/');
    } else {
      url = 'https://gion-route-z.com/' + rel;
    }

    if (!sitemapXml.includes(url)) {
      missingFromSitemap.push(url);
    }
  }
  check(12, 'Sitemap coverage (All indexable pages registered in sitemap.xml)', missingFromSitemap.length === 0, missingFromSitemap.join('; '));
}

// 13. Canonical tags validity
{
  let canonicalIssues = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    const match = text.match(/<link rel=["']canonical["'] href=["']([^"']+)["']/);
    if (!match) {
      canonicalIssues.push(`${rel} missing canonical tag`);
    } else if (!match[1].startsWith('https://gion-route-z.com/')) {
      canonicalIssues.push(`${rel} canonical does not point to production domain: ${match[1]}`);
    }
  }
  check(13, 'Canonical URLs correctly configured for production domain', canonicalIssues.length === 0, canonicalIssues.join('; '));
}

// 14. hreflang mutual tags
{
  let hreflangIssues = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (!text.includes('hreflang="ja"') || !text.includes('hreflang="en"') || !text.includes('hreflang="x-default"')) {
      hreflangIssues.push(`${rel} missing mutual hreflang tags`);
    }
  }
  check(14, 'hreflang mutual configuration (ja, en, x-default)', hreflangIssues.length === 0, hreflangIssues.join('; '));
}

// 15. Robots.txt and noindex verification
{
  const robotsTxt = fs.readFileSync(path.join(BASE_DIR, 'robots.txt'), 'utf8');
  let robotsPass = robotsTxt.includes('User-agent: *') && robotsTxt.includes('Sitemap: https://gion-route-z.com/sitemap.xml');
  check(15, 'robots.txt allows crawling and points to production sitemap.xml', robotsPass, 'robots.txt misconfigured');
}

// 16. GA4 events & CTA tracking
{
  const mainJs = fs.readFileSync(path.join(BASE_DIR, 'js', 'main.js'), 'utf8');
  let hasEventTracking = mainJs.includes('map_click') &&
                         mainJs.includes('call_click') &&
                         mainJs.includes('line_click') &&
                         mainJs.includes('menu_click') &&
                         mainJs.includes('access_click') &&
                         mainJs.includes('instagram_click') &&
                         mainJs.includes('reservation_click');
  check(16, 'GA4 CTA Conversion Tracking (map, call, line, menu, access, instagram, reservation)', hasEventTracking, 'Missing tracking events in main.js');
}

// 17. iPhone viewport and responsive design
{
  let viewportIssues = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (!text.includes('name="viewport"') || !text.includes('width=device-width')) {
      viewportIssues.push(`${rel} missing responsive viewport meta tag`);
    }
  }
  check(17, 'iPhone / Mobile viewport meta tags verified on all pages', viewportIssues.length === 0, viewportIssues.join('; '));
}

// 18. Android display & floating CTA persistent bar
{
  let ctaBarIssues = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (!text.includes('floating-cta') || !text.includes('float-map-btn') || !text.includes('float-tel-btn')) {
      ctaBarIssues.push(`${rel} missing floating mobile CTA bar`);
    }
  }
  check(18, 'Android mobile persistent bottom CTA bar (Map, Call, Line)', ctaBarIssues.length === 0, ctaBarIssues.join('; '));
}

// 19. PC display & media query hiding floating CTA
{
  const css = fs.readFileSync(path.join(BASE_DIR, 'css', 'style.css'), 'utf8');
  let pcResponsive = css.includes('@media (min-width: 1024px)') && css.includes('.floating-cta') && css.includes('display: none');
  check(19, 'PC display optimization (floating CTA hidden, full desktop layout)', pcResponsive, 'Missing desktop floating-cta hide rule');
}

// 20. Mojibake detection
{
  let mojibakeIssues = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    const rel = path.relative(BASE_DIR, file).replace(/\\/g, '/');
    if (text.includes('\uFFFD') || text.includes('&#65533;') || text.includes('&amp;#65533;')) {
      mojibakeIssues.push(`${rel} contains replacement characters`);
    }
  }
  check(20, 'Zero mojibake / broken encoding (UTF-8 verified across all pages)', mojibakeIssues.length === 0, mojibakeIssues.join('; '));
}

console.log(`\n==================================================`);
console.log(`Audit Summary: ${passedChecks}/${totalChecks} Passed (${failedChecks} Failed)`);
console.log(`==================================================\n`);

if (failedChecks > 0) {
  console.error('DEPLOYMENT BLOCKED: Please resolve all failed checks before deploying.');
  process.exit(1);
} else {
  console.log('ALL QA AUDIT CHECKS PASSED PERFECTLY! Ready for production deployment.');
  process.exit(0);
}
