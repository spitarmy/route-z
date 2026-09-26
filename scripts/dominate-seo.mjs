import fs from 'fs';
import path from 'path';

const BASE_DIR = path.resolve('C:/Users/zenno/.gemini/antigravity/scratch/gion-route-z');

console.log('=== STEP 1: Replacing Postal Code 605-0062 -> 605-0062 everywhere ===');

function replaceInDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceInDir(full);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.json') || entry.name.endsWith('.js') || entry.name.endsWith('.mjs') || entry.name.endsWith('.md'))) {
      let content = fs.readFileSync(full, 'utf8');
      if (content.includes('605-0062')) {
        content = content.replace(/605-0062/g, '605-0062');
        fs.writeFileSync(full, content, 'utf8');
        console.log(`Updated postal code in: ${path.relative(BASE_DIR, full)}`);
      }
    }
  }
}

replaceInDir(BASE_DIR);

console.log('=== STEP 2: Elevating TOP page (index.html) for Rank 1-3 Domination ===');

{
  const indexPath = path.join(BASE_DIR, 'index.html');
  let indexHtml = fs.readFileSync(indexPath, 'utf8');

  // Add FAQPage Schema to structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "祇園のバーでチャージ料金や席料はいくらですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Route Zは明朗会計を採用しており、BOX席・カウンター席ともにチャージ一律1,500円（税込）です。サービス料や深夜料金などの追加費用は一切ございません。"
        }
      },
      {
        "@type": "Question",
        "name": "一人飲みや一見（初めて）でも入れますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "大歓迎です。カウンター席をご用意しており、女性のおひとり様や出張・京都観光のお客様にも多数ご利用いただいております。予約なしでもお気軽にお立ち寄りください。"
        }
      },
      {
        "@type": "Question",
        "name": "二軒目や三次会、接待のアフター利用は可能ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、最適です。20:00から深夜Lastまで営業しており、ゆったり座れるソファーBOX席やカラオケ設備も完備。八坂神社徒歩2分の好立地でディナー後の飲み直しにも選ばれています。"
        }
      },
      {
        "@type": "Question",
        "name": "どんなお酒が飲めますか？予算はどのくらいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "山崎・白州・余市などのジャパニーズウイスキー、ハイボール（¥800〜）、ビール、京都伏見の日本酒、焼酎、カクテルを取り揃えています。平均ご予算はサク飲みで約2,500円〜、ウイスキー2〜3杯で約4,000円〜5,500円（税込）です。"
        }
      },
      {
        "@type": "Question",
        "name": "キャッシュレス決済や領収書・インボイスに対応していますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Airペイを導入しており、各種クレジットカード（VISA, JCB, AMEX等）、交通系IC、PayPay、d払い、au PAY、楽天ペイに対応しています。インボイス制度対応の領収書も即時発行可能です。"
        }
      }
    ]
  };

  // Inject FAQPage into JSON-LD
  if (!indexHtml.includes('"@type": "FAQPage"')) {
    indexHtml = indexHtml.replace(
      '    }\n  ]\n  </script>',
      `    },\n    ${JSON.stringify(faqSchema, null, 4).replace(/^/gm, '    ').trim()}\n  ]\n  </script>`
    );
    console.log('Injected FAQPage schema into index.html');
  }

  // Inject "5つの安心約束" and "予算シミュレーション" and "シーン別ガイドハブ"
  const powerSections = `
  <!-- ═══ Section: 5つの安心約束（明朗会計宣言） ═══ -->
  <section class="section section--sm" style="background: var(--color-bg-card); border-top: 1px solid var(--color-divider); border-bottom: 1px solid var(--color-divider);">
    <div class="container">
      <div class="text-center reveal">
        <p class="section-label">Peace of Mind</p>
        <h2 class="section-title">祇園の夜を安心して楽しむ5つの約束</h2>
        <p style="color: var(--color-text-secondary); font-size: 0.9rem; max-width: 620px; margin: 0 auto var(--space-xl);">
          「祇園のバーはいくらかかるか不安」という声をゼロに。Route Zはお客様が心からリラックスできるよう、徹底した明朗会計と最高のおもてなしをお約束します。
        </p>
      </div>

      <div class="feature-grid reveal" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-md);">
        <div class="card" style="border-left: 3px solid var(--color-gold);">
          <h3 style="font-size: 1.05rem; color: var(--color-gold-light); margin-bottom: 6px;">① チャージ一律1,500円</h3>
          <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.8; margin: 0;">
            ゆったり寛げるBOX席も、特等席のカウンターも席料は一律1,500円（税込）。席による不公平や追加席料は一切ありません。
          </p>
        </div>
        <div class="card" style="border-left: 3px solid var(--color-gold);">
          <h3 style="font-size: 1.05rem; color: var(--color-gold-light); margin-bottom: 6px;">② サービス料・深夜料金 0円</h3>
          <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.8; margin: 0;">
            深夜Lastまで営業していますが、深夜割増料金やサービス料（10%等）の加算は0円。表示価格通りのクリーンな会計です。
          </p>
        </div>
        <div class="card" style="border-left: 3px solid var(--color-gold);">
          <h3 style="font-size: 1.05rem; color: var(--color-gold-light); margin-bottom: 6px;">③ インボイス・領収書即時対応</h3>
          <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.8; margin: 0;">
            適格請求書（インボイス制度）に対応。接待・会食・出張の経費精算用領収書をその場ですぐに発行いたします。
          </p>
        </div>
        <div class="card" style="border-left: 3px solid var(--color-gold);">
          <h3 style="font-size: 1.05rem; color: var(--color-gold-light); margin-bottom: 6px;">④ キャッシュレス完全対応</h3>
          <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.8; margin: 0;">
            Airペイ導入。各種クレジットカード（VISA, JCB等）、交通系IC、PayPay、d払い、au PAY、楽天ペイが手軽にご利用いただけます。
          </p>
        </div>
        <div class="card" style="border-left: 3px solid var(--color-gold);">
          <h3 style="font-size: 1.05rem; color: var(--color-gold-light); margin-bottom: 6px;">⑤ 一見・一人飲み大歓迎</h3>
          <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.8; margin: 0;">
            紹介や常連同伴は不要。観光・出張・おひとり様、女性客も気兼ねなくお越しいただけます。予約なしでも飛び込み歓迎です。
          </p>
        </div>
        <div class="card" style="border-left: 3px solid var(--color-gold);">
          <h3 style="font-size: 1.05rem; color: var(--color-gold-light); margin-bottom: 6px;">⑥ 全席Wi-Fi・充電可能</h3>
          <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.8; margin: 0;">
            店内Wi-Fi完備、スマートフォン等の充電器貸出対応。出張時のPCチェックや夜の連絡も安心してお過ごしいただけます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ Section: 予算シミュレーション ═══ -->
  <section class="section section--sm">
    <div class="container container--narrow">
      <div class="text-center reveal">
        <p class="section-label">Price Simulation</p>
        <h2 class="section-title">ご予算の目安・シミュレーション</h2>
        <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-bottom: var(--space-xl);">
          「今夜行くといくら？」が事前にわかる、安心の会計例です（すべて税込）。
        </p>
      </div>

      <div class="pricing-grid reveal" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-md);">
        <div class="card" style="text-align: center;">
          <p style="color: var(--color-gold); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em;">PLAN A</p>
          <h3 style="font-size: 1.15rem; margin-bottom: 8px;">サクッと1〜2杯の一人飲み</h3>
          <p style="font-size: 1.6rem; color: var(--color-gold-light); font-weight: 700; margin-bottom: 8px;">¥2,300 〜 ¥3,100</p>
          <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.8; text-align: left;">
            ・チャージ料：¥1,500<br>
            ・ハイボール：¥800<br>
            ・追加ビールまたはおつまみ：¥800<br>
            <strong>合計：¥2,300〜¥3,100（税込）</strong><br>
            <span style="color: var(--color-text-muted);">※終電前やサク飲みに最適です。</span>
          </p>
        </div>

        <div class="card" style="text-align: center; border-color: rgba(201, 164, 74, 0.4); background: rgba(201, 164, 74, 0.04);">
          <p style="color: var(--color-gold); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em;">PLAN B（人気）</p>
          <h3 style="font-size: 1.15rem; margin-bottom: 8px;">銘酒ウイスキーじっくり堪能</h3>
          <p style="font-size: 1.6rem; color: var(--color-gold-light); font-weight: 700; margin-bottom: 8px;">¥4,700 〜 ¥5,500</p>
          <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.8; text-align: left;">
            ・チャージ料：¥1,500<br>
            ・余市（¥1,200）＋ 山崎NV（¥2,000）<br>
            ・九谷焼 ルーゼクラッカー付き<br>
            <strong>合計：約¥4,700〜¥5,500（税込）</strong><br>
            <span style="color: var(--color-text-muted);">※ジャパニーズウイスキーの飲み比べに。</span>
          </p>
        </div>

        <div class="card" style="text-align: center;">
          <p style="color: var(--color-gold); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em;">PLAN C</p>
          <h3 style="font-size: 1.15rem; margin-bottom: 8px;">接待・二次会（2名様BOX利用）</h3>
          <p style="font-size: 1.6rem; color: var(--color-gold-light); font-weight: 700; margin-bottom: 8px;">¥6,000 〜</p>
          <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.8; text-align: left;">
            ・チャージ料：¥1,500 × 2名<br>
            ・それぞれお好みドリンク2〜3杯<br>
            ・ボトルキープ（半年間）も可能<br>
            <strong>合計：お一人様 約¥3,000〜¥5,000（税込）</strong><br>
            <span style="color: var(--color-text-muted);">※経費精算用領収書を即時発行。</span>
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ Section: 祇園シーン別専用ガイド（内部リンクハブ） ═══ -->
  <section class="section section--sm" style="background: var(--color-bg-card);">
    <div class="container">
      <div class="text-center reveal">
        <p class="section-label">Scene Guides</p>
        <h2 class="section-title">目的・シーンから探す祇園の夜</h2>
        <p style="color: var(--color-text-secondary); font-size: 0.9rem; max-width: 600px; margin: 0 auto var(--space-xl);">
          あなたの今夜の過ごし方に合わせて、最適なご案内をご用意しています。
        </p>
      </div>

      <div class="feature-grid reveal" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-md);">
        <a href="guide/gion-after-bar/" class="card" style="text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">深夜Lastまで営業</span>
            <h3 style="font-size: 1.05rem; color: var(--color-text-primary); margin: 4px 0 8px;">祇園 アフターバー</h3>
            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.7; margin: 0;">
              接待や同伴後の締めくくりに。BOX席完備、時間を気にせず寛げる深夜の終着駅。
            </p>
          </div>
          <span style="color: var(--color-gold); font-size: 0.82rem; margin-top: 12px; font-weight: 500;">詳しく見る →</span>
        </a>

        <a href="guide/gion-hidden-bar/" class="card" style="text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">円山ビル4F</span>
            <h3 style="font-size: 1.05rem; color: var(--color-text-primary); margin: 4px 0 8px;">祇園 バー 隠れ家</h3>
            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.7; margin: 0;">
              喧騒を離れた大人のサードプレイス。落ち着いたアンビエント照明と静謐な空間。
            </p>
          </div>
          <span style="color: var(--color-gold); font-size: 0.82rem; margin-top: 12px; font-weight: 500;">詳しく見る →</span>
        </a>

        <a href="guide/gion-second-bar/" class="card" style="text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">ディナー後に最適</span>
            <h3 style="font-size: 1.05rem; color: var(--color-text-primary); margin: 4px 0 8px;">祇園 2軒目 / 二軒目</h3>
            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.7; margin: 0;">
              京料理や会食後のサク飲み・飲み直しに。八坂神社徒歩2分の好立地。
            </p>
          </div>
          <span style="color: var(--color-gold); font-size: 0.82rem; margin-top: 12px; font-weight: 500;">詳しく見る →</span>
        </a>

        <a href="guide/gion-solo-bar/" class="card" style="text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">カウンター席</span>
            <h3 style="font-size: 1.05rem; color: var(--color-text-primary); margin: 4px 0 8px;">祇園 一人飲み</h3>
            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.7; margin: 0;">
              一見・女性の一人客・出張観光客大歓迎。バーテンダーとの心地よい距離感。
            </p>
          </div>
          <span style="color: var(--color-gold); font-size: 0.82rem; margin-top: 12px; font-weight: 500;">詳しく見る →</span>
        </a>

        <a href="guide/gion-karaoke-bar/" class="card" style="text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">歌と酒の上質空間</span>
            <h3 style="font-size: 1.05rem; color: var(--color-text-primary); margin: 4px 0 8px;">祇園 カラオケバー</h3>
            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.7; margin: 0;">
              主役は酒と会話。歌いたい夜も静かに飲みたい夜も両立できる大人のカラオケ。
            </p>
          </div>
          <span style="color: var(--color-gold); font-size: 0.82rem; margin-top: 12px; font-weight: 500;">詳しく見る →</span>
        </a>

        <a href="guide/gion-japanese-whisky/" class="card" style="text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">山崎・白州・余市</span>
            <h3 style="font-size: 1.05rem; color: var(--color-text-primary); margin: 4px 0 8px;">祇園 ジャパニーズウイスキー</h3>
            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.7; margin: 0;">
              希少銘柄も安心の適正価格でご提供。薄張りロックグラスで芳醇な香りを。
            </p>
          </div>
          <span style="color: var(--color-gold); font-size: 0.82rem; margin-top: 12px; font-weight: 500;">詳しく見る →</span>
        </a>

        <a href="guide/gion-date-bar/" class="card" style="text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">大人の夜デート</span>
            <h3 style="font-size: 1.05rem; color: var(--color-text-primary); margin: 4px 0 8px;">祇園 デート バー</h3>
            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.7; margin: 0;">
              八坂神社すぐ。九谷焼クラッカーとお酒を傾け、二人の距離を自然に縮める。
            </p>
          </div>
          <span style="color: var(--color-gold); font-size: 0.82rem; margin-top: 12px; font-weight: 500;">詳しく見る →</span>
        </a>

        <a href="en/gion-bar/" class="card" style="text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">English Guide</span>
            <h3 style="font-size: 1.05rem; color: var(--color-text-primary); margin: 4px 0 8px;">Gion Bar Kyoto (EN)</h3>
            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.7; margin: 0;">
              Authentic Japanese whisky bar for international travelers. Transparent cover charge ¥1,500.
            </p>
          </div>
          <span style="color: var(--color-gold); font-size: 0.82rem; margin-top: 12px; font-weight: 500;">English Guide →</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ═══ Section: FAQ（よくある質問） ═══ -->
  <section class="section">
    <div class="container container--narrow">
      <div class="text-center reveal">
        <p class="section-label">FAQ</p>
        <h2 class="section-title">よくあるご質問</h2>
        <div class="divider" style="margin-bottom: var(--space-xl);"></div>
      </div>

      <div class="faq-list reveal">
        <div class="faq-item">
          <button class="faq-question">
            <span>チャージ料金や追加料金はいくらですか？</span>
            <span class="faq-question__icon">+</span>
          </button>
          <div class="faq-answer">
            <p>BOX席・カウンター席ともにチャージ一律1,500円（税込）です。サービス料や深夜割増料金は一切頂戴しておりません。「チャージ料＋ご注文のドリンク代」のみの明朗会計です。</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>一人飲みや一見（初めて）でも大丈夫ですか？</span>
            <span class="faq-question__icon">+</span>
          </button>
          <div class="faq-answer">
            <p>大歓迎です。特におひとり様や出張・観光客の方、女性のお客様も多くお越しいただいております。予約なしでもふらっとお立ち寄りいただけます。</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>二軒目や接待アフターでの利用はできますか？</span>
            <span class="faq-question__icon">+</span>
          </button>
          <div class="faq-answer">
            <p>はい、非常に多くご利用いただいております。20:00〜深夜Lastまで営業しており、ゆったり座れるソファーBOX席、ボトルキープ（半年間）、カラオケも備えています。八坂神社から徒歩2分とアクセスも良好です。</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>領収書・インボイス制度に対応していますか？</span>
            <span class="faq-question__icon">+</span>
          </button>
          <div class="faq-answer">
            <p>はい、適格請求書発行事業者に登録済みですので、インボイス対応の領収書を即時発行いたします。会社の経費精算や接待利用もご安心ください。</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>キャッシュレス決済は何が使えますか？</span>
            <span class="faq-question__icon">+</span>
          </button>
          <div class="faq-answer">
            <p>Airペイを導入しております。クレジットカード（VISA, Mastercard, JCB, AMEX, Diners, Discover, 銀聯）、交通系IC（Suica, ICOCA等）、iD、QUICPay、QR決済（PayPay, d払い, au PAY, 楽天ペイ）がご利用いただけます。</p>
          </div>
        </div>
      </div>

      <div class="text-center reveal" style="margin-top: var(--space-xl);">
        <a href="faq/" class="btn btn--outline">その他のFAQ一覧を見る →</a>
      </div>
    </div>
  </section>
`;

  if (!indexHtml.includes('祇園の夜を安心して楽しむ5つの約束')) {
    indexHtml = indexHtml.replace(
      '  <!-- ═══ Section: Access Preview ═══ -->',
      `${powerSections}\n  <!-- ═══ Section: Access Preview ═══ -->`
    );
    console.log('Injected power conversion & SEO sections into index.html');
  }

  // Update nearest landmarks with exact distances
  indexHtml = indexHtml.replace(
    '八坂神社、円山公園より徒歩すぐ<br>\n              祇園四条駅より徒歩約10分',
    '八坂神社（西楼門より徒歩2分 / 150m）<br>\n              円山公園（徒歩3分） ｜ 祇園四条駅（徒歩10分）<br>\n              花見小路（徒歩5分） ｜ 知恩院（徒歩5分）'
  );

  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('index.html fully elevated!');
}

console.log('=== STEP 3: Ensuring all files have updated Postal Code ===');
replaceInDir(BASE_DIR);

console.log('=== DONE ===');
