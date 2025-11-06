import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Hammer, Zap, CheckCircle, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function ServiceConstruction() {
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
            <h1 className="text-2xl font-bold text-gray-900">İnşaat Projeleri</h1>
            <a href="tel:05444513341">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />
                Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block mb-6 px-4 py-2 bg-orange-600/20 border border-orange-500/50 rounded-full">
                <span className="text-orange-300 text-sm font-semibold">İnşaat Çözümleri</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                İnşaat <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Projeleri</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                İnşaat sahalarında malzeme taşıması, montaj ve demontaj işlemleri için profesyonel vinç hizmetleri. Proje planlamasından uygulamaya kadar tam destek.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:05444513341">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white w-full sm:w-auto shadow-lg">
                    <Phone className="h-5 w-5 mr-2" />
                    0544 451 33 41
                  </Button>
                </a>
                <Button size="lg" variant="outline" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Teklif Al
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-2xl"></div>
              <img 
                src="/araz-vinc-machine.jpg" 
                alt="İnşaat Projeleri" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">İnşaat Hizmetleri</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Hammer className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Malzeme Taşıması</h3>
                    <p className="text-gray-600">Çelik, beton, demir ve diğer inşaat malzemelerinin güvenli taşınması.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Montaj ve Demontaj</h3>
                    <p className="text-gray-600">Ağır demirbaş, depo sistemleri ve yapı elemanlarının montajı.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Proje Planlaması</h3>
                    <p className="text-gray-600">Vinç ihtiyacının belirlenmesi ve optimal çözüm sunulması.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Güvenlik Uyumluluğu</h3>
                    <p className="text-gray-600">Tüm işlemler inşaat güvenlik standartlarına uygun şekilde yapılır.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Taşıdığımız Malzemeler</h2>
              
              <div className="space-y-4">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Çelik Konstrüksiyon</h3>
                    <p className="text-gray-600 text-sm">Çelik kirişler, kolonlar ve kafes sistemleri</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Beton Elemanları</h3>
                    <p className="text-gray-600 text-sm">Prefabrik beton, kat döşemeleri ve temeller</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Depo Sistemleri</h3>
                    <p className="text-gray-600 text-sm">Ağır depo rafları ve endüstriyel depolama sistemleri</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Makine ve Ekipman</h3>
                    <p className="text-gray-600 text-sm">Endüstriyel makineler ve üretim ekipmanları</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Proje Türleri</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Yüksek Bina İnşaatı</h3>
                <p className="text-gray-600 mb-4">Gökdelenler ve çok katlı bina projelerinde çelik konstrüksiyon ve beton taşıması.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Çelik iskelet montajı</li>
                  <li>✓ Beton döşeme taşıması</li>
                  <li>✓ Asansör kurulumu</li>
                  <li>✓ Cephe malzemeleri</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Endüstriyel Tesisler</h3>
                <p className="text-gray-600 mb-4">Fabrika, depo ve imalat tesislerinin kurulması ve genişletilmesi.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Depo sistemi kurulumu</li>
                  <li>✓ Makine montajı</li>
                  <li>✓ Ağır ekipman taşıması</li>
                  <li>✓ Yapı malzemeleri</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticari Merkezler</h3>
                <p className="text-gray-600 mb-4">Alışveriş merkezleri ve ticari komplekslerin inşaatı.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Çelik konstrüksiyon</li>
                  <li>✓ Cam ve cephe sistemleri</li>
                  <li>✓ Asansör ve merdivenler</li>
                  <li>✓ İç malzeme taşıması</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Altyapı Projeleri</h3>
                <p className="text-gray-600 mb-4">Köprü, tünel ve diğer altyapı projelerinde ağır taşımacılık.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Ağır malzeme taşıması</li>
                  <li>✓ Ekipman kurulumu</li>
                  <li>✓ Geçici yapılar</li>
                  <li>✓ Özel taşımalar</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">İnşaat Projeniz İçin Vinç Hizmeti</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Projelerinizin başında bize ulaşın. Planlamadan uygulamaya kadar tam destek sunuyoruz.
          </p>
          <a href="tel:05444513341">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              0544 451 33 41 - Hemen Arayın
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
