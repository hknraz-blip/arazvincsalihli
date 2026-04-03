import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

const posts = [
  {
    slug: "salihli-vinc-kiralama",
    title: "Salihli'de Vinç Kiralama: Bilmeniz Gereken Her Şey",
    excerpt: "Salihli ve çevresinde vinç kiralama sürecinde dikkat edilmesi gereken noktalar, fiyatlar ve doğru firma seçimi hakkında kapsamlı rehber.",
    date: "20 Mart 2025",
  },
  {
    slug: "hiab-vinc-nedir",
    title: "Hiab Vinç Nedir? Kullanım Alanları ve Avantajları",
    excerpt: "55 tonluk Hiab vincin özellikleri, hangi işlerde kullanıldığı ve neden diğer vinç türlerinden farklı olduğu hakkında detaylı bilgi.",
    date: "15 Mart 2025",
  },
  {
    slug: "agir-yuk-tasima-guvenlik",
    title: "Ağır Yük Taşımada Güvenlik: 10 Temel Kural",
    excerpt: "Vinç operasyonlarında iş güvenliğini sağlamak için uyulması gereken temel kurallar ve sertifikasyon gereksinimleri.",
    date: "10 Mart 2025",
  },
  {
    slug: "vinc-operasyonunda-hava-kosullari",
    title: "Vinç Operasyonunda Hava Koşullarının Önemi",
    excerpt: "Rüzgar, yağmur ve don gibi hava koşullarının vinç operasyonlarını nasıl etkilediği ve hangi durumlarda çalışma durdurulmalıdır.",
    date: "1 Nisan 2025",
  },
  {
    slug: "sanayi-tesislerinde-vinc-kiralama",
    title: "Sanayi Tesislerinde Vinç Kiralama Rehberi",
    excerpt: "Fabrika ve OSB'lerde vinç seçimi, güvenlik protokolleri ve maliyet optimizasyonu için kapsamlı rehber.",
    date: "25 Mart 2025",
  },
];

export default function Blog() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Blog | Vinç Kiralama Rehberi – Araz Vinç Salihli",
    description: "Salihli ve Manisa'da vinç kiralama, iş güvenliği, Hiab vinç ve sanayi taşımacılığı hakkında uzman yazıları. Araz Vinç resmi blogu.",
    canonical: "https://arazvincsalihli.com/blog",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Geri Dön</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
            <a href="tel:05444513341">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Vinç & Kaldırma Rehberi</h1>
            <p className="text-xl text-gray-600">Salihli ve Manisa'da vinç kiralama hakkında uzman içerikler.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.slug} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate(`/blog/${post.slug}`)}>
                <CardContent className="p-6">
                  <p className="text-sm text-orange-600 mb-2">{post.date}</p>
                  <h2 className="font-bold text-gray-900 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-orange-600 text-sm font-medium">
                    Devamını Oku <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Vinç Kiralama İçin Hemen Arayın</h2>
          <a href="tel:05444513341">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />0544 451 33 41
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
