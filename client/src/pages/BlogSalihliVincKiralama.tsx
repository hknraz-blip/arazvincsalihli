import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Clock, Tag } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function BlogSalihliVincKiralama() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Salihli'de Vinç Kiralama: Nelere Dikkat Etmeli? | Araz Vinç",
    description: "Salihli ve Manisa'da vinç kiralama sürecinde doğru vinç seçimi, fiyatlandırma ve güvenilir firma kriterleri. Uzman rehberi. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/blog/salihli-vinc-kiralama",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* SEO Meta - structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Salihli'de Vinç Kiralama: Nelere Dikkat Etmeli?",
            description:
              "Salihli ve Manisa bölgesinde vinç kiralama sürecinde dikkat etmeniz gereken önemli noktalar, fiyatlandırma ve doğru vinç seçimi hakkında rehber.",
            author: { "@type": "Organization", name: "Araz Vinç Salihli" },
            publisher: { "@type": "Organization", name: "Araz Vinç Salihli", url: "https://arazvincsalihli.com" },
            datePublished: "2025-03-20",
            dateModified: "2026-04-03",
            url: "https://arazvincsalihli.com/blog/salihli-vinc-kiralama",
          }),
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Blog'a Dön</span>
            </button>
            <a href="tel:05444513341">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />
                Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-orange-600/20 border border-orange-500/50 text-orange-300 text-xs font-semibold rounded-full flex items-center gap-1">
              <Tag className="h-3 w-3" /> Rehber
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="h-3 w-3" /> 5 dk okuma
            </span>
            <span className="text-gray-400 text-sm">20 Mart 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Salihli'de Vinç Kiralama: <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Nelere Dikkat Etmeli?</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Doğru vinç firmasını seçmek, hem işinizin güvenliği hem de bütçeniz açısından büyük önem taşır. Bu rehberde en önemli noktaları ele alıyoruz.
          </p>
        </div>
      </section>

      {/* Makale İçeriği */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Salihli'de Vinç Kiralama Neden Önemli?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Salihli, Manisa iline bağlı hızla gelişen bir ilçedir. İnşaat projeleri, organize sanayi bölgesindeki fabrikalar ve tarım sektörüne yönelik altyapı çalışmaları nedeniyle vinç ihtiyacı her geçen yıl artmaktadır. Doğru vinç firmasını seçmek, hem işinizin güvenliği hem de bütçeniz açısından kritik bir karardır.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Hangi Vinç Türüne İhtiyacınız Var?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vinç kiralama sürecinde yapılacak ilk iş, doğru vinç türünü belirlemektir. İhtiyacınıza göre farklı seçenekler mevcuttur:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "Hiab Vinç (Araç Üstü Vinç)", desc: "Şehir içi taşımacılık, beton köşk montajı, inşaat malzemesi yükleme-boşaltma işlemlerinde idealdir. 55 tona kadar kapasitesiyle geniş bir kullanım alanına sahiptir." },
                { title: "Sepetli Vinç", desc: "Bina cephesi, elektrik hattı, ağaç budama gibi yüksekte yapılacak çalışmalar için uygundur. 25 metreye kadar çalışma yüksekliği sunar." },
                { title: "Mobil Vinç", desc: "Büyük sanayi ekipmanları, ağır makine montajı gibi yüksek tonajlı işler için tercih edilir." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-orange-50 rounded-xl border border-orange-100">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Vinç Kiralama Fiyatları Nasıl Belirlenir?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fiyatlandırma birçok faktöre bağlıdır. Bunları bilmek, aldığınız teklifin adil olup olmadığını anlamanızı sağlar:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Vinç tipi ve tonaj kapasitesi",
                "Çalışma süresi (saatlik, günlük, haftalık)",
                "Çalışma noktasına olan mesafe",
                "İşin zorluk derecesi ve arazi koşulları",
                "Operatör dahil mi, hariç mi?",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <div className="h-2 w-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Güvenilir Vinç Firması Seçerken Dikkat Edilmesi Gerekenler</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Piyasada pek çok vinç firması bulunmaktadır. Doğru seçimi yapabilmek için aşağıdaki kriterleri göz önünde bulundurmanızı öneririz:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "Sertifika ve Lisans", desc: "Operatörlerin geçerli vinç operatörü belgesi olmalıdır. Ekipmanlar periyodik bakım ve denetimden geçmiş olmalıdır." },
                { title: "Sigorta", desc: "Araç zorunlu trafik sigortasının yanı sıra iş makinesi sigortası da bulunmalıdır." },
                { title: "Referans ve Deneyim", desc: "Firmanın daha önce gerçekleştirdiği projeleri sormaktan çekinmeyin. Deneyimli ekipler daha güvenli çalışır." },
                { title: "7/24 Ulaşılabilirlik", desc: "Acil durumlarda veya işin uzadığı anlarda firmaya ulaşabilmek önemlidir." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Salihli ve Manisa'da Vinç Hizmetleri</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Araz Vinç olarak Salihli merkez ve çevre ilçelerde (Alaşehir, Turgutlu, Sarıgöl) deneyimimizle hizmet veriyoruz. 55 tonluk Hiab vincimiz ve 25 metre sepetli vincimizle inşaat, sanayi, araç kurtarma ve daha pek çok alanda yanınızdayız. Sertifikalı operatörlerimiz ve sigortalı ekipmanlarımızla her projenizde güvenli çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ücretsiz Teklif Alın</h2>
          <p className="text-orange-100 mb-8 text-lg">Salihli ve Manisa'da 7/24 profesyonel vinç hizmetleri</p>
          <a href="tel:05444513341">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              0544 451 33 41 - Hemen Arayın
            </Button>
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Araz Vinç. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
