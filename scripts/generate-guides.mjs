import fs from 'fs';
import path from 'path';

const BASE_DIR = path.resolve('C:/Users/zenno/.gemini/antigravity/scratch/gion-route-z');
const config = JSON.parse(fs.readFileSync(path.join(BASE_DIR, 'business-config.json'), 'utf8')).business;

const guides = [
  {
    dir: 'guide/gion-after-bar',
    slug: 'gion-after-bar',
    title: '祇園のアフターバーならRoute Z｜深夜営業Last・接待や同伴後の上質な終点',
    description: '京都・祇園で接待のアフターや同伴後の利用に選ばれる隠れ家バーRoute Z。20:00〜Lastの深夜営業対応。ゆったり寛げるBOX席（チャージ一律¥1,500・サービス料なし）で、美味しいウイスキーと上質な夜の締めくくりをご提供します。',
    h1: '祇園の夜を締めくくる、上質なアフターバー。',
    subtitle: '接待・同伴後の2軒目・3軒目に｜深夜Lastまで営業・明朗会計',
    keyword: '祇園 アフターバー',
    breadcrumbs: '祇園 アフターバー',
    intro: '祇園での会食や接待、お茶屋遊びやクラブ・ラウンジの同伴後、「もう1軒、静かに上質なお酒を楽しめる場所」をお探しではありませんか？Route Zは八坂神社すぐ、円山ビル4Fに佇む隠れ家バーです。深夜まで営業し、ゆったり寛げるBOX席で大切な方との語らいをサポートいたします。',
    sections: [
      {
        heading: '祇園のアフター利用にRoute Zが選ばれる3つの理由',
        content: `
          <div class="guide-feature-box">
            <h4>1. 深夜Lastまで営業・時間を気にせず寛げる</h4>
            <p>20:00オープンから深夜Lastまで営業。深夜帯でも落ち着いた大人の空間をキープしており、終電後や他のお店の閉店後でも安心してご来店いただけます。</p>
          </div>
          <div class="guide-feature-box">
            <h4>2. 接待・同伴にも最適なBOX席（チャージ一律¥1,500）</h4>
            <p>ゆったり座れるソファーのBOX席を完備。祇園エリアでは珍しい「チャージ一律¥1,500・サービス料なし・深夜料金なし」の完全明朗会計です。接待のホスト様も安心してご利用いただけます。</p>
          </div>
          <div class="guide-feature-box">
            <h4>3. 上質なウイスキーと良いグラスでのおもてなし</h4>
            <p>山崎、白州、余市などの希少なジャパニーズウイスキーをはじめ、上質なスコッチやハイボールを取り揃え。こだわりのグラスで一杯一杯丁寧にお注ぎします。</p>
          </div>
        `
      },
      {
        heading: 'アフター利用におすすめのシーンと過ごし方',
        content: `
          <p><strong>接待のアフター・二次会</strong>：静かに本音で語り合える空間として。ボトルキープ（半年間）も可能です。</p>
          <p><strong>同伴後や歓楽街の締めくくり</strong>：カラオケ設備も備えており、歌いたい夜も静かに飲みたい夜も柔軟に対応できます。</p>
          <p><strong>サクッと1杯だけの一人飲み</strong>：カウンター席もございますので、仕事終わりのクールダウンにも最適です。</p>
        `
      }
    ]
  },
  {
    dir: 'guide/gion-hidden-bar',
    slug: 'gion-hidden-bar',
    title: '祇園の隠れ家バー Route Z｜円山ビル4F・大人が静かに寛げるサードプレイス',
    description: '京都・祇園の雑踏から離れた円山ビル4Fに佇む隠れ家バーRoute Z。一見さん・一人飲み歓迎。チャージ一律¥1,500の明朗会計で、厳選ウイスキーやクラフトドリンクを落ち着いたアンビエント照明の中で心ゆくまで楽しめます。',
    h1: '知る人ぞ知る、祇園4Fの隠れ家バー。',
    subtitle: '雑踏を離れた円山ビル4F｜落ち着いた大人のサードプレイス',
    keyword: '祇園 バー 隠れ家',
    breadcrumbs: '祇園 バー 隠れ家',
    intro: '祇園・東山エリアの賑やかな通りから少し足を踏み入れた円山ビル4F。エレベーターを降りると、そこには外の喧騒を忘れさせる静謐で落ち着いた空間が広がります。初めて訪れる方でも緊張せず、大人が肩の力を抜いて過ごせるサードプレイスが「Route Z」です。',
    sections: [
      {
        heading: '4Fという立地がもたらすプライベート感と寛ぎ',
        content: `
          <p>路面店のように外からの視線を気にすることなく、自分だけの時間をじっくり堪能できるのが4F隠れ家の最大の魅力です。心地よい音響と柔らかな間接照明が、一日の疲れをやさしく解きほぐします。</p>
          <div class="guide-feature-box">
            <h4>「初めてでも安心」明朗なチャージ制</h4>
            <p>隠れ家バーと聞くと敷居が高いイメージがあるかもしれませんが、Route ZはBOX席・カウンター席ともにチャージ一律¥1,500（税込・サービス料なし）。メニューにも価格を明確に記載しており、安心してご注文いただけます。</p>
          </div>
        `
      },
      {
        heading: '名物「ルーゼクラッカー」と楽しむ一杯',
        content: `
          <p>お酒のペアリングとして人気なのが、当店オリジナルの「ルーゼクラッカー」。美しい九谷焼の皿に、チョコレート、ブルスケッタ、キムチ、チーズ、オリーブなど厳選トッピングを添えてご提供。ウイスキーやワインの芳醇な香りを引き立てます。</p>
        `
      }
    ]
  },
  {
    dir: 'guide/gion-karaoke-bar',
    slug: 'gion-karaoke-bar',
    title: '祇園のカラオケバーならRoute Z｜お酒と会話が主役の上質な大人の二次会空間',
    description: '京都・祇園でカラオケを楽しめる大人のバーRoute Z。ボックス席完備で宴会後の二次会やグループ利用に最適。カラオケボックスとは一線を画す落ち着いたシックな空間で、本格ウイスキーやカクテルとともに歌と会話をお楽しみいただけます。',
    h1: 'お酒と会話が主役の上質なカラオケ空間。',
    subtitle: '祇園での二次会・グループ飲みに｜シックな大人のカラオケバー',
    keyword: '祇園 カラオケバー',
    breadcrumbs: '祇園 カラオケバー',
    intro: '「仲間と楽しく歌いたいけれど、騒がしいカラオケ店ではなく、上質なお酒と心地よい空間で過ごしたい」——そんな大人の夜のわがままを叶えるのがRoute Zです。当店は本格バーの上質感をそのままに、カラオケ設備を備えたハイブリッドな空間をご用意しています。',
    sections: [
      {
        heading: '一般的なカラオケ店との決定的な3つの違い',
        content: `
          <div class="guide-feature-box">
            <h4>1. バーテンダーが作る本格的なドリンク</h4>
            <p>居酒屋の飲み放題とは一線を画し、山崎や白州、本格スコッチ、こだわりのビール・日本酒をご提供。お酒好きのメンバーも納得のクオリティです。</p>
          </div>
          <div class="guide-feature-box">
            <h4>2. BOX席でグループの一体感を演出</h4>
            <p>ゆったり座れるソファーBOX席で、気の置けない仲間との二次会・三次会に最適。チャージ一律¥1,500（サービス料なし）の明朗会計です。</p>
          </div>
          <div class="guide-feature-box">
            <h4>3. 「歌いたい夜も、静かに飲みたい夜も」</h4>
            <p>音響バランスに配慮しており、歌う方だけでなく、会話やお酒を楽しみたい方にも居心地の良い空間設計を心がけています。</p>
          </div>
        `
      },
      {
        heading: '二次会・歓送迎会・打ち上げでのご利用案内',
        content: `
          <p>祇園四条駅・八坂神社すぐの好立地のため、先斗町や木屋町、祇園の料亭・割烹でのディナー後の移動もスムーズです。空席状況はお電話または公式LINEよりリアルタイムでお問い合わせいただけます。</p>
        `
      }
    ]
  },
  {
    dir: 'guide/gion-second-bar',
    slug: 'gion-second-bar',
    title: '祇園の2軒目・二軒目バーならRoute Z｜ディナー後のサク飲み・飲み直しに最適',
    description: '京都・祇園でのディナーや会食後の2軒目・二軒目に最適なBar Route Z。八坂神社徒歩2分。チャージ一律¥1,500・サービス料なしの安心会計。ハイボール¥800〜、厳選ジャパニーズウイスキーを良質なグラスで気軽に楽しめます。',
    h1: '祇園の食事の後は、心地よい2軒目へ。',
    subtitle: '八坂神社徒歩2分｜ディナー後の飲み直し・サードプレイスに最適',
    keyword: '祇園 2軒目',
    breadcrumbs: '祇園 2軒目・二軒目',
    intro: '祇園の名店で美味しい京料理や会食を楽しんだ後、「もうちょっと話したい」「最後においしいハイボールやウイスキーを飲んで締めくくりたい」という時に最適なのがRoute Zです。八坂神社から徒歩2分の円山ビル4Fで、落ち着いた2軒目の時間をお届けします。',
    sections: [
      {
        heading: '食事終わりの2軒目にRoute Zがちょうどいい理由',
        content: `
          <div class="guide-feature-box">
            <h4>お腹がいっぱいでも楽しめる軽やかなペアリング</h4>
            <p>当店ではしっかりした料理ではなく、乾き物や名物「ルーゼクラッカー」など、お酒を引き立てるおつまみを中心にご用意。ディナー後のお腹に負担をかけず、お酒の余韻を味わえます。</p>
          </div>
          <div class="guide-feature-box">
            <h4>サクッと1〜2杯でも大歓迎</h4>
            <p>「終電までの30分だけ」「タクシーを呼ぶ前に1杯だけ」といったクイック利用も大歓迎。カウンター席ですっきりとハイボール（¥800）を傾けていただけます。</p>
          </div>
          <div class="guide-feature-box">
            <h4>明朗会計で割り勘もスムーズ</h4>
            <p>チャージ一律¥1,500（税込・サービス料なし）。各種クレジットカードや交通系IC、PayPay等のQR決済に対応しているため、二次会の会計もスマートです。</p>
          </div>
        `
      }
    ]
  },
  {
    dir: 'guide/gion-solo-bar',
    slug: 'gion-solo-bar',
    title: '祇園で一人飲みならBar Route Z｜一見歓迎・女性の一人客も安心のカウンター席',
    description: '京都・祇園で一人飲みを楽しむなら隠れ家バーRoute Z。八坂神社すぐ円山ビル4F。カウンター席チャージ¥1,500・サービス料なしの明朗会計。観光客や出張中の方、女性の一人飲みも温かく歓迎。バーテンダーとの心地よい距離感で寛げます。',
    h1: '京都・祇園の夜、ふらっと気ままな一人飲み。',
    subtitle: '一見様・女性おひとりでも安心｜カウンター席・明朗会計',
    keyword: '祇園 一人飲み',
    breadcrumbs: '祇園 一人飲み',
    intro: '「祇園のバーで一人飲みをしてみたいけれど、常連ばかりで入りづらいのでは…」「ぼったくりが心配」という方もご安心ください。Route Zは一見様・おひとり様大歓迎のバーです。適度な距離感の接客と明朗な料金システムで、肩肘張らずに自分だけの夜をお過ごしいただけます。',
    sections: [
      {
        heading: '一人飲みが心地よくなるRoute Zのこだわり',
        content: `
          <div class="guide-feature-box">
            <h4>居心地のよいカウンター席</h4>
            <p>バーテンダーとの会話を楽しみたい時も、一人静かにスマートフォンのチェックや読書をしたい時も、お客様の空気に合わせた居心地を提供します。</p>
          </div>
          <div class="guide-feature-box">
            <h4>一杯一杯、お好みに合わせてご提案</h4>
            <p>「甘めのカクテル」「スモーキーなウイスキー」「京都らしいお酒」など、気分に合わせて一杯をご提案。ウイスキー初心者の方も大歓迎です。</p>
          </div>
          <div class="guide-feature-box">
            <h4>出張・京都観光の夜にも</h4>
            <p>祇園四条駅や八坂神社に近く、周辺ホテルからのアクセスも抜群。京都滞在の思い出に残る一杯をお楽しみいただけます。</p>
          </div>
        `
      }
    ]
  },
  {
    dir: 'guide/gion-date-bar',
    slug: 'gion-date-bar',
    title: '祇園のデートバーならRoute Z｜八坂神社すぐ・大人の夜を演出する隠れ家Bar',
    description: '京都・祇園の夜デートに選ばれる隠れ家Bar Route Z。八坂神社徒歩2分、円山ビル4F。シックな照明とジャパニーズウイスキー、九谷焼で楽しむクラッカー。落ち着いた雰囲気と明朗会計（チャージ一律¥1,500）で、二人の特別な時間を演出します。',
    h1: '祇園の夜デートを彩る、大人の隠れ家バー。',
    subtitle: '八坂神社すぐ｜シックな照明と上質なお酒で二人の距離を縮める',
    keyword: '祇園 デート バー',
    breadcrumbs: '祇園 デート バー',
    intro: '東山・祇園の夜デート。ライトアップされた八坂神社や花見小路を散策した後の締めくくりには、落ち着いて語り合える上質なバーが欠かせません。Route Zは4Fのプライベート感と洗練されたアンビエント照明で、二人の夜を上品に演出します。',
    sections: [
      {
        heading: 'デートにRoute Zがおすすめの理由',
        content: `
          <div class="guide-feature-box">
            <h4>洗練された空間と九谷焼のクラッカー</h4>
            <p>当店自慢のルーゼクラッカーは、伝統工芸・九谷焼の美しい皿でお出しします。見た目の美しさと多彩なトッピングが、二人の会話のきっかけに。</p>
          </div>
          <div class="guide-feature-box">
            <h4>二人の距離が近づくカウンター＆BOX席</h4>
            <p>横並びで親密に語らえるカウンター席、ゆったりと深く寛げるBOX席。デートのシチュエーションに合わせてお選びいただけます。</p>
          </div>
          <div class="guide-feature-box">
            <h4>スマートなキャッシュレス会計</h4>
            <p>チャージ一律¥1,500・サービス料なしの明朗設計。Airペイによる各種カード・QR決済対応で、お会計もスムーズかつスマートです。</p>
          </div>
        `
      }
    ]
  },
  {
    dir: 'guide/gion-japanese-whisky',
    slug: 'gion-japanese-whisky',
    title: '祇園でジャパニーズウイスキーを飲むならRoute Z｜山崎・白州・余市・竹鶴の品揃え',
    description: '京都・祇園の隠れ家Bar Route Z。世界中で人気の山崎NV（¥2,000）、白州（¥2,000）、竹鶴（¥2,000）、余市（¥1,200）、知多（¥1,200）などのジャパニーズウイスキーを適正な明朗価格でご提供。良質なロックグラスで芳醇な香りをご堪能ください。',
    h1: '祇園で味わう、ジャパニーズウイスキーの真髄。',
    subtitle: '山崎・白州・竹鶴・余市・知多｜良い酒を、良いグラスで適正価格にて',
    keyword: '祇園 ジャパニーズウイスキー',
    breadcrumbs: '祇園 ジャパニーズウイスキー',
    intro: '世界的な高評価により、近年希少価値が高まっているジャパニーズウイスキー。祇園のRoute Zでは、山崎、白州、竹鶴、余市、宮城峡、知多など、日本が世界に誇る名銘柄を取り揃えております。観光客向けの高額設定ではなく、安心の適正価格でお楽しみいただけます。',
    sections: [
      {
        heading: 'Route Zの主なジャパニーズウイスキーラインナップ',
        content: `
          <div class="guide-feature-box">
            <h4>主要ラインナップ（すべて税込価格）</h4>
            <ul style="list-style: none; padding-left: 0; line-height: 2.2;">
              <li><strong>山崎 NV</strong> — ¥2,000 / BT ¥25,000（華やかで甘やかな香りと重厚な味わい）</li>
              <li><strong>白州</strong> — ¥2,000 / BT ¥25,000（南アルプスの天然水が生む爽やかで軽快なキレ）</li>
              <li><strong>竹鶴</strong> — ¥2,000 / BT ¥25,000（ニッカ伝統のピュアモルト、深いコクとまろやかさ）</li>
              <li><strong>宮城峡</strong> — ¥1,800 / BT ¥23,000（華やかでフルーティーな香りと滑らかな口当たり）</li>
              <li><strong>余市</strong> — ¥1,200 / BT ¥16,000（力強いピート香とスモーキーな余韻）</li>
              <li><strong>知多</strong> — ¥1,200 / BT ¥16,000（軽やかな風のハイボールに最適）</li>
              <li><strong>角 / サントリーオールド</strong> — ¥800（定番の親しみやすさと安定のクオリティ）</li>
            </ul>
          </div>
        `
      },
      {
        heading: '良い酒を、良いグラスで',
        content: `
          <p>ウイスキーの香りと口当たりは、グラスの形状と薄さで大きく変わります。当店ではこだわりのグラスに丁寧な氷を配し、ストレート、オン・ザ・ロック、ハイボールなど、お客様のお好みに合わせた最高の状態でご提供します。</p>
        `
      }
    ]
  },
  {
    dir: 'en/gion-bar',
    slug: 'gion-bar',
    title: 'Gion Bar Route Z Kyoto — Authentic Japanese Whisky & Hidden Bar near Yasaka Shrine',
    description: 'Looking for a genuine bar in Gion, Kyoto? Bar Route Z is an authentic 4F hidden bar near Yasaka Shrine. Transparent pricing (Table charge ¥1,500, no service fee, tax included). Enjoy Yamazaki, Hakushu, Yoichi Japanese whiskies, cocktails, and karaoke until late night.',
    h1: 'An Authentic Hidden Bar in Gion, Kyoto.',
    subtitle: 'Near Yasaka Shrine & Maruyama Park 4F｜Genuine Japanese Whisky & Late Night Hospitality',
    keyword: 'gion bar kyoto',
    breadcrumbs: 'Gion Bar Kyoto Guide',
    isEn: true,
    intro: 'Welcome to Route Z, a cozy hidden bar nestled on the 4th floor of Maruyama Building in the historic Gion district of Kyoto. Just a 2-minute walk from Yasaka Shrine, Route Z offers an authentic Japanese bar experience without tourist markups or surprise fees.',
    sections: [
      {
        heading: 'Why International Visitors Choose Route Z in Gion',
        content: `
          <div class="guide-feature-box">
            <h4>1. 100% Transparent Pricing (No Hidden Tourist Fees)</h4>
            <p>Unlike some entertainment venues in nightlife districts, Route Z follows an honest and clear pricing rule: Table Charge is fixed at <strong>¥1,500 per person</strong>. All prices include consumption tax, and there is <strong>NO extra service charge (0%)</strong> or late-night fee. You only pay for your seating charge plus what you drink.</p>
          </div>
          <div class="guide-feature-box">
            <h4>2. Premium Japanese Whisky Collection</h4>
            <p>Taste iconic Japanese whiskies including Yamazaki (¥2,000), Hakushu (¥2,000), Taketsuru (¥2,000), Yoichi (¥1,200), and Chita (¥1,200). Served with crystal-clear ice in fine glassware.</p>
          </div>
          <div class="guide-feature-box">
            <h4>3. Cashless & English Friendly</h4>
            <p>We accept international credit cards (VISA, Mastercard, JCB, AMEX, Diners, Discover, UnionPay) and smartphone payments via AirPAY. English menu available, and solo travelers are warmly welcomed.</p>
          </div>
          <div class="guide-feature-box">
            <h4>4. Open Until Late Night</h4>
            <p>Open from 20:00 until late night (Last). Perfect after a stroll around Gion, dinner in Pontocho, or sightseeing at Yasaka Shrine.</p>
          </div>
        `
      },
      {
        heading: 'How to Find Us on the 4th Floor',
        content: `
          <p>Route Z is located on the 4th floor of Maruyama Building (林下町422 円山ビル4F). Enter the ground floor entrance and take the elevator directly to 4F. If you have any trouble finding the building, simply open Google Maps or call us directly.</p>
        `
      }
    ]
  }
];

for (const g of guides) {
  const fullDir = path.join(BASE_DIR, g.dir);
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }

  const isEn = !!g.isEn;
  const canonicalUrl = `https://gion-route-z.com/${g.dir}/`;
  const rootRel = isEn ? '../../' : '../../';

  const html = `<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'ja'}">

<head>
    <meta charset="UTF-8">
    <meta name="google-site-verification" content="fbmY9b91koMnHaoPvO0IB1TQWQoI2RT6o6DKHTP9VI4" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${g.title}</title>
    <meta name="description" content="${g.description}">
    <link rel="canonical" href="${canonicalUrl}">
    <link rel="alternate" hreflang="ja" href="https://gion-route-z.com/${isEn ? 'guide/gion-hidden-bar/' : g.dir + '/'}">
    <link rel="alternate" hreflang="en" href="https://gion-route-z.com/en/gion-bar/">
    <link rel="alternate" hreflang="x-default" href="https://gion-route-z.com/">
    <link rel="icon" type="image/svg+xml" href="${rootRel}images/logo.svg">
    <link rel="stylesheet" href="${rootRel}css/style.css">

    <!-- Open Graph -->
    <meta property="og:title" content="${g.title}">
    <meta property="og:description" content="${g.description}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="https://gion-route-z.com/images/hero-bar.png">
    <meta property="og:site_name" content="Route Z">

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "${isEn ? 'Home' : 'TOP'}",
            "item": "https://gion-route-z.com/${isEn ? 'en/' : ''}"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "${g.breadcrumbs}",
            "item": "${canonicalUrl}"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BarOrPub",
        "name": "Route Z",
        "image": "https://gion-route-z.com/images/hero-bar.png",
        "telephone": "+81-70-3616-9115",
        "url": "${canonicalUrl}",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "林下町422 円山ビル4F",
          "addressLocality": "京都市東山区",
          "addressRegion": "京都府",
          "postalCode": "615-8252",
          "addressCountry": "JP"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 35.00332,
          "longitude": 135.77764
        },
        "openingHours": "Mo-Su 20:00-05:00",
        "priceRange": "¥1,500〜¥4,000",
        "paymentAccepted": "Cash, Credit Card, Transportation IC, iD, QUICPay, PayPay, d-Barai, au PAY, Rakuten Pay"
      }
    ]
    </script>
</head>

<body>

    <header class="header" id="header">
        <div class="container">
            <a href="${isEn ? '/en/' : '/'}" class="header__logo">Route Z</a>
            <nav class="nav">
                <ul class="nav__list">
                    <li><a href="${isEn ? '/en/#concept' : '/concept/'}" class="nav__link">${isEn ? 'Concept' : 'Concept'}</a></li>
                    <li><a href="${isEn ? '/en/#menu' : '/menu/'}" class="nav__link">${isEn ? 'Menu' : 'Menu'}</a></li>
                    <li><a href="${isEn ? '/en/#system' : '/system/'}" class="nav__link">${isEn ? 'System' : 'System'}</a></li>
                    <li><a href="${isEn ? '/en/#access' : '/access/'}" class="nav__link">${isEn ? 'Access' : 'Access'}</a></li>
                    ${isEn ? '' : '<li><a href="/faq/" class="nav__link">FAQ</a></li>'}
                    ${isEn ? '' : '<li><a href="/contact/" class="nav__link">Contact</a></li>'}
                    <li><a href="${isEn ? '/' : '/en/'}" class="nav__link" style="color: var(--color-gold); font-size: 0.8rem;">${isEn ? '日本語' : 'English'}</a></li>
                </ul>
            </nav>
            <button class="mobile-menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
    </header>

    <div class="mobile-nav" id="mobile-nav">
        <div>
            <ul class="mobile-nav__list">
                <li><a href="${isEn ? '/en/' : '/'}" class="mobile-nav__link">${isEn ? 'Top' : 'Top'}</a></li>
                <li><a href="${isEn ? '/en/#concept' : '/concept/'}" class="mobile-nav__link">Concept</a></li>
                <li><a href="${isEn ? '/en/#menu' : '/menu/'}" class="mobile-nav__link">Menu</a></li>
                <li><a href="${isEn ? '/en/#system' : '/system/'}" class="mobile-nav__link">System</a></li>
                <li><a href="${isEn ? '/en/#access' : '/access/'}" class="mobile-nav__link">Access</a></li>
                ${isEn ? '' : '<li><a href="/faq/" class="mobile-nav__link">FAQ</a></li>'}
                ${isEn ? '' : '<li><a href="/contact/" class="mobile-nav__link">Contact</a></li>'}
                <li><a href="${isEn ? '/' : '/en/'}" class="mobile-nav__link" style="color: var(--color-gold);">${isEn ? '日本語サイト' : 'English Page'}</a></li>
            </ul>
            <div class="mobile-nav__info">
                <p>20:00 — Last</p>
                <p>京都市東山区林下町422 円山ビル4F</p>
                <p><a href="tel:070-3616-9115" style="color: var(--color-gold);">070-3616-9115</a></p>
            </div>
        </div>
    </div>

    <!-- Page Header -->
    <div class="page-header">
        <div class="container">
            <nav class="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                    <li><a href="${isEn ? '/en/' : '/'}">${isEn ? 'Home' : 'TOP'}</a></li>
                    <li aria-current="page">${g.breadcrumbs}</li>
                </ol>
            </nav>
            <p class="section-label reveal">${isEn ? 'Guide & Features' : '祇園 Bar Route Z ガイド'}</p>
            <h1 class="section-title reveal">${g.h1}</h1>
            <p class="section-subtitle reveal">${g.subtitle}</p>
        </div>
    </div>

    <!-- Main Content -->
    <article class="section">
        <div class="container">
            <div class="guide-article">
                <p class="guide-intro-lead reveal">${g.intro}</p>

                ${g.sections.map(s => `
                <div class="guide-section reveal">
                    <h2>${s.heading}</h2>
                    ${s.content}
                </div>
                `).join('')}

                <!-- Pricing & System Snapshot -->
                <div class="guide-section reveal">
                    <h2>${isEn ? 'System & Pricing Snapshot' : '料金システム（明朗会計）'}</h2>
                    <div class="pricing-grid" style="margin-top: var(--space-md);">
                        <div class="pricing-card">
                            <p class="pricing-card__type">Box Seat</p>
                            <p class="pricing-card__price">¥1,500 <small>${isEn ? '/ person' : '/ 1名'}</small></p>
                            <p class="pricing-card__note">${isEn ? 'Spacious sofa seating' : 'ゆったり寛げるBOX席'}</p>
                        </div>
                        <div class="pricing-card">
                            <p class="pricing-card__type">Counter Seat</p>
                            <p class="pricing-card__price">¥1,500 <small>${isEn ? '/ person' : '/ 1名'}</small></p>
                            <p class="pricing-card__note">${isEn ? 'Ideal for solo visitors or pairs' : '一人飲みでも気軽に'}</p>
                        </div>
                    </div>
                    <p style="color: var(--color-text-muted); font-size: 0.8rem; margin-top: var(--space-sm); text-align: center;">
                        ${isEn ? '※ All prices include tax. No service fee or late-night fee.' : '※すべて税込価格です。サービス料・深夜料金などの追加費用は一切ございません。'}
                    </p>
                </div>

                <!-- Action CTA Box -->
                <div class="guide-cta-box reveal">
                    <p class="section-label" style="margin-bottom: var(--space-xs);">${isEn ? 'Visit Us Tonight' : '今夜の一杯をRoute Zで'}</p>
                    <h3 style="font-size: 1.3rem; color: var(--color-gold-light); margin-bottom: var(--space-sm);">${isEn ? 'Drop in without reservation, or check seats via LINE' : '予約なしでのご来店・空席確認もお気軽に'}</h3>
                    <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-bottom: var(--space-lg); line-height: 1.8;">
                        ${isEn ? 'Maruyama Bldg 4F, Higashiyama-ku, Kyoto. Just 2 mins walk from Yasaka Shrine.' : '京都府京都市東山区林下町422 円山ビル4F（八坂神社すぐ・祇園四条駅徒歩10分）'}
                    </p>
                    <div class="btn-group">
                        <a href="https://www.google.com/maps/search/?api=1&query=京都市東山区林下町422+円山ビル" target="_blank"
                            rel="noopener" class="btn btn--primary" data-action="map_click">📍 Google Map</a>
                        <a href="tel:070-3616-9115" class="btn btn--outline" data-action="call_click">📞 ${isEn ? 'Call Store' : 'お電話'}</a>
                        <a href="https://lin.ee/xKJlAsO" target="_blank" rel="noopener" class="btn btn--outline" data-action="line_click">💬 LINE</a>
                    </div>
                </div>

                <!-- Navigation Back Links -->
                <div style="margin-top: var(--space-2xl); text-align: center; border-top: 1px solid var(--color-divider); padding-top: var(--space-xl);">
                    <a href="${isEn ? '/en/' : '/'}" class="btn btn--ghost">← ${isEn ? 'Back to Home' : 'トップページへ戻る'}</a>
                    <a href="${isEn ? '/en/#menu' : '/menu/'}" class="btn btn--ghost" data-action="menu_click">${isEn ? 'View Menu' : 'ドリンクメニューを見る'} →</a>
                    <a href="${isEn ? '/en/#access' : '/access/'}" class="btn btn--ghost" data-action="access_click">${isEn ? 'Access & Map' : 'アクセス・写真付き道順'} →</a>
                </div>
            </div>
        </div>
    </article>

    <!-- Footer -->
    <footer class="footer" id="footer">
        <div class="container">
            <div class="footer__grid">
                <div class="footer__brand">
                    <span class="footer__logo">Route Z</span>
                    <p class="footer__desc">
                        京都・祇園の隠れ家Bar。八坂神社のほど近く、円山ビル4Fに佇む上質な夜の終点。ウイスキーを中心に、ビール・日本酒・焼酎・梅酒まで、良い酒を良いグラスで。
                    </p>
                    <div class="footer__social" style="margin-top: var(--space-md);">
                        <a href="https://www.instagram.com/gion_route_z?igsh=dDF6cGpldXZpN2lh&utm_source=qr"
                            target="_blank" rel="noopener" class="footer__social-link" aria-label="Instagram" data-action="instagram_click">📷</a>
                        <a href="https://lin.ee/xKJlAsO" target="_blank" rel="noopener"
                            class="footer__social-link" aria-label="LINE" data-action="line_click">💬</a>
                        <a href="https://www.google.com/maps/search/?api=1&query=京都市東山区林下町422+円山ビル" target="_blank"
                            rel="noopener" class="footer__social-link" aria-label="Google Map" data-action="map_click">📍</a>
                    </div>
                </div>
                <div>
                    <p class="footer__nav-title">Navigation</p>
                    <div class="footer__links">
                        <a href="/concept/" class="footer__link">Concept</a>
                        <a href="/menu/" class="footer__link">Menu</a>
                        <a href="/system/" class="footer__link">System</a>
                        <a href="/access/" class="footer__link">Access</a>
                    </div>
                </div>
                <div>
                    <p class="footer__nav-title">Guides</p>
                    <div class="footer__links">
                        <a href="/guide/gion-after-bar/" class="footer__link">祇園 アフターバー</a>
                        <a href="/guide/gion-hidden-bar/" class="footer__link">祇園 バー 隠れ家</a>
                        <a href="/guide/gion-karaoke-bar/" class="footer__link">祇園 カラオケバー</a>
                        <a href="/guide/gion-second-bar/" class="footer__link">祇園 2軒目</a>
                        <a href="/guide/gion-solo-bar/" class="footer__link">祇園 一人飲み</a>
                        <a href="/guide/gion-date-bar/" class="footer__link">祇園 デート バー</a>
                        <a href="/guide/gion-japanese-whisky/" class="footer__link">祇園 ジャパニーズウイスキー</a>
                        <a href="/en/gion-bar/" class="footer__link">Gion Bar Kyoto (EN)</a>
                    </div>
                </div>
                <div>
                    <p class="footer__nav-title">Access</p>
                    <div class="footer__links">
                        <span class="footer__link" style="cursor: default; font-size: 0.82rem;">
                            〒615-8252<br>
                            京都市東山区林下町422<br>
                            円山ビル4F
                        </span>
                        <span class="footer__link" style="cursor: default; font-size: 0.82rem;">
                            20:00 — Last
                        </span>
                    </div>
                </div>
            </div>

            <div class="footer__bottom">
                <p class="footer__copyright">© 2025 Route Z. All rights reserved.</p>
                <a href="/privacy/" class="footer__policy">Privacy Policy</a>
            </div>
        </div>
    </footer>

    <!-- Floating CTA -->
    <div class="floating-cta" id="floating-cta">
        <a href="https://www.google.com/maps/search/?api=1&query=京都市東山区林下町422+円山ビル" target="_blank" rel="noopener" class="btn btn--outline" id="float-map-btn" data-action="map_click">📍 Map</a>
        <a href="https://lin.ee/xKJlAsO" target="_blank" rel="noopener" class="btn btn--primary" id="float-line-btn" data-action="line_click" style="background:linear-gradient(135deg, #06c755, #05a847); border-color:#06c755; color:#fff; font-weight:700;">💬 空席確認</a>
        <a href="tel:070-3616-9115" class="btn btn--outline" id="float-tel-btn" data-action="call_click">📞 電話</a>
    </div>

    <script src="${rootRel}js/business-config.js"></script>
    <script src="${rootRel}js/main.js"></script>
</body>

</html>
`;

  const targetFile = path.join(fullDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');
  console.log(`Generated: ${g.dir}/index.html`);
}

console.log('All 8 guide pages generated successfully!');
