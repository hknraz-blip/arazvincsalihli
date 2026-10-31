import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Clock, Tag } from "lucide-react";
import { useLocation, Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function BlogAcilVincHizmeti() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Salihli’de Acil Vinç Hizmeti: 7/24 Ne Zaman Aranmalı? | Araz Vinç",
    description: "Kaza, arıza veya acil montaj durumlarında Salihli ve Manisa’da 7/24 vinç hizmeti nasıl çalışır? Ne zaman acil vinç çağrılmalı? Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/blog/acil-vinc-hizmeti-7-24",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Salihli’de Acil Vinç Hizmeti: 7/24 Ne Zaman Aranmalı?",
            description: "Acil vinç ihtiyacının ortaya çıktığı durumlar ve Salihli bölgesinde 7/24 hizmet süreci.",
            author: { "@type": "Organization", name: "Araz Vinç Salihli" },
            publisher: { "@type": "Organization", name: "Araz Vinç Salihli", url: "https://arazvincsalihli.com" },
            datePublished: "2026-10-31",
            dateModified: "2026-10-31",
            url: "https://arazvincsalihli.com/blog/acil-vinc-hizmeti-7-24",
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
              <Tag className="h-3 w-3" /> Acil
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="h-3 w-3" /> 4 dk okuma
            </span>
            <span className="text-gray-400 text-sm">31 Ekim 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Acil Vinç Hizmeti: <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">7/24 Ne Zaman Aranmalı?</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Kaza, arıza veya beklenmedik montaj durumlarında doğru zamanda doğru vinç çağırmak önemlidir.
          </p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Acil Vinç Ne Zaman Gerekir?</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: "Yol kazası / devrilen araç", desc: "Kamyon, tır veya iş makinesi devrildiğinde hızlı müdahale." },
              { title: "Şantiye / fabrika arızası", desc: "Üretimi durduran ağır ekipman yerinden çıktığında." },
              { title: "Acil montaj / demontaj", desc: "Plan dışı gelen yük veya teslimat durumunda." },
              { title: "Gece veya hafta sonu iş", desc: "Normal mesai dışında kaldırma ihtiyacı doğduğunda." },
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

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Salihli’de 7/24 Vinç Hizmeti</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Araz Vinç Salihli olarak 7/24 acil vinç ve ağır vasıta kurtarma hizmeti veriyoruz. Detaylar için <Link href="/acil-vinc-hizmeti-salihli" className="text-orange-600 font-semibold hover:underline">acil vinç hizmeti</Link> sayfamıza bakabilir veya doğrudan arayabilirsiniz.
          </p>
        </div>
      </article>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Acil Durumda Hemen Arayın</h2>
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
