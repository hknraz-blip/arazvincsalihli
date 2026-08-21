import { Phone, MessageCircle } from "lucide-react";

declare function gtagSendEvent(url: string): false;

export default function MobileCallBar() {
  const trackCall = () => {
    if (typeof gtagSendEvent === 'function') {
      gtagSendEvent('tel:05444513341');
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 pb-[calc(0.625rem+env(safe-area-inset-bottom))] flex items-center justify-between gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <a
        href="tel:05444513341"
        onClick={trackCall}
        className="flex-[1.5] flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold py-3 px-3 rounded-xl text-sm transition-transform shadow-lg shadow-orange-950/30 active:scale-95"
      >
        <Phone className="w-4 h-4 fill-current animate-bounce flex-shrink-0" />
        <span className="truncate">Hemen Ara: 0544 451 33 41</span>
      </a>

      <a
        href="https://wa.me/905444513341?text=Merhaba,%20vin%C3%A7%20kiralama%20veya%20kurtarma%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-3 rounded-xl text-sm transition-transform shadow-lg shadow-emerald-950/30 active:scale-95 flex-shrink-0"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
