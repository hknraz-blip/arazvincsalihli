import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, MapPin } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    serviceType: "",
    description: "",
    date: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.serviceType || !formData.location) {
      toast.error("Lütfen tüm gerekli alanları doldurunuz");
      return;
    }

    setLoading(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would send this data to your backend
      console.log("Form submitted:", formData);
      
      toast.success("Teklif talebiniz alındı! En kısa sürede sizinle iletişime geçeceğiz.");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        serviceType: "",
        description: "",
        date: ""
      });
    } catch (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ücretsiz Teklif Alın</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Vinç kiralama hizmetleri için ücretsiz teklif almak için aşağıdaki formu doldurunuz. 
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınız ve soyadınız"
                      className="w-full"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0544 451 33 41"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    >
                      <option value="">Seçiniz</option>
                      <option value="mobile-crane">Mobil Vinç Kiralama</option>
                      <option value="transport">Güvenli Taşıma</option>
                      <option value="construction">İnşaat Projeleri</option>
                      <option value="industrial">Sanayi Taşımacılığı</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lokasyon *
                    </label>
                    <Input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Çalışma alanı"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tarih
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Açıklama
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Proje hakkında detaylı bilgi"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg"
                  >
                    {loading ? "Gönderiliyor..." : "Teklif Talep Et"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h3>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Telefon</h4>
                      <a href="tel:05444513341" className="text-orange-600 hover:text-orange-700 font-semibold">
                        0544 451 33 41
                      </a>
                      <p className="text-gray-600 text-sm mt-1">7/24 Hizmet Sunuyoruz</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Adres</h4>
                      <p className="text-gray-600">
                        Abay Bulvarı No: 72<br />
                        Salihli / Manisa
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">E-mail</h4>
                      <a href="mailto:info@arazvinc.com" className="text-orange-600 hover:text-orange-700 font-semibold">
                        info@arazvinc.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-gray-900 mb-4">Neden Araz Vinç?</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>15+ yıl deneyim ve güvenilirlik</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>Sertifikalı ve deneyimli operatörler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>Modern ve bakımlı ekipmanlar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>7/24 kesintisiz hizmet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>Uygun fiyatlandırma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
