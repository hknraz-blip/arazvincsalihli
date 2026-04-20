import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle, Truck, Zap, MapPin, Shield } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function ServiceConstruction() {
  const [, navigate] = useLocation();
  useSEO({
    title: "İnşaat Vinç Kiralama Salihli & Alaşehir | Araz Vinç",
    description: "Salihli ve Alaşehir inşaat projelerinde prefabrik montaj, demir-beton taşıma, çelik iskelet kurulumu. Profesyonel vinç. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/insaat-vinc-kiralama-salihli",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "İnşaat Vinç Kiralama",
        "provider": { "@type": "LocalBusiness", "name": "Araz Vinç Salihli", "telephone": "+905444513341" },
        "areaServed": ["Salihli", "Alaşehir", "Kula", "Demirci"],
        "description": "Salihli ve çevre ilçelerde inşaat projelerine yönelik profesyonel vinç kiralama hizmetleri.",
        "url": "https://arazvincsalihli.com/insaat-vinc-kiralama-salihli",
      })}} />

      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Ana Sayfa</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Ana Sayfa</span><span>/</span><span className="text-orange-600">İnşaat Vinç Kiralama</span>
            </div>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              İnşaat <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Salihli, Alaşehir, Kula ve Demirci'deki inşaat projelerinizde prefabrik montaj, demir-beton taşıma, çelik iskelet kurulumu ve ağır malzeme kaldırma için profesyonel vinç hizmetleri. Sertifikalı operatörler, sigortalı ekipman.
            </p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg mt-4">
                <Phone className="h-5 w-5 mr-2" />0544 451 33 41
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* İnşaatta Vinç İhtiyacı */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">İnşaat Projesinde Vinç Neden Şart?</h2>
          <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Salihli ve çevresinde hızla artan yapılaşma, inşaat sahalarında profesyonel vinç hizmetine olan ihtiyacı her geçen yıl artırmaktadır. Elle veya forklift ile taşınamayacak ağır malzemelerin güvenli ve hızlı bir şekilde kaldırılması, hem iş gücü hem de zaman tasarrufu sağlar. Araz Vinç olarak inşaat projelerinizin her aşamasında güvenilir vinç desteği sunuyoruz.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Truck, t: "Demir-Beton ve Malzeme Taşıma", d: "İnşaat demiri, beton blok, tuğla ve diğer yapı malzemelerinin katlara ve bölümlere taşınması. Zaman ve işçilik maliyetinden tasarruf sağlar." },
              { icon: CheckCircle, t: "Prefabrik Yapı Elemanları", d: "Prefabrik kolon, kiriş, döşeme paneli ve çatı elemanlarının hassas konumlandırma ile montajı. Doğru ekipman, doğru sonuç." },
              { icon: Zap, t: "Çelik İskelet ve Çatı Kurulumu", d: "Endüstriyel ve ticari yapılarda çelik kolon, çatı makasları ve ana taşıyıcı sistemlerin kurulumu için güvenli vinç desteği." },
              { icon: Shield, t: "Kalıp Kurulum ve Sökümü", d: "Büyük beton kalıp sistemlerinin kurulumu ve sökümünde vinç kullanımı iş güvenliğini artırır, süreyi kısaltır." },
              { icon: MapPin, t: "Alaşehir ve Kula İnşaatları", d: "Alaşehir, Kula, Demirci ve Sarıgöl'deki inşaat sahalarına hızlı ulaşım. Salihli merkezimizden ortalama 20–40 dakikada sahadayız." },
              { icon: CheckCircle, t: "Ekipman ve Makine Yerleştirme", d: "Binalara monte edilecek asansör, kazan, jeneratör gibi ağır ekipmanların montaj noktasına taşınması ve yerleştirilmesi." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <div><h3 className="font-bold text-gray-900 mb-2">{t}</h3><p className="text-gray-600 leading-relaxed">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proje Türleri */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Hangi İnşaat Projelerinde Hizmet Veriyoruz?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Konut ve Apartman İnşaatı", d: "Salihli merkez ve ilçelerdeki konut projelerinde malzeme kaldırma ve montaj desteği." },
              { t: "Fabrika ve Depo Yapımı", d: "Endüstriyel yapılar, depo binaları ve çelik konstrüksiyon fabrikaların inşaatında profesyonel vinç hizmetleri." },
              { t: "OSB ve Sanayi Yapıları", d: "Salihli OSB içindeki fabrika ve atölye inşaatlarında özel vinç çözümleri." },
              { t: "Köprü ve Altyapı Projeleri", d: "Köprü kirişleri, menfez ve altyapı elemanlarının yerleştirilmesinde yetkin vinç ekibi." },
              { t: "Tarımsal Tesisler", d: "Bölgenin ihtiyacı olan soğuk hava deposu, gübre deposu ve tarım yapılarının inşasında vinç desteği." },
              { t: "Enerji ve Elektrik Altyapısı", d: "Beton trafo köşkü, enerji nakil direği ve güneş paneli kurulum projelerinde vinç hizmetleri." },
            ].map(({ t, d }) => (
              <Card key={t} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="h-2 w-10 bg-orange-600 rounded mb-3"></div>
                  <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* İlgili Hizmetler */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Diğer Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: "/mobil-vinc-kiralama-salihli", t: "Mobil Vinç Kiralama" },
              { href: "/sanayi-vinc-kiralama-salihli", t: "Sanayi Taşımacılığı" },
              { href: "/acil-vinc-hizmeti-salihli", t: "7/24 Acil Hizmet" },
            ].map(({ href, t }) => (
              <a key={t} href={href} className="block p-4 border border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all text-center font-medium text-gray-700 hover:text-orange-700">
                {t} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">İnşaat Projesi İçin Teklif Alın</h2>
          <p className="text-orange-100 mb-8">Salihli, Alaşehir, Kula ve Demirci'de ücretsiz keşif ve fiyat teklifi</p>
          <a href="tel:05444513341" onClick={trackCall}>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />0544 451 33 41
            </Button>
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Araz Vinç Salihli. Tüm hakları saklıdır. | <a href="/" className="hover:text-orange-400">Ana Sayfa</a> | <a href="/blog" className="hover:text-orange-400">Blog</a></p>
        </div>
      </footer>
    </div>
  );
}
