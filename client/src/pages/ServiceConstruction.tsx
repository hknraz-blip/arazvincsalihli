import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle, Truck, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function ServiceConstruction() {
  const [, navigate] = useLocation();

  useSEO({
    title: "İnşaat Vinç Kiralama Salihli & Manisa | Araz Vinç",
    description: "Salihli ve Manisa inşaat projelerinde profesyonel vinç kiralama. Demir-beton taşıma, prefabrik montaj, iskelet kurulumu. Teklif: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/service/construction",
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
            <h1 className="text-2xl font-bold text-gray-900">İnşaat Projeleri</h1>
            <a href="tel:05444513341">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <section className="pt-24 min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              İnşaat <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Salihli ve Manisa'daki inşaat projelerinizde demir-beton taşıma, prefabrik montaj ve ağır malzeme kaldırma işleri için profesyonel vinç hizmetleri.
            </p>
            <a href="tel:05444513341">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-5 w-5 mr-2" />0544 451 33 41
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">İnşaatta Kullanım Alanları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Demir-Beton Taşıma", desc: "İnşaat malzemelerinin kat ve bölümlere taşınması" },
              { icon: CheckCircle, title: "Prefabrik Montaj", desc: "Prefabrik yapı elemanlarının yerleştirilmesi" },
              { icon: Zap, title: "İskelet Kurulumu", desc: "Çelik iskelet ve çatı sistemlerinin kurulumu" },
              { icon: Truck, title: "Kalıp Kaldırma", desc: "Beton kalıplarının kaldırılması ve taşınması" },
              { icon: CheckCircle, title: "Ekipman Yerleştirme", desc: "Sanayi ekipmanlarının montaj konumuna taşınması" },
              { icon: Zap, title: "Acil Destek", desc: "İnşaat sahasında beklenmedik kaldırma ihtiyaçları" },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">İnşaat Projesi İçin Teklif Alın</h2>
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
