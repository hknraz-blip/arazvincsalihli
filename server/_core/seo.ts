// Her route için SEO meta verisi
export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  h1: string;
}

const BASE = "https://arazvincsalihli.com";
const TEL = "0544 451 33 41";

const routes: Record<string, PageMeta> = {
  "/": {
    title: "Araz Vinç Salihli | Hiab & Sepetli Vinç Kiralama – 7/24",
    description: `Salihli ve Manisa'da 55 tonluk Hiab vinç, 25m sepetli vinç kiralama. 7/24 acil hizmet, sertifikalı operatörler, sigortalı taşıma. Hemen arayın: ${TEL}`,
    canonical: `${BASE}/`,
    h1: "Salihli ve Manisa'da Profesyonel Vinç Kiralama",
  },
  "/service/mobile-crane": {
    title: "Mobil Vinç Kiralama Salihli & Manisa | Araz Vinç – 7/24",
    description: `Salihli ve Manisa'da 10–55 ton arası mobil vinç kiralama. Sertifikalı operatörler, 30 dakikada sahada, sigortalı taşıma. Ücretsiz teklif: ${TEL}`,
    canonical: `${BASE}/service/mobile-crane`,
    h1: "Mobil Vinç Kiralama – Salihli ve Manisa",
  },
  "/service/safe-transport": {
    title: "Güvenli Taşıma Hizmeti Salihli & Manisa | Araz Vinç",
    description: `Salihli ve Manisa'da sigortalı, sertifikalı güvenli ağır yük taşıma hizmeti. Uzman operatörler, modern ekipman. Ücretsiz teklif: ${TEL}`,
    canonical: `${BASE}/service/safe-transport`,
    h1: "Güvenli Ağır Yük Taşıma – Salihli ve Manisa",
  },
  "/service/24-7": {
    title: "7/24 Acil Vinç Hizmeti Salihli & Manisa | Araz Vinç",
    description: `Salihli, Manisa, Alaşehir ve Turgutlu'da 7/24 acil vinç hizmeti. 30 dakikada sahada, kesintisiz destek. Hemen arayın: ${TEL}`,
    canonical: `${BASE}/service/24-7`,
    h1: "7/24 Acil Vinç Hizmeti – Salihli ve Manisa",
  },
  "/service/construction": {
    title: "İnşaat Vinç Kiralama Salihli & Manisa | Araz Vinç",
    description: `Salihli ve Manisa inşaat projelerinde profesyonel vinç kiralama. Demir-beton taşıma, prefabrik montaj, iskelet kurulumu. Teklif: ${TEL}`,
    canonical: `${BASE}/service/construction`,
    h1: "İnşaat Projelerinde Vinç Kiralama – Salihli",
  },
  "/service/industrial": {
    title: "Sanayi Vinç Kiralama Salihli Manisa OSB | Araz Vinç",
    description: `Salihli OSB ve Manisa sanayi tesislerinde ağır ekipman taşıma, makine montajı ve fabrika nakliyesi. Uzman ekip, modern vinç. Tel: ${TEL}`,
    canonical: `${BASE}/service/industrial`,
    h1: "Sanayi Tesislerinde Vinç Kiralama – Salihli OSB",
  },
  "/blog": {
    title: "Blog | Vinç Kiralama Rehberi – Araz Vinç Salihli",
    description: `Salihli ve Manisa'da vinç kiralama, iş güvenliği, Hiab vinç ve sanayi taşımacılığı hakkında uzman yazıları. Araz Vinç resmi blogu.`,
    canonical: `${BASE}/blog`,
    h1: "Vinç & Kaldırma Rehberi – Araz Vinç Blog",
  },
  "/blog/salihli-vinc-kiralama": {
    title: "Salihli'de Vinç Kiralama: Nelere Dikkat Etmeli? | Araz Vinç",
    description: `Salihli ve Manisa'da vinç kiralama sürecinde doğru vinç seçimi, fiyatlandırma ve güvenilir firma kriterleri. Uzman rehberi. Tel: ${TEL}`,
    canonical: `${BASE}/blog/salihli-vinc-kiralama`,
    h1: "Salihli'de Vinç Kiralama Rehberi",
  },
  "/blog/hiab-vinc-nedir": {
    title: "Hiab Vinç Nedir? Kullanım Alanları ve Avantajları | Araz Vinç",
    description: `Hiab vinç (araç üstü vinç) nedir, nasıl çalışır, hangi işlerde kullanılır? 55 ton kapasiteli Hiab vincimizle Salihli ve Manisa'da hizmet. Tel: ${TEL}`,
    canonical: `${BASE}/blog/hiab-vinc-nedir`,
    h1: "Hiab Vinç Nedir? Kullanım Alanları ve Avantajları",
  },
  "/blog/agir-yuk-tasima-guvenlik": {
    title: "Ağır Yük Taşımada İş Güvenliği: 10 Temel Kural | Araz Vinç",
    description: `Vinç operasyonlarında iş güvenliği için uyulması gereken 10 temel kural. Sertifika, zemin kontrolü, elektrik hattı güvenliği. Tel: ${TEL}`,
    canonical: `${BASE}/blog/agir-yuk-tasima-guvenlik`,
    h1: "Ağır Yük Taşımada Güvenlik: 10 Temel Kural",
  },
  "/blog/vinc-operasyonunda-hava-kosullari": {
    title: "Vinç Operasyonlarında Hava Koşullarının Önemi | Araz Vinç",
    description: `Rüzgar, yağmur, sis ve don gibi hava koşulları vinç çalışmalarını nasıl etkiler? Güvenli operasyon için kritik bilgiler. Tel: ${TEL}`,
    canonical: `${BASE}/blog/vinc-operasyonunda-hava-kosullari`,
    h1: "Vinç Operasyonlarında Hava Koşullarının Önemi",
  },
  "/blog/sanayi-tesislerinde-vinc-kiralama": {
    title: "Sanayi Tesislerinde Vinç Kiralama: Özel Gereksinimler | Araz Vinç",
    description: `Salihli OSB ve Manisa fabrikalarında vinç kiralama sürecinin gereklilikleri, güvenlik protokolleri ve doğru ekipman seçimi. Tel: ${TEL}`,
    canonical: `${BASE}/blog/sanayi-tesislerinde-vinc-kiralama`,
    h1: "Sanayi Tesislerinde Vinç Kiralama Rehberi",
  },
};

export function getPageMeta(pathname: string): PageMeta {
  return (
    routes[pathname] ??
    routes["/"]
  );
}

// Arama motoru botları
const BOT_UA = [
  "googlebot",
  "bingbot",
  "yandexbot",
  "duckduckbot",
  "baiduspider",
  "slurp",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
  "applebot",
  "ahrefsbot",
  "semrushbot",
  "mj12bot",
  "dotbot",
  "rogerbot",
];

export function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_UA.some(bot => ua.includes(bot));
}

export function injectMeta(html: string, meta: PageMeta): string {
  // Title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Meta description
  html = html.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${meta.description}">`
  );

  // OG title
  html = html.replace(
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${meta.title}">`
  );

  // OG description
  html = html.replace(
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${meta.description}">`
  );

  // OG url
  html = html.replace(
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${meta.canonical}">`
  );

  // Canonical
  html = html.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // Twitter title
  html = html.replace(
    /<meta name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${meta.title}">`
  );

  // Twitter description
  html = html.replace(
    /<meta name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${meta.description}">`
  );

  // Bot için okunabilir içerik ekle (invisible to users, visible to bots)
  const botContent = `
<!-- SEO Content for crawlers -->
<noscript>
  <div>
    <h1>${meta.h1}</h1>
    <p>${meta.description}</p>
    <p>Telefon: 0544 451 33 41 | Adres: Abay Bulvarı No:72, Salihli / Manisa</p>
    <p>Hizmet bölgeleri: Salihli, Manisa, Alaşehir, Turgutlu, Sarıgöl</p>
  </div>
</noscript>`;

  html = html.replace("</body>", `${botContent}\n</body>`);

  return html;
}
