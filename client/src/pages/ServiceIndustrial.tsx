import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle, Truck, Shield, Zap, MapPin } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function ServiceIndustrial() {
  const [, navigate] = useLocation();
  useSEO({
    title: "Sanayi Vinç Kiralama Salihli OSB | Makine Montajı | Araz Vinç",
    description: "Salihli OSB ve çevre sanayi tesislerinde ağır ekipman taşıma, makine montajı, fabrika nakliyesi. Uzman ekip, modern vinç. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/sanayi-vinc-kiralama-salihli",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Sanayi Vinç Kiralama",
        "provider": { "@type": "LocalBusiness", "name": "Araz Vinç Salihli", "telephone": "+905444513341" },
        "areaServed": ["Salihli", "Alaşehir", "Kula", "Demirci"],
        "description": "Salihli OSB ve çevre sanayi tesislerinde ağır ekipman taşıma ve makine montajı.",
        "url": "https://arazvincsalihli.com/sanayi-vinc-kiralama-salihli",
      })}} />

      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Ana Sayfa</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Ana Sayfa</span><span>/</span><span className="text-orange-600">Sanayi Vinç Kiralama</span>
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
              Sanayi <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Salihli OSB, Alaşehir ve çevre sanayi bölgelerinde makine montajı, fabrika nakliyesi ve ağır sanayi ekipmanı kaldırma hizmetleri. Deneyimli ekip, sertifikalı operatörler, sigortalı operasyon.
            </p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg mt-4">
                <Phone className="h-5 w-5 mr-2" />0544 451 33 41
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sanayi Tesisleri İçin Vinç Hizmetleri</h2>
          <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Salihli Organize Sanayi Bölgesi ve çevresindeki fabrikalarda yıllar içinde edindiğimiz deneyimle, sanayi tesislerinin özel ihtiyaçlarını çok iyi biliyoruz. Makine yerleşim planlarına göre çalışıyor, üretim akışını minimum etkileyecek şekilde operasyon planlıyoruz.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Truck, t: "Makine Montajı ve Nakli", d: "CNC tezgahları, presleri, enjeksiyon makineleri ve diğer sanayi ekipmanlarının montaj noktasına hassas taşınması ve yerleştirilmesi." },
              { icon: CheckCircle, t: "Komple Fabrika Taşıma", d: "Fabrikanın başka bir lokasyona taşınması sürecinde tüm ekipmanların söküm, taşıma ve yeniden kurulum desteği." },
              { icon: Shield, t: "Jeneratör ve Kazan Montajı", d: "Güç ve ısıtma sistemleri için büyük hacimli jeneratör, kazan ve kompresörlerin montaj alanına yerleştirilmesi." },
              { icon: Zap, t: "Acil Ekipman Değişimi", d: "Arızalı ekipman nedeniyle üretim durduğunda, yeni ekipmanın en kısa sürede sahaya getirilmesi için 7/24 hizmet." },
              { icon: MapPin, t: "Salihli OSB Uzmanı", d: "Salihli Organize Sanayi Bölgesi içindeki firmalara özel deneyimimizle, dar alanlar ve karmaşık operasyonlarda güvenilir çözümler üretiyoruz." },
              { icon: CheckCircle, t: "Silo ve Depo Kurulumu", d: "Tarım, gıda ve kimya sektöründeki firmalara silo, tank ve büyük depolama ünitelerinin kurulumu için profesyonel vinç desteği." },
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

      {/* Sektörler */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Hizmet Verdiğimiz Sanayi Sektörleri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Tekstil ve Konfeksiyon", d: "Salihli ve Alaşehir'deki tekstil fabrikalarında makine montajı ve nakli." },
              { t: "Gıda ve İçecek", d: "Gıda işleme tesislerinde hijyene uygun ekipman yerleştirme ve kurulum." },
              { t: "Metal ve Çelik", d: "Ağır metal işleme ekipmanlarının montajı ve yer değişikliği operasyonları." },
              { t: "Plastik ve Kauçuk", d: "Enjeksiyon ve şişirme makineleri başta olmak üzere plastik sektörü ekipmanları." },
              { t: "Enerji ve Elektrik", d: "Transformatörler, jeneratörler ve güç sistemleri için özel vinç çözümleri." },
              { t: "Tarım ve Hayvancılık", d: "Bölgenin yoğun tarım altyapısındaki siloların, sulama ekipmanlarının ve depo yapılarının kurulumu." },
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
              { href: "/insaat-vinc-kiralama-salihli", t: "İnşaat Vinç Kiralama" },
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
          <h2 className="text-4xl font-bold text-white mb-4">Sanayi Tesisi İçin Hemen Teklif Alın</h2>
          <p className="text-orange-100 mb-8">Salihli OSB ve çevre sanayi bölgelerinde 7/24 hizmet</p>
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
