import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle, Shield, AlertCircle, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function ServiceSafeTransport() {
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
            <h1 className="text-2xl font-bold text-gray-900">Güvenli Taşıma</h1>
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
                <span className="text-orange-300 text-sm font-semibold">Güvenlik Garantili</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Güvenli <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Taşıma</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Deneyimli operatörler ve modern ekipmanlarla yüklerinizi en güvenli şekilde taşıyoruz. Her yük için özel dikkat ve profesyonel yaklaşım.
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
                alt="Güvenli Taşıma" 
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Güvenlik Özellikleri</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Tam Sigorta Kapsamı</h3>
                    <p className="text-gray-600">Tüm taşımalar sigorta kapsamındadır. Yükleriniz tamamen korunmaktadır.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Sertifikalı Operatörler</h3>
                    <p className="text-gray-600">Tüm operatörlerimiz sertifikalı, deneyimli ve güvenlik eğitimli profesyonellerdir.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Hassas Yük Taşıması</h3>
                    <p className="text-gray-600">Kırılgan ve değerli yükler için özel paketleme ve taşıma yöntemleri uygulanır.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Hızlı ve Güvenilir</h3>
                    <p className="text-gray-600">Zamanında teslim ve yükün bütünlüğü garantili. GPS takibi ile yükünüzü izleyebilirsiniz.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Taşıdığımız Yükler</h2>
              
              <div className="space-y-4">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Makine ve Ekipman</h3>
                    <p className="text-gray-600 text-sm">Endüstriyel makineler, üretim ekipmanları ve ağır demirbaşlar</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">İnşaat Malzemeleri</h3>
                    <p className="text-gray-600 text-sm">Çelik, beton, demir ve diğer inşaat malzemeleri</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Hassas Ürünler</h3>
                    <p className="text-gray-600 text-sm">Elektronik, cam, seramik ve kırılgan ürünler</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Özel Taşımalar</h3>
                    <p className="text-gray-600 text-sm">Sanat eserleri, antikalar ve değerli eşyalar</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Taşıma Süreci</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Teklif Alma</h3>
              <p className="text-gray-600 text-sm">Yükünüzün detaylarını bize bildirin. Ücretsiz teklif hazırlarız.</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Hazırlık</h3>
              <p className="text-gray-600 text-sm">Yükü özel paketleme ve güvenlik yöntemleriyle hazırlarız.</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Taşıma</h3>
              <p className="text-gray-600 text-sm">Profesyonel operatörler tarafından güvenle taşınır.</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Teslim</h3>
              <p className="text-gray-600 text-sm">Yük güvenli şekilde teslim alınır ve kontrol edilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Yükünüzü Güvenli Ellere Teslim Edin</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Profesyonel ve güvenilir taşıma hizmeti için bugün bize ulaşın. Tüm yükler sigorta kapsamındadır.
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
