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
    title: "Araz Vinç Salihli | Hiab & Mobil Vinç Kiralama – 7/24",
    description: `Salihli, Alaşehir, Kula, Demirci, Köprübaşı ve Sarıgöl'de 55 tonluk Hiab vinç, mobil vinç kiralama. 7/24 acil hizmet. Hemen arayın: ${TEL}`,
    canonical: `${BASE}/`,
    h1: "Salihli ve Çevresinde Profesyonel Vinç Kiralama",
  },
  // Yeni Türkçe URL'ler
  "/mobil-vinc-kiralama-salihli": {
    title: "Mobil Vinç Kiralama Salihli | 10–55 Ton | Araz Vinç – 7/24",
    description: `Salihli'de 10–55 ton arası mobil vinç kiralama. Sertifikalı operatörler, 30 dakikada sahada, sigortalı taşıma. Ücretsiz teklif: ${TEL}`,
    canonical: `${BASE}/mobil-vinc-kiralama-salihli`,
    h1: "Mobil Vinç Kiralama – Salihli",
  },
  "/insaat-vinc-kiralama-salihli": {
    title: "İnşaat Vinç Kiralama Salihli & Alaşehir | Araz Vinç",
    description: `Salihli ve Alaşehir inşaat projelerinde prefabrik montaj, demir-beton taşıma, çelik iskelet kurulumu. Profesyonel vinç. Tel: ${TEL}`,
    canonical: `${BASE}/insaat-vinc-kiralama-salihli`,
    h1: "İnşaat Vinç Kiralama – Salihli ve Alaşehir",
  },
  "/sanayi-vinc-kiralama-salihli": {
    title: "Sanayi Vinç Kiralama Salihli OSB | Makine Montajı | Araz Vinç",
    description: `Salihli OSB ve çevre sanayi tesislerinde ağır ekipman taşıma, makine montajı, fabrika nakliyesi. Uzman ekip. Tel: ${TEL}`,
    canonical: `${BASE}/sanayi-vinc-kiralama-salihli`,
    h1: "Sanayi Vinç Kiralama – Salihli OSB",
  },
  "/guvenli-tasima-salihli": {
    title: "Güvenli Yük Taşıma Salihli | Sigortalı Vinç | Araz Vinç",
    description: `Salihli ve çevresinde sigortalı, güvenli yük taşıma hizmetleri. Sertifikalı operatörler, modern ekipman. Tel: ${TEL}`,
    canonical: `${BASE}/guvenli-tasima-salihli`,
    h1: "Güvenli Yük Taşıma – Salihli",
  },
  "/acil-vinc-hizmeti-salihli": {
    title: "7/24 Acil Vinç Hizmeti Salihli, Alaşehir, Kula | Araz Vinç",
    description: `Salihli, Alaşehir, Kula ve Demirci'de 7/24 acil vinç hizmeti. 30 dakikada sahada, kesintisiz destek. Hemen arayın: ${TEL}`,
    canonical: `${BASE}/acil-vinc-hizmeti-salihli`,
    h1: "7/24 Acil Vinç Hizmeti – Salihli ve Çevresi",
  },
  // Konum sayfaları
  "/alasehir-vinc-kiralama": {
    title: "Alaşehir Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç",
    description: `Alaşehir'de profesyonel vinç kiralama hizmetleri. İnşaat, sanayi ve acil kurtarma. 7/24 hizmet. Tel: ${TEL}`,
    canonical: `${BASE}/alasehir-vinc-kiralama`,
    h1: "Alaşehir Vinç Kiralama",
  },
  "/kula-vinc-kiralama": {
    title: "Kula Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç",
    description: `Kula ilçesinde profesyonel vinç kiralama hizmetleri. İnşaat, sanayi taşımacılığı ve acil operasyonlar. Tel: ${TEL}`,
    canonical: `${BASE}/kula-vinc-kiralama`,
    h1: "Kula Vinç Kiralama",
  },
  "/demirci-vinc-kiralama": {
    title: "Demirci Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç",
    description: `Demirci ilçesinde profesyonel vinç kiralama hizmetleri. Ağır yük taşıma, makine montajı. 7/24 destek. Tel: ${TEL}`,
    canonical: `${BASE}/demirci-vinc-kiralama`,
    h1: "Demirci Vinç Kiralama",
  },
  "/köprübaşı-sarigol-vinc-kiralama": {
    title: "Köprübaşı & Sarıgöl Vinç Kiralama | Araz Vinç",
    description: `Köprübaşı ve Sarıgöl'de vinç kiralama hizmetleri. Salihli merkezli, hızlı ulaşım, 7/24 destek. Tel: ${TEL}`,
    canonical: `${BASE}/köprübaşı-sarigol-vinc-kiralama`,
    h1: "Köprübaşı & Sarıgöl Vinç Kiralama",
  },
  // Eski URL'ler (geriye dönük uyumluluk)
  "/service/mobile-crane": {
    title: "Mobil Vinç Kiralama Salihli | 10–55 Ton | Araz Vinç – 7/24",
    description: `Salihli'de 10–55 ton arası mobil vinç kiralama. Sertifikalı operatörler, 30 dakikada sahada. Ücretsiz teklif: ${TEL}`,
    canonical: `${BASE}/mobil-vinc-kiralama-salihli`,
    h1: "Mobil Vinç Kiralama – Salihli",
  },
  "/service/safe-transport": {
    title: "Güvenli Yük Taşıma Salihli | Sigortalı Vinç | Araz Vinç",
    description: `Salihli'de sigortalı, güvenli yük taşıma. Sertifikalı operatörler, modern ekipman. Tel: ${TEL}`,
    canonical: `${BASE}/guvenli-tasima-salihli`,
    h1: "Güvenli Yük Taşıma – Salihli",
  },
  "/service/24-7": {
    title: "7/24 Acil Vinç Hizmeti Salihli | Araz Vinç",
    description: `Salihli ve çevresinde 7/24 acil vinç hizmeti. 30 dakikada sahada. Hemen arayın: ${TEL}`,
    canonical: `${BASE}/acil-vinc-hizmeti-salihli`,
    h1: "7/24 Acil Vinç Hizmeti",
  },
  "/service/construction": {
    title: "İnşaat Vinç Kiralama Salihli | Araz Vinç",
    description: `Salihli inşaat projelerinde profesyonel vinç kiralama. Prefabrik montaj, demir-beton taşıma. Tel: ${TEL}`,
    canonical: `${BASE}/insaat-vinc-kiralama-salihli`,
    h1: "İnşaat Vinç Kiralama – Salihli",
  },
  "/service/industrial": {
    title: "Sanayi Vinç Kiralama Salihli OSB | Araz Vinç",
    description: `Salihli OSB sanayi tesislerinde ağır ekipman taşıma, makine montajı. Uzman ekip. Tel: ${TEL}`,
    canonical: `${BASE}/sanayi-vinc-kiralama-salihli`,
    h1: "Sanayi Vinç Kiralama – Salihli OSB",
  },
  // Blog
  "/blog": {
    title: "Blog | Vinç Kiralama Rehberi – Araz Vinç Salihli",
    description: `Salihli ve çevresinde vinç kiralama, iş güvenliği ve sanayi taşımacılığı hakkında uzman yazıları.`,
    canonical: `${BASE}/blog`,
    h1: "Vinç & Kaldırma Rehberi – Araz Vinç Blog",
  },
  "/blog/salihli-vinc-kiralama": {
    title: "Salihli'de Vinç Kiralama: Nelere Dikkat Etmeli? | Araz Vinç",
    description: `Salihli'de vinç kiralama sürecinde doğru vinç seçimi, fiyatlandırma ve güvenilir firma kriterleri. Uzman rehberi. Tel: ${TEL}`,
    canonical: `${BASE}/blog/salihli-vinc-kiralama`,
    h1: "Salihli'de Vinç Kiralama Rehberi",
  },
  "/blog/hiab-vinc-nedir": {
    title: "Hiab Vinç Nedir? Kullanım Alanları ve Avantajları | Araz Vinç",
    description: `Hiab vinç nedir, nasıl çalışır, hangi işlerde kullanılır? 55 ton kapasiteli Hiab vincimizle Salihli'de hizmet. Tel: ${TEL}`,
    canonical: `${BASE}/blog/hiab-vinc-nedir`,
    h1: "Hiab Vinç Nedir?",
  },
  "/blog/agir-yuk-tasima-guvenlik": {
    title: "Ağır Yük Taşımada İş Güvenliği: 10 Temel Kural | Araz Vinç",
    description: `Vinç operasyonlarında iş güvenliği için uyulması gereken 10 temel kural. Sertifika, zemin kontrolü. Tel: ${TEL}`,
    canonical: `${BASE}/blog/agir-yuk-tasima-guvenlik`,
    h1: "Ağır Yük Taşımada Güvenlik",
  },
  "/blog/vinc-operasyonunda-hava-kosullari": {
    title: "Vinç Operasyonlarında Hava Koşullarının Önemi | Araz Vinç",
    description: `Rüzgar, yağmur ve don gibi hava koşulları vinç çalışmalarını nasıl etkiler? Güvenli operasyon için kritik bilgiler. Tel: ${TEL}`,
    canonical: `${BASE}/blog/vinc-operasyonunda-hava-kosullari`,
    h1: "Vinç Operasyonlarında Hava Koşulları",
  },
  "/blog/sanayi-tesislerinde-vinc-kiralama": {
    title: "Sanayi Tesislerinde Vinç Kiralama: Özel Gereksinimler | Araz Vinç",
    description: `Salihli OSB ve sanayi fabrikalarında vinç kiralama süreci, güvenlik protokolleri ve doğru ekipman seçimi. Tel: ${TEL}`,
    canonical: `${BASE}/blog/sanayi-tesislerinde-vinc-kiralama`,
    h1: "Sanayi Tesislerinde Vinç Kiralama Rehberi",
  },
};

export function getPageMeta(pathname: string): PageMeta {
  return routes[pathname] ?? routes["/"];
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
];

export function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_UA.some(bot => ua.includes(bot));
}

export function injectMeta(html: string, meta: PageMeta): string {
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${meta.description}">`);
  html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${meta.title}">`);
  html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${meta.description}">`);
  html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${meta.canonical}">`);
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${meta.canonical}" />`);
  html = html.replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${meta.title}">`);
  html = html.replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${meta.description}">`);

  const botContent = `
<noscript>
  <div>
    <h1>${meta.h1}</h1>
    <p>${meta.description}</p>
    <p>Telefon: 0544 451 33 41 | Adres: Abay Bulvarı No:72, Salihli / Manisa</p>
    <p>Hizmet bölgeleri: Salihli, Alaşehir, Kula, Demirci, Köprübaşı, Sarıgöl</p>
  </div>
</noscript>`;

  html = html.replace("</body>", `${botContent}\n</body>`);
  return html;
}
