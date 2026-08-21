import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Instagram, Construction, Shield, Clock, Award, Truck, CheckCircle, Star, ArrowRight, ChevronDown, X, ChevronLeft, ChevronRight, ZoomIn, Building } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useSEO } from "@/hooks/useSEO";

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
  // DÜZELTME: "Тümü" (Kiril T) → "Tümü" (Latin T)
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const galleryItems = [
    { src: "/galeri/beton-kosk-montaj-1.webp",         title: "Beton Köşk Montajı",             category: "Sanayi",       desc: "Beton trafo köşkünün inşaat sahasına indirilmesi ve montajı" },
    { src: "/galeri/beton-kosk-montaj-2.webp",         title: "Beton Köşk Yerleştirme",         category: "Sanayi",       desc: "Beton köşk montaj operasyonunun tamamlanması" },
    { src: "/galeri/beton-kosk-montaj-3.webp",         title: "Beton Köşk İndirme",             category: "Sanayi",       desc: "Büyük beton köşkün araçtan indirilme işlemi" },
    { src: "/galeri/beton-kosk-indirme.webp",          title: "Köşk İndirme Operasyonu",        category: "Sanayi",       desc: "Hiab vinç ile beton köşk indirme ve konumlama" },
    { src: "/galeri/cati-malzemesi-cikarma-1.webp",    title: "Çatı Malzemesi Çıkarma",         category: "Hiab Vinç",    desc: "Yüksek binada çatı malzemelerinin vinç ile çıkarılması" },
    { src: "/galeri/cati-malzemesi-cikarma-2.webp",    title: "Çatı Malzemesi Kaldırma",        category: "Hiab Vinç",    desc: "Çok katlı binada çatı malzemesi kaldırma operasyonu" },
    { src: "/galeri/celik-konstruksiyon-1.webp",       title: "Çelik Konstrüksiyon Montajı",    category: "İnşaat",       desc: "Fabrika inşaatında çelik konstrüksiyon elemanlarının montajı" },
    { src: "/galeri/celik-konstruksiyon-2.webp",       title: "Çelik Yapı Montajı",             category: "İnşaat",       desc: "Endüstriyel yapıda çelik kolon ve kiriş montaj çalışması" },
    { src: "/galeri/damperli-kamyon-kurtarma-1.webp",  title: "Damperli Kamyon Kurtarma",       category: "Acil Hizmet",  desc: "Karayolunda devrilmiş damperli kamyonun kurtarılması" },
    { src: "/galeri/damperli-kamyon-kurtarma-2.webp",  title: "Kamyon Kurtarma Operasyonu",     category: "Acil Hizmet",  desc: "Devrilmiş damperli kamyonun vinç ile kaldırılarak tahliyesi" },
    { src: "/galeri/dorse-kurtarma.webp",              title: "Dorse Kurtarma",                 category: "Acil Hizmet",  desc: "Yoldan çıkmış dorsenin kurtarma ve tahliye operasyonu" },
    { src: "/galeri/enjeksiyon-makinasi-indirme.webp", title: "Enjeksiyon Makinası İndirme",   category: "Sanayi",       desc: "Ağır enjeksiyon makinesinin araçtan indirilmesi" },
    { src: "/galeri/foseptik-deposu-1.webp",           title: "Foseptik Deposu Montajı",        category: "İnşaat",       desc: "Büyük foseptik deposunun zemine yerleştirilmesi" },
    { src: "/galeri/foseptik-deposu-2.webp",           title: "Foseptik Depo Yerleştirme",      category: "İnşaat",       desc: "Foseptik deposunun hassas konumlandırma operasyonu" },
    { src: "/galeri/grayder-kurtarma-1.webp",          title: "Grayder Kurtarma",               category: "Acil Hizmet",  desc: "Ormanlık arazide sıkışan graydernın kurtarılması" },
    { src: "/galeri/grayder-kurtarma-2.webp",          title: "İş Makinesi Kurtarma",           category: "Acil Hizmet",  desc: "Zorlu arazide mahsur kalan iş makinesinin kurtarma operasyonu" },
    { src: "/galeri/tunel-makina-montaji-1.webp",      title: "Tünel Makina Montajı",           category: "İnşaat",       desc: "Tünel inşaatında makina ve ekipman montaj çalışması" },
    { src: "/galeri/tunel-makina-montaji-2.webp",      title: "Tünel Ekipman Yerleştirme",      category: "İnşaat",       desc: "Tünel projesinde ağır makina konumlama operasyonu" },
    { src: "/galeri/tunel-beton-mikseri-1.webp",       title: "Tünelde Beton Mikseri Kurtarma", category: "Acil Hizmet",  desc: "Tünel içinde devrilmiş beton mikserinin kurtarılması" },
    { src: "/galeri/tunel-beton-mikseri-2.webp",       title: "Tünel İçi Kurtarma",             category: "Acil Hizmet",  desc: "Tünel içindeki araç kurtarma ve tahliye operasyonu" },
    { src: "/galeri/prefabrik-beton-kosk.webp",        title: "Prefabrik Beton Köşk Montajı",   category: "Sanayi",       desc: "Prefabrik beton köşkün vinç ile montaj ve yerleştirme operasyonu" },
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
              <img src="/araz-vinc-logo.webp" alt="Araz Vinç" className="h-25 w-auto object-contain" width="150" height="100" />
            </div>
            <div className="hidden md:flex items-center gap-7">
              <button onClick={() => scrollToSection("anasayfa")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Ana Sayfa</button>
              <button onClick={() => scrollToSection("hizmetler")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Hizmetlerimiz</button>
              <button onClick={() => scrollToSection("calismalar")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Çalışmalarımız</button>
              <button onClick={() => scrollToSection("bolgeler")} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Bölgelerimiz</button>
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
              <img src="/araz-vinc-machine.webp" alt="Araz Vinç Makinası" className="rounded-2xl shadow-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-500" fetchPriority="high" />
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
              { icon: Truck,        title: "Mobil Vinç Kiralama",      desc: "10 tondan 55 tona kadar farklı kapasitelerde mobil vinç kiralama. Yükleme, indirme ve hassas montaj.", href: "/mobil-vinc-kiralama-salihli" },
              { icon: Building,     title: "Sepetli Vinç Kiralama",     desc: "Dış cephe, cam silme, tabela montajı, çatı tamiri ve ağaç budama için güvenli platform vinç.", href: "/sepetli-vinc-kiralama-salihli" },
              { icon: Construction, title: "İnşaat Projeleri",          desc: "İnşaat sahalarında prefabrik montaj, demir-beton taşıma ve çelik konstrüksiyon çözümleri.", href: "/insaat-vinc-kiralama-salihli" },
              { icon: Truck,        title: "Sanayi Taşımacılığı",       desc: "OSB ve fabrikalarda ağır sanayi makineleri, trafo ve tesis ekipmanlarının nakliyesi.", href: "/sanayi-vinc-kiralama-salihli" },
              { icon: Shield,       title: "Güvenli Taşıma",            desc: "Deneyimli operatörler ve tam kapsamlı sigorta güvencesiyle sıfır riskli yük taşıma.", href: "/guvenli-tasima-salihli" },
              { icon: Clock,        title: "7/24 Acil Hizmet",          desc: "Gece gündüz, hafta sonu kesintisiz vinç desteği ve karayolu acil kurtarma operasyonları.", href: "/acil-vinc-hizmeti-salihli" },
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
                <a href="https://maps.google.com/?q=Abay+Bulvarı+No:+72+Salihli+Manisa" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-bold text-orange-600 hover:underline">
                  Yol Tarifi Al (Google Maps) →
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
      <footer className="bg-gray-950 text-white pt-16 pb-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Sütun 1: Marka & Açıklama */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/araz-vinc-logo.webp" alt="Araz Vinç Salihli" loading="lazy" decoding="async" className="h-16 w-auto object-contain" width="120" height="80" />
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
              <a href="https://maps.google.com/?q=Abay+Bulvarı+No:+72+Salihli+Manisa" target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-semibold text-orange-400 hover:underline mb-3">
                📍 Haritada Aç (Google Maps) →
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
