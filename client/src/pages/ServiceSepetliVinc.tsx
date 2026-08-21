import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Shield, CheckCircle, Clock, Zap, MapPin, Award, Building, Sparkles, Wrench, Trees, Lightbulb, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function ServiceSepetliVinc() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Salihli Sepetli Vinç Kiralama | Yüksek İrtifa Platformu – Araz Vinç",
    description: "Salihli, Alaşehir, Kula ve Ahmetli'de sepetli vinç ve platform kiralama. Dış cephe, tabela montajı, çatı tamiri, elektrik ve ağaç budama. 7/24 arayın: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/sepetli-vinc-kiralama-salihli",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Schema.org Yapısal Verisi */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Salihli Sepetli Vinç Kiralama",
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
        "areaServed": ["Salihli", "Alaşehir", "Kula", "Demirci", "Köprübaşı", "Sarıgöl", "Ahmetli"],
        "description": "Salihli ve Manisa çevresinde tabela montajı, dış cephe cam temizliği, çatı tamiri ve yüksek irtifa işleri için sepetli vinç platform kiralama.",
        "url": "https://arazvincsalihli.com/sepetli-vinc-kiralama-salihli",
      })}} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Ana Sayfa</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Ana Sayfa</span><span>/</span><span>Hizmetler</span><span>/</span><span className="text-orange-600 font-semibold">Sepetli Vinç Kiralama</span>
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
      <section className="pt-24 min-h-[65vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-orange-600/20 border border-orange-500/40 rounded-full">
                <Sparkles className="h-4 w-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-semibold">Yüksek İrtifa Güvenli Platform</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Salihli <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text">Sepetli Vinç</span> Kiralama
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                İskele kurma zahmetine ve riskine son! Salihli, Alaşehir, Kula, Ahmetli ve çevre ilçelerde tabela montajı, dış cephe cam temizliği, çatı onarımı, elektrik hatları ve ağaç budama işleriniz için profesyonel sepetli vinç hizmeti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:05444513341" onClick={trackCall}>
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white w-full sm:w-auto shadow-lg shadow-orange-900/30">
                    <Phone className="h-5 w-5 mr-2" />
                    0544 451 33 41 - Fiyat Alın
                  </Button>
                </a>
                <a href="https://wa.me/905444513341?text=Merhaba,%20sepetli%20vin%C3%A7%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                    WhatsApp ile Yazın
                  </Button>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs md:text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  <span>Sertifikalı Sepet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  <span>Saatlik & Günlük</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  <span>7/24 Hızlı Çıkış</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-tr from-orange-600/20 to-amber-500/10 p-2 rounded-3xl border border-orange-500/30 shadow-2xl">
                <div className="bg-slate-900/90 rounded-2xl p-8 text-white space-y-6">
                  <h3 className="text-2xl font-bold text-orange-400 border-b border-slate-800 pb-4">Neden Sepetli Vinç?</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Maksimum İş Güvenliği</h4>
                        <p className="text-sm text-gray-400">Emniyet kemeri bağlantı noktaları ve yüksek korkuluklu güvenli kabin ile sıfır kaza riski.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Zaman ve Maliyet Tasarrufu</h4>
                        <p className="text-sm text-gray-400">Günler süren iskele kurma-sökme maliyetini ortadan kaldırır, işinizi saatler içinde bitirir.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Hassas ve Esnek Manevra</h4>
                        <p className="text-sm text-gray-400">Dar sokaklarda ve engelli alanlarda hedeflenen çalışma noktasına milimetrik yanaşma.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-4 py-1 bg-orange-100 border border-orange-200 rounded-full">
              <span className="text-orange-700 text-sm font-semibold">Geniş Hizmet Yelpazesi</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Sepetli Vinç Kullanım Alanları</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Salihli ve çevre ilçelerde her sektörün yüksek irtifa ihtiyaçlarına özel profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Building,
                title: "Dış Cephe & Cam Temizliği",
                desc: "Plaza, iş merkezi, kamu binası ve yüksek konutların dış cephe cam silme, kompozit temizliği ve derz/silikon yenileme çalışmaları."
              },
              {
                icon: Sparkles,
                title: "Tabela & Reklam Montajı",
                desc: "Işıklı tabela, cephe giydirme, germe branda, totem direkleri ve reklam panolarının güvenli şekilde asılması ve bakımı."
              },
              {
                icon: Wrench,
                title: "Çatı, Oluk & Güneş Paneli",
                desc: "Bina çatılarında kiremit onarımı, yağmur oluğu montajı, baca bakımı ve çatı üstü Güneş Enerji Santrali (GES) panellerinin montajı."
              },
              {
                icon: Lightbulb,
                title: "Elektrik & Aydınlatma Direkleri",
                desc: "Sokak aydınlatma armatürleri, sanayi trafo hatları, güvenlik kamerası montajı ve havai hat kablo çekimi operasyonları."
              },
              {
                icon: Trees,
                title: "Ağaç Budama & Park Bahçe",
                desc: "Elektrik tellerine veya binalara temas eden yüksek ve tehlikeli ağaç dallarının çevreye zarar vermeden kontrollü budanması."
              },
              {
                icon: Shield,
                title: "Fabrika & OSB İçi Bakım",
                desc: "Salihli OSB ve sanayi tesislerinde tavan vinç yolu bakımı, yangın sprinkler boruları, havalandırma kanalı ve tavan boya işleri."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kiralama Seçenekleri & Süreç */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Esnek Kiralama Koşulları</h2>
            <p className="text-gray-600">İhtiyacınıza göre saatlik, günlük veya proje bazlı uzun dönem kiralama avantajları</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl border-2 border-orange-100 bg-orange-50/50 text-center hover:border-orange-400 transition-colors">
              <div className="text-orange-600 font-bold text-lg mb-2">Saatlik Kiralama</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hızlı İşler İçin</h3>
              <p className="text-gray-600 text-sm mb-6">Tabela montajı, tekil cam temizliği veya kısa süreli arıza onarımları için en ekonomik çözüm.</p>
              <a href="tel:05444513341" onClick={trackCall}>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Teklif Alın</Button>
              </a>
            </div>

            <div className="p-8 rounded-2xl border-2 border-orange-500 bg-white shadow-xl text-center relative transform md:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-500 text-white text-xs font-bold py-1 px-4 rounded-full">
                EN ÇOK TERCİH EDİLEN
              </div>
              <div className="text-orange-600 font-bold text-lg mb-2">Günlük Kiralama</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tam Gün Çalışmalar</h3>
              <p className="text-gray-600 text-sm mb-6">Dış cephe boya, tüm bina cam silme, çatı aktarma veya kapsamlı ağaç budama projeleri.</p>
              <a href="tel:05444513341" onClick={trackCall}>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 text-white shadow-md">
                  0544 451 33 41
                </Button>
              </a>
            </div>

            <div className="p-8 rounded-2xl border-2 border-orange-100 bg-orange-50/50 text-center hover:border-orange-400 transition-colors">
              <div className="text-orange-600 font-bold text-lg mb-2">Haftalık & Proje Bazlı</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Şantiye & Sanayi</h3>
              <p className="text-gray-600 text-sm mb-6">İnşaat şantiyeleri, OSB fabrika montajları ve uzun vadeli taahhüt projeleri için özel indirimler.</p>
              <a href="tel:05444513341" onClick={trackCall}>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Özel Fiyat Alın</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sepetli Vinç Hakkında Sıkça Sorulanlar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Sepetli platform vinç kiralama süreci ile ilgili merak edilenler</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Sepetli vinç kiralama fiyatları neye göre belirlenir?",
                a: "Fiyatlandırma çalışılacak irtifa yüksekliği, operasyonun süresi (saatlik, günlük veya haftalık), çalışma yapılacak konumun Salihli merkeze mesafesi ve işin niteliğine göre belirlenir. En uygun fiyat için 0544 451 33 41 numaralı hattımızdan anında ücretsiz teklif alabilirsiniz."
              },
              {
                q: "Araçlar operatörlü olarak mı kiralanıyor?",
                a: "Evet. Tüm sepetli vinçlerimiz G sınıfı iş makinesi ehliyetine, mesleki yeterlilik belgelerine ve yüksekte çalışma eğitimine sahip uzman operatörlerimizle birlikte sevk edilir. Güvenliğiniz bizim önceliğimizdir."
              },
              {
                q: "Salihli dışındaki ilçelere de sepetli vinç gönderiyor musunuz?",
                a: "Evet. Salihli başta olmak üzere Alaşehir, Ahmetli, Kula, Demirci, Sarıgöl ve Köprübaşı ilçelerine hızlı sevk sağlıyoruz. Acil işlerinizde araçlarımız kısa sürede adresinize ulaşır."
              },
              {
                q: "Sepet içinde kaç personel çalışabilir?",
                a: "Sepetli vinç kabinlerimiz taşıma kapasitesine göre 2 personelin ve gerekli el aletlerinin/malzemelerinin güvenle çalışabileceği genişlik ve dayanıklılığa sahiptir."
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

      {/* İlgili Hizmetler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Diğer Vinç Hizmetlerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { href: "/mobil-vinc-kiralama-salihli", t: "Mobil Vinç Kiralama" },
              { href: "/insaat-vinc-kiralama-salihli", t: "İnşaat Vinç Kiralama" },
              { href: "/sanayi-vinc-kiralama-salihli", t: "Sanayi Taşımacılığı" },
              { href: "/acil-vinc-hizmeti-salihli", t: "7/24 Acil Vinç" },
            ].map(({ href, t }) => (
              <a key={t} href={href} className="block p-4 border border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all text-center font-medium text-gray-700 hover:text-orange-700">
                {t} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Salihli'de Sepetli Vinç İhtiyacınız mı Var?</h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Güvenli, hızlı ve ekonomik yüksek irtifa çözümleri için bizi 7/24 arayabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl font-bold text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />0544 451 33 41 - Hemen Arayın
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
            <a href="/sepetli-vinc-kiralama-salihli" className="hover:text-orange-400 transition-colors text-orange-400">Sepetli Vinç</a>
            <a href="/blog" className="hover:text-orange-400 transition-colors">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
