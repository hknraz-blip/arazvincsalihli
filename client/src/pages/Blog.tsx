import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, ArrowRight, Clock, Tag } from "lucide-react";
import { useLocation } from "wouter";

const blogPosts = [
  {
    slug: "vinc-operasyonunda-hava-kosullari",
    title: "Vinç Operasyonlarında Hava Koşullarının Önemi",
    excerpt: "Rüzgar, yağmur, sis ve don gibi hava koşulları vinç çalışmalarını doğrudan etkiler. Ne zaman durulmalı, hangi önlemler alınmalı? Saha deneyimlerimizden pratik bilgiler.",
    date: "1 Nisan 2025",
    readTime: "5 dk",
    category: "Güvenlik",
  },
  {
    slug: "sanayi-tesislerinde-vinc-kiralama",
    title: "Sanayi Tesislerinde Vinç Kiralama: Özel Gereksinimler",
    excerpt: "Fabrika ve OSB içindeki vinç operasyonları standart şantiye çalışmalarından farklı uzmanlık gerektirir. Manisa ve Salihli OSB deneyimimizden yola çıkarak tüm detayları aktarıyoruz.",
    date: "25 Mart 2025",
    readTime: "6 dk",
    category: "Sektör",
  },
  {
    slug: "salihli-vinc-kiralama",
    title: "Salihli'de Vinç Kiralama: Nelere Dikkat Etmeli?",
    excerpt: "Salihli ve Manisa bölgesinde vinç kiralama sürecinde dikkat etmeniz gereken önemli noktalar, fiyatlandırma ve doğru vinç seçimi hakkında rehber bilgiler.",
    date: "20 Mart 2025",
    readTime: "5 dk",
    category: "Rehber",
  },
  {
    slug: "hiab-vinc-nedir",
    title: "Hiab Vinç Nedir? Kullanım Alanları ve Avantajları",
    excerpt: "Hiab vinç (araç üstü vinç) nedir, nasıl çalışır, hangi işlerde kullanılır ve konvansiyonel vinçlerden farkı nedir? Tüm sorularınızın cevabı bu yazıda.",
    date: "15 Mart 2025",
    readTime: "6 dk",
    category: "Bilgi",
  },
  {
    slug: "agir-yuk-tasima-guvenlik",
    title: "Ağır Yük Taşımada Güvenlik: 10 Temel Kural",
    excerpt: "Ağır yük taşıma ve vinç operasyonlarında iş güvenliği son derece önemlidir. Profesyonellerin uyguladığı 10 temel güvenlik kuralını öğrenin.",
    date: "10 Mart 2025",
    readTime: "7 dk",
    category: "Güvenlik",
  },
];

export default function Blog() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Geri Dön</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
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
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-orange-600/20 border border-orange-500/50 rounded-full">
            <span className="text-orange-300 text-sm font-semibold">Araz Vinç Blog</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Vinç & Taşımacılık <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Rehberi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vinç kiralama, iş güvenliği ve sektör hakkında faydalı bilgiler
          </p>
        </div>
      </section>

      {/* Blog Listesi */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime} okuma
                    </span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-orange-600 font-semibold">
                    Devamını Oku <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Vinç Kiralama İçin Teklif Alın</h2>
          <p className="text-orange-100 mb-8 text-lg">Salihli ve Manisa'da 7/24 profesyonel hizmet</p>
          <a href="tel:05444513341">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              0544 451 33 41 - Hemen Arayın
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Araz Vinç. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
