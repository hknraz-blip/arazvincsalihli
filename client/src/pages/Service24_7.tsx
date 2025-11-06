import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Clock, AlertCircle, CheckCircle, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function Service24_7() {
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
            <h1 className="text-2xl font-bold text-gray-900">7/24 Hizmet</h1>
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
                <span className="text-orange-300 text-sm font-semibold">Kesintisiz Hizmet</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                7/24 <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Hizmet</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Hafta sonu, tatil günleri ve gece saatlerinde de hizmet veriyoruz. Acil durumlarınızda her zaman yanınızdayız.
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
                alt="7/24 Hizmet" 
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Kesintisiz Hizmet Avantajları</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Her Zaman Ulaşılabilir</h3>
                    <p className="text-gray-600">Gece, gündüz, hafta sonu ve tatil günleri fark etmez. Tüm gün hizmet vermekteyiz.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Acil Durum Desteği</h3>
                    <p className="text-gray-600">Beklenmedik durumlar için hızlı müdahale. 30 dakika içinde olay yerine ulaşabiliyoruz.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Deneyimli Ekip</h3>
                    <p className="text-gray-600">Gece vardiyasında da aynı kalitede, sertifikalı operatörler çalışmaktadır.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Hızlı Yanıt Süresi</h3>
                    <p className="text-gray-600">Talebi aldıktan sonra en kısa sürede mobilize olarak hizmet sunuyoruz.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Hizmet Saatleri</h2>
              
              <div className="space-y-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900">Pazartesi - Cuma</h3>
                      <span className="text-orange-600 font-semibold">06:00 - 22:00</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900">Cumartesi</h3>
                      <span className="text-orange-600 font-semibold">08:00 - 20:00</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900">Pazar</h3>
                      <span className="text-orange-600 font-semibold">10:00 - 18:00</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg border-2 border-orange-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900">Acil Durumlar</h3>
                      <span className="text-orange-600 font-semibold">7/24</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Tüm gün hizmet vermekteyiz. Acil durumlar için anında müdahale.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Neden 7/24 Hizmet Önemlidir?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">İnşaat Projeleri</h3>
                <p className="text-gray-600 mb-4">İnşaat sahaları 24 saat çalışabilir. Gece vardiyasında da vinç hizmetine ihtiyaç duyulabilir.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Gece vardiyası malzeme taşıması</li>
                  <li>• Acil demirbaş taşıması</li>
                  <li>• Hızlı montaj ve demontaj</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sanayi Uygulamaları</h3>
                <p className="text-gray-600 mb-4">Fabrikalar kesintisiz çalışır. Üretim akışını bozmamak için acil vinç hizmetine ihtiyaç duyabilirsiniz.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Üretim akışı kesintisizliği</li>
                  <li>• Acil ekipman taşıması</li>
                  <li>• Bakım ve onarım işleri</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticari Taşımacılık</h3>
                <p className="text-gray-600 mb-4">Lojistik ve depo işlemleri her zaman gerçekleşebilir. Gece saatlerinde de taşıma hizmetine ihtiyaç duyabilirsiniz.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Gece konteyner taşıması</li>
                  <li>• Depo yükleme işleri</li>
                  <li>• Acil kargo hizmetleri</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Acil Durumlar</h3>
                <p className="text-gray-600 mb-4">Beklenmedik durumlar her zaman meydana gelebilir. Hızlı müdahale gerekli olabilir.</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Yol kazaları ve acil taşımalar</li>
                  <li>• Doğal afet müdahaleleri</li>
                  <li>• Beklenmedik ekipman arızaları</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Acil Durumda Bize Ulaşın</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Gece, gündüz, hafta sonu veya tatil günü fark etmez. Araz Vinç her zaman hizmet vermektedir.
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
