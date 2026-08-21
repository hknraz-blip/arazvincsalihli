import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Calendar, Clock, CheckCircle, XCircle, Shield, Zap, Building } from "lucide-react";
import { useLocation, Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

declare function gtagSendEvent(url: string): false;
const trackCall = () => { if (typeof gtagSendEvent === 'function') gtagSendEvent('tel:05444513341'); };

export default function BlogSepetliVincMiIskeleMi() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Dış Cephede Sepetli Vinç mi İskele mi? (Maliyet ve Güvenlik) | Araz Vinç",
    description: "Dış cephe boya, cam temizliği, tabela montajı ve çatı işlerinde sepetli vinç ile iskele karşılaştırması. Hangisi daha ekonomik ve güvenli?",
    canonical: "https://arazvincsalihli.com/blog/sepetli-vinc-mi-iskele-mi",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white pb-16 md:pb-0">
      {/* Schema.org BlogPosting */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Dış Cephe ve Yüksek İrtifa İşlerinde Sepetli Vinç mi İskele mi? (Maliyet ve Güvenlik Karşılaştırması)",
        "image": "https://arazvincsalihli.com/araz-vinc-machine.webp",
        "author": { "@type": "Person", "name": "Araz Vinç Salihli" },
        "publisher": { "@type": "Organization", "name": "Araz Vinç Salihli", "logo": { "@type": "ImageObject", "url": "https://arazvincsalihli.com/araz-vinc-logo.webp" } },
        "datePublished": "2026-08-21",
        "dateModified": "2026-08-21",
        "description": "Dış cephe boya, cam silme, tabela montajı ve çatı işlerinde sepetli vinç ile iskele karşılaştırması.",
        "mainEntityOfPage": "https://arazvincsalihli.com/blog/sepetli-vinc-mi-iskele-mi"
      })}} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <button onClick={() => navigate("/blog")} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-5 w-5" /><span className="font-medium">Tüm Yazılar</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/">Ana Sayfa</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span className="text-orange-600 font-semibold">Sepetli Vinç mi İskele mi?</span>
            </div>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-md">
                <Phone className="h-4 w-4 mr-2" />0544 451 33 41
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-700 font-semibold rounded-full text-xs">
              <Building className="h-3.5 w-3.5" /> Rehber
            </span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 21 Ağustos 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 dk okuma</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Dış Cephe ve Yüksek İrtifa İşlerinde <span className="text-orange-600">Sepetli Vinç mi, İskele mi?</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-4 py-1 italic bg-orange-50/50 rounded-r-lg">
            Bina dış cephe boyası, cam temizliği, tabela montajı veya çatı tamirinde doğru ekipmanı seçmek hem bütçenizi hem de çalışanlarınızın can güvenliğini doğrudan etkiler.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg text-gray-700">
          <p className="leading-relaxed">
            Salihli, Alaşehir, Kula ve Ahmetli genelinde faaliyet gösteren inşaat firmaları, tabela reklamcıları, fabrika yöneticileri ve mülk sahiplerinin en sık karşılaştığı ikilemlerden biri şudur: <strong>"Bu iş için iskele mi kurdurmalıyım yoksa sepetli vinç mi kiralamalıyım?"</strong>
          </p>
          <p className="leading-relaxed">
            Geleneksel yöntem olan iskele kurulumu geçmişte yaygın olsa da, günümüzde saatlik ve günlük <Link href="/sepetli-vinc-kiralama-salihli" className="text-orange-600 font-bold hover:underline">sepetli vinç kiralama</Link> hizmetlerinin yaygınlaşmasıyla birlikte dinamikler tamamen değişti. Gelin her iki seçeneği maliyet, süre ve güvenlik kriterlerine göre detaylı inceleyelim.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">Sepetli Vinç ve İskele Karşılaştırma Tablosu</h2>
          
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <thead className="bg-slate-900 text-white text-sm">
                <tr>
                  <th className="p-4 border-b border-slate-800">Kriter</th>
                  <th className="p-4 border-b border-slate-800 bg-orange-600 text-white font-bold">Sepetli Vinç Platform</th>
                  <th className="p-4 border-b border-slate-800">Geleneksel İskele</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Kurulum Süresi</td>
                  <td className="p-4 text-emerald-700 font-semibold bg-orange-50/50 flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" /> 10–15 Dakikada Hazır</td>
                  <td className="p-4 text-red-600 flex items-center gap-1.5"><XCircle className="h-4 w-4 text-red-500 flex-shrink-0" /> 1–3 Gün Kurulum ve Söküm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">İşçilik & Nakliye Maliyeti</td>
                  <td className="p-4 text-emerald-700 font-semibold bg-orange-50/50 flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" /> Tek araç, operatör dahil</td>
                  <td className="p-4 text-red-600 flex items-center gap-1.5"><XCircle className="h-4 w-4 text-red-500 flex-shrink-0" /> Kamyon nakliyesi + iskele montaj ekibi</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">İş Güvenliği (İSG)</td>
                  <td className="p-4 text-emerald-700 font-semibold bg-orange-50/50 flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" /> Sertifikalı sepet, emniyet kemeri kilidi</td>
                  <td className="p-4 text-yellow-700 flex items-center gap-1.5">Rüzgarda ve hatalı montajda yüksek risk</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Çevre & Yaya Güvenliği</td>
                  <td className="p-4 text-emerald-700 font-semibold bg-orange-50/50 flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" /> Kaldırımı günlerce işgal etmez</td>
                  <td className="p-4 text-red-600 flex items-center gap-1.5"><XCircle className="h-4 w-4 text-red-500 flex-shrink-0" /> Dükkan önünü ve kaldırımı kapatır</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Esneklik & Hareket Kabiliyeti</td>
                  <td className="p-4 text-emerald-700 font-semibold bg-orange-50/50 flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" /> Binanın her cephesine hızlı geçiş</td>
                  <td className="p-4 text-red-600 flex items-center gap-1.5"><XCircle className="h-4 w-4 text-red-500 flex-shrink-0" /> Sabittir, taşımak için yeniden sökülür</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Hangi Durumlarda Sepetli Vinç Tercih Edilmelidir?</h2>
          
          <ul className="space-y-3 my-6">
            <li className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div><strong>Tabela ve Reklam Montajı:</strong> Birkaç saat içinde tamamlanacak bir reklam panosu veya ışıklı tabela montajı için iskele kurmak maliyeti 4-5 katına çıkarır. Sepetli vinç ile 2 saatte iş teslim edilir.</div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div><strong>Bina Dış Cephe Cam Silme ve Kompozit Temizliği:</strong> İş merkezlerinin ve plazaların cam temizliğinde günlerce iskele beklemek yerine sepetli vinç ile aynı gün tüm cepheler temizlenir.</div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div><strong>Çatı Tamiri, Oluk Değişimi ve Güneş Paneli (GES):</strong> Binanın tepesine güvenle ulaşmak ve malzemeleri taşımak sepetli vinçle dakikalar alır.</div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div><strong>Ağaç Budama ve Elektrik Direği Bakımı:</strong> Yüksek ağaçların caddeye veya elektrik tellerine zarar vermeden budanmasında tek güvenli yöntemdir.</div>
            </li>
          </ul>

          <div className="my-10 p-6 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Salihli ve Çevresinde Sepetli Vinç İhtiyacınız mı Var?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Araz Vinç olarak Salihli, <Link href="/ahmetli-vinc-kiralama" className="text-orange-600 font-bold hover:underline">Ahmetli</Link>, <Link href="/alasehir-vinc-kiralama" className="text-orange-600 font-bold hover:underline">Alaşehir</Link> ve <Link href="/kula-vinc-kiralama" className="text-orange-600 font-bold hover:underline">Kula</Link> bölgelerinde saatlik ve günlük kiralık sepetli vinçlerimizle 7/24 hizmetinizdeyiz.
            </p>
            <a href="tel:05444513341" onClick={trackCall}>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold">
                <Phone className="h-4 w-4 mr-2" />0544 451 33 41 – Fiyat Teklifi Alın
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-3">© {new Date().getFullYear()} Araz Vinç Salihli. Tüm hakları saklıdır.</p>
          <div className="flex justify-center gap-6 text-xs">
            <Link href="/" className="hover:text-orange-400">Ana Sayfa</Link>
            <Link href="/blog" className="hover:text-orange-400">Tüm Blog Yazıları</Link>
            <Link href="/sepetli-vinc-kiralama-salihli" className="hover:text-orange-400 text-orange-400">Sepetli Vinç Kiralama</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
