import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      company: "ABC İnşaat Ltd.",
      text: "Araz Vinç ile çalışmak çok profesyonel bir deneyim oldu. Ekip hızlı, güvenilir ve çok dikkatli. Projemiz zamanında tamamlandı.",
      rating: 5
    },
    {
      name: "Fatma Kaya",
      company: "XYZ Sanayi",
      text: "Ağır ekipman taşıması için Araz Vinç'i kullandık. Operatörler çok deneyimli ve ekipmanlar modern. Kesinlikle tavsiye ederim.",
      rating: 5
    },
    {
      name: "İbrahim Demir",
      company: "Manisa Ticaret",
      text: "7/24 hizmet sunmaları çok önemli. Acil bir durumda hemen yanımıza geldiler. Çok memnun kaldık.",
      rating: 5
    },
    {
      name: "Selin Çetin",
      company: "Salihli Yapı",
      text: "Fiyatlandırma adil, hizmet kalitesi yüksek. Birden fazla proje için Araz Vinç'i tercih ettik.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Müşteri Yorumları</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Araz Vinç ile çalışan müşterilerimizin deneyimleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="hover:shadow-2xl transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
