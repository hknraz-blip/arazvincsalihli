import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Clock, Zap, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function Service24_7() {
  const [, navigate] = useLocation();
  useSEO({ title: "7/24 Acil Vinç Hizmeti Salihli & Manisa | Araz Vinç", description: "Salihli, Manisa, Alaşehir ve Turgutlu'da 7/24 acil vinç hizmeti. 30 dakikada sahada, kesintisiz destek. Hemen arayın: 0544 451 33 41", canonical: "https://arazvincsalihli.com/service/24-7" });
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"><ArrowLeft className="h-5 w-5" /><span className="font-medium">Geri Dön</span></button>
            <h1 className="text-2xl font-bold text-gray-900">7/24 Acil Hizmet</h1>
            <a href="tel:05444513341" onClick={trackCall}><Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg"><Phone className="h-4 w-4 mr-2" />Hemen Ara</Button></a>
          </nav>
        </div>
      </header>
      <section className="pt-24 min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight"><span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">7/24</span> Acil Vinç</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">Gece gündüz, hafta sonu tatil dinlemeksizin Salihli ve Manisa bölgesinde acil vinç hizmetindeyiz.</p>
            <a href="tel:05444513341" onClick={trackCall}><Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg"><Phone className="h-5 w-5 mr-2" />0544 451 33 41 – Şimdi Ara</Button></a>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Neden 7/24 Hizmet?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{icon:Clock,t:"Her Saat Ulaşılabilir",d:"Gece 02:00'de de ararsanız telefonu açıyoruz"},{icon:Zap,t:"30 Dakika Yanıt",d:"Salihli merkezi için ortalama ulaşma süremiz 30 dakika"},{icon:CheckCircle,t:"Hazır Ekipman",d:"Araçlarımız her an hizmete hazır tutulur"}].map(({icon:Icon,t,d})=>(
              <Card key={t} className="border-0 shadow-lg"><CardContent className="p-8 text-center"><Icon className="h-10 w-10 text-orange-600 mx-auto mb-4" /><h3 className="font-bold text-gray-900 mb-2">{t}</h3><p className="text-gray-600">{d}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Acil Durumda Hemen Arayın</h2>
          <a href="tel:05444513341" onClick={trackCall}><Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg"><Phone className="h-5 w-5 mr-2" />0544 451 33 41</Button></a>
        </div>
      </section>
    </div>
  );
}
