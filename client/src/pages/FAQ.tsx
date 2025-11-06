import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Araz Vinç hangi bölgelerde hizmet veriyor?",
      answer: "Salihli ve Manisa bölgesinde hizmet veriyoruz. Acil durumlarda çevresindeki bölgelere de gidebiliriz. Daha fazla bilgi için bize telefon edebilirsiniz."
    },
    {
      question: "Vinç kiralama fiyatları nasıl belirleniyor?",
      answer: "Fiyatlandırma, vinç türü, çalışma süresi, mesafe ve proje türüne göre belirlenir. Ücretsiz teklif almak için bize ulaşabilirsiniz."
    },
    {
      question: "Acil durumlarda ne kadar sürede hizmet alabilir?",
      answer: "7/24 hizmet sunuyoruz. Acil durumlarda genellikle 30 dakika içinde olay yerine ulaşabiliyoruz."
    },
    {
      question: "Operatörleriniz sertifikalı mı?",
      answer: "Evet, tüm operatörlerimiz sertifikalı ve deneyimlidir. Güvenlik standartlarına uygun şekilde çalışırız."
    },
    {
      question: "Hangi tür projeler için vinç kiralayabilir?",
      answer: "İnşaat projeleri, sanayi taşımacılığı, ticari yükleme işleri, montaj ve demontaj işlemleri gibi birçok alanda hizmet veriyoruz."
    },
    {
      question: "Sigorta kapsamı nedir?",
      answer: "Tüm işlemlerimiz sigorta kapsamındadır. Detaylı bilgi için iletişime geçebilirsiniz."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Araz Vinç hizmetleri hakkında sıkça sorulan sorulara cevaplar
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-orange-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-8 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed mt-4">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
