import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Instagram, Construction, Shield, Clock, Award, Truck, CheckCircle, Star, ArrowRight, ChevronDown, X, ChevronLeft, ChevronRight, ZoomIn, Building, MessageCircle, Wrench, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useSEO } from "@/hooks/useSEO";
import Logo from "@/components/Logo";

// Google Ads dönüşüm takibi
declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function Home() {
  useSEO({
    title: "Araz Vinç Salihli | Hiab & Mobil Vinç Kiralama – 7/24",
    description: "Salihli, Alaşehir, Kula, Demirci, Köprübaşı, Sarıgöl ve Ahmetli'de 55 tonluk Hiab vinç, mobil vinç kiralama. 7/24 acil hizmet, sertifikalı operatörler. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/",
  });

  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [scrollY, setScrollY] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const galleryItems = [
    { src: "/galeri/beton-kosk-montaj-1.webp",         title: "Beton Köşk Montajı",             category: "Sanayi",       desc: "Beton trafo köşkünün inşaat sahasına indirilmesi ve montajı" },
    { src: "/galeri/beton-kosk-montaj-2.webp",         title: "Beton Köşk Yerleştirme",         category: "Sanayi",       desc: "Beton köşk montaj operasyonunun tamamlanması" },
    { src: "/galeri/beton-kosk-montaj-3.webp",         title: "Beton Köşk İndirme",             category: "Sanayi",       desc: "Büyük beton köşkün araçtan indirilme işlemi" },
    { src: "/galeri/beton-kosk-indirme.webp",          title: "Köşk İndirme Operasyonu",        category: "Sanayi",       desc: "Hiab vinç ile beton köşk indirme ve konumlama" },
    { src: "/galeri/beton-mikser-kurtarma-1.webp",     title: "Beton Mikseri Kurtarma",         category: "Kurtarma",     desc: "Tünel inşaatında mahsur kalan beton mikserinin kurtarılması" },
    { src: "/galeri/beton-mikser-kurtarma-2.webp",     title: "Mikser Çekme Operasyonu",        category: "Kurtarma",     desc: "Vinç yardımıyla beton mikserinin güvenli alana çekilmesi" },
    { src: "/galeri/damperli-kamyon-kurtarma-1.webp",  title: "Damperli Kamyon Kurtarma",       category: "Kurtarma",     desc: "Devrilen damperli kamyonun vinçle kaldırılması" },
    { src: "/galeri/damperli-kamyon-kurtarma-2.webp",  title: "Kamyon Doğrultma",               category: "Kurtarma",     desc: "Ağır vasıta kamyonun yola oturtulması operasyonu" },
    { src: "/galeri/damperli-kamyon-kurtarma-3.webp",  title: "Kamyon Çekme",                   category: "Kurtarma",     desc: "Kurtarılan kamyonun güvenli bölgeye taşınması" },
    { src: "/galeri/dorse-kurtarma-1.webp",            title: "Dorse Kurtarma",                 category: "Kurtarma",     desc: "Kaza yapan dorse ve tırın vinçle kurtarılması" },
    { src: "/galeri/dorse-kurtarma-2.webp",            title: "Dorse Kaldırma",                 category: "Kurtarma",     desc: "Şarampole devrilen dorsenin yola çıkarılması" },
    { src: "/galeri/grayder-kurtarma-1.webp",          title: "Grayder Kurtarma",               category: "Kurtarma",     desc: "Arazide batan iş makinesinin vinçle kurtarılması" },
    { src: "/galeri/insaat-vinc-operasyon-1.webp",     title: "İnşaat Malzemesi Taşıma",        category: "İnşaat",       desc: "İnşaat sahasında paletli malzeme ve ekipman kaldırma" },
    { src: "/galeri/insaat-vinc-operasyon-2.webp",     title: "Şantiye Vinç Hizmeti",           category: "İnşaat",       desc: "Yüksek katlı inşaata malzeme aktarımı" },
    { src: "/galeri/insaat-vinc-operasyon-3.webp",     title: "Çelik Konstrüksiyon Montajı",    category: "İnşaat",       desc: "Çelik çatı ve kolon parçalarının montajı" },
    { src: "/galeri/insaat-vinc-operasyon-4.webp",     title: "Prefabrik Eleman Montajı",       category: "İnşaat",       desc: "Prefabrik beton blokların yerleştirilmesi" },
    { src: "/galeri/konteyner-tasima.webp",            title: "Konteyner İndirme & Taşıma",     category: "Taşıma",       desc: "Şantiye konteynerinin araca yüklenmesi ve nakliyesi" },
    { src: "/galeri/kuyu-sondaj-ekipman-indirme.webp", title: "Sondaj Ekipmanı İndirme",        category: "Sanayi",       desc: "Derin kuyu sondaj borularının ve motorunun montajı" },
    { src: "/galeri/sanayi-boru-indirme-1.webp",       title: "Sanayi Borusu İndirme",          category: "Sanayi",       desc: "Büyük çaplı çelik sanayi borularının indirilmesi" },
    { src: "/galeri/sanayi-boru-indirme-2.webp",       title: "Boru Montaj Operasyonu",         category: "Sanayi",       desc: "Fabrika hattı için boruların hassas yerleşimi" },
    { src: "/galeri/trafo-indirme.webp",               title: "Elektrik Trafosu İndirme",       category: "Sanayi",       desc: "Yüksek gerilim trafosunun kaideye oturtulması" },
  ];

  const categories = ["Tümü", "Sanayi", "Kurtarma", "İnşaat", "Taşıma"];
  const filteredItems = activeFilter === "Tümü"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => { setLightboxIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => { setLightboxOpen(false); };
  const nextImage = useCallback(() => { setLightboxIndex((prev) => (prev + 1) % filteredItems.length); }, [filteredItems.length]);
  const prevImage = useCallback(() => { setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length); }, [filteredItems.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, closeLightbox, prevImage, nextImage]);

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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <a href="/" onClick={() => scrollToSection("anasayfa")} className="flex items-center gap-3 cursor-pointer">
              <Logo variant="light" height={42} />
            </a>
            <div className="hidden md:flex items-center gap-7">
              <button onClick={() => scrollToSection("anasayfa")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Ana Sayfa</button>
              <button onClick={() => scrollToSection("hizmetler")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Hizmetlerimiz</button>
              <button onClick={() => scrollToSection("filo")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Filomuz</button>
              <button onClick={() => scrollToSection("calismalar")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Çalışmalarımız</button>
              <button onClick={() => scrollToSection("bolgeler")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Bölgelerimiz</button>
              <button onClick={() => scrollToSection("sss")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">SSS</button>
              <button onClick={() => scrollToSection("hakkimizda")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Hakkımızda</button>
              <button onClick={() => scrollToSection("iletisim")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">İletişim</button>
              <a href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Blog</a>
            </div>
            <a href="tel:05444513341" onClick={trackCall} className="hidden md:block">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />
                Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="anasayfa" className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block mb-6 px-4 py-2 bg-orange-600/20 border border-orange-500/50 rounded-full">
                <span className="text-orange-300 text-sm font-semibold">Salihli & Manisa 7/24 Vinç Hizmetleri</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Güvenilir <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Salihli, Ahmetli, Alaşehir, Kula ve Demirci bölgesinde 55 tonluk Hiab, sepetli vinç ve kaza kurtarma filomuzla 7/24 kesintisiz hizmetinizdeyiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:05444513341" onClick={trackCall} className="w-full sm:w-auto">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white w-full shadow-lg">
                    <Phone className="h-5 w-5 mr-2" />
                    0544 451 33 41
                  </Button>
                </a>
                <a
                  href="https://wa.me/905444513341?text=Merhaba%2C%20Araz%20Vin%C3%A7%27ten%20vin%C3%A7%20kiralama%20veya%20kurtarma%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full shadow-lg border border-emerald-500/30">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp ile Yazın
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
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-slate-700/50 bg-slate-900">
                <img
                  src="/araz-vinc-machine.webp"
                  alt="Araz Vinç 55 Tonluk Hiab ve Mobil Vinç"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Güven Rozetleri */}
      <section className="py-10 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "G Sınıfı", l: "Sertifikalı Operatörler" },
              { v: "55T & 25M", l: "Hiab & Sepetli Parkur" },
              { v: "15–30 Dk", l: "Hızlı İntikal Süresi" },
              { v: "Faturalı", l: "7/24 Kurumsal Hizmet" },
            ].map(({ v, l }) => (
              <div key={l} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-black mb-1 tracking-tight">{v}</div>
                <div className="text-orange-100 text-xs md:text-sm font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="hizmetler" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">İnşaat, sanayi ve ticari projeleriniz için kapsamlı vinç kiralama çözümleri</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Truck,        title: "Mobil Vinç Kiralama",      desc: "10 tondan 55 tona kadar mobil vinç kiralama. Yükleme, indirme, montaj ve nakliye.", href: "/mobil-vinc-kiralama-salihli" },
              { icon: Building,     title: "Sepetli Vinç Kiralama",     desc: "25 metre çalışma yüksekliğiyle dış cephe, tabela, cam silme, çatı ve ağaç budama platformu.", href: "/sepetli-vinc-kiralama-salihli" },
              { icon: Construction, title: "İnşaat Projeleri",          desc: "İnşaat sahalarında prefabrik montaj, demir-beton taşıma ve çelik konstrüksiyon çözümleri.", href: "/insaat-vinc-kiralama-salihli" },
              { icon: Truck,        title: "Sanayi Taşımacılığı",       desc: "OSB ve fabrikalarda ağır sanayi makineleri, trafo ve tesis ekipmanlarının nakliyesi.", href: "/sanayi-vinc-kiralama-salihli" },
              { icon: Shield,       title: "Güvenli Yük Taşıma",        desc: "G sınıfı sertifikalı deneyimli operatörler ve titiz planlamayla sıfır hasarlı taşıma.", href: "/guvenli-tasima-salihli" },
              { icon: Clock,        title: "7/24 Acil Vinç Hizmeti",    desc: "Gece gündüz, hafta sonu kesintisiz vinç desteği ve karayolu acil kurtarma operasyonları.", href: "/acil-vinc-hizmeti-salihli" },
            ].map((s, idx) => (
              <a key={idx} href={s.href} className="group block h-full">
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 h-full flex flex-col justify-between group-hover:ring-2 group-hover:ring-orange-500/30">
                  <CardContent className="p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <s.icon className="h-7 w-7 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{s.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm mb-6">{s.desc}</p>
                    </div>
                    <div className="inline-flex items-center text-orange-600 font-semibold text-sm group-hover:translate-x-1 transition-transform pt-2 border-t border-gray-100">
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Makine Filomuz & Kapasitelerimiz */}
      <section id="filo" className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full">
              <span className="text-orange-700 text-sm font-semibold flex items-center gap-1.5 justify-center">
                <Wrench className="h-4 w-4" /> Makine Parkurumuz
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Filomuz & Teknik Kapasitelerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her türlü ağır yük kaldırma, yüksek irtifa ve acil kurtarma operasyonuna tam uyumlu sertifikalı vinç filomuz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Araç 1: 55 Ton Hiab */}
            <div className="bg-gradient-to-b from-gray-50 to-white border-2 border-orange-200 hover:border-orange-500 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group">
              <div className="absolute -top-3.5 left-8 bg-orange-600 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Ağır Sanayi & Kurtarma
              </div>
              <div>
                <div className="h-14 w-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                  <Truck className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">55 Tonluk Hiab Vinç</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Katlanır bom yapısı ve yüksek hidrolik gücüyle Salihli ve çevre ilçelerin en güçlü ağır yük ve kurtarma makinesi.
                </p>

                <div className="space-y-3 border-t border-gray-100 pt-6 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Kaldırma Kapasitesi:</span>
                    <span className="font-bold text-gray-900 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-100">55 Ton</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Bom Uzanma Mesafesi:</span>
                    <span className="font-bold text-gray-900">30+ Metre</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Öne Çıkan Özellik:</span>
                    <span className="font-bold text-gray-900">Katlanır Hidrolik Bom</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Kullanım Alanı:</span>
                    <span className="font-semibold text-orange-600">Makine, Trafo & Kamyon Kurtarma</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex gap-2">
                <a href="/agir-vasita-kurtarma-salihli" className="flex-1">
                  <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 font-semibold text-xs">
                    Kurtarma Sayfası
                  </Button>
                </a>
                <a href="tel:05444513341" onClick={trackCall} className="flex-1">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md">
                    <Phone className="h-3.5 w-3.5 mr-1" /> Ara
                  </Button>
                </a>
              </div>
            </div>

            {/* Araç 2: Sepetli Vinç */}
            <div className="bg-gradient-to-b from-orange-50/60 to-white border-2 border-orange-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group transform md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5" /> Çok Talep Edilen
              </div>
              <div>
                <div className="h-14 w-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <Building className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sepetli Platform Vinç</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Dış cephe, çatı, tabela ve yüksek irtifa işlerinde iskele kurma zahmetini bitiren hızlı ve güvenli platform.
                </p>

                <div className="space-y-3 border-t border-orange-100 pt-6 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Çalışma Yüksekliği:</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">25 Metre</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Sepet Taşıma Kapasitesi:</span>
                    <span className="font-bold text-gray-900">2 Kişi + Malzeme (300 Kg)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">İSG Güvenliği:</span>
                    <span className="font-bold text-emerald-700">Tam Emniyet Kilitli Sepet</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Kullanım Alanı:</span>
                    <span className="font-semibold text-orange-600">Tabela, Cam Silme, Çatı & Budama</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-orange-100 flex gap-2">
                <a href="/sepetli-vinc-kiralama-salihli" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 text-white font-bold text-xs shadow-md">
                    Sepetli Vinç İncele →
                  </Button>
                </a>
              </div>
            </div>

            {/* Araç 3: Mobil Vinç */}
            <div className="bg-gradient-to-b from-gray-50 to-white border-2 border-orange-200 hover:border-orange-500 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group">
              <div className="absolute -top-3.5 left-8 bg-slate-800 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Şantiye & Proje
              </div>
              <div>
                <div className="h-14 w-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                  <Construction className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobil Vinç & Nakliye</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Şantiyelerde, prefabrik montajlarında ve sanayi sahalarında hızlı intikal ve hassas yükleme çözümleri.
                </p>

                <div className="space-y-3 border-t border-gray-100 pt-6 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Kapasite Aralığı:</span>
                    <span className="font-bold text-gray-900 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-100">15 – 35 Ton</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Manevra Kabiliyeti:</span>
                    <span className="font-bold text-gray-900">360° Hidrolik Dönüş</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Ulaşım Hızı:</span>
                    <span className="font-bold text-emerald-700">15–30 Dk Sahada</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Kullanım Alanı:</span>
                    <span className="font-semibold text-orange-600">İnşaat, Prefabrik & Konteyner</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex gap-2">
                <a href="/mobil-vinc-kiralama-salihli" className="flex-1">
                  <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 font-semibold text-xs">
                    Mobil Vinç Detay
                  </Button>
                </a>
                <a href="tel:05444513341" onClick={trackCall} className="flex-1">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md">
                    <Phone className="h-3.5 w-3.5 mr-1" /> Ara
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="calismalar" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full">
              <span className="text-orange-700 text-sm font-semibold">Projelerimiz</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Çalışmalarımız</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Salihli, Alaşehir, Kula ve Demirci genelinde gerçekleştirdiğimiz başarılı projelerden kareler</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-200 scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                }`}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3]" onClick={() => openLightbox(idx)}>
                <img src={item.src} alt={item.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full mb-2">{item.category}</span>
                        <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                        <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 ml-3 flex-shrink-0"><ZoomIn className="h-5 w-5 text-white" /></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <p className="text-gray-500 mb-4">Projeniz için ücretsiz keşif ve fiyat teklifi alın</p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg shadow-orange-200">
                <Phone className="h-5 w-5 mr-2" />
                Teklif Alın
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-5 right-5 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full p-3 text-white transition-all z-10" onClick={closeLightbox}><X className="h-6 w-6" /></button>
          <button className="absolute left-5 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full p-3 text-white transition-all z-10" onClick={e => { e.stopPropagation(); prevImage(); }}><ChevronLeft className="h-6 w-6" /></button>
          <button className="absolute right-5 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full p-3 text-white transition-all z-10" onClick={e => { e.stopPropagation(); nextImage(); }}><ChevronRight className="h-6 w-6" /></button>
          <div className="relative max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img src={filteredItems[lightboxIndex].src} alt={filteredItems[lightboxIndex].title} className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl" />
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full mb-2">{filteredItems[lightboxIndex].category}</span>
              <h3 className="text-white font-bold text-xl">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-gray-400 text-sm mt-1">{filteredItems[lightboxIndex].desc}</p>
              <p className="text-gray-500 text-xs mt-3">{lightboxIndex + 1} / {filteredItems.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Hakkimizda */}
      <section id="hakkimizda" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl opacity-10 blur-2xl"></div>
              <img src="/araz-vinc-machine.webp" alt="Araz Vinç Çalışma Alanı" loading="lazy" decoding="async" className="rounded-2xl shadow-2xl w-full h-auto object-cover relative" />
            </div>
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full">
                <span className="text-orange-700 text-sm font-semibold">Hakkımızda</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Deneyim ve Güvenilirlik</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Araz Vinç olarak Salihli, Alaşehir, Kula ve Demirci bölgesinde yıllardır profesyonel vinç kiralama hizmetleri sunmaktayız. Müşteri memnuniyetini ön planda tutarak, güvenli ve hızlı çözümler üretiyoruz.</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Modern vinç filomuz ve deneyimli ekibimizle her türlü yükleme, indirme ve taşıma işlemlerinizi en yüksek güvenlik standartlarında gerçekleştiriyoruz.</p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                  <div className="text-gray-600 font-medium">Yıl Deneyim</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                  <div className="text-gray-600 font-medium">Başarılı Proje</div>
                </div>
              </div>
              <a href="tel:05444513341" onClick={trackCall}>
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                  Hemen İletişime Geçin
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Müşteri Yorumları</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Araz Vinç ile çalışan müşterilerimizin deneyimleri</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Ahmet Yılmaz", text: "Araz Vinç ile çalışmak çok profesyonel bir deneyim oldu. Ekip hızlı, güvenilir ve çok dikkatli." },
              { name: "Fatma Kaya",   text: "Ağır ekipman taşıması için Araz Vinç'i kullandık. Operatörler çok deneyimli ve ekipmanlar modern." },
              { name: "İbrahim Demir",text: "7/24 hizmet sunmaları çok önemli. Acil bir durumda hemen yanımıza geldiler." },
              { name: "Selin Çetin",  text: "Fiyatlandırma adil, hizmet kalitesi yüksek. Birden fazla proje için Araz Vinç'i tercih ettik." },
            ].map((t, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_,i)=><Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />)}</div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{t.text}"</p>
                  <div className="font-bold text-gray-900">{t.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Araz Vinç hizmetleri hakkında sıkça sorulan sorulara cevaplar</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Araz Vinç hangi bölgelerde hizmet veriyor?", a: "Salihli, Alaşehir, Kula, Demirci ve çevre ilçelerde hizmet veriyoruz. Acil durumlarda daha geniş bölgelere de ulaşabiliriz." },
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

      {/* Hizmet Bölgelerimiz */}
      <section id="bolgeler" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full">
              <span className="text-orange-300 text-sm font-semibold">Hizmet Ağımız</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hizmet Verdiğimiz İlçeler</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Salihli merkezimizden çevre ilçelere ortalama 15–35 dakikada ulaşıyor, 7/24 kesintisiz vinç ve ağır yük taşıma hizmeti sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Salihli Vinç Kiralama", loc: "Merkez Üs · Anında Çıkış", time: "0-10 Dk", desc: "Tüm mahalleler, sanayi sitesi ve Salihli OSB'de 7/24 kesintisiz hizmet.", href: "/" },
              { title: "Ahmetli Vinç Kiralama", loc: "Ahmetli & D300 Hattı", time: "~15 Dk", desc: "Tarımsal tesisler, inşaat projeleri, fabrika ve karayolu acil kurtarma.", href: "/ahmetli-vinc-kiralama" },
              { title: "Alaşehir Vinç Kiralama", loc: "Alaşehir & Sanayi", time: "~30 Dk", desc: "Bağ tesisleri, gıda fabrikaları, makine montajı ve konut inşaatları.", href: "/alasehir-vinc-kiralama" },
              { title: "Sarıgöl Vinç Kiralama", loc: "Sarıgöl & Köyler", time: "~25 Dk", desc: "Tarımsal depolar, prefabrik montaj ve yük indirme-bindirme hizmetleri.", href: "/koprubasi-sarigol-vinc-kiralama" },
              { title: "Kula Vinç Kiralama", loc: "Kula & OSB Bölgesi", time: "~35 Dk", desc: "İnşaat, sanayi taşımacılığı, trafo montajı ve ağır vasıta yol yardım.", href: "/kula-vinc-kiralama" },
              { title: "Demirci Vinç Kiralama", loc: "Demirci & Dağ Hattı", time: "~60 Dk", desc: "Ağır yük nakliyesi, makine montajı ve zorlu arazi şartlarında kurtarma.", href: "/demirci-vinc-kiralama" },
            ].map((region, idx) => (
              <a key={idx} href={region.href} className="group block bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-orange-500/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-orange-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-orange-300 bg-orange-950/60 px-2.5 py-1 rounded-full border border-orange-800/50">{region.loc}</span>
                  </div>
                  <span className="text-xs font-bold bg-slate-700 text-gray-200 px-2.5 py-1 rounded-md">{region.time}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{region.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{region.desc}</p>
                <div className="inline-flex items-center text-orange-400 font-medium text-sm group-hover:translate-x-1 transition-transform">
                  <span>İlçe Sayfasını İncele</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Google Haritalar 5 Yıldız & Müşteri Memnuniyeti */}
      <section className="py-16 bg-gradient-to-r from-amber-500 via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-slate-950/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-1.5 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
                <span className="ml-2 font-black text-xl text-white">5.0 / 5.0</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Google Haritalarda Müşteri Memnuniyeti
              </h2>
              <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
                Salihli, Ahmetli, Alaşehir ve Kula'da gerçekleştirdiğimiz 1000'den fazla vinç ve ağır vasıta kurtarma operasyonunda önceliğimiz her zaman can ve mal güvenliği oldu.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0 w-full md:w-auto">
              <a
                href="https://share.google/7Q93yOqhkBwySCRYO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold shadow-lg flex items-center justify-center gap-2">
                  <Star className="h-4 w-4 text-amber-500 fill-current" />
                  Google'da Yorum Yap / İncele
                </Button>
              </a>
              <a
                href="https://wa.me/905444513341?text=Merhaba%2C%20Araz%20Vin%C3%A7%27ten%20vin%C3%A7%20kiralama%20veya%20kurtarma%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" variant="outline" className="w-full border-white/40 text-white hover:bg-white/10 font-semibold flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  WhatsApp'tan Yazın
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Acil Durumda WhatsApp Canlı Konum Paylaşımı */}
      <section className="py-12 bg-emerald-950/40 border-y border-emerald-800/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 rounded-3xl p-8 md:p-10 border border-emerald-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold mb-3 border border-emerald-500/30">
                <MapPin className="h-3.5 w-3.5" /> Hızlı İntikal Kolaylığı
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Acil Durumda Canlı Konum Paylaşın</h3>
              <p className="text-gray-300 text-sm max-w-lg leading-relaxed">
                Adres tarif etmekle vakit kaybetmeyin. WhatsApp'tan canlı konumunuzu atın, en yakın vincimizi hemen yönlendirelim.
              </p>
            </div>
            <a
              href="https://wa.me/905444513341?text=Acil%20vin%C3%A7%20%2F%20kurtarma%20hizmetine%20ihtiyac%C4%B1m%20var.%20Konumumu%20payla%C5%9F%C4%B1yorum%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-full md:w-auto"
            >
              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 text-base px-6">
                <MessageCircle className="h-5 w-5 fill-current" />
                WhatsApp'tan Konum Gönder
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular (SSS) */}
      <section id="sss" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full">
              <span className="text-orange-700 text-sm font-semibold">Merak Edilenler</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-base md:text-lg text-gray-600">Vinç kiralama ve kurtarma hizmetlerimiz hakkında en çok sorulan soruların cevapları</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Sepetli vinç ile kaç metreye kadar çalışabiliyorsunuz?",
                a: "Salihli ve çevre ilçelerde 25 metre çalışma yüksekliğine sahip sepetli platform vincimizle tabela montajı, bina dış cephe boya & cam silme, çatı tamiri ve yüksek ağaç budama işlerini güvenle gerçekleştiriyoruz."
              },
              {
                q: "Vinç kiralama ücretlerine operatör ve yakıt dahil mi?",
                a: "Evet. Tüm vinç ve sepetli platform kiralama hizmetlerimiz G sınıfı sertifikalı deneyimli operatörümüz ve yakıt dahil olarak anahtar teslim sunulmaktadır. İş bitiminde sürpriz ek masraf çıkarılmaz."
              },
              {
                q: "Salihli dışındaki çevre ilçelere (Ahmetli, Alaşehir, Kula vb.) ne kadar sürede varıyorsunuz?",
                a: "Salihli merkez üssümüzden Ahmetli'ye ~15 dakika, Alaşehir ve Sarıgöl'e ~25-30 dakika, Kula'ya ~35 dakika, Demirci ve Köprübaşı'na ise yol durumuna göre en kısa sürede intikal ediyoruz."
              },
              {
                q: "Devrilen kamyon, tır veya batan iş makinelerinde kurtarma nasıl yapılıyor?",
                a: "55 tonluk güçlü Hiab vincimiz ve yumuşak dokulu özel polyester sapanlarımızla aracı şasisinden kavrayarak kaportaya veya mekanik aksama ilave zarar vermeden doğrultuyor ve güvenli alana alıyoruz. Şirketler için resmi faturalı hizmet sunuyoruz."
              },
              {
                q: "En hızlı şekilde nasıl vinç kiralayabilir veya fiyat teklifi alabilirim?",
                a: "0544 451 33 41 numaralı telefonumuzdan bizi arayarak veya WhatsApp üzerinden yapılacak işin türünü ve konumunu ileterek 1 dakika içinde net fiyat teklifi alabilirsiniz."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-orange-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left font-bold text-gray-900 flex items-center justify-between gap-4 bg-gray-50/50 hover:bg-orange-50/40 transition-colors"
                >
                  <span className="text-base md:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-6 pt-2 bg-white text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="iletisim" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">İletişim</h2>
            <p className="text-lg text-gray-600">Vinç kiralama hizmetlerimiz hakkında bilgi ve anında fiyat teklifi almak için bizimle iletişime geçin</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8">
                <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6"><Phone className="h-7 w-7 text-orange-600" /></div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Telefon</h3>
                <a href="tel:05444513341" onClick={trackCall} className="text-orange-600 hover:text-orange-700 font-semibold text-lg">0544 451 33 41</a>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8">
                <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6"><MapPin className="h-7 w-7 text-orange-600" /></div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Adres</h3>
                <p className="text-gray-600 font-medium">Abay Bulvarı No: 72<br />Salihli / Manisa</p>
                <a href="https://share.google/7Q93yOqhkBwySCRYO" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-bold text-orange-600 hover:underline">
                  Yol Tarifi Al (Google Haritalar) →
                </a>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8">
                <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6"><Instagram className="h-7 w-7 text-orange-600" /></div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Instagram</h3>
                <a href="https://instagram.com/arazvincsalihli" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-semibold">@arazvincsalihli</a>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:05444513341" onClick={trackCall} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg font-bold px-8">
                <Phone className="h-5 w-5 mr-2" />
                Hemen Arayın: 0544 451 33 41
              </Button>
            </a>
            <a
              href="https://wa.me/905444513341?text=Merhaba%2C%20Araz%20Vin%C3%A7%27ten%20vin%C3%A7%20kiralama%20veya%20kurtarma%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg font-bold px-8">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp ile Mesaj Gönder
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-16 pb-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Sütun 1: Marka & Açıklama */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo variant="dark" height={44} />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Salihli merkezli 55 tonluk Hiab ve mobil vinç filomuzla Manisa ve çevre ilçelerde 7/24 güvenli, sigortalı ağır yük kaldırma, makine montajı ve acil kurtarma hizmeti sunuyoruz.
              </p>
              <div className="flex items-center gap-3 text-orange-500">
                <a href="https://instagram.com/arazvincsalihli" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-900 hover:bg-orange-600 hover:text-white rounded-xl transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="tel:05444513341" onClick={trackCall} className="p-2.5 bg-gray-900 hover:bg-orange-600 hover:text-white rounded-xl transition-colors" aria-label="Telefon">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Sütun 2: Hizmetlerimiz */}
            <div>
              <h4 className="font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-orange-400">Hizmetlerimiz</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="/mobil-vinc-kiralama-salihli" className="hover:text-orange-400 transition-colors">Mobil Vinç Kiralama</a></li>
                <li><a href="/sepetli-vinc-kiralama-salihli" className="hover:text-orange-400 transition-colors">Sepetli Vinç Kiralama</a></li>
                <li><a href="/agir-vasita-kurtarma-salihli" className="hover:text-orange-400 transition-colors font-medium text-gray-300">Ağır Vasıta Kurtarma</a></li>
                <li><a href="/insaat-vinc-kiralama-salihli" className="hover:text-orange-400 transition-colors">İnşaat Vinç Kiralama</a></li>
                <li><a href="/sanayi-vinc-kiralama-salihli" className="hover:text-orange-400 transition-colors">Sanayi Taşımacılığı</a></li>
                <li><a href="/guvenli-tasima-salihli" className="hover:text-orange-400 transition-colors">Güvenli Yük Taşıma</a></li>
                <li><a href="/acil-vinc-hizmeti-salihli" className="hover:text-orange-400 transition-colors">7/24 Acil Vinç Hizmeti</a></li>
              </ul>
            </div>

            {/* Sütun 3: Hizmet Bölgelerimiz */}
            <div>
              <h4 className="font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-orange-400">Hizmet Bölgelerimiz</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="/" className="hover:text-orange-400 transition-colors font-medium text-gray-300">Salihli Vinç (Merkez)</a></li>
                <li><a href="/ahmetli-vinc-kiralama" className="hover:text-orange-400 transition-colors">Ahmetli Vinç Kiralama</a></li>
                <li><a href="/alasehir-vinc-kiralama" className="hover:text-orange-400 transition-colors">Alaşehir Vinç Kiralama</a></li>
                <li><a href="/kula-vinc-kiralama" className="hover:text-orange-400 transition-colors">Kula Vinç Kiralama</a></li>
                <li><a href="/demirci-vinc-kiralama" className="hover:text-orange-400 transition-colors">Demirci Vinç Kiralama</a></li>
                <li><a href="/koprubasi-sarigol-vinc-kiralama" className="hover:text-orange-400 transition-colors">Köprübaşı & Sarıgöl Vinç</a></li>
              </ul>
            </div>

            {/* Sütun 4: İletişim */}
            <div>
              <h4 className="font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-orange-400">İletişim & Konum</h4>
              <p className="text-gray-300 font-semibold mb-1">Araz Vinç Salihli</p>
              <p className="text-gray-400 text-sm mb-2">Abay Bulvarı No: 72<br />Salihli / Manisa</p>
              <a href="https://share.google/7Q93yOqhkBwySCRYO" target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-semibold text-orange-400 hover:underline mb-3">
                📍 Haritada Aç (Google Haritalar) →
              </a>
              <br />
              <a href="tel:05444513341" onClick={trackCall} className="inline-block text-orange-400 font-bold text-lg hover:text-orange-300 transition-colors mb-1">
                0544 451 33 41
              </a>
              <p className="text-xs text-gray-500">7/24 Kesintisiz Çağrı & Acil Kurtarma</p>
            </div>
          </div>

          <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} Araz Vinç Salihli. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
              <a href="/" className="hover:text-orange-400 transition-colors">Ana Sayfa</a>
              <a href="/blog" className="hover:text-orange-400 transition-colors">Blog & Rehberler</a>
              <a href="#hizmetler" onClick={() => scrollToSection("hizmetler")} className="hover:text-orange-400 transition-colors">Hizmetlerimiz</a>
              <a href="#iletisim" onClick={() => scrollToSection("iletisim")} className="hover:text-orange-400 transition-colors">İletişim</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
