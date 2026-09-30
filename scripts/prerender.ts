import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";

// Ensure global React for JSX components compiled without explicit import
(globalThis as any).React = React;

// Define storage for SEO metadata intercepted during render
type SeoMetadata = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

// Import all page components
import Home from "../client/src/pages/Home";
import NotFound from "../client/src/pages/NotFound";
import ServiceMobilCrane from "../client/src/pages/ServiceMobilCrane";
import ServiceSafeTransport from "../client/src/pages/ServiceSafeTransport";
import Service24_7 from "../client/src/pages/Service24_7";
import ServiceConstruction from "../client/src/pages/ServiceConstruction";
import ServiceIndustrial from "../client/src/pages/ServiceIndustrial";
import ServiceSepetliVinc from "../client/src/pages/ServiceSepetliVinc";
import ServiceAgirVasitaKurtarma from "../client/src/pages/ServiceAgirVasitaKurtarma";
import Blog from "../client/src/pages/Blog";
import BlogSalihliVincKiralama from "../client/src/pages/BlogSalihliVincKiralama";
import BlogSepetliVincMiIskeleMi from "../client/src/pages/BlogSepetliVincMiIskeleMi";
import BlogSalihliVincKiralamaFiyatlari from "../client/src/pages/BlogSalihliVincKiralamaFiyatlari";
import BlogAgirVasitaKurtarmaRehberi from "../client/src/pages/BlogAgirVasitaKurtarmaRehberi";
import BlogHiabVincNedir from "../client/src/pages/BlogHiabVincNedir";
import BlogAgirYukTasimaGuvenlik from "../client/src/pages/BlogAgirYukTasimaGuvenlik";
import BlogVincOperasyonundaHavaKosullari from "../client/src/pages/BlogVincOperasyonundaHavaKosullari";
import BlogSanayiTesislerindeVincKiralama from "../client/src/pages/BlogSanayiTesislerindeVincKiralama";
import LocationAlasehir from "../client/src/pages/LocationAlasehir";
import LocationKula from "../client/src/pages/LocationKula";
import LocationDemirci from "../client/src/pages/LocationDemirci";
import LocationKoprubasiSarigol from "../client/src/pages/LocationKoprubasiSarigol";
import LocationAhmetli from "../client/src/pages/LocationAhmetli";

interface RouteDef {
  path: string;
  component: React.ComponentType;
  fallbackSeo: Required<SeoMetadata>;
}

const routes: RouteDef[] = [
  {
    path: "/",
    component: Home,
    fallbackSeo: {
      title: "Araz Vinç Salihli | Sepetli & Mobil Vinç Kiralama – 7/24",
      description: "Salihli, Alaşehir, Kula, Ahmetli, Demirci ve Sarıgöl'de sepetli vinç, 55 tonluk Hiab vinç, mobil vinç kiralama. Dış cephe, tabela, çatı tamiri ve 7/24 acil hizmet. Tel: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/mobil-vinc-kiralama-salihli",
    component: ServiceMobilCrane,
    fallbackSeo: {
      title: "Mobil Vinç Kiralama Salihli | 10–55 Ton | Araz Vinç – 7/24",
      description: "Salihli, Alaşehir, Kula ve Ahmetli'de 10 tondan 55 tona kadar mobil vinç kiralama. İnşaat, fabrika, montaj ve ağır nakliye. 7/24 arayın: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/mobil-vinc-kiralama-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/sepetli-vinc-kiralama-salihli",
    component: ServiceSepetliVinc,
    fallbackSeo: {
      title: "Salihli Sepetli Vinç Kiralama | Yüksek İrtifa Platformu – Araz Vinç",
      description: "Salihli, Alaşehir, Kula ve Ahmetli'de sepetli vinç ve platform kiralama. Dış cephe, tabela montajı, çatı tamiri, elektrik ve ağaç budama. 7/24 arayın: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/sepetli-vinc-kiralama-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/agir-vasita-kurtarma-salihli",
    component: ServiceAgirVasitaKurtarma,
    fallbackSeo: {
      title: "Salihli Ağır Vasıta Kurtarma | Kamyon, Tır & İş Makinesi – Araz Vinç",
      description: "Salihli, Alaşehir, Kula ve Ahmetli çevre yollarında devrilen kamyon, tır, mikser ve iş makinesi kurtarma. 7/24 acil müdahale: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/agir-vasita-kurtarma-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/insaat-vinc-kiralama-salihli",
    component: ServiceConstruction,
    fallbackSeo: {
      title: "İnşaat Vinç Kiralama Salihli & Alaşehir | Araz Vinç",
      description: "Salihli ve çevresinde inşaat projeleri için profesyonel vinç kiralama. Prefabrik montajı, demir, beton ve çelik konstrüksiyon taşıma. Tel: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/insaat-vinc-kiralama-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/sanayi-vinc-kiralama-salihli",
    component: ServiceIndustrial,
    fallbackSeo: {
      title: "Sanayi Vinç Kiralama Salihli OSB | Makine Montajı | Araz Vinç",
      description: "Salihli Organize Sanayi Bölgesi ve çevre sanayi tesislerinde fabrika taşıma, ağır makine indirme ve trafo montajı. 7/24 hizmet: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/sanayi-vinc-kiralama-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/guvenli-tasima-salihli",
    component: ServiceSafeTransport,
    fallbackSeo: {
      title: "Güvenli Yük Taşıma Salihli | Profesyonel Vinç | Araz Vinç",
      description: "Salihli ve Manisa genelinde sertifikalı operatörlerle hassas ve ağır yük taşıma. Sıfır kaza politikası ve sigortalı vinç hizmeti. Tel: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/guvenli-tasima-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/acil-vinc-hizmeti-salihli",
    component: Service24_7,
    fallbackSeo: {
      title: "7/24 Acil Vinç Hizmeti Salihli, Alaşehir, Kula | Araz Vinç",
      description: "Salihli ve çevre ilçelerde 7 gün 24 saat kesintisiz acil vinç ve yol yardım hizmeti. Gece, hafta sonu, bayram fark etmeksizin anında müdahale: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/acil-vinc-hizmeti-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  // Eski URL yönlendirmeleri / alternatif rotalar
  {
    path: "/service/mobile-crane",
    component: ServiceMobilCrane,
    fallbackSeo: {
      title: "Mobil Vinç Kiralama Salihli | Araz Vinç",
      description: "Salihli mobil vinç kiralama hizmeti. 7/24 arayın: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/mobil-vinc-kiralama-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/service/safe-transport",
    component: ServiceSafeTransport,
    fallbackSeo: {
      title: "Güvenli Yük Taşıma Salihli | Araz Vinç",
      description: "Salihli güvenli yük taşıma ve vinç hizmeti. 7/24 arayın: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/guvenli-tasima-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/service/24-7",
    component: Service24_7,
    fallbackSeo: {
      title: "7/24 Acil Vinç Salihli | Araz Vinç",
      description: "Salihli 7/24 kesintisiz vinç desteği. Tel: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/acil-vinc-hizmeti-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/service/construction",
    component: ServiceConstruction,
    fallbackSeo: {
      title: "İnşaat Vinç Kiralama Salihli | Araz Vinç",
      description: "Salihli inşaat şantiye vinç kiralama. Tel: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/insaat-vinc-kiralama-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/service/industrial",
    component: ServiceIndustrial,
    fallbackSeo: {
      title: "Sanayi Vinç Kiralama Salihli OSB | Araz Vinç",
      description: "Salihli OSB fabrika ve makine montaj vinç hizmetleri. Tel: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/sanayi-vinc-kiralama-salihli",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  // Blog Sayfaları
  {
    path: "/blog",
    component: Blog,
    fallbackSeo: {
      title: "Vinç Kiralama Rehberi & Blog | Salihli Araz Vinç",
      description: "Salihli, Alaşehir ve Kula'da vinç kiralama, sepetli platform, iş güvenliği ve ağır yük taşıma hakkında uzman rehberler ve sektörel makaleler.",
      canonical: "https://arazvincsalihli.com/blog",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/blog/sepetli-vinc-mi-iskele-mi",
    component: BlogSepetliVincMiIskeleMi,
    fallbackSeo: {
      title: "Dış Cephede Sepetli Vinç mi İskele mi? (Maliyet ve Güvenlik) | Araz Vinç",
      description: "Dış cephe boya, cam temizliği, tabela montajı ve çatı işlerinde sepetli vinç ile iskele karşılaştırması. Hangisi daha ekonomik ve güvenli?",
      canonical: "https://arazvincsalihli.com/blog/sepetli-vinc-mi-iskele-mi",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/blog/salihli-vinc-kiralama-fiyatlari",
    component: BlogSalihliVincKiralamaFiyatlari,
    fallbackSeo: {
      title: "Salihli Vinç Kiralama Fiyatları 2026: Saatlik ve Günlük Ücretler | Araz Vinç",
      description: "Salihli sepetli ve mobil vinç kiralama fiyatlarını etkileyen faktörler, saatlik ve günlük ortalama maliyetler ve şeffaf fiyat rehberi.",
      canonical: "https://arazvincsalihli.com/blog/salihli-vinc-kiralama-fiyatlari",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/blog/agir-vasita-kamyon-kurtarma-rehberi",
    component: BlogAgirVasitaKurtarmaRehberi,
    fallbackSeo: {
      title: "Ağır Vasıta ve Kamyon Kurtarma Operasyonu Nasıl Yapılır? | Araz Vinç Salihli",
      description: "Devrilen tır, kamyon, mikser ve iş makinelerinin vinçle güvenli şekilde kurtarılması, yol güvenliği ve doğru ekipman seçimi rehberi.",
      canonical: "https://arazvincsalihli.com/blog/agir-vasita-kamyon-kurtarma-rehberi",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/blog/salihli-vinc-kiralama",
    component: BlogSalihliVincKiralama,
    fallbackSeo: {
      title: "Salihli'de Doğru Vinç Nasıl Kiralanır? Adım Adım Rehber | Araz Vinç",
      description: "Salihli ve çevresinde işinize en uygun vinci seçerken dikkat edilmesi gereken tonaj, bom uzunluğu, zemin koşulları ve güvenlik kriterleri.",
      canonical: "https://arazvincsalihli.com/blog/salihli-vinc-kiralama",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/blog/hiab-vinc-nedir",
    component: BlogHiabVincNedir,
    fallbackSeo: {
      title: "Hiab Vinç Nedir? Kamyon Üstü Katlanır Bomlu Vinçlerin Avantajları | Araz Vinç",
      description: "55 tonluk Hiab vinç nedir, nerelerde kullanılır? Kamyon üstü katlanır vinçlerin dar alanlardaki yüksek manevra ve yük kapasitesi.",
      canonical: "https://arazvincsalihli.com/blog/hiab-vinc-nedir",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/blog/agir-yuk-tasima-guvenlik",
    component: BlogAgirYukTasimaGuvenlik,
    fallbackSeo: {
      title: "Ağır Yük Taşımada İş Güvenliği: Sıfır Risk İçin Altın Kurallar | Araz Vinç",
      description: "Vinçle ağır yük kaldırma ve taşıma operasyonlarında sapan seçimi, rüzgar limiti, çevre emniyeti ve operatör güvenlik standartları.",
      canonical: "https://arazvincsalihli.com/blog/agir-yuk-tasima-guvenlik",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/blog/vinc-operasyonunda-hava-kosullari",
    component: BlogVincOperasyonundaHavaKosullari,
    fallbackSeo: {
      title: "Rüzgar ve Yağışta Vinç Çalışır mı? Hava Koşulları ve Vinç Güvenliği | Araz Vinç",
      description: "Şiddetli rüzgar, yağmur, fırtına ve karlı havalarda vinç operasyonlarının emniyet limitleri ve dikkat edilmesi gereken kurallar.",
      canonical: "https://arazvincsalihli.com/blog/vinc-operasyonunda-hava-kosullari",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/blog/sanayi-tesislerinde-vinc-kiralama",
    component: BlogSanayiTesislerindeVincKiralama,
    fallbackSeo: {
      title: "Sanayi Tesisleri ve Fabrikalarda Makine Montajında Vinç Seçimi | Araz Vinç",
      description: "OSB ve fabrikalarda ağır pres, enjeksiyon makineleri, jeneratör ve trafoların kapalı alanlarda hassas montajı ve vinçle taşınması.",
      canonical: "https://arazvincsalihli.com/blog/sanayi-tesislerinde-vinc-kiralama",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  // Konum Sayfaları
  {
    path: "/alasehir-vinc-kiralama",
    component: LocationAlasehir,
    fallbackSeo: {
      title: "Alaşehir Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç – 7/24",
      description: "Alaşehir ve mahallelerinde 55 tonluk Hiab vinç, sepetli platform ve mobil vinç kiralama. İnşaat, tarım, sanayi ve 7/24 acil kurtarma. Tel: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/alasehir-vinc-kiralama",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/kula-vinc-kiralama",
    component: LocationKula,
    fallbackSeo: {
      title: "Kula Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç – 7/24",
      description: "Kula ve çevresinde sepetli platform, mobil vinç ve ağır vasıta kurtarma hizmeti. 7/24 acil destek ve profesyonel operatörler. Tel: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/kula-vinc-kiralama",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/demirci-vinc-kiralama",
    component: LocationDemirci,
    fallbackSeo: {
      title: "Demirci Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç – 7/24",
      description: "Demirci ve dağlık arazi koşullarında güçlü vinç filomuzla hizmetinizdeyiz. Sepetli vinç, konteyner taşıma ve 7/24 kurtarma: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/demirci-vinc-kiralama",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/koprubasi-sarigol-vinc-kiralama",
    component: LocationKoprubasiSarigol,
    fallbackSeo: {
      title: "Köprübaşı & Sarıgöl Vinç Kiralama | Araz Vinç – 7/24",
      description: "Köprübaşı ve Sarıgöl ilçelerinde bağ, tarım tesisi, inşaat ve sanayi projelerine özel vinç kiralama çözümleri. 7/24 arayın: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/koprubasi-sarigol-vinc-kiralama",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/ahmetli-vinc-kiralama",
    component: LocationAhmetli,
    fallbackSeo: {
      title: "Ahmetli Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç – 7/24",
      description: "Ahmetli'de fabrika, tarım işletmeleri ve inşaat sahalarında güvenilir vinç hizmeti. 55 tonluk Hiab ve sepetli vinç filosu: 0544 451 33 41",
      canonical: "https://arazvincsalihli.com/ahmetli-vinc-kiralama",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
  {
    path: "/404",
    component: NotFound,
    fallbackSeo: {
      title: "Sayfa Bulunamadı | Araz Vinç Salihli",
      description: "Aradığınız sayfa bulunamadı. Araz Vinç ana sayfasına dönerek hizmetlerimizi inceleyebilirsiniz.",
      canonical: "https://arazvincsalihli.com/404",
      ogImage: "https://arazvincsalihli.com/araz-vinc-machine.jpg",
    },
  },
];

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceMeta(html: string, nameAttr: string, nameValue: string, contentValue: string): string {
  // Matches <meta ... name="desc" ... content="..." ...>
  const regex = new RegExp(`(<meta\\b[^>]*\\b${nameAttr}=["']${nameValue}["'][^>]*\\bcontent=)(["'])([\\s\\S]*?)\\2([^>]*>)`, "i");
  if (regex.test(html)) {
    return html.replace(regex, `$1$2${escapeHtml(contentValue)}$2$4`);
  }
  // Matches <meta ... content="..." ... name="desc" ...>
  const revRegex = new RegExp(`(<meta\\b[^>]*\\bcontent=)(["'])([\\s\\S]*?)\\2([^>]*\\b${nameAttr}=["']${nameValue}["'][^>]*>)`, "i");
  if (revRegex.test(html)) {
    return html.replace(revRegex, `$1$2${escapeHtml(contentValue)}$2$4`);
  }
  return html;
}

function replaceCanonical(html: string, canonicalUrl: string): string {
  const regex = new RegExp(`(<link\\b[^>]*\\brel=["']canonical["'][^>]*\\bhref=)(["'])([\\s\\S]*?)\\2([^>]*>)`, "i");
  if (regex.test(html)) {
    return html.replace(regex, `$1$2${canonicalUrl}$2$4`);
  }
  return html;
}

async function runPrerender() {
  const distDir = path.resolve(process.cwd(), "dist");
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error("Template dist/index.html not found! Run vite build first.");
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, "utf-8");
  // Clean body so it is guaranteed to have a single empty <div id="root"></div> regardless of previous prerender runs
  const emptyTemplate = rawTemplate.replace(/<body>[\s\S]*?<\/body>/i, "<body>\n    <div id=\"root\"></div>\n  </body>");
  console.log(`\n🚀 Starting SSG Pre-rendering for ${routes.length} routes...`);

  let successCount = 0;

  for (const route of routes) {
    try {
      (globalThis as any).__SEO_METADATA_STORE__ = {};

      const staticHook = () => [route.path, () => {}] as [string, (to: string) => void];
      const bodyHtml = renderToString(
        React.createElement(
          Router,
          { hook: staticHook },
          React.createElement(route.component)
        )
      );

      const capturedSeo: SeoMetadata = (globalThis as any).__SEO_METADATA_STORE__ || {};
      const seo: Required<SeoMetadata> = {
        title: capturedSeo.title || route.fallbackSeo.title,
        description: capturedSeo.description || route.fallbackSeo.description,
        canonical: capturedSeo.canonical || route.fallbackSeo.canonical,
        ogImage: capturedSeo.ogImage || route.fallbackSeo.ogImage,
      };

      let pageHtml = emptyTemplate;

      // 1. Title
      pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);

      // 2. Meta description
      pageHtml = replaceMeta(pageHtml, "name", "description", seo.description);

      // 3. Open Graph
      pageHtml = replaceMeta(pageHtml, "property", "og:title", seo.title);
      pageHtml = replaceMeta(pageHtml, "property", "og:description", seo.description);
      pageHtml = replaceMeta(pageHtml, "property", "og:url", seo.canonical);
      if (seo.ogImage) {
        pageHtml = replaceMeta(pageHtml, "property", "og:image", seo.ogImage);
      }

      // 4. Twitter Card
      pageHtml = replaceMeta(pageHtml, "name", "twitter:title", seo.title);
      pageHtml = replaceMeta(pageHtml, "name", "twitter:description", seo.description);
      if (seo.ogImage) {
        pageHtml = replaceMeta(pageHtml, "name", "twitter:image", seo.ogImage);
      }

      // 5. Canonical link
      pageHtml = replaceCanonical(pageHtml, seo.canonical);

      // 6. Inject Pre-rendered Body inside #root
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

      // 7. Write to target directory
      let targetFile: string;
      if (route.path === "/") {
        targetFile = path.join(distDir, "index.html");
      } else {
        const cleanPath = route.path.replace(/^\/+/, "");
        const targetDir = path.join(distDir, cleanPath);
        fs.mkdirSync(targetDir, { recursive: true });
        targetFile = path.join(targetDir, "index.html");
      }

      fs.writeFileSync(targetFile, pageHtml, "utf-8");
      successCount++;
      console.log(`  ✓ Pre-rendered: ${route.path} -> ${path.relative(distDir, targetFile)} (${(pageHtml.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`  ✗ Error pre-rendering ${route.path}:`, err);
    }
  }

  console.log(`\n🎉 SSG Pre-rendering complete! ${successCount}/${routes.length} static pages created.\n`);
}

runPrerender();
