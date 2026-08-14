import { Phone, MessageCircle } from "lucide-react";

export default function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
      <a
        href="https://wa.me/905444513341?text=Merhaba,%20vin%C3%A7%20kiralama%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-3 rounded-xl text-sm transition-colors shadow-md active:scale-95"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      <a
        href="tel:05444513341"
        className="flex-[1.4] flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold py-2.5 px-3 rounded-xl text-sm transition-colors shadow-md active:scale-95 animate-pulse"
      >
        <Phone className="w-4 h-4 fill-current animate-bounce" />
        <span>7/24 Ara: 0544 451 33 41</span>
      </a>
    </div>
  );
}
