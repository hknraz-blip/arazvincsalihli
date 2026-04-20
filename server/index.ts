import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Her route için SEO meta bilgileri
const routeMeta: Record<string, { title: string; description: string; canonical: string }> = {
  "/": {
    title: "Araz Vinç Salihli | Hiab & Mobil Vinç Kiralama – 7/24",
    description: "Salihli, Alaşehir, Kula, Demirci, Köprübaşı ve Sarıgöl'de 55 tonluk Hiab vinç, mobil vinç kiralama. 7/24 acil hizmet. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/",
  },
  "/mobil-vinc-kiralama-salihli": {
    title: "Mobil Vinç Kiralama Salihli | 10–55 Ton | Araz Vinç – 7/24",
    description: "Salihli'de 10–55 ton arası mobil vinç kiralama. Sertifikalı operatörler, 30 dakikada sahada, sigortalı taşıma. Ücretsiz teklif: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/mobil-vinc-kiralama-salihli",
  },
  "/insaat-vinc-kiralama-salihli": {
    title: "İnşaat Vinç Kiralama Salihli & Alaşehir | Araz Vinç",
    description: "Salihli ve Alaşehir inşaat projelerinde prefabrik montaj, demir-beton taşıma, çelik iskelet kurulumu. Profesyonel vinç. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/insaat-vinc-kiralama-salihli",
  },
  "/sanayi-vinc-kiralama-salihli": {
    title: "Sanayi Vinç Kiralama Salihli OSB | Makine Montajı | Araz Vinç",
    description: "Salihli OSB ve çevre sanayi tesislerinde ağır ekipman taşıma, makine montajı, fabrika nakliyesi. Uzman ekip. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/sanayi-vinc-kiralama-salihli",
  },
  "/guvenli-tasima-salihli": {
    title: "Güvenli Yük Taşıma Salihli | Sigortalı Vinç | Araz Vinç",
    description: "Salihli ve çevresinde sigortalı, güvenli yük taşıma hizmetleri. Sertifikalı operatörler, modern ekipman. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/guvenli-tasima-salihli",
  },
  "/acil-vinc-hizmeti-salihli": {
    title: "7/24 Acil Vinç Hizmeti Salihli, Alaşehir, Kula | Araz Vinç",
    description: "Salihli, Alaşehir, Kula ve Demirci'de 7/24 acil vinç hizmeti. 30 dakikada sahada, kesintisiz destek. Hemen arayın: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/acil-vinc-hizmeti-salihli",
  },
  "/alasehir-vinc-kiralama": {
    title: "Alaşehir Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç",
    description: "Alaşehir'de profesyonel vinç kiralama hizmetleri. İnşaat, sanayi ve acil kurtarma. 7/24 hizmet. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/alasehir-vinc-kiralama",
  },
  "/kula-vinc-kiralama": {
    title: "Kula Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç",
    description: "Kula ilçesinde profesyonel vinç kiralama hizmetleri. İnşaat, sanayi taşımacılığı ve acil operasyonlar. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/kula-vinc-kiralama",
  },
  "/demirci-vinc-kiralama": {
    title: "Demirci Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç",
    description: "Demirci ilçesinde profesyonel vinç kiralama hizmetleri. Ağır yük taşıma, makine montajı. 7/24 destek. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/demirci-vinc-kiralama",
  },
  "/köprübaşı-sarigol-vinc-kiralama": {
    title: "Köprübaşı & Sarıgöl Vinç Kiralama | Araz Vinç",
    description: "Köprübaşı ve Sarıgöl'de vinç kiralama hizmetleri. Salihli merkezli, hızlı ulaşım, 7/24 destek. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/köprübaşı-sarigol-vinc-kiralama",
  },
  "/blog": {
    title: "Vinç Kiralama Blog | Uzman Rehberleri | Araz Vinç Salihli",
    description: "Vinç kiralama, ağır yük taşıma ve sanayi operasyonları hakkında uzman rehberleri. Araz Vinç blog.",
    canonical: "https://arazvincsalihli.com/blog",
  },
  "/blog/salihli-vinc-kiralama": {
    title: "Salihli'de Vinç Kiralama: Nelere Dikkat Etmeli? | Araz Vinç",
    description: "Salihli'de vinç kiralama sürecinde doğru vinç seçimi, fiyatlandırma ve güvenilir firma kriterleri. Uzman rehberi. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/blog/salihli-vinc-kiralama",
  },
  "/blog/hiab-vinc-nedir": {
    title: "Hiab Vinç Nedir? Kullanım Alanları ve Avantajları | Araz Vinç",
    description: "Hiab vincin çalışma prensibi, kullanım alanları ve diğer vinç türlerinden farkları. Salihli Hiab vinç kiralama. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/blog/hiab-vinc-nedir",
  },
  "/blog/agir-yuk-tasima-guvenlik": {
    title: "Ağır Yük Taşımada Güvenlik | Araz Vinç",
    description: "Vinç operasyonlarında güvenlik protokolleri, sertifikasyon ve risk yönetimi. Salihli uzman görüşü.",
    canonical: "https://arazvincsalihli.com/blog/agir-yuk-tasima-guvenlik",
  },
  "/blog/vinc-operasyonunda-hava-kosullari": {
    title: "Vinç Operasyonunda Hava Koşulları | Araz Vinç",
    description: "Rüzgar, yağmur ve aşırı sıcaklığın vinç operasyonlarına etkisi. Güvenli çalışma rehberi.",
    canonical: "https://arazvincsalihli.com/blog/vinc-operasyonunda-hava-kosullari",
  },
  "/blog/sanayi-tesislerinde-vinc-kiralama": {
    title: "Sanayi Tesislerinde Vinç Kiralama | Araz Vinç",
    description: "Fabrikalarda ve OSB'lerde vinç kiralama süreci, dikkat edilmesi gerekenler. Salihli OSB uzman hizmet.",
    canonical: "https://arazvincsalihli.com/blog/sanayi-tesislerinde-vinc-kiralama",
  },
};

const isBot = (ua: string) =>
  /googlebot|bingbot|yandex|baiduspider|duckduckbot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|applebot|slurp/i.test(ua);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Üretimde dist/public, geliştirmede client/public
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "client", "public");

  // Statik dosyaları sun — resimler, galeri klasörü dahil
  // HTML dışı dosyalar için agresif cache, HTML için no-cache
  app.use(
    express.static(staticPath, {
      setHeaders: (res, filePath) => {
        if (filePath.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        } else if (/\.(jpg|jpeg|png|gif|webp|svg|ico)$/.test(filePath)) {
          res.setHeader("Cache-Control", "public, max-age=2592000"); // 30 gün
        } else {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      },
    })
  );

  // SPA routing — tüm rotalar için index.html
  app.get("*", (req, res) => {
    const ua = req.headers["user-agent"] || "";
    const requestPath = req.path;
    const indexPath = path.join(staticPath, "index.html");

    // Bot için meta injection
    if (isBot(ua)) {
      try {
        const meta = routeMeta[requestPath] || routeMeta["/"];
        let html = readFileSync(indexPath, "utf-8");
        html = html
          .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
          .replace(
            /<meta name="description" content="[^"]*">/,
            `<meta name="description" content="${meta.description}">`
          )
          .replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${meta.canonical}" />`
          )
          .replace(
            /<meta property="og:title" content="[^"]*">/,
            `<meta property="og:title" content="${meta.title}">`
          )
          .replace(
            /<meta property="og:description" content="[^"]*">/,
            `<meta property="og:description" content="${meta.description}">`
          )
          .replace(
            /<meta property="og:url" content="[^"]*">/,
            `<meta property="og:url" content="${meta.canonical}">`
          );
        return res.send(html);
      } catch {
        // index.html okunamazsa normal akışa devam et
      }
    }

    res.sendFile(indexPath);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
