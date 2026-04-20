import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, CheckCircle, Truck, Clock, Shield } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function LocationKoprubasiSarigol() {
  const [, navigate] = useLocation();
  useSEO({
    title: "Köprübaşı & Sarıgöl Vinç Kiralama | Araz Vinç – 7/24",
    description: "Köprübaşı ve Sarıgöl'de vinç kiralama hizmetleri. Salihli merkezli, hızlı ulaşım, 7/24 destek. İnşaat, sanayi ve acil kurtarma. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/koprubaşı-sarigol-vinc-kiralama",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Köprübaşı ve Sarıgöl Vinç Kiralama",
        "provider": { "@type": "LocalBusiness", "name": "Araz Vinç Salihli", "telephone": "+905444513341", "url": "https://arazvincsalihli.com" },
        "areaServed": [
          { "@type": "City", "name": "Köprübaşı" },
          { "@type": "City", "name": "Sarıgöl" }
        ],
        "description": "Köprübaşı ve Sarıgöl ilçelerinde profesyonel vinç kiralama hizmetleri.",
        "url": "https://arazvincsalihli.com/koprubaşı-sarigol-vinc-kiralama",
      })}} />

      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <span className="font-medium">← Ana Sayfa</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Ana Sayfa</span><span>/</span><span className="text-orange-600">Köprübaşı & Sarıgöl</span>
            </div>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 min-h-[55vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-orange-400" />
              <span className="text-orange-300 font-medium">Köprübaşı & Sarıgöl · Manisa</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Köprübaşı & Sarıgöl <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Köprübaşı ve Sarıgöl ilçelerinde inşaat, sanayi ve acil kurtarma operasyonları için profesyonel vinç hizmetleri. Salihli merkezimizden her iki ilçeye kısa sürede ulaşıyoruz.
            </p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg mt-4">
                <Phone className="h-5 w-5 mr-2" />0544 451 33 41
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Köprübaşı ve Sarıgöl İçeriği */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Köprübaşı ve Sarıgöl'de Vinç Hizmetleri</h2>
          <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Köprübaşı, Salihli'ye yakın konumuyla hızla büyüyen bir ilçedir. Sarıgöl ise bağcılık ve zeytinciliğiyle öne çıkan, son dönemde altyapı yatırımlarıyla gelişen bir bölgedir. Her iki ilçede de inşaat, tarımsal yapı ve sanayi projelerine yönelik vinç talebini Araz Vinç olarak karşılıyoruz.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Truck, t: "Köprübaşı İnşaat Hizmetleri", d: "Köprübaşı'ndaki konut ve ticari yapı projelerinde malzeme kaldırma, prefabrik montaj ve çelik iskelet kurulumu." },
              { icon: CheckCircle, t: "Sarıgöl Bağ ve Tarım Yapıları", d: "Sarıgöl'deki bağ tesisleri, kurutma yerleri ve tarımsal depoların inşasında ve ekipman montajında vinç desteği." },
              { icon: Shield, t: "Araç Kurtarma – İki İlçede", d: "Köprübaşı ve Sarıgöl çevresindeki karayollarında devrilmiş araç ve iş makinesi kurtarma operasyonları." },
              { icon: Clock, t: "Hızlı Ulaşım Avantajı", d: "Köprübaşı'na ~35 dakika, Sarıgöl'e ~25 dakika ulaşım süresiyle her iki ilçeye de hızlı müdahale sağlıyoruz." },
              { icon: MapPin, t: "Salihli'ye Yakın Konum", d: "Her iki ilçe de Salihli'ye yakın konumda bulunduğundan, acil durumlarda kısa sürede sahada olabiliyoruz." },
              { icon: Truck, t: "7/24 Nöbet Hizmeti", d: "Gece ve hafta sonları dahil kesintisiz hizmet. Acil durumlar için tek bir telefon araması yeterli." },
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

      {/* Ulaşım Süresi */}
      <section className="py-14 bg-orange-50 border-y border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Salihli'den Tahmini Ulaşım Süreleri</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white border border-orange-200 rounded-xl p-6 min-w-32">
              <div className="text-2xl font-bold text-orange-600">~25 dk</div>
              <div className="text-gray-600 mt-1">Sarıgöl</div>
            </div>
            <div className="bg-white border border-orange-200 rounded-xl p-6 min-w-32">
              <div className="text-2xl font-bold text-orange-600">~35 dk</div>
              <div className="text-gray-600 mt-1">Köprübaşı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diğer Bölgeler */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tüm Hizmet Bölgelerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/", t: "Salihli" },
              { href: "/alasehir-vinc-kiralama", t: "Alaşehir" },
              { href: "/kula-vinc-kiralama", t: "Kula" },
              { href: "/demirci-vinc-kiralama", t: "Demirci" },
            ].map(({ href, t }) => (
              <a key={t} href={href} className="block p-4 border border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all text-center font-medium text-gray-700 hover:text-orange-700">{t} →</a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Köprübaşı veya Sarıgöl'de Vinç Kiralama</h2>
          <p className="text-orange-100 mb-8">7/24 hizmet · Salihli merkezli · Hızlı ulaşım</p>
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
