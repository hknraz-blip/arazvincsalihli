import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Construction, Upload, Trash2, FileIcon, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { getLoginUrl } from "@/const";

export default function FileManager() {
  const { user, isAuthenticated } = useAuth();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: files, isLoading, refetch } = trpc.files.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      toast.success("Dosya başarıyla yüklendi!");
      refetch();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    onError: (error) => {
      toast.error("Dosya yükleme hatası: " + error.message);
    },
  });

  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: () => {
      toast.success("Dosya silindi!");
      refetch();
    },
    onError: (error) => {
      toast.error("Dosya silme hatası: " + error.message);
    },
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        const content = base64.split(",")[1]; // Remove data:image/png;base64, prefix

        await uploadMutation.mutateAsync({
          filename: file.name,
          content,
          mimeType: file.type,
        });
        setUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setUploading(false);
      toast.error("Dosya okuma hatası");
    }
  };

  const handleDelete = (fileId: number) => {
    if (confirm("Bu dosyayı silmek istediğinizden emin misiniz?")) {
      deleteMutation.mutate({ fileId });
    }
  };

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return "Bilinmiyor";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <Construction className="h-8 w-8 text-orange-600" />
                <span className="text-xl font-bold text-gray-900">Araz Vinç</span>
              </div>
              <a href="/">
                <Button variant="outline">Ana Sayfa</Button>
              </a>
            </nav>
          </div>
        </header>

        <div className="pt-16 flex-1 flex items-center justify-center bg-gray-50">
          <Card className="max-w-md w-full mx-4">
            <CardHeader>
              <CardTitle>Giriş Gerekli</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Dosya yönetimi özelliğini kullanmak için giriş yapmanız gerekmektedir.
              </p>
              <a href={getLoginUrl()}>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Giriş Yap
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Construction className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-gray-900">Araz Vinç</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/">
                <Button variant="outline">Ana Sayfa</Button>
              </a>
              <span className="text-sm text-gray-600">Hoş geldiniz, {user?.name}</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dosya Yönetimi</h1>
            <p className="text-gray-600">Dosyalarınızı yükleyin ve yönetin</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Yeni Dosya Yükle</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="flex-1"
                />
                <Button
                  disabled={uploading}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Yükleniyor...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Yükle
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dosyalarım</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
                </div>
              ) : files && files.length > 0 ? (
                <div className="space-y-4">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <FileIcon className="h-8 w-8 text-orange-600" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">
                            {file.filename}
                          </p>
                          <p className="text-sm text-gray-500">
                            {formatFileSize(file.fileSize)} • {new Date(file.createdAt).toLocaleDateString("tr-TR")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a href={file.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            Görüntüle
                          </Button>
                        </a>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(file.id)}
                          disabled={deleteMutation.isPending}
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  Henüz dosya yüklenmemiş. Yukarıdaki formu kullanarak dosya yükleyebilirsiniz.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Construction className="h-6 w-6 text-orange-600" />
              <span className="text-lg font-bold">Araz Vinç</span>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>© 2025 Araz Vinç. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
