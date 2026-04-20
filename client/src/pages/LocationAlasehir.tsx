import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, CheckCircle, Truck, Clock, Shield } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function LocationAlasehir() {
  const [, navigate] = useLocation();
  useSEO({
    title: "Alaşehir Vinç Kiralama | Hiab & Mobil Vinç | Araz Vinç – 7/24",
    description: "Alaşehir'de profesyonel vinç kiralama hizmetleri. İnşaat, sanayi ve acil kurtarma. Salihli merkezli, hızlı ulaşım, 7/24 destek. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/alasehir-vinc-kiralama",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Alaşehir Vinç Kiralama",
        "provider": { "@type": "LocalBusiness", "name": "Araz Vinç Salihli", "telephone": "+905444513341", "url": "https://arazvincsalihli.com" },
        "areaServed": { "@type": "City", "name": "Alaşehir" },
        "description": "Alaşehir ilçesinde profesyonel vinç kiralama hizmetleri. İnşaat, sanayi ve acil kurtarma.",
        "url": "https://arazvincsalihli.com/alasehir-vinc-kiralama",
      })}} />

      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <span className="font-medium">← Ana Sayfa</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Ana Sayfa</span><span>/</span><span className="text-orange-600">Alaşehir Vinç Kiralama</span>
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
              <span className="text-orange-300 font-medium">Alaşehir · Manisa</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Alaşehir <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Alaşehir ve çevresinde inşaat projeleri, sanayi taşımacılığı ve acil kurtarma operasyonları için profesyonel vinç hizmetleri. Salihli merkez üssümüzden Alaşehir'e ortalama 30 dakikada ulaşıyoruz.
            </p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg mt-4">
                <Phone className="h-5 w-5 mr-2" />0544 451 33 41
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Alaşehir'e Özel Bilgi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Alaşehir'de Vinç İhtiyacı</h2>
          <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Alaşehir, Manisa'nın önde gelen üzüm ve bağcılık merkezi olmanın yanı sıra son yıllarda gelişen sanayi ve inşaat sektörüyle öne çıkmaktadır. İlçedeki konut projeleri, gıda işleme tesisleri ve tarımsal altyapı çalışmaları vinç hizmetine olan ihtiyacı artırmaktadır. Araz Vinç olarak Alaşehir'e yakın konumumuzla hızlı ve güvenilir hizmet sunuyoruz.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Truck, t: "İnşaat Vinç Hizmetleri", d: "Alaşehir'deki konut ve ticari yapı projelerinde demir-beton taşıma, prefabrik montaj ve malzeme kaldırma." },
              { icon: CheckCircle, t: "Bağ ve Tarım Tesisleri", d: "Üzüm işleme, kurutma ve depolama tesislerinin inşası ve ekipman montajında vinç desteği." },
              { icon: Shield, t: "Gıda Fabrikaları", d: "Alaşehir'deki gıda işleme tesislerinde ağır makine montajı ve fabrika kurulum operasyonları." },
              { icon: Clock, t: "7/24 Acil Hizmet", d: "Alaşehir için ortalama 30 dakika ulaşım süresiyle acil durumlarınızda yanınızdayız." },
              { icon: MapPin, t: "Hızlı Ulaşım", d: "Salihli – Alaşehir arası 35 km. Bu güzergahta çalışan ekibimizle hızlı mobilizasyon sağlıyoruz." },
              { icon: Truck, t: "Araç Kurtarma", d: "Salihli – Alaşehir karayolunda ve Alaşehir çevresindeki kaza ve kurtarma operasyonlarında hızlı müdahale." },
            ].map(({ icon: Icon, t, d }) => (
              <Card key={t} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <Icon className="h-7 w-7 text-orange-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diğer Bölgeler */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Çevre İlçelerde de Hizmet Veriyoruz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/", t: "Salihli" },
              { href: "/kula-vinc-kiralama", t: "Kula" },
              { href: "/demirci-vinc-kiralama", t: "Demirci" },
              { href: "/koprubaşı-sarigol-vinc-kiralama", t: "Köprübaşı & Sarıgöl" },
            ].map(({ href, t }) => (
              <a key={t} href={href} className="block p-4 border border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all text-center font-medium text-gray-700 hover:text-orange-700">{t} →</a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Alaşehir'de Vinç Kiralama İçin Arayın</h2>
          <p className="text-orange-100 mb-8">7/24 hizmet · Salihli merkezli · Ortalama 30 dk ulaşım</p>
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
