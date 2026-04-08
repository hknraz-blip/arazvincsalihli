import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Instagram, Construction, Shield, Clock, Award, Truck, CheckCircle, Star, ArrowRight, ChevronDown, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// Google Ads dönüşüm takibi
declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [scrollY, setScrollY] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Тümü");

  const galleryItems = [
    { src: "/galeri/beton-kosk-montaj-1.jpg",         title: "Beton Köşk Montajı",             category: "Sanayi",       desc: "Beton trafo köşkünün inşaat sahasına indirilmesi ve montajı" },
    { src: "/galeri/beton-kosk-montaj-2.jpg",         title: "Beton Köşk Yerleştirme",         category: "Sanayi",       desc: "Beton köşk montaj operasyonunun tamamlanması" },
    { src: "/galeri/beton-kosk-montaj-3.jpg",         title: "Beton Köşk İndirme",             category: "Sanayi",       desc: "Büyük beton köşkün araçtan indirilme işlemi" },
    { src: "/galeri/beton-kosk-indirme.jpg",          title: "Köşk İndirme Operasyonu",        category: "Sanayi",       desc: "Hiab vinç ile beton köşk indirme ve konumlama" },
    { src: "/galeri/cati-malzemesi-cikarma-1.jpg",    title: "Çatı Malzemesi Çıkarma",         category: "Hiab Vinç",    desc: "Yüksek binada çatı malzemelerinin vinç ile çıkarılması" },
    { src: "/galeri/cati-malzemesi-cikarma-2.jpg",    title: "Çatı Malzemesi Kaldırma",        category: "Hiab Vinç",    desc: "Çok katlı binada çatı malzemesi kaldırma operasyonu" },
    { src: "/galeri/celik-konstruksiyon-1.jpg",       title: "Çelik Konstrüksiyon Montajı",    category: "İnşaat",       desc: "Fabrika inşaatında çelik konstrüksiyon elemanlarının montajı" },
    { src: "/galeri/celik-konstruksiyon-2.jpg",       title: "Çelik Yapı Montajı",             category: "İnşaat",       desc: "Endüstriyel yapıda çelik kolon ve kiriş montaj çalışması" },
    { src: "/galeri/damperli-kamyon-kurtarma-1.jpg",  title: "Damperli Kamyon Kurtarma",       category: "Acil Hizmet",  desc: "Karayolunda devrilmiş damperli kamyonun kurtarılması" },
    { src: "/galeri/damperli-kamyon-kurtarma-2.jpg",  title: "Kamyon Kurtarma Operasyonu",     category: "Acil Hizmet",  desc: "Devrilmiş damperli kamyonun vinç ile kaldırılarak tahliyesi" },
    { src: "/galeri/dorse-kurtarma.jpg",              title: "Dorse Kurtarma",                 category: "Acil Hizmet",  desc: "Yoldan çıkmış dorsenin kurtarma ve tahliye operasyonu" },
    { src: "/galeri/enjeksiyon-makinasi-indirme.jpg", title: "Enjeksiyon Makinası İndirme",   category: "Sanayi",       desc: "Ağır enjeksiyon makinesinin araçtan indirilmesi" },
    { src: "/galeri/foseptik-deposu-1.jpg",           title: "Foseptik Deposu Montajı",        category: "İnşaat",       desc: "Büyük foseptik deposunun zemine yerleştirilmesi" },
    { src: "/galeri/foseptik-deposu-2.jpg",           title: "Foseptik Depo Yerleştirme",      category: "İnşaat",       desc: "Foseptik deposunun hassas konumlandırma operasyonu" },
    { src: "/galeri/grayder-kurtarma-1.jpg",          title: "Grayder Kurtarma",               category: "Acil Hizmet",  desc: "Ormanlık arazide sıkışan graydernın kurtarılması" },
    { src: "/galeri/grayder-kurtarma-2.jpg",          title: "İş Makinesi Kurtarma",           category: "Acil Hizmet",  desc: "Zorlu arazide mahsur kalan iş makinesinin kurtarma operasyonu" },
    { src: "/galeri/tunel-makina-montaji-1.jpg",      title: "Tünel Makina Montajı",           category: "İnşaat",       desc: "Tünel inşaatında makina ve ekipman montaj çalışması" },
    { src: "/galeri/tunel-makina-montaji-2.jpg",      title: "Tünel Ekipman Yerleştirme",      category: "İnşaat",       desc: "Tünel projesinde ağır makina konumlama operasyonu" },
    { src: "/galeri/tunel-beton-mikseri-1.jpg",       title: "Tünelde Beton Mikseri Kurtarma", category: "Acil Hizmet",  desc: "Tünel içinde devrilmiş beton mikserinin kurtarılması" },
    { src: "/galeri/tunel-beton-mikseri-2.jpg",       title: "Tünel İçi Kurtarma",             category: "Acil Hizmet",  desc: "Tünel içindeki araç kurtarma ve tahliye operasyonu" },
    { src: "/galeri/prefabrik-beton-kosk.jpeg",       title: "Prefabrik Beton Köşk Montajı",   category: "Sanayi",       desc: "Prefabrik beton köşkün vinç ile montaj ve yerleştirme operasyonu" },
  ];

  const categories = ["Tümü", "Hiab Vinç", "İnşaat", "Sanayi", "Acil Hizmet"];
  const filteredItems = activeFilter === "Tümü" ? galleryItems : galleryItems.filter(i => i.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex(i => (i - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex(i => (i + 1) % filteredItems.length);
  }, [filteredItems.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
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
            <div className="flex items-center gap-3">
              <img src="/araz-vinc-logo.png" alt="Araz Vinç" className="h-25 w-auto object-contain" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("anasayfa")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Ana Sayfa</button>
              <button onClick={() => scrollToSection("hizmetler")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Hizmetlerimiz</button>
              <button onClick={() => scrollToSection("calismalar")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Çalışmalarımız</button>
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
                <span className="text-orange-300 text-sm font-semibold">Profesyonel Vinç Hizmetleri</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Güvenilir <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Salihli, Alaşehir, Kula ve Demirci bölgesinde 24/7 profesyonel vinç kiralama hizmetleri. Deneyimli ekibimiz ve modern ekipmanlarımızla her türlü yükleme ve taşıma ihtiyacınıza çözüm sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:05444513341" onClick={trackCall}>
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
              <img src="/araz-vinc-machine.jpg" alt="Araz Vinç Makinası" className="rounded-2xl shadow-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{v:"7/24",l:"Kesintisiz Hizmet"},{v:"%100",l:"Müşteri Memnuniyeti"},{v:"25+",l:"Yıl Deneyim"},{v:"1000+",l:"Başarılı Proje"}].map(({v,l})=>(
              <div key={l} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{v}</div>
                <div className="text-orange-100">{l}</div>
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
              { icon: Truck,        title: "Mobil Vinç Kiralama",      desc: "Farklı tonajlarda mobil vinç kiralama hizmetleri ile her türlü yükleme ve indirme işlemlerinizi güvenle gerçekleştirin." },
              { icon: Shield,       title: "Güvenli Taşıma",            desc: "Deneyimli operatörlerimiz ve modern ekipmanlarımızla yüklerinizi en güvenli şekilde taşıyoruz." },
              { icon: Clock,        title: "7/24 Hizmet",               desc: "Acil durumlarınızda yanınızdayız. Hafta sonu ve tatil günleri dahil kesintisiz hizmet sunuyoruz." },
              { icon: Award,        title: "Uzman Ekip",                desc: "Sertifikalı ve deneyimli operatörlerimiz ile işlerinizi profesyonel bir şekilde tamamlıyoruz." },
              { icon: Construction, title: "İnşaat Projeleri",          desc: "İnşaat sahalarında malzeme taşıma, montaj ve demontaj işlemleriniz için özel çözümler sunuyoruz." },
              { icon: Truck,        title: "Sanayi Taşımacılığı",       desc: "Ağır sanayi ekipmanlarının taşınması ve yerleştirilmesi için profesyonel vinç hizmetleri." },
            ].map((s, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 h-full">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mb-6">
                    <s.icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
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
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
              <img src="/araz-vinc-machine.jpg" alt="Araz Vinç Çalışma Alanı" className="rounded-2xl shadow-2xl w-full h-auto object-cover relative" />
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

      {/* Contact */}
      <section id="iletisim" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">İletişim</h2>
            <p className="text-lg text-gray-600">Vinç kiralama hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin</p>
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
          <div className="text-center">
            <a href="tel:05444513341" onClick={trackCall}>
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
              <div className="flex items-center gap-3 mb-4"><img src="/araz-vinc-logo.png" alt="Araz Vinç" className="h-16 w-auto object-contain" /></div>
              <p className="text-gray-400">Profesyonel vinç kiralama hizmetleri</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Hızlı Linkler</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection("hizmetler")} className="hover:text-orange-400 transition-colors">Hizmetlerimiz</button></li>
                <li><button onClick={() => scrollToSection("calismalar")} className="hover:text-orange-400 transition-colors">Çalışmalarımız</button></li>
                <li><button onClick={() => scrollToSection("hakkimizda")} className="hover:text-orange-400 transition-colors">Hakkımızda</button></li>
                <li><button onClick={() => scrollToSection("iletisim")} className="hover:text-orange-400 transition-colors">İletişim</button></li>
                <li><a href="/blog" className="hover:text-orange-400 transition-colors">Blog</a></li>
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
