import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Clock, Tag } from "lucide-react";
import { useLocation, Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function BlogMobilVincNedir() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Mobil Vinç Nedir? Ne Zaman Kullanılır? | Araz Vinç Salihli",
    description: "Mobil vinç nedir, hangi işlerde tercih edilir, Hiab ile farkı nedir? Salihli ve Manisa'da mobil vinç kiralama rehberi. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/blog/mobil-vinc-nedir",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mobil Vinç Nedir? Ne Zaman Kullanılır?",
            description: "Mobil vinçlerin özellikleri, kullanım alanları ve Salihli bölgesinde ne zaman tercih edilmesi gerektiği hakkında rehber.",
            author: { "@type": "Organization", name: "Araz Vinç Salihli" },
            publisher: { "@type": "Organization", name: "Araz Vinç Salihli", url: "https://arazvincsalihli.com" },
            datePublished: "2026-10-31",
            dateModified: "2026-10-31",
            url: "https://arazvincsalihli.com/blog/mobil-vinc-nedir",
          }),
        }}
      />

      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/blog")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Blog'a Dön</span>
            </button>
            <a href="tel:05444513341">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" /> Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <section className="pt-24 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-orange-600/20 border border-orange-500/50 text-orange-300 text-xs font-semibold rounded-full flex items-center gap-1">
              <Tag className="h-3 w-3" /> Bilgi
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="h-3 w-3" /> 5 dk okuma
            </span>
            <span className="text-gray-400 text-sm">31 Ekim 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Mobil Vinç Nedir? <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Ne Zaman Kullanılır?</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Mobil vinçler, ağır yük kaldırma işlerinde esneklik ve güç sunar. Salihli ve Manisa’da hangi durumlarda mobil vinç tercih edilmelidir?
          </p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Mobil Vinç Nedir?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Mobil vinç, lastik tekerlekli veya paletli şasi üzerine monte edilmiş, kendi kendine hareket edebilen vinç türüdür. Kurulum süresi kısadır ve farklı şantiyeler arasında hızlıca taşınabilir. Hiab (araç üstü vinç) ile karıştırılmamalıdır; mobil vinç daha yüksek kapasiteli ve bağımsız bir kaldırma makinesidir.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Ne Zaman Mobil Vinç Kullanılır?</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: "Yüksek kapasite gereken işler", desc: "Çelik konstrüksiyon, prefabrik eleman ve ağır makine montajında." },
              { title: "Uzun bom ihtiyacı", desc: "Yüksek binalarda veya geniş alanlarda erişim gerektiğinde." },
              { title: "Şantiye içi sık taşıma", desc: "Aynı saha içinde birden fazla noktada kaldırma yapılacaksa." },
              { title: "Hiab yetmediğinde", desc: "Araç üstü vinç kapasitesi veya erişimi yetersiz kaldığında." },
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

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Salihli’de Mobil Vinç Kiralama</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Araz Vinç olarak Salihli, Alaşehir, Kula ve çevre ilçelerde mobil vinç kiralama hizmeti sunuyoruz. İhtiyacınıza göre <Link href="/mobil-vinc-kiralama-salihli" className="text-orange-600 font-semibold hover:underline">Salihli mobil vinç kiralama</Link> sayfamızdan detaylı bilgi alabilir, 7/24 ulaşabilirsiniz.
          </p>
        </div>
      </article>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Mobil Vinç İçin Hemen Arayın</h2>
          <a href="tel:05444513341">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" /> 0544 451 33 41
            </Button>
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2026 Araz Vinç Salihli. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
