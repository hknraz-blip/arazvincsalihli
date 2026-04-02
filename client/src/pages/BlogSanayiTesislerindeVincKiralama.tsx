import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Clock, Tag } from "lucide-react";
import { useLocation } from "wouter";

export default function BlogSanayiTesislerindeVincKiralama() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Sanayi Tesislerinde Vinç Kiralama: Özel Gereksinimler",
            description:
              "Fabrika ve organize sanayi bölgelerinde vinç kiralama sürecinin kendine özgü gereklilikleri, güvenlik protokolleri ve Manisa OSB özelinde pratik bilgiler.",
            author: { "@type": "Organization", name: "Araz Vinç Salihli" },
            publisher: { "@type": "Organization", name: "Araz Vinç Salihli", url: "https://arazvincsalihli.com" },
            datePublished: "2025-03-25",
            url: "https://arazvincsalihli.com/blog/sanayi-tesislerinde-vinc-kiralama",
          }),
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Blog'a Dön</span>
            </button>
            <a href="tel:05444513341">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />
                Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-orange-600/20 border border-orange-500/50 text-orange-300 text-xs font-semibold rounded-full flex items-center gap-1">
              <Tag className="h-3 w-3" /> Sektör
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="h-3 w-3" /> 6 dk okuma
            </span>
            <span className="text-gray-400 text-sm">25 Mart 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Sanayi Tesislerinde Vinç Kiralama:{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              Özel Gereksinimler
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Fabrika ve organize sanayi bölgelerindeki vinç operasyonları, standart şantiye çalışmalarından farklı uzmanlık ve dikkat gerektirir. Manisa ve Salihli OSB deneyimimizden yola çıkarak tüm detayları aktarıyoruz.
          </p>
        </div>
      </section>

      {/* Makale İçeriği */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Sanayi Tesislerinde Vinç İhtiyacı Neden Farklıdır?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fabrikalar ve organize sanayi bölgeleri (OSB), kendine özgü fiziksel kısıtlamaları ve güvenlik protokolleriyle açık şantiyelerden ayrışır. Dar geçitler, alçak tavan yükseklikleri, yoğun ekipman yerleşimi ve aktif üretim hatları; vinç seçimini, giriş planlamasını ve operasyon sürecini doğrudan etkiler. Bu nedenle deneyimsiz bir ekiple gerçekleştirilen sanayi içi vinç operasyonu, ciddi hasar ve iş durağanlaşması risklerini beraberinde getirir.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Sanayi Vinç Operasyonlarının Başlıca Kullanım Alanları</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: "Makine ve Ekipman Montajı", desc: "CNC tezgahları, pres makineleri, kompresörler ve üretim hattı ekipmanlarının yerleştirme ve kurulum çalışmaları. Hassas konumlandırma gerektiren bu işler için kademeli kaldırma planlaması şarttır." },
                { title: "Periyodik Bakım ve Revizyon", desc: "Büyük endüstriyel ekipmanların bakım dönemlerinde yerinden çıkarılması ve geri yerleştirilmesi. Planlı duruş sürelerinde hızlı hareket kritiktir." },
                { title: "Tesis Genişletme ve Taşıma", desc: "Üretim kapasitesi artırıldığında veya ürün gamı değiştiğinde hat yeniden düzenlemeleri. Birden fazla vinç koordinasyonu gerekebilir." },
                { title: "Arıza ve Acil Müdahale", desc: "Beklenmedik arızalarda veya kazalarda hasarlı ekipmanın hızla alandan çıkarılması. 7/24 ulaşılabilir bir vinç firmasıyla çalışmak bu durumda hayat kurtarır." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-orange-50 rounded-xl border border-orange-100">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Sanayi İçi Vinç Seçimi: Hangi Ekipman Uygun?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Tesisin fiziksel özellikleri doğru vinç tipini belirler. En sık karşılaşılan senaryolar şunlardır:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Geniş açık alanlı tesisler: Hiab vinç veya mobil vinç, manevra kabiliyeti nedeniyle tercih edilir",
                "Dar fabrika içleri: Küçük dönme yarıçaplı araç üstü vincler ya da özel platformlar kullanılır",
                "Yüksek tonajlı taşımalar (20 ton üzeri): Mobil vinç zorunludur; zemin takviyesi planlanmalıdır",
                "Çatı ve tavan yakını çalışmalar: Sepetli vinç, güvenli erişim sağlar",
                "OSB içi yol kısıtlamaları: Araç dingil yükü hesaplanarak uygun tonajda vinç seçilmelidir",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <div className="h-2 w-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Sanayi Tesislerinde Güvenlik Protokolleri</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              OSB ve fabrika operasyonlarında güvenlik gereklilikleri, açık alandakilere kıyasla çok daha katıdır. Vinç firmanızdan şu belge ve uygulamaları talep etmenizi öneririz:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "İş İzni (Permit to Work)", desc: "Birçok büyük sanayi tesisi, tüm yüklenicilerden yazılı iş izni belgesi talep eder. Vinç firmanızın bu sürece uyum sağlayabiliyor olması gerekir." },
                { title: "Risk Değerlendirmesi", desc: "Operasyon öncesinde vinç firması, sahayı ziyaret ederek zemin durumu, engel tespiti ve kaldırma noktalarını içeren bir risk değerlendirmesi hazırlamalıdır." },
                { title: "Kişisel Koruyucu Donanım (KKD)", desc: "Baret, reflektörlü yelek, güvenlik ayakkabısı tüm ekip için zorunludur. Yüksekte çalışma varsa emniyet kemeri gereklidir." },
                { title: "Tesisin Güvenlik Yönergelerine Uyum", desc: "Her fabrikanın kendi iç güvenlik kuralları vardır. Deneyimli bir vinç ekibi, tesisin prosedürlerine kolayca uyum sağlayabilmelidir." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Manisa ve Salihli OSB'deki Deneyimimiz</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Araz Vinç olarak Manisa Organize Sanayi Bölgesi ve Salihli Organize Sanayi Bölgesi'nde onlarca tesis için makine montajı, ekipman taşıma ve acil müdahale hizmetleri verdik. Bölge yollarını, tesis giriş prosedürlerini ve yerel güvenlik gerekliliklerini yakından biliyor olmamız, operasyon planlama sürecini sizin için büyük ölçüde kolaylaştırıyor. Üretim duruşunu en aza indiren hızlı ve güvenli çözümler için ekibimizle iletişime geçin.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Sanayi Tesisi İçin Teklif Alın</h2>
          <p className="text-orange-100 mb-8 text-lg">Manisa ve Salihli OSB'de uzman vinç hizmetleri</p>
          <a href="tel:05444513341">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              0544 451 33 41 - Hemen Arayın
            </Button>
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Araz Vinç. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
