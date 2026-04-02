import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Clock, Tag, AlertTriangle } from "lucide-react";
import { useLocation } from "wouter";

export default function BlogVincOperasyonundaHavaKosullari() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vinç Operasyonlarında Hava Koşullarının Önemi",
            description:
              "Rüzgar, yağmur ve sis gibi hava koşullarının vinç çalışmalarını nasıl etkilediğini ve ne zaman durulması gerektiğini öğrenin.",
            author: { "@type": "Organization", name: "Araz Vinç Salihli" },
            publisher: { "@type": "Organization", name: "Araz Vinç Salihli", url: "https://arazvincsalihli.com" },
            datePublished: "2025-04-01",
            url: "https://arazvincsalihli.com/blog/vinc-operasyonunda-hava-kosullari",
          }),
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Blog'a Dön</span>
            </button>
            <a href="tel:05444513341">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg">
                <Phone className="h-4 w-4 mr-2" />
                Hemen Ara
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
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
              <Clock className="h-3 w-3" /> 5 dk okuma
            </span>
            <span className="text-gray-400 text-sm">1 Nisan 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Vinç Operasyonlarında{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              Hava Koşullarının Önemi
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Rüzgar, yağmur, sis ve don gibi hava koşulları vinç operasyonlarını doğrudan etkiler. Doğru kararı zamanında vermek hem can hem mal güvenliği açısından hayati önem taşır.
          </p>
        </div>
      </section>

      {/* Makale İçeriği */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Neden Hava Koşulları Bu Kadar Önemli?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vinç operasyonları, açık havada gerçekleştirilen ve doğa koşullarından doğrudan etkilenen ağır iş süreçleridir. Bir vinç operatörünün en önemli sorumluluklarından biri, meteorolojik koşulları sürekli takip etmek ve riskleri önceden değerlendirmektir. Yanlış koşullarda devam eden bir operasyon; ekipman hasarına, ciddi yaralanmalara ve hatta ölümlü iş kazalarına yol açabilir.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Rüzgar: En Kritik Etken</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vinç operasyonlarında rüzgar, en belirleyici hava koşuludur. Yüksekte sallanan yük, rüzgarda sarkaç gibi davranır ve kontrol edilemez hale gelebilir. Genel kabul gören sınır değerler şunlardır:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "0–10 m/s (Hafif Esinti)", desc: "Normal operasyon koşulları. Deneyimli operatörler tüm işlemleri güvenle yürütebilir.", color: "green" },
                { title: "10–14 m/s (Orta Rüzgar)", desc: "Dikkat gerektiren koşullar. Yük boyutu ve vinç kapasitesine göre operasyon yavaşlatılmalıdır.", color: "yellow" },
                { title: "14 m/s ve Üzeri (Şiddetli Rüzgar)", desc: "Operasyon durdurulmalıdır. Uluslararası iş güvenliği standartları (EN 13001) bu sınırı zorunlu kılar.", color: "red" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-orange-50 rounded-xl border border-orange-100">
                  <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Yağmur ve Islak Zemin Koşulları</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Yağmur, vinç operasyonlarını birden fazla noktada olumsuz etkiler:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Islak zemin, vincin stabilizatör ayaklarının sağlam durmamasına neden olabilir",
                "Islak çelik yüzeyler ve halatlar kaygan hale gelir, tutunma azalır",
                "Yoğun yağışta operatörün görüş mesafesi kısalır",
                "Elektrikli bileşenler için kısa devre riski artar",
                "Toprak zemin çökebilir; zemin sağlamlığı mutlaka kontrol edilmelidir",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <div className="h-2 w-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Sis, Don ve Aşırı Sıcak</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sis, operatörün yükü ve çevresini görmesini engeller; bu nedenle yoğun sis koşullarında operasyon kısmen veya tamamen durdurulmalıdır. Don ve buz ise halatlarda ve kancalarda tehlikeli bir birikim oluşturabilir; yük bağlama noktaları kayganlaşır. Öte yandan aşırı sıcakta (40°C üzeri) hidrolik sistemler fazla ısınabilir, yağlar sıvılaşır ve ekipman verimliliği düşer.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Operasyon Öncesi Hava Kontrolü İçin Pratik İpuçları</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: "Meteoroloji Uygulamaları", desc: "Windy, Meteoblue veya TSMS (Türkiye Meteoroloji Genel Müdürlüğü) uygulamalarıyla saatlik rüzgar hızı ve yağış tahminlerini takip edin." },
                { title: "Sahada Anemometre Kullanımı", desc: "Taşınabilir rüzgar ölçer cihazlar, iş mahallindeki gerçek hız değerini anlık olarak gösterir. Büyük operasyonlarda zorunludur." },
                { title: "Zemin Etüdü", desc: "Yağmur sonrası operasyonlarda zemin sağlamlığını kontrol edin. Gerekirse beton plaka veya özel destek altlıkları kullanın." },
                { title: "Erken Karar Verin", desc: "Hava kötüleşmeye başladığında operasyonu yavaşlatmak yerine, önceden planlayarak uygun pencerede çalışmayı tamamlayın." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Araz Vinç Olarak Hava Koşullarına Yaklaşımımız</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Salihli ve Manisa'da 25 yılı aşkın deneyimimizle, her operasyon öncesinde hava koşullarını titizlikle değerlendiriyoruz. Sertifikalı operatörlerimiz, uluslararası standartlara uygun güvenlik protokollerini eksiksiz uygulamaktadır. Olumsuz hava koşullarında operasyonu durdurmak veya yeniden planlamak, güvenliğiniz için aldığımız kararlı bir tutumun parçasıdır.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Güvenli Vinç Hizmeti İçin Arayın</h2>
          <p className="text-orange-100 mb-8 text-lg">Salihli ve Manisa'da 7/24 profesyonel vinç hizmetleri</p>
          <a href="tel:05444513341">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              0544 451 33 41 - Hemen Arayın
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
