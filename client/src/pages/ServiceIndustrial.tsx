import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Zap, CheckCircle, AlertCircle, Truck } from "lucide-react";
import { useLocation } from "wouter";

export default function ServiceIndustrial() {
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
            <h1 className="text-2xl font-bold text-gray-900">Sanayi Taşımacılığı</h1>
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
                <span className="text-orange-300 text-sm font-semibold">Endüstriyel Çözümler</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Sanayi <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Taşımacılığı</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ağır sanayi ekipmanlarının taşınması, yerleştirilmesi ve montajı için uzmanlaşmış hizmetler. Fabrika ve üretim tesisleriniz için optimal çözümler.
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
                alt="Sanayi Taşımacılığı" 
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Sanayi Hizmetleri</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Truck className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Ağır Ekipman Taşıması</h3>
                    <p className="text-gray-600">100 tona kadar ağır endüstriyel makinelerin güvenli taşınması.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Montaj ve Kurulum</h3>
                    <p className="text-gray-600">Makinelerin fabrika ortamında montajı ve yer değiştirilmesi.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Üretim Akışı Desteği</h3>
                    <p className="text-gray-600">Üretim kesintisini minimize ederek hızlı ve profesyonel hizmet.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Teknik Danışmanlık</h3>
                    <p className="text-gray-600">Ekipman taşıması için optimal yöntem ve güvenlik planlaması.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Taşıdığımız Ekipmanlar</h2>
              
              <div className="space-y-4">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Üretim Makineleri</h3>
                    <p className="text-gray-600 text-sm">CNC, torna tezgahları ve otomatik üretim sistemleri</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Presleme Sistemleri</h3>
                    <p className="text-gray-600 text-sm">Hidrolik presler ve mekanik presleme ekipmanları</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Enerji Sistemleri</h3>
                    <p className="text-gray-600 text-sm">Jeneratörler, transformatörler ve güç kaynakları</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Depo Sistemleri</h3>
                    <p className="text-gray-600 text-sm">Ağır depo rafları ve otomatik depolama sistemleri</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Teknik Kapasiteler</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-orange-600 mb-4">35 Ton</h3>
                <p className="text-gray-600 mb-4">Maksimum Kaldırma Kapasitesi</p>
                <p className="text-gray-600 text-sm">En ağır endüstriyel ekipmanları bile güvenle taşıyabiliyoruz.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-orange-600 mb-4">30 Dakika</h3>
                <p className="text-gray-600 mb-4">Mobilizasyon Süresi</p>
                <p className="text-gray-600 text-sm">Acil durumlarda hızlı müdahale ve üretim akışı desteği.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-orange-600 mb-4">%100</h3>
                <p className="text-gray-600 mb-4">Sigorta Kapsamı</p>
                <p className="text-gray-600 text-sm">Tüm ekipmanlar tam sigorta kapsamında taşınır.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Sektör Çözümleri</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Otomotiv Sektörü</h3>
                <p className="text-gray-600 mb-4">Araç üretim tesislerinde makine ve ekipman taşıması.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Kaynak robotları</li>
                  <li>✓ Montaj hatları</li>
                  <li>✓ Kalıp ve pres sistemleri</li>
                  <li>✓ Depo ve lojistik sistemleri</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gıda Endüstrisi</h3>
                <p className="text-gray-600 mb-4">Gıda işleme ve paketleme tesislerinde ekipman kurulumu.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Işleme makineleri</li>
                  <li>✓ Paketleme sistemleri</li>
                  <li>✓ Soğutma ve depolama</li>
                  <li>✓ Konveyör sistemleri</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kimya Endüstrisi</h3>
                <p className="text-gray-600 mb-4">Kimya fabrikalarında hassas ekipman taşıması.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Reaktörler ve tanklar</li>
                  <li>✓ Pompa ve kompresör sistemleri</li>
                  <li>✓ Filtre ve ayırma cihazları</li>
                  <li>✓ Kontrol sistemleri</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Elektrik Üretimi</h3>
                <p className="text-gray-600 mb-4">Enerji üretim tesislerinde ekipman kurulumu.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Jeneratörler</li>
                  <li>✓ Transformatörler</li>
                  <li>✓ Türbinler</li>
                  <li>✓ Kontrol panelleri</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Sanayi Taşımacılığı Hizmetleri</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Fabrika ve üretim tesisleriniz için güvenilir ve profesyonel taşıma çözümleri.
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
