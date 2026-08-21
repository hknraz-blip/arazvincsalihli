import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Calendar, Clock, AlertTriangle, Shield, CheckCircle, Truck, MapPin } from "lucide-react";
import { useLocation, Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function BlogAgirVasitaKurtarmaRehberi() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Devrilen Kamyon ve Tır Nasıl Kurtarılır? (Kaza & Kasko Rehberi) | Araz Vinç",
    description: "D300 ve Manisa yollarında devrilen kamyon, tır, dorse kurtarma aşamaları, vinç seçimi ve kasko sigorta süreçleri hakkında detaylı rehber.",
    canonical: "https://arazvincsalihli.com/blog/agir-vasita-kamyon-kurtarma-rehberi",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white pb-16 md:pb-0">
      {/* Schema.org BlogPosting */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Karayolunda Devrilen Kamyon ve Tır Nasıl Kurtarılır? (Kaza ve Kasko Rehberi)",
        "image": "https://arazvincsalihli.com/galeri/damperli-kamyon-kurtarma-1.webp",
        "author": { "@type": "Person", "name": "Araz Vinç Salihli" },
        "publisher": { "@type": "Organization", "name": "Araz Vinç Salihli", "logo": { "@type": "ImageObject", "url": "https://arazvincsalihli.com/araz-vinc-logo.webp" } },
        "datePublished": "2026-08-21",
        "dateModified": "2026-08-21",
        "description": "Karayolunda devrilen ağır vasıtaların kurtarılması ve sigorta süreçleri rehberi.",
        "mainEntityOfPage": "https://arazvincsalihli.com/blog/agir-vasita-kamyon-kurtarma-rehberi"
      })}} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/blog")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Tüm Yazılar</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/">Ana Sayfa</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span className="text-orange-600 font-semibold">Kamyon & Tır Kurtarma</span>
            </div>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-md">
                <Phone className="h-4 w-4 mr-2" />7/24 Acil: 0544 451 33 41
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 font-semibold rounded-full text-xs">
              <AlertTriangle className="h-3.5 w-3.5" /> Acil Yol Yardım
            </span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 21 Ağustos 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 dk okuma</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Karayolunda Devrilen Kamyon ve Tır Nasıl Kurtarılır? <span className="text-red-600">(Kaza & Kasko Rehberi)</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-red-500 pl-4 py-1 italic bg-red-50/50 rounded-r-lg">
            D300 karayolu, Salihli rampaları ve Manisa bölgesinde meydana gelen ağır vasıta kazalarında araca ilave hasar vermeden kurtarma yapmanın püf noktaları.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg text-gray-700">
          <p className="leading-relaxed">
            İzmir - Ankara D300 karayolu, Salihli, Kula rampaları ve Alaşehir bağlantı yolları Türkiye'nin en yoğun ağır vasıta güzergahlarından biridir. Yağışlı havalarda virajı alamama, lastik patlaması veya yük kayması sonucu devrilen kamyon, tır ve dorselerin kurtarılması sıradan bir çekiciyle mümkün değildir.
          </p>
          <p className="leading-relaxed">
            Yan yatan veya şarampole inen 30–40 tonluk bir aracı kurtarırken yapılacak en ufak bir hata, aracın şasisinin bükülmesine, kabinin ezilmesine veya dorsenin yırtılmasına yol açabilir. Bu nedenle profesyonel <Link href="/agir-vasita-kurtarma-salihli" className="text-red-600 font-bold hover:underline">ağır vasıta kurtarma vinci</Link> kullanılması zorunludur.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">Ağır Vasıta Kurtarma Operasyonunun 4 Kritik Adımı</h2>

          <div className="space-y-6 not-prose my-8">
            <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <div className="text-orange-400 font-bold text-sm mb-1">ADIM 1</div>
              <h3 className="text-xl font-bold text-white mb-2">Çevre Güvenliği ve Trafik Emniyeti</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Kurtarma vincimiz olay yerine ulaştığında ilk olarak karayolu trafiği reflektörler ve uyarı ışıklarıyla emniyete alınır. Devrilen araçta yakıt sızıntısı veya yangın tehlikesi kontrol edilir.
              </p>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <div className="text-orange-400 font-bold text-sm mb-1">ADIM 2</div>
              <h3 className="text-xl font-bold text-white mb-2">Yük Durumunun Analizi ve Ağırlık Dağılımı</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Damper veya dorsede yük varsa, aracın ağırlık merkezi hesaplanır. Gerekiyorsa önce yükün bir kısmı aktarılır veya vincin kaldırma açıları devrilme yönünün tersine göre kilitlenir.
              </p>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <div className="text-orange-400 font-bold text-sm mb-1">ADIM 3</div>
              <h3 className="text-xl font-bold text-white mb-2">Özel Polyester Sapanlarla Şasiden Bağlama</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Çelik halat doğrudan kaportaya bağlanırsa aracı ezer. Araz Vinç olarak yüksek tonajlı yumuşak polyester sapanlar ve özel mapalarla aracı şasi noktalarından kavrayarak milimetrik olarak doğrultuyoruz.
              </p>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <div className="text-orange-400 font-bold text-sm mb-1">ADIM 4</div>
              <h3 className="text-xl font-bold text-white mb-2">Kontrollü Doğrultma ve Güvenli Tahliye</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                55 tonluk Hiab vincimizin hassas hidrolik kontrolü sayesinde araç zıplatılmadan, tekerlekleri üzerine yavaşça oturtulur ve güvenli alana veya çekici üzerine alınır.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Kasko ve Sigorta Prosedürü Nasıl İşler?</h2>
          <p className="leading-relaxed">
            Pek çok araç sahibi kaza anında kurtarma ücretini cebinden ödeyeceğini düşünür. Oysa ticari araç ve tır kaskoları kaza kurtarma ve vinç masraflarını teminat altına alır:
          </p>

          <ul className="space-y-2 my-4">
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              Araz Vinç olarak tüm kurtarma işlemlerimizi resmi fatura ile belgelendiriyoruz.
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              Kaza yeri fotoğrafları ve operasyon raporu sigorta eksperine sunulmak üzere hazırlanır.
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              Kasko poliçeniz kapsamında vinç kurtarma bedelini sigortanızdan eksiksiz tahsil edebilirsiniz.
            </li>
          </ul>

          <div className="my-10 p-6 bg-gradient-to-r from-red-600 via-orange-600 to-orange-700 text-white rounded-2xl not-prose text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">D300 ve Çevresinde 7/24 Acil Kurtarma</h3>
            <p className="text-red-100 text-sm mb-6 max-w-lg mx-auto">
              Salihli, Kula, Alaşehir ve Ahmetli karayollarında mahsur kalan araçlarınız için anında yola çıkmaya hazırız.
            </p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8">
                <Phone className="h-5 w-5 mr-2 animate-bounce" />0544 451 33 41 – Acil Çağrı
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-3">© {new Date().getFullYear()} Araz Vinç Salihli. Tüm hakları saklıdır.</p>
          <div className="flex justify-center gap-6 text-xs">
            <Link href="/" className="hover:text-orange-400">Ana Sayfa</Link>
            <Link href="/blog" className="hover:text-orange-400">Tüm Blog Yazıları</Link>
            <Link href="/agir-vasita-kurtarma-salihli" className="hover:text-orange-400 text-orange-400">Ağır Vasıta Kurtarma</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
