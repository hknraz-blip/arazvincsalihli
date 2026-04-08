import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle, Truck, AlertCircle, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function ServiceMobilCrane() {
  const [, navigate] = useLocation();
  useSEO({ title: "Mobil Vinç Kiralama Salihli & Manisa | Araz Vinç – 7/24", description: "Salihli ve Manisa'da 10–55 ton arası mobil vinç kiralama. Sertifikalı operatörler, 30 dakikada sahada, sigortalı taşıma. Ücretsiz teklif: 0544 451 33 41", canonical: "https://arazvincsalihli.com/service/mobile-crane" });
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"><ArrowLeft className="h-5 w-5" /><span className="font-medium">Geri Dön</span></button>
            <h1 className="text-2xl font-bold text-gray-900">Mobil Vinç Kiralama</h1>
            <a href="tel:05444513341" onClick={trackCall}><Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg"><Phone className="h-4 w-4 mr-2" />Hemen Ara</Button></a>
          </nav>
        </div>
      </header>
      <section className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Mobil <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Vinç</span> Kiralama</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">Farklı tonajlarda mobil vinç kiralama hizmetleri. Profesyonel operatörler, modern ekipmanlar ve güvenilir hizmet garantisi.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:05444513341" onClick={trackCall}><Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white w-full sm:w-auto shadow-lg"><Phone className="h-5 w-5 mr-2" />0544 451 33 41</Button></a>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img src="/araz-vinc-machine.jpg" alt="Salihli Mobil Vinç Kiralama – Araz Vinç" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Hizmet Özellikleri</h2>
              <div className="space-y-6">
                {[{icon:Truck,t:"Farklı Tonajlar",d:"10 tondan 55 tona kadar çeşitli vinç kapasiteleri. Projenizin ihtiyacına göre en uygun vinçi seçebilirsiniz."},{icon:Zap,t:"Hızlı Mobilizasyon",d:"Talebi aldıktan sonra 30 dakika içinde olay yerine ulaşabiliriz. Acil durumlarda tercih edilen çözüm."},{icon:CheckCircle,t:"Deneyimli Operatörler",d:"Tüm operatörlerimiz sertifikalı ve deneyimlidir. Güvenlik standartlarına uygun şekilde çalışırız."},{icon:AlertCircle,t:"Sigorta Kapsamı",d:"Tüm işlemlerimiz sigorta kapsamındadır. Yükleriniz tamamen korunmaktadır."}].map(({icon:Icon,t,d})=>(
                  <div key={t} className="flex gap-4"><Icon className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" /><div><h3 className="font-bold text-gray-900 mb-2">{t}</h3><p className="text-gray-600">{d}</p></div></div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Kullanım Alanları</h2>
              <div className="space-y-4">
                {[{	"t":"İnşaat Projeleri","d":"Malzeme yükleme, demirbaş taşıması ve montaj"},{"t":"Sanayi Uygulamaları","d":"Ağır ekipman taşıması ve yerleştirilmesi"},{"t":"Ticari Taşımacılık","d":"Konteyner ve palet taşıması"},{"t":"Özel Projeler","d":"Etkinlik kurulumu, reklam panoları ve diğer özel işler"}].map(({t,d})=>(
                  <Card key={t} className="border-0 shadow-lg"><CardContent className="p-6"><h3 className="font-bold text-gray-900 mb-2">{t}</h3><p className="text-gray-600 text-sm">{d}</p></CardContent></Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Mobil Vinç Kiralama Hizmetini Almak İster misiniz?</h2>
          <a href="tel:05444513341" onClick={trackCall}><Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg"><Phone className="h-5 w-5 mr-2" />0544 451 33 41 - Hemen Arayın</Button></a>
        </div>
      </section>
    </div>
  );
}
