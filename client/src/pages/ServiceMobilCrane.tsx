import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle, Truck, AlertCircle, Zap, MapPin, Shield } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function ServiceMobilCrane() {
  const [, navigate] = useLocation();
  useSEO({
    title: "Mobil Vinç Kiralama Salihli | 10–55 Ton | Araz Vinç – 7/24",
    description: "Salihli'de 10–55 ton arası mobil vinç kiralama. Sertifikalı operatörler, 30 dakikada sahada, sigortalı taşıma. Ücretsiz teklif: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/mobil-vinc-kiralama-salihli",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mobil Vinç Kiralama",
        "provider": { "@type": "LocalBusiness", "name": "Araz Vinç Salihli", "telephone": "+905444513341" },
        "areaServed": ["Salihli", "Alaşehir", "Kula", "Demirci", "Köprübaşı", "Sarıgöl"],
        "description": "Salihli ve çevresinde 10–55 ton arası mobil vinç kiralama hizmetleri.",
        "url": "https://arazvincsalihli.com/mobil-vinc-kiralama-salihli",
      })}} />

      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Ana Sayfa</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Ana Sayfa</span><span>/</span><span className="text-orange-600">Mobil Vinç Kiralama</span>
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
      <section className="pt-24 min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Mobil <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
              </h1>
              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Salihli, Alaşehir, Kula ve Demirci'de 10 tondan 55 tona kadar farklı kapasitelerde mobil vinç kiralama hizmetleri. Sertifikalı operatörler, sigortalı ekipman, 30 dakikada sahada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a href="tel:05444513341" onClick={trackCall}>
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white w-full sm:w-auto shadow-lg">
                    <Phone className="h-5 w-5 mr-2" />0544 451 33 41
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-72 md:h-full">
              <img src="/araz-vinc-machine.jpg" alt="Salihli Mobil Vinç Kiralama – Araz Vinç" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Mobil Vinç Kiralama Özellikleri</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Salihli merkezimizden hareketle tüm bölgeye hızlı ulaşım sağlıyoruz.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Truck, t: "Geniş Tonaj Aralığı", d: "10 tondan 55 tona kadar farklı kapasitelerde mobil vinç seçenekleri sunuyoruz. Küçük montaj işlerinden büyük sanayi projelerine kadar her ihtiyaca uygun vinç filomuz mevcuttur." },
              { icon: Zap, t: "Hızlı Mobilizasyon", d: "Talebi aldıktan sonra 30 dakika içinde olay yerine ulaşabiliyoruz. Salihli, Alaşehir, Kula ve Demirci için en hızlı müdahale sürelerini sunuyoruz. Acil durumlarda önce güvenlik." },
              { icon: CheckCircle, t: "Sertifikalı Operatörler", d: "Tüm operatörlerimiz TSE ve ilgili bakanlık standartlarına göre sertifikalıdır. Yıllık periyodik eğitimlerle güncel bilgilerini korurlar. İşinizin güvenliği bizim önceliğimizdir." },
              { icon: Shield, t: "Tam Sigorta Kapsamı", d: "Ekipmanlarımız ve operasyonlarımız tam kapsamlı iş makinesi sigortasıyla güvence altındadır. Olası bir kaza veya hasar durumunda endişelenmenize gerek yoktur." },
              { icon: AlertCircle, t: "Periyodik Bakımlı Ekipman", d: "Tüm vinçlerimiz düzenli teknik bakım ve güvenlik kontrolünden geçmektedir. Arızasız ve güvenilir operasyon için ekipmanlarımızı en iyi koşulda tutuyoruz." },
              { icon: MapPin, t: "Geniş Hizmet Bölgesi", d: "Salihli merkez, Alaşehir, Kula, Demirci, Köprübaşı ve Sarıgöl dahil tüm çevre ilçelerde hizmet veriyoruz. Bölge dışı projeler için de uygun koşullarda destek sağlıyoruz." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                  <p className="text-gray-600 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Mobil Vinç Ne Zaman Kullanılır?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Salihli ve çevresinde mobil vincin en yaygın kullanım alanları</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "İnşaat ve Yapı Projeleri", d: "Çelik kolon, kiriş ve prefabrik elemanların kaldırılması, kat döşemelerinde demir-beton taşıma, kalıp sistemlerinin kurulumu ve demontajı." },
              { t: "Sanayi Ekipman Montajı", d: "Fabrika ve atölyelerde ağır makine, pompa, kompresör, jeneratör ve sanayi ekipmanlarının montaj noktasına taşınması." },
              { t: "Beton Köşk ve Trafo", d: "Enerji altyapı projelerinde beton trafo köşklerinin, kompakt elektrik dağıtım ünitelerinin yerleştirilmesi." },
              { t: "Araç ve İş Makinesi Kurtarma", d: "Trafik kazası, devrilme veya batma durumlarında araç, kamyon, TIR ve iş makinelerinin kurtarılması." },
              { t: "Prefabrik Yapı Elemanları", d: "Prefabrik kolon, kiriş, döşeme, merdiven ve çatı elemanlarının montajı. Endüstriyel prefabrik yapı kurulumları." },
              { t: "Çatı ve Yüksek İrtifa İşleri", d: "Çatıya malzeme çıkarma, yüksek binalarda dış cephe çalışmaları, yüksek gerilim hattı ve direk kurulum desteği." },
            ].map(({ t, d }) => (
              <Card key={t} className="border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-2 w-10 bg-orange-600 rounded mb-4"></div>
                  <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bölge Bilgisi */}
      <section className="py-16 bg-orange-50 border-y border-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hizmet Verdiğimiz Bölgeler</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Salihli Merkez", "Alaşehir", "Kula", "Demirci", "Köprübaşı", "Sarıgöl", "Salihli OSB"].map(b => (
              <span key={b} className="px-4 py-2 bg-white border border-orange-200 rounded-full text-orange-700 font-medium text-sm">{b}</span>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-xl mx-auto">
            Yukarıdaki bölgelere ortalama 15–45 dakika içinde ulaşıyoruz. Bölge dışı projeler için de iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* İlgili Hizmetler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Diğer Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: "/insaat-vinc-kiralama-salihli", t: "İnşaat Vinç Kiralama" },
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
          <h2 className="text-4xl font-bold text-white mb-4">Mobil Vinç Kiralama İçin Hemen Arayın</h2>
          <p className="text-orange-100 mb-8">Salihli, Alaşehir, Kula, Demirci ve çevre ilçelerde 7/24 hizmet</p>
          <a href="tel:05444513341" onClick={trackCall}>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />0544 451 33 41 - Hemen Arayın
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
