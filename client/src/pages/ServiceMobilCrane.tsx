import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle, Truck, AlertCircle, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function ServiceMobilCrane() {
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
            <h1 className="text-2xl font-bold text-gray-900">Mobil Vinç Kiralama</h1>
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
                <span className="text-orange-300 text-sm font-semibold">Profesyonel Hizmet</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Mobil <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Farklı tonajlarda mobil vinç kiralama hizmetleri. Profesyonel operatörler, modern ekipmanlar ve güvenilir hizmet garantisi.
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
                alt="Mobil Vinç" 
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Hizmet Özellikleri</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Truck className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Farklı Tonajlar</h3>
                    <p className="text-gray-600">10 tondan 150 tona kadar çeşitli vinç kapasiteleri mevcuttur. Projenizin ihtiyacına göre en uygun vinçi seçebilirsiniz.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Hızlı Mobilizasyon</h3>
                    <p className="text-gray-600">Talebi aldıktan sonra 30 dakika içinde olay yerine ulaşabiliyoruz. Acil durumlarda tercih edilen çözümdür.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Deneyimli Operatörler</h3>
                    <p className="text-gray-600">Tüm operatörlerimiz sertifikalı ve deneyimlidir. Güvenlik standartlarına uygun şekilde çalışırız.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Sigorta Kapsamı</h3>
                    <p className="text-gray-600">Tüm işlemlerimiz sigorta kapsamındadır. Yükleriniz tamamen korunmaktadır.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Kullanım Alanları</h2>
              
              <div className="space-y-4">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">İnşaat Projeleri</h3>
                    <p className="text-gray-600 text-sm">Malzeme yükleme, demirbaş taşıması ve montaj işlemleri</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Sanayi Uygulamaları</h3>
                    <p className="text-gray-600 text-sm">Ağır ekipman taşıması ve yerleştirilmesi</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Ticari Taşımacılık</h3>
                    <p className="text-gray-600 text-sm">Konteyner ve palet taşıması, yükleme işleri</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Özel Projeler</h3>
                    <p className="text-gray-600 text-sm">Etkinlik kurulumu, reklam panoları ve diğer özel işler</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fiyatlandırma</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fiyatlandırma, vinç tonajı, çalışma süresi ve mesafeye göre belirlenir. Ücretsiz teklif almak için bize ulaşın.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Saatlik</h3>
                <p className="text-gray-600 mb-4">Kısa süreli işler için</p>
                <div className="text-3xl font-bold text-orange-600 mb-4">Uygun Fiyat</div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Teklif Al</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-600">
              <CardContent className="p-8 text-center">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">Popüler</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Günlük</h3>
                <p className="text-gray-600 mb-4">Orta süreli projeler için</p>
                <div className="text-3xl font-bold text-orange-600 mb-4">En İyi Değer</div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Teklif Al</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Aylık</h3>
                <p className="text-gray-600 mb-4">Uzun süreli projeler için</p>
                <div className="text-3xl font-bold text-orange-600 mb-4">İndirimli</div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Teklif Al</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Mobil Vinç Kiralama Hizmetini Almak İster misiniz?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Profesyonel ve güvenilir hizmet için bugün bize ulaşın. Ücretsiz teklif ve danışmanlık sunuyoruz.
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
