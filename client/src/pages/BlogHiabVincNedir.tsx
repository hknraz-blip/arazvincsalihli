import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Clock, Tag } from "lucide-react";
import { useLocation } from "wouter";

export default function BlogHiabVincNedir() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hiab Vinç Nedir? Kullanım Alanları ve Avantajları",
            description:
              "Hiab vinç nedir, nasıl çalışır, hangi işlerde kullanılır? Araç üstü vinçlerin kullanım alanları ve avantajları hakkında kapsamlı rehber.",
            author: { "@type": "Organization", name: "Araz Vinç Salihli" },
            publisher: { "@type": "Organization", name: "Araz Vinç Salihli", url: "https://arazvincsalihli.com" },
            datePublished: "2025-03-15",
            url: "https://arazvincsalihli.com/blog/hiab-vinc-nedir",
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
              <Tag className="h-3 w-3" /> Bilgi
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="h-3 w-3" /> 6 dk okuma
            </span>
            <span className="text-gray-400 text-sm">15 Mart 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Hiab Vinç Nedir? <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Kullanım Alanları ve Avantajları</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Hiab vinç, günümüz inşaat ve lojistik sektörünün vazgeçilmezi haline gelmiştir. Peki tam olarak nedir ve neden bu kadar tercih edilir?
          </p>
        </div>
      </section>

      {/* İçerik */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Hiab Vinç Nedir?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hiab vinç, bir kamyon veya kamyonetin üzerine monte edilmiş, hidrolik sistemle çalışan araç üstü vinç türüdür. "Hiab" aslında İsveçli bir üreticinin marka adıdır; ancak zamanla bu tür tüm araç üstü vinçler için kullanılan genel bir tabir haline gelmiştir. Türkiye'de de yaygın olarak "hiab vinç" veya "araç üstü vinç" olarak bilinmektedir.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hiab vinçler, taşıtın şasi üzerine yerleştirilmiş bir kol sisteminden oluşur. Bu kol, ileri-geri ve yukarı-aşağı hareket edebilir; böylece yükler hassas biçimde istenilen konuma yerleştirilebilir.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Hiab Vincin Avantajları</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: "Taşıma ve Yükleme Tek Araçta", desc: "Hiab vinç, hem yük taşıma hem de yükleme-boşaltma işlemini tek araçla yapar. Ayrı bir taşıt ve vinç kiralamaya gerek kalmaz." },
                { title: "Dar Alanlarda Çalışabilir", desc: "Şehir içi dar sokaklar, sanayi tesisleri ve inşaat sahalarında kolayca manevra yapabilir. Büyük mobil vinçlerin giremediği alanlarda işe yarar." },
                { title: "Hızlı Kurulum", desc: "Hiab vinç ayrıca kurulum gerektirmez. Araç geldiğinde vinç hazırdır, zaman kaybı yaşanmaz." },
                { title: "Hassas Konumlama", desc: "Hidrolik sistem sayesinde yük, milimetrik hassasiyetle istenilen noktaya bırakılabilir. Özellikle beton köşk, trafo ve ekipman montajlarında büyük kolaylık sağlar." },
                { title: "Geniş Kapasite Aralığı", desc: "Küçük araç üstü vinçlerden 55 tonluk kapasiteli büyük hiab vinçlere kadar farklı seçenekler mevcuttur." },
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

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Hiab Vinç Nerelerde Kullanılır?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hiab vinçlerin kullanım alanları oldukça geniştir. Öne çıkan başlıca kullanım alanları şunlardır:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Beton trafo köşkü ve prefabrik yapı montajı",
                "İnşaat malzemeleri yükleme ve boşaltma",
                "Çatı malzemesi çıkarma ve indirme",
                "Ağır sanayi ekipmanı taşıma ve yerleştirme",
                "Kamyon, iş makinesi ve araç kurtarma",
                "Foseptik, depo ve tank montajı",
                "Tünel ve altyapı projelerinde ekipman taşıma",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <div className="h-2 w-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Hiab Vinç ile Mobil Vinç Arasındaki Fark Nedir?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bu iki vinç türü sıkça karıştırılmaktadır. Temel farkları şöyle özetleyebiliriz:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-orange-600 text-white">
                    <th className="p-3 text-left rounded-tl-lg">Özellik</th>
                    <th className="p-3 text-left">Hiab Vinç</th>
                    <th className="p-3 text-left rounded-tr-lg">Mobil Vinç</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Çalışma Kapasitesi", "Genellikle 5–55 ton", "50–500 ton ve üzeri"],
                    ["Kurulum Süresi", "Anında hazır", "30–60 dk kurulum"],
                    ["Dar Alan Çalışması", "Uygun", "Kısıtlı"],
                    ["Taşıma + Yükleme", "Tek araçta", "Ayrı araç gerekir"],
                    ["Kullanım Alanı", "Şehir içi, sanayi, inşaat", "Büyük sanayi, çelik konstrüksiyon"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3 font-medium text-gray-900 border border-gray-100">{row[0]}</td>
                      <td className="p-3 text-gray-600 border border-gray-100">{row[1]}</td>
                      <td className="p-3 text-gray-600 border border-gray-100">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Araz Vinç'in 55 Tonluk Hiab Hizmeti</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Araz Vinç olarak Salihli ve Manisa'da 55 ton kapasiteli Hiab vincimizle hizmet veriyoruz. Deneyimli operatörlerimiz ve sigortalı ekipmanımızla her ölçekte projeye çözüm üretiyoruz. Beton köşk montajından araç kurtarmaya, çatı çalışmalarından sanayi ekipmanı taşımacılığına kadar geniş bir yelpazede destek sağlıyoruz.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hiab Vinç Kiralama İçin Bizi Arayın</h2>
          <p className="text-orange-100 mb-8 text-lg">Salihli ve Manisa'da 7/24 hizmet veriyoruz</p>
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
