import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Clock, Zap, CheckCircle, MapPin, Shield } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function Service24_7() {
  const [, navigate] = useLocation();
  useSEO({
    title: "7/24 Acil Vinç Hizmeti Salihli, Alaşehir, Kula | Araz Vinç",
    description: "Salihli, Alaşehir, Kula ve Demirci'de 7/24 acil vinç hizmeti. 30 dakikada sahada, kesintisiz destek. Hemen arayın: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/acil-vinc-hizmeti-salihli",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Ana Sayfa</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Ana Sayfa</span><span>/</span><span className="text-orange-600">7/24 Acil Vinç</span>
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
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">7/24</span> Acil Vinç
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Gece gündüz, hafta sonu tatil dinlemeksizin Salihli, Alaşehir, Kula, Demirci, Köprübaşı ve Sarıgöl'de acil vinç hizmetindeyiz. Araçlarımız her an hazır, operatörlerimiz nöbette.
            </p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg mt-4">
                <Phone className="h-5 w-5 mr-2" />0544 451 33 41 – Şimdi Ara
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Neden 7/24 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Neden 7/24 Vinç Hizmetine İhtiyaç Duyarsınız?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Acil durumlar saate ve güne bakmaz. Salihli ve çevresinde her an yanınızdayız.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, t: "Her Saat Ulaşılabilir", d: "Gece 02:00'de, Pazar sabahı ya da Kurban Bayramı'nda ararsanız telefonu açıyoruz. 7/24 aktif nöbet sistemimiz sayesinde hiçbir çağrı cevapsız kalmaz." },
              { icon: Zap, t: "30 Dakika Yanıt Süresi", d: "Salihli merkezi için ortalama ulaşma süremiz 30 dakikadır. Alaşehir, Kula ve Demirci için bu süre biraz uzayabilir; ancak acil durumlarda önce güvenlik protokollerimizi uygularız." },
              { icon: CheckCircle, t: "Hazır Ekipman ve Ekip", d: "Araçlarımız her an yakıt dolu ve teknik bakımlı halde bekletilir. Operatörlerimiz nöbet sistemine göre çalışır, gerektiğinde anında harekete geçer." },
            ].map(({ icon: Icon, t, d }) => (
              <Card key={t} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">{t}</h3>
                  <p className="text-gray-600 leading-relaxed">{d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acil Hizmet Türleri */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Acil Durumlarda Ne Yapıyoruz?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, t: "Trafik Kazası – Araç Kurtarma", d: "Karayollarında devrilmiş, köprüden düşmüş veya batmış araçların kurtarılması. Salihli – Alaşehir – Kula karayollarında hızlı müdahale." },
              { icon: Truck, t: "İş Makinesi Kurtarma", d: "Şantiye veya arazide batan, devrilmiş ekskavatör, buldozer veya diğer iş makinelerinin kurtarılması." },
              { icon: Zap, t: "Üretim Durduran Arıza", d: "Fabrikalarda üretimi durduran kritik ekipman arızasında yeni ekipmanın acilen sahaya getirilmesi." },
              { icon: MapPin, t: "Gece ve Tatil Operasyonları", d: "Resmi tatiller, bayram günleri ve gece yarısı operasyonlarda aynı profesyonellik ve güvenlik standartlarıyla hizmet." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <div><h3 className="font-bold text-gray-900 mb-2">{t}</h3><p className="text-gray-600 leading-relaxed">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bölge ve Süre */}
      <section className="py-14 bg-orange-50 border-y border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tahmini Ulaşım Süreleri</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-3xl mx-auto">
            {[
              { b: "Salihli Merkez", s: "~15 dk" },
              { b: "Alaşehir", s: "~30 dk" },
              { b: "Sarıgöl", s: "~25 dk" },
              { b: "Kula", s: "~40 dk" },
              { b: "Demirci", s: "~50 dk" },
              { b: "Köprübaşı", s: "~35 dk" },
            ].map(({ b, s }) => (
              <div key={b} className="bg-white border border-orange-200 rounded-xl p-4">
                <div className="text-xl font-bold text-orange-600">{s}</div>
                <div className="text-sm text-gray-600 mt-1">{b}</div>
              </div>
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
          <h2 className="text-4xl font-bold text-white mb-4">Acil Durumda Hemen Arayın</h2>
          <p className="text-orange-100 mb-8">Salihli, Alaşehir, Kula, Demirci – 7/24 aktif</p>
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
