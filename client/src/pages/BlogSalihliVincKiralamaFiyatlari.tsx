import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Calendar, Clock, Calculator, CheckCircle, MapPin, Tag } from "lucide-react";
import { useLocation, Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function BlogSalihliVincKiralamaFiyatlari() {
  const [, navigate] = useLocation();

  useSEO({
    title: "2026 Salihli Vinç Kiralama Fiyatları Nasıl Hesaplanır? | Araz Vinç",
    description: "Salihli, Alaşehir, Kula ve Ahmetli'de vinç kiralama fiyatları nasıl belirlenir? Saatlik, günlük ve 55 tonluk Hiab vinç ücret hesaplama rehberi.",
    canonical: "https://arazvincsalihli.com/blog/salihli-vinc-kiralama-fiyatlari",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white pb-16 md:pb-0">
      {/* Schema.org BlogPosting */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "2026 Salihli Vinç Kiralama Fiyatları: Saatlik ve Günlük Ücretler Nasıl Hesaplanır?",
        "image": "https://arazvincsalihli.com/araz-vinc-machine.webp",
        "author": { "@type": "Person", "name": "Araz Vinç Salihli" },
        "publisher": { "@type": "Organization", "name": "Araz Vinç Salihli", "logo": { "@type": "ImageObject", "url": "https://arazvincsalihli.com/araz-vinc-logo.webp" } },
        "datePublished": "2026-08-21",
        "dateModified": "2026-08-21",
        "description": "Salihli ve Manisa çevresinde vinç kiralama fiyat hesaplama kriterleri.",
        "mainEntityOfPage": "https://arazvincsalihli.com/blog/salihli-vinc-kiralama-fiyatlari"
      })}} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/blog")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Tüm Yazılar</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/">Ana Sayfa</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span className="text-orange-600 font-semibold">Vinç Fiyatları Rehberi</span>
            </div>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-md">
                <Phone className="h-4 w-4 mr-2" />0544 451 33 41
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-700 font-semibold rounded-full text-xs">
              <Tag className="h-3.5 w-3.5" /> Fiyat Rehberi
            </span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 21 Ağustos 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 4 dk okuma</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            2026 Salihli Vinç Kiralama Fiyatları: <span className="text-orange-600">Ücretler Nasıl Hesaplanır?</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-4 py-1 italic bg-orange-50/50 rounded-r-lg">
            Salihli, Alaşehir, Kula ve Ahmetli bölgesinde vinç kiralarken sürpriz maliyetlerle karşılaşmamak için fiyatı belirleyen 5 temel faktörü öğrenin.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg text-gray-700">
          <p className="leading-relaxed">
            Salihli'de inşaat, tarım, sanayi veya bireysel bir kaldırma/taşıma işiniz olduğunda akla gelen ilk soru genellikle şudur: <strong>"Vinç kiralama ücreti ne kadar tutar?"</strong>
          </p>
          <p className="leading-relaxed">
            Vinç kiralama hizmetlerinde standart tek bir fiyat bulunmaz; çünkü her operasyonun yük ağırlığı, çalışma yüksekliği ve saha şartları birbirinden farklıdır. Ancak profesyonel vinç firmaları fiyat teklifini 5 ana kritere göre şeffaf bir şekilde hesaplar.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">Vinç Kiralama Fiyatını Belirleyen 5 Temel Faktör</h2>

          <div className="space-y-6 not-prose my-8">
            {[
              {
                num: "01",
                title: "Kaldırılacak Yükün Ağırlığı ve Vinç Tonajı",
                desc: "10-20 tonluk standart mobil vinçler ile 55 tonluk ağır Hiab vinçlerin işletme maliyeti farklıdır. İşinize uygun en optimum tonajı seçmek bütçenizi korur. İhtiyacınızdan çok büyük vinç çağırmak gereksiz maliyet yaratırken, küçük vinç çağırmak ise güvenlik riski oluşturur."
              },
              {
                num: "02",
                title: "Çalışma Süresi (Saatlik, Günlük, Proje Bazlı)",
                desc: "Kısa süreli tek seferlik indirme-bindirme işleri için saatlik kiralama en ekonomik modeldir. Gün boyu sürecek çelik konstrüksiyon, fabrika montajı veya çatı işlerinde ise günlük kiralama paketleri saatlik ücretten çok daha avantajlıdır."
              },
              {
                num: "03",
                title: "Bom Uzunluğu ve Çalışma Yüksekliği",
                desc: "Zeminden 5 metreye yük kaldırmak ile 7. katın çatısına malzeme çıkarmak farklı bom açısı ve hidrolik güç gerektirir. Yükseklik arttıkça vincin taşıma kapasitesi fizik kuralları gereği azalır, bu yüzden doğru metrajlı makine gereklidir."
              },
              {
                num: "04",
                title: "Konum ve Mesafe (Salihli ve Çevre İlçeler)",
                desc: "Salihli merkez içindeki bir işe ulaşım süresi 15-20 dakika iken Alaşehir, Kula, Sarıgöl veya Demirci gibi ilçelere intikal yakıt ve yol süresi ekler. Ancak Araz Vinç olarak bölgesel nöbet sistemimizle çevre ilçelere en uygun yol maliyetiyle hizmet veriyoruz."
              },
              {
                num: "05",
                title: "Operatör Yetkinliği ve Sigorta Güvencesi",
                desc: "Ucuz fiyat veren yetkisiz kişilerin yerine G sınıfı ehliyete, mesleki yeterlilik belgelerine ve yük sigortasına sahip resmi firmalarla çalışmak, olası bir kaza anında milyonlarca liralık hasarın önüne geçer."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl flex gap-5 items-start">
                <span className="text-3xl font-black text-orange-600 flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">En Doğru ve Net Fiyatı Nasıl Alabilirsiniz?</h2>
          <p className="leading-relaxed">
            Bizimle iletişime geçtiğinizde operatörümüze şu 3 temel bilgiyi iletmeniz halinde <strong>1 dakika içinde net fiyat teklifi</strong> alabilirsiniz:
          </p>
          
          <ul className="space-y-2 my-4">
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
              Kaldırılacak malzemenin tahmini ağırlığı (Ton/Kg)
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
              İşin yapılacağı konum / ilçe (Salihli, Ahmetli, Alaşehir, Kula vb.)
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
              Yükün konulacağı yükseklik veya mesafe
            </li>
          </ul>

          <div className="my-10 p-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-2xl not-prose text-center">
            <h3 className="text-2xl font-bold mb-2">Hemen Ücretsiz Keşif ve Fiyat Alın</h3>
            <p className="text-orange-100 text-sm mb-6 max-w-lg mx-auto">
              55 tonluk Hiab, mobil vinç ve sepetli platform filomuzla 7/24 hizmetinizdeyiz.
            </p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />0544 451 33 41 – Şimdi Arayın
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-3">© {new Date().getFullYear()} Araz Vinç Salihli. Tüm hakları saklıdır.</p>
          <div className="flex justify-center gap-6 text-xs">
            <Link href="/" className="hover:text-orange-400">Ana Sayfa</Link>
            <Link href="/blog" className="hover:text-orange-400">Tüm Blog Yazıları</Link>
            <Link href="/mobil-vinc-kiralama-salihli" className="hover:text-orange-400 text-orange-400">Mobil Vinç Kiralama</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
