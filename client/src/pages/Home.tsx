import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Instagram, Construction, Shield, Clock, Award, Truck, CheckCircle, Star, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/araz-vinc-logo.png" alt="Araz Vin\u00e7" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Araz Vinç</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("anasayfa")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Ana Sayfa
              </button>
              <button onClick={() => scrollToSection("hizmetler")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Hizmetlerimiz
              </button>
              <button onClick={() => scrollToSection("hakkimizda")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Hakkımızda
              </button>
              <button onClick={() => scrollToSection("iletisim")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                İletişim
              </button>
            </div>
            <a href="tel:05444513341" className="hidden md:block">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />
                Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="anasayfa" className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block mb-6 px-4 py-2 bg-orange-600/20 border border-orange-500/50 rounded-full">
                <span className="text-orange-300 text-sm font-semibold">Profesyonel Vinç Hizmetleri</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Güvenilir <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Salihli ve Manisa bölgesinde 24/7 profesyonel vinç kiralama hizmetleri. Deneyimli ekibimiz ve modern ekipmanlarımızla her türlü yükleme ve taşıma ihtiyacınıza çözüm sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:05444513341">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white w-full sm:w-auto shadow-lg">
                    <Phone className="h-5 w-5 mr-2" />
                    0544 451 33 41
                  </Button>
                </a>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("hizmetler")} className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Hizmetlerimiz
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-400" />
                  <span className="text-gray-300">Hızlı Hizmet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-400" />
                  <span className="text-gray-300">Güvenli İşlem</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-2xl"></div>
              <img 
                src="/araz-vinc-machine.jpg" 
                alt="Araz Vinç Makinası" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">7/24</div>
              <div className="text-orange-100">Kesintisiz Hizmet</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">%100</div>
              <div className="text-orange-100">Müşteri Memnuniyeti</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-100">Yıl Deneyim</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-orange-100">Başarılı Proje</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İnşaat, sanayi ve ticari projeleriniz için kapsamlı vinç kiralama çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Mobil Vin\u00e7 Kiralama", desc: "Farklı tonajlarda mobil vin\u00e7 kiralama hizmetleri ile her t\u00fcrl\u00fc y\u00fckleme ve indirme i\u015flemlerinizi g\u00fcvenle ger\u00e7ekle\u015ftirin.", path: "/service/mobile-crane" },
              { icon: Shield, title: "G\u00fcvenli Ta\u015fıma", desc: "Deneyimli operat\u00f6rlerimiz ve modern ekipmanlarımızla y\u00fcklerinizi en g\u00fcvenli \u015fekilde ta\u015fıyoruz.", path: "/service/safe-transport" },
              { icon: Clock, title: "7/24 Hizmet", desc: "Acil durumlarınızda yanınızdayız. Hafta sonu ve tatil g\u00fcnleri dahil kesintisiz hizmet sunuyoruz.", path: "/service/24-7" },
              { icon: Award, title: "Uzman Ekip", desc: "Sertifikalı ve deneyimli operat\u00f6rlerimiz ile i\u015flerinizi profesyonel bir \u015fekilde tamamlıyoruz.", path: "/service/expert-team" },
              { icon: Construction, title: "\u0130n\u015faat Projeleri", desc: "\u0130n\u015faat sahalarında malzeme ta\u015fıma, montaj ve demontaj i\u015flemleriniz i\u00e7in \u00f6zel \u00e7\u00f6z\u00fcmler sunuyoruz.", path: "/service/construction" },
              { icon: Truck, title: "Sanayi Ta\u015fımacılı\u011fı", desc: "A\u011fır sanayi ekipmanlarının ta\u015fınması ve yerle\u015ftirilmesi i\u00e7in profesyonel vin\u00e7 hizmetleri.", path: "/service/industrial" },
            ].map((service, idx) => (
              <a key={idx} href={service.path} className="group">
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 h-full cursor-pointer">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                      <service.icon className="h-7 w-7 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                    <div className="mt-4 flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                      <span>Detayları Gör</span>
                      <span className="ml-2">→</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl opacity-10 blur-2xl"></div>
              <img 
                src="/araz-vinc-machine.jpg" 
                alt="Araz Vinç Çalışma Alanı" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover relative"
              />
            </div>
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full">
                <span className="text-orange-700 text-sm font-semibold">Hakkımızda</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Deneyim ve Güvenilirlik</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Araz Vinç olarak Salihli ve Manisa bölgesinde yıllardır profesyonel vinç kiralama hizmetleri sunmaktayız. Müşteri memnuniyetini ön planda tutarak, güvenli ve hızlı çözümler üretiyoruz.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Modern vinç filomuz ve deneyimli ekibimizle her türlü yükleme, indirme ve taşıma işlemlerinizi en yüksek güvenlik standartlarında gerçekleştiriyoruz. İnşaat, sanayi ve ticari projelerinizde güvenilir iş ortağınız olmaktan gurur duyuyoruz.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Yıl Deneyim</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                  <div className="text-gray-600 font-medium">Başarılı Proje</div>
                </div>
              </div>
              <a href="tel:05444513341">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                  Hemen İletişime Geçin
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Müşteri Yorumları</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Araz Vinç ile çalışan müşterilerimizin deneyimleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Ahmet Yılmaz", company: "", text: "Araz Vinç ile çalışmak çok profesyonel bir deneyim oldu. Ekip hızlı, güvenilir ve çok dikkatli." },
              { name: "Fatma Kaya", company: "", text: "Ağır ekipman taşıması için Araz Vinç'i kullandık. Operatörler çok deneyimli ve ekipmanlar modern." },
              { name: "İbrahim Demir", company: "", text: "7/24 hizmet sunmaları çok önemli. Acil bir durumda hemen yanımıza geldiler." },
              { name: "Selin Çetin", company: "", text: "Fiyatlandırma adil, hizmet kalitesi yüksek. Birden fazla proje için Araz Vinç'i tercih ettik." }
            ].map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">\"{ testimonial.text}\"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Araz Vinç hizmetleri hakkında sıkça sorulan sorulara cevaplar
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Araz Vinç hangi bölgelerde hizmet veriyor?", a: "Salihli ve Manisa bölgesinde hizmet veriyoruz. Acil durumlarda çevresindeki bölgelere de gidebiliriz." },
              { q: "Vinç kiralama fiyatları nasıl belirleniyor?", a: "Fiyatlandırma, vinç türü, çalışma süresi, mesafe ve proje türüne göre belirlenir. Ücretsiz teklif almak için bize ulaşabilirsiniz." },
              { q: "Acil durumlarda ne kadar sürede hizmet alabilir?", a: "7/24 hizmet sunuyoruz. Acil durumlarda genellikle 30 dakika içinde olay yerine ulaşabiliyoruz." },
              { q: "Operatörleriniz sertifikalı mı?", a: "Evet, tüm operatörlerimiz sertifikalı ve deneyimlidir. Güvenlik standartlarına uygun şekilde çalışırız." },
            ].map((faq, idx) => (
              <Card key={idx} className="border-0 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.q}</h3>
                    <ChevronDown className="h-5 w-5 text-orange-600 flex-shrink-0 ml-4" />
                  </div>
                  <div className="px-8 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed mt-4">{faq.a}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="iletisim" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">İletişim</h2>
            <p className="text-lg text-gray-600">
              Vinç kiralama hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8">
                <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Telefon</h3>
                <a href="tel:05444513341" className="text-orange-600 hover:text-orange-700 font-semibold text-lg">
                  0544 451 33 41
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8">
                <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Adres</h3>
                <p className="text-gray-600 font-medium">
                  Abay Bulvarı No: 72<br />
                  Salihli / Manisa
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8">
                <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Instagram className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Instagram</h3>
                <a 
                  href="https://instagram.com/arazvincsalihli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-semibold"
                >
                  @arazvincsalihli
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a href="tel:05444513341">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-5 w-5 mr-2" />
                Hemen Arayın
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/araz-vinc-logo.png" alt="Araz Vin\u00e7" className="h-10 w-10 object-contain" />
                <span className="text-2xl font-bold">Araz Vinç</span>
              </div>
              <p className="text-gray-400">Profesyonel vinç kiralama hizmetleri</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Hızlı Linkler</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection("hizmetler")} className="hover:text-orange-400 transition-colors">Hizmetlerimiz</button></li>
                <li><button onClick={() => scrollToSection("hakkimizda")} className="hover:text-orange-400 transition-colors">Hakkımızda</button></li>
                <li><button onClick={() => scrollToSection("iletisim")} className="hover:text-orange-400 transition-colors">İletişim</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">İletişim</h4>
              <p className="text-gray-400 mb-2">Telefon: 0544 451 33 41</p>
              <p className="text-gray-400">Salihli / Manisa</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Araz Vinç. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
