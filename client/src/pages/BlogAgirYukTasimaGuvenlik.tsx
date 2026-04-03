import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, AlertTriangle, Clock, Tag } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function BlogAgirYukTasimaGuvenlik() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Ağır Yük Taşımada İş Güvenliği: 10 Temel Kural | Araz Vinç",
    description: "Vinç operasyonlarında iş güvenliği için uyulması gereken 10 temel kural. Sertifika, zemin kontrolü, elektrik hattı güvenliği ve daha fazlası. Tel: 0544 451 33 41",
    canonical: "https://arazvincsalihli.com/blog/agir-yuk-tasima-guvenlik",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ağır Yük Taşımada Güvenlik: 10 Temel Kural",
            description:
              "Vinç operasyonlarında ve ağır yük taşımacılığında iş güvenliği için uyulması gereken 10 temel kural. Profesyonellerin önerileri.",
            author: { "@type": "Organization", name: "Araz Vinç Salihli" },
            publisher: { "@type": "Organization", name: "Araz Vinç Salihli", url: "https://arazvincsalihli.com" },
            datePublished: "2025-03-10",
            dateModified: "2026-04-03",
            url: "https://arazvincsalihli.com/blog/agir-yuk-tasima-guvenlik",
          }),
        }}
      />

      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/blog")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Blog'a Dön</span>
            </button>
            <a href="tel:05444513341">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <section className="pt-24 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-orange-600/20 border border-orange-500/50 text-orange-300 text-xs font-semibold rounded-full flex items-center gap-1">
              <Tag className="h-3 w-3" /> Güvenlik
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="h-3 w-3" /> 7 dk okuma
            </span>
            <span className="text-gray-400 text-sm">10 Mart 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ağır Yük Taşımada Güvenlik: <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">10 Temel Kural</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Vinç operasyonları ve ağır yük taşımacılığı, doğru yapılmadığında ciddi iş kazalarına yol açabilir. Bu 10 kural hem operatörleri hem de işverenleri korur.
          </p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Neden Güvenlik Bu Kadar Önemli?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ağır yük taşıma ve vinç operasyonları, Türkiye'de iş kazalarının en sık yaşandığı alanlar arasında yer almaktadır. Yanlış bağlama, aşırı yükleme, zemin dikkatsizliği veya iletişim eksikliği gibi hatalar hem can hem de mal kaybına yol açabilir. Deneyimli ekiplerle çalışmak ve temel güvenlik kurallarına uymak bu riskleri büyük ölçüde azaltır.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">10 Temel Güvenlik Kuralı</h2>
            <div className="space-y-6 mb-10">
              {[
                { no: "1", title: "Yükü Kaldırmadan Önce Ağırlığını Öğrenin", desc: "Taşınacak yükün ağırlığı bilinmeden operasyon başlatılmamalıdır. Vincin kapasitesinin üzerinde yük kaldırmaya çalışmak hem ekipmanı hem de operatörü tehlikeye atar. Yük belgesi veya teknik şartname mutlaka kontrol edilmelidir." },
                { no: "2", title: "Zemin Sağlamlığını Kontrol Edin", desc: "Vinç kurulmadan önce zeminin sağlam ve düz olduğundan emin olunmalıdır. Yumuşak veya eğimli zemin, vincin devrilmesine yol açabilir. Gerekirse tahta takoz veya çelik plaka kullanılmalıdır." },
                { no: "3", title: "Sertifikalı Operatörle Çalışın", desc: "Vinç operatörünün geçerli iş makinesi operatör belgesi olması zorunludur. Belgesiz operatör çalıştırmak hem yasal sorumluluk hem de güvenlik açısından büyük risk taşır." },
                { no: "4", title: "Güvenli Mesafeyi Koruyun", desc: "Yük havadayken operasyon alanına yetkisiz kişilerin girmesi kesinlikle engellenmeli, etraf barikat veya şerit ile kapatılmalıdır. Minimum 5 metre güvenli mesafe şarttır." },
                { no: "5", title: "Bağlama Ekipmanını Doğru Kullanın", desc: "Sapanlar, kancalar ve zincirler uygun kapasitede seçilmeli ve hasar görmüş olanlar kullanım dışı bırakılmalıdır. Yük dengesiz bağlanmamalıdır." },
                { no: "6", title: "Elektrik Hatlarına Dikkat Edin", desc: "Vinç kolunun veya yükün elektrik hatlarına temas etmesi hayati tehlike yaratır. Operasyon başlamadan önce çevredeki elektrik hatları tespit edilmeli, gerekirse ilgili kurumdan hat kapatma talep edilmelidir." },
                { no: "7", title: "İletişim Kesintisiz Olmalı", desc: "Operatör ile saha yönlendiricisinin (slingerci) sürekli görsel veya telsiz iletişimi olmalıdır. Kör noktalarda tek başına hareket edilmemelidir." },
                { no: "8", title: "Hava Koşullarını Takip Edin", desc: "Güçlü rüzgar (saatte 50 km üzeri), yağmur veya sis gibi olumsuz hava koşullarında operasyonlar durdurulmalıdır. Rüzgar, havada yük sallayarak kontrol kaybına yol açabilir." },
                { no: "9", title: "Periyodik Bakımları Aksatmayın", desc: "Vinç ve taşıma ekipmanlarının düzenli bakımı hem yasal zorunluluk hem de güvenlik gereksinimidir. Bakımsız ekipman beklenmedik arızalara ve kazalara davetiye çıkarır." },
                { no: "10", title: "Kişisel Koruyucu Ekipman Kullanın", desc: "Baret, güvenlik yeleği, çelik burunlu bot ve gerektiğinde eldiven kullanımı zorunludur. Saha içinde KKD olmadan çalışmak yasal olarak yasaktır." },
              ].map((item) => (
                <div key={item.no} className="flex gap-5 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors">
                  <div className="h-10 w-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {item.no}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 p-6 bg-orange-50 border border-orange-200 rounded-xl mb-8">
              <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-orange-800 mb-1">Önemli Hatırlatma</h3>
                <p className="text-orange-700 text-sm leading-relaxed">
                  Türk İş Kanunu ve İş Sağlığı ve Güvenliği Kanunu kapsamında vinç operasyonlarında işveren, tüm güvenlik önlemlerini almakla yükümlüdür. Kaza durumunda belgeli güvenlik önlemleri hem hukuki hem mali açıdan sizi korur.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Araz Vinç'te Güvenlik Önceliğimizdir</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Araz Vinç olarak tüm operasyonlarımızı yukarıdaki güvenlik kurallarına uygun şekilde yürütüyoruz. Sertifikalı operatörlerimiz, sigortalı ekipmanlarımız ve deneyimimizle Salihli ve Manisa'da güvenli vinç hizmetleri sunuyoruz.
            </p>
          </div>
        </div>
      </article>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Güvenli Vinç Hizmetleri İçin Bizi Arayın</h2>
          <p className="text-orange-100 mb-8 text-lg">Salihli ve Manisa'da 7/24 sertifikalı ve sigortalı hizmet</p>
          <a href="tel:05444513341">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />0544 451 33 41 - Hemen Arayın
            </Button>
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Araz Vinç. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
