import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle, Shield, AlertCircle, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function ServiceSafeTransport() {
  const [, navigate] = useLocation();
  useSEO({
    title: "Güvenli Yük Taşıma Salihli | Sigortalı Vinç | Araz Vinç",
    description: "Salihli ve çevresinde sigortalı, güvenli ağır yük taşıma ve vinç hizmetleri. Sertifikalı operatörler, modern ekipman. Ücretsiz teklif: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/guvenli-tasima-salihli",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Güvenli Yük Taşıma Hizmeti",
        "provider": { "@type": "LocalBusiness", "name": "Araz Vinç Salihli", "telephone": "+905444513341", "url": "https://arazvincsalihli.com" },
        "areaServed": ["Salihli", "Alaşehir", "Kula", "Demirci", "Köprübaşı", "Sarıgöl", "Ahmetli"],
        "description": "Salihli ve Manisa çevresinde sigortalı ve sertifikalı güvenli ağır yük taşıma ve vinç operasyonları.",
        "url": "https://arazvincsalihli.com/guvenli-tasima-salihli",
      })}} />

      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Ana Sayfa</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Ana Sayfa</span><span>/</span><span className="text-orange-600">Güvenli Taşıma</span>
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
              Güvenli <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Yük Taşıma</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sigortalı ve sertifikalı ekibimizle her türlü ağır yükü, fabrikayı, inşaat malzemesini ve sanayi ekipmanını en yüksek güvenlik standartlarında taşıyoruz. Salihli ve çevre ilçelerde 7/24 hizmet.
            </p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-5 w-5 mr-2" />0544 451 33 41
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Hizmet Standartlarımız</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, t: "Tam Sigortalı Taşıma", d: "Tüm taşıma ve kaldırma operasyonlarımız kapsamlı emtia ve kaza sigortası altındadır." },
              { icon: CheckCircle, t: "Sertifikalı Operatörler", d: "Operatörlerimizin tamamı G sınıfı sürücü belgesine ve mesleki yeterlilik belgelerine sahiptir." },
              { icon: Zap, t: "7/24 Kesintisiz Hizmet", d: "Gece, hafta sonu veya resmi tatil fark etmeksizin acil taşıma ihtiyaçlarınızda hazırız." },
              { icon: AlertCircle, t: "Saha Risk Analizi", d: "Her kaldırma öncesinde zemin, rüzgar ve yük merkezi hesaplanarak sıfır risk hedeflenir." }
            ].map(({ icon: Icon, t, d }) => (
              <Card key={t} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diğer Hizmetler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Diğer Hizmetlerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/mobil-vinc-kiralama-salihli", t: "Mobil Vinç Kiralama" },
              { href: "/sepetli-vinc-kiralama-salihli", t: "Sepetli Vinç Kiralama" },
              { href: "/insaat-vinc-kiralama-salihli", t: "İnşaat Vinç Kiralama" },
              { href: "/sanayi-vinc-kiralama-salihli", t: "Sanayi Taşımacılığı" },
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
          <h2 className="text-4xl font-bold text-white mb-4">Güvenli Yük Taşıma İçin Hemen Arayın</h2>
          <p className="text-orange-100 mb-8">Salihli, Alaşehir, Kula, Demirci ve Ahmetli'de 7/24 hizmet</p>
          <a href="tel:05444513341" onClick={trackCall}>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />0544 451 33 41 - Teklif Alın
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
