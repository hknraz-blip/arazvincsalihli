import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Shield, CheckCircle, Clock, Zap, MapPin, AlertTriangle, Truck, Wrench, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function ServiceAgirVasitaKurtarma() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Salihli Ağır Vasıta Kurtarma | Kamyon, Tır & İş Makinesi – Araz Vinç",
    description: "Salihli, D300 karayolu, Alaşehir, Kula ve Ahmetli'de 7/24 devrilmiş kamyon, tır, dorse ve batmış iş makinesi vinçle kurtarma. Hemen arayın: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/agir-vasita-kurtarma-salihli",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white pb-16 md:pb-0">
      {/* Schema.org Yapısal Verisi */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EmergencyService",
        "name": "Araz Vinç Salihli Ağır Vasıta ve Kaza Kurtarma",
        "provider": { 
          "@type": "LocalBusiness", 
          "name": "Araz Vinç Salihli", 
          "telephone": "+905444513341", 
          "url": "https://arazvincsalihli.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Abay Bulvari No: 72",
            "addressLocality": "Salihli",
            "addressRegion": "Manisa",
            "postalCode": "45300",
            "addressCountry": "TR"
          }
        },
        "areaServed": ["Salihli", "Alaşehir", "Kula", "Demirci", "Köprübaşı", "Sarıgöl", "Ahmetli", "D300 Karayolu"],
        "description": "Salihli, D300 karayolu ve Manisa çevresinde devrilmiş kamyon, tır, dorse, tünel kazaları ve şantiye iş makinesi vinçle kurtarma hizmeti.",
        "url": "https://arazvincsalihli.com/agir-vasita-kurtarma-salihli",
      })}} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Ana Sayfa</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Ana Sayfa</span><span>/</span><span>Hizmetler</span><span>/</span><span className="text-orange-600 font-semibold">Ağır Vasıta Kurtarma</span>
            </div>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />7/24 Acil Çağrı
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 min-h-[65vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-red-600/20 border border-red-500/40 rounded-full">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <span className="text-red-300 text-sm font-semibold">7/24 Acil Kaza & Şantiye Kurtarma</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Salihli <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">Ağır Vasıta</span> Kurtarma
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                D300 karayolu, Salihli, Alaşehir, Kula, Ahmetli ve Demirci genelinde devrilen kamyon, şarampole inen tır, makaslayan dorse ve arazide batan iş makinelerine 55 tonluk Hiab vinç filomuzla 7/24 acil müdahale ediyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:05444513341" onClick={trackCall}>
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white w-full sm:w-auto shadow-xl shadow-red-950/50 font-bold text-lg">
                    <Phone className="h-5 w-5 mr-2 animate-bounce" />
                    0544 451 33 41 – Acil Kurtarma
                  </Button>
                </a>
                <a href="https://wa.me/905444513341?text=Acil%20kurtarma%20hizmetine%20ihtiyac%C4%B1m%20var.%20Konum%20payla%C5%9F%C4%B1yorum." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                    Konum Gönder (WhatsApp)
                  </Button>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs md:text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  <span>20–30 Dk Çıkış</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  <span>Sigortalı Tahliye</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  <span>55 Ton Güç</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/80 p-2">
                <img 
                  src="/galeri/damperli-kamyon-kurtarma-1.webp" 
                  alt="Salihli Kamyon Kurtarma Vinç Operasyonu" 
                  className="rounded-2xl w-full h-80 object-cover shadow-inner"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4 text-white">
                  <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-1">Gerçek Saha Operasyonu</div>
                  <div className="font-bold text-base">Karayolunda Devrilen Damperli Kamyonun Vinçle Kurtarılması</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurtarma Hizmet Alanları */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-4 py-1 bg-red-100 border border-red-200 rounded-full">
              <span className="text-red-700 text-sm font-semibold">Uzman Kurtarma Çözümleri</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Ağır Vasıta Kurtarma Alanlarımız</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her türlü zorlu zemin, eğim ve karayolu kaza senaryosunda can ve mal güvenliğini önceleyen profesyonel ekipman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                img: "/galeri/damperli-kamyon-kurtarma-2.webp",
                title: "Devrilmiş Kamyon & Tır Doğrultma",
                desc: "Karayolunda, virajda veya şarampolde yan yatan yüklü/yüksüz kamyon ve tırların çift vinç veya tek güçlü bom ile gövdeye zarar vermeden düzeltilmesi ve yola alınması."
              },
              {
                img: "/galeri/dorse-kurtarma.webp",
                title: "Dorse & Kasa Kurtarma Operasyonu",
                desc: "Yoldan çıkan, devrilen veya kaza sonucu çekiciden ayrılan ağır yük dorselerinin vinç ile kaldırılarak taşınması ve çekiciye yüklenmesi."
              },
              {
                img: "/galeri/grayder-kurtarma-1.webp",
                title: "Şantiye & Arazi İş Makinesi Kurtarma",
                desc: "Ormanlık arazide, dere yatağında, taş ocağında veya şantiyede batan/devrilen grayder, ekskavatör, loder ve kepçelerin güvenle çıkarılması."
              },
              {
                img: "/galeri/tunel-beton-mikseri-1.webp",
                title: "Tünel & Kapalı Alan Kurtarma",
                desc: "Tünel inşaatlarında, kapalı fabrikalarda ve tavan irtifası dar olan alanlarda devrilen beton mikseri ve ağır ekipmanların hassas kurtarılması."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-300">
                <div className="h-60 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-orange-600 font-semibold">7/24 Nöbetçi Ekip</span>
                    <a href="tel:05444513341" onClick={trackCall} className="text-orange-600 hover:text-orange-700 font-bold text-sm">
                      Ara: 0544 451 33 41 →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* D300 & Çevre İlçeler Hızlı Müdahale */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">D300 Karayolu & İlçe Müdahale Sürelerimiz</h2>
            <p className="text-gray-400">Salihli merkezli çıkış istasyonumuz sayesinde çevre karayollarına en kısa sürede varıyoruz.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { loc: "Salihli Merkez & OSB", time: "15 - 20 Dk", desc: "D300 & Sanayi Hattı" },
              { loc: "Ahmetli Karayolu", time: "15 - 25 Dk", desc: "İzmir Yönü Geçişi" },
              { loc: "Alaşehir & Sarıgöl", time: "25 - 35 Dk", desc: "Denizli Bağlantısı" },
              { loc: "Kula & Rampalar", time: "25 - 35 Dk", desc: "Ankara Yolu Hattı" },
            ].map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
                <MapPin className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <div className="text-xs text-gray-400 mb-1">{b.desc}</div>
                <h3 className="text-lg font-bold text-white mb-2">{b.loc}</h3>
                <div className="inline-block px-3 py-1 bg-orange-600/30 text-orange-400 border border-orange-500/30 rounded-full font-bold text-sm">
                  {b.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ağır Vasıta Kurtarma Hakkında Sıkça Sorulanlar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kaza ve kurtarma operasyonlarında merak edilen önemli noktalar</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Kaza yerinde araç kurtarma işlemi sigorta / kasko kapsamında mıdır?",
                a: "Araz Vinç olarak gerçekleştirdiğimiz tüm kurtarma operasyonları faturalı ve belgelidir. Kasko veya trafik sigortanızın kurtarma teminatı kapsamında işlem bedelini sigorta şirketinizden talep edebilirsiniz."
              },
              {
                q: "Ağır vasıta kurtarma için hangi vinçleri kullanıyorsunuz?",
                a: "55 ton kaldırma kapasiteli, güçlü çekme halatları, kilitli mapa ve özel polyester sapan donanımlarına sahip Hiab ve mobil vinçlerimizle müdahale ediyoruz."
              },
              {
                q: "Gece veya tatil günlerinde kurtarma hizmeti veriyor musunuz?",
                a: "Evet. 7 gün 24 saat acil nöbetçi operatör sistemimiz bulunmaktadır. Gece 03:00'te de arasanız çağrınız yanıtlanır ve araçlarımız hızla sevk edilir."
              }
            ].map((faq, idx) => (
              <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center justify-between">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-5 w-5 text-orange-600 flex-shrink-0 ml-2" />
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2 border-t border-gray-100 pt-3">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-orange-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Acil Vinç ve Kurtarma İhtiyacınız mı Var?</h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Salihli ve tüm çevre ilçelerde 7/24 anında yola çıkmaya hazır nöbetçi ekibimize tek tıkla ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 shadow-2xl font-bold text-xl px-10 py-6">
                <Phone className="h-6 w-6 mr-2 animate-bounce" />0544 451 33 41 – Şimdi Arayın
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-4">© {new Date().getFullYear()} Araz Vinç Salihli. Tüm hakları saklıdır.</p>
          <div className="flex justify-center gap-6 text-xs text-gray-500">
            <a href="/" className="hover:text-orange-400 transition-colors">Ana Sayfa</a>
            <a href="/mobil-vinc-kiralama-salihli" className="hover:text-orange-400 transition-colors">Mobil Vinç</a>
            <a href="/sepetli-vinc-kiralama-salihli" className="hover:text-orange-400 transition-colors">Sepetli Vinç</a>
            <a href="/agir-vasita-kurtarma-salihli" className="hover:text-orange-400 transition-colors text-orange-400">Ağır Vasıta Kurtarma</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
