import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle, Shield, AlertCircle, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function ServiceSafeTransport() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Güvenli Taşıma Hizmeti Salihli & Manisa | Araz Vinç",
    description: "Salihli ve Manisa'da sigortalı, sertifikalı güvenli ağır yük taşıma hizmeti. Uzman operatörler, modern ekipman. Ücretsiz teklif: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/service/safe-transport",
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
            <h1 className="text-2xl font-bold text-gray-900">Güvenli Taşıma</h1>
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
              Güvenli <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Taşıma</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sigortalı ve sertifikalı ekibimizle her türlü ağır yükü güvenle taşıyoruz. Salihli, Manisa ve çevre ilçelerde 7/24 hizmet.
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Hizmet Özellikleri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Tam Sigorta", desc: "Tüm taşıma işlemleri sigorta kapsamındadır" },
              { icon: CheckCircle, title: "Sertifikalı Ekip", desc: "Tüm operatörlerimiz iş güvenliği sertifikalıdır" },
              { icon: Zap, title: "7/24 Hizmet", desc: "Acil durumlarda gece gündüz yanınızdayız" },
              { icon: AlertCircle, title: "Risk Analizi", desc: "Her taşıma öncesi güvenlik değerlendirmesi yapılır" },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon className="h-10 w-10 text-orange-600 mx-auto mb-4" />
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
          <h2 className="text-4xl font-bold text-white mb-6">Güvenli Taşıma İçin Hemen Arayın</h2>
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
