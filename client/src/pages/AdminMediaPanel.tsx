import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  FileIcon,
  Film,
  Image as ImageIcon,
  Loader2,
  ShieldCheck,
  Upload,
  Video,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { toast } from "sonner";

function isImage(mimeType?: string | null) {
  return Boolean(mimeType?.startsWith("image/"));
}

function isVideo(mimeType?: string | null) {
  return Boolean(mimeType?.startsWith("video/"));
}

function formatFileSize(bytes: number | null) {
  if (!bytes) return "Bilinmiyor";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function readFileAsBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function AdminMediaPanel() {
  const { user, isAuthenticated, loading } = useAuth({
    redirectOnUnauthenticated: true,
  });
  const [uploading, setUploading] = useState(false);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const utils = trpc.useUtils();

  const { data: files, isLoading } = trpc.files.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: async () => {
      toast.success("Medya başarıyla yüklendi");
      await utils.files.list.invalidate();
    },
    onError: (error) => {
      toast.error(error.message || "Medya yüklenirken hata oluştu");
    },
  });

  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: async () => {
      toast.success("Öğe silindi");
      await utils.files.list.invalidate();
    },
    onError: (error) => toast.error(error.message || "Silme işlemi başarısız"),
  });

  const filteredFiles = useMemo(() => {
    if (!files) return [];
    if (filter === "all") return files;
    if (filter === "image") return files.filter((file) => isImage(file.mimeType));
    return files.filter((file) => isVideo(file.mimeType));
  }, [files, filter]);

  const handleFilesSelected = async (list: FileList | null) => {
    if (!list || list.length === 0) return;
    setUploading(true);

    try {
      for (const file of Array.from(list)) {
        const content = await readFileAsBase64(file);
        await uploadMutation.mutateAsync({
          filename: file.name,
          mimeType: file.type,
          content,
        });
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      toast.error("Dosyalar okunurken bir hata oluştu");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (fileId: number) => {
    if (!confirm("Bu medya öğesini silmek istediğinize emin misiniz?")) return;
    await deleteMutation.mutateAsync({ fileId });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-xl w-full shadow-lg">
          <CardHeader className="flex flex-row items-center gap-3">
            <AlertCircle className="h-6 w-6 text-red-500" />
            <div>
              <CardTitle>Yetkisiz erişim</CardTitle>
              <CardDescription>
                Bu paneli yalnızca yönetici hesapları kullanabilir. Lütfen yetkili
                bir hesapla giriş yapın.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <a href="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" /> Ana sayfaya dön
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-orange-600" />
            <div>
              <p className="text-sm text-gray-500">Medya Yönetim Paneli</p>
              <h1 className="text-xl font-semibold text-gray-900">Görsel ve Video Yükleme</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
              <CheckCircle2 className="h-4 w-4 mr-1" /> Admin
            </Badge>
            <a href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" /> Siteye dön
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Yüklenen Medyalar</CardTitle>
                <CardDescription>
                  Görselleri ve videoları görüntüleyin, bağlantıları kopyalayın ve gerekirse silin.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                >
                  Tümü
                </Button>
                <Button
                  size="sm"
                  variant={filter === "image" ? "default" : "outline"}
                  onClick={() => setFilter("image")}
                >
                  <ImageIcon className="h-4 w-4 mr-2" /> Resimler
                </Button>
                <Button
                  size="sm"
                  variant={filter === "video" ? "default" : "outline"}
                  onClick={() => setFilter("video")}
                >
                  <Video className="h-4 w-4 mr-2" /> Videolar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-10">
                  <Loader2 className="h-6 w-6 animate-spin text-orange-600" />
                </div>
              ) : filteredFiles.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
                  <FileIcon className="h-10 w-10 mb-3 text-gray-400" />
                  <p>Henüz medya yüklenmedi. Sağ taraftan yüklemeye başlayın.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredFiles.map((file) => (
                    <div
                      key={file.id}
                      className="rounded-lg border bg-white shadow-sm overflow-hidden flex flex-col"
                    >
                      <div className="h-44 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                        {isImage(file.mimeType) ? (
                          <img
                            src={file.url}
                            alt={file.filename}
                            className="w-full h-full object-cover"
                          />
                        ) : isVideo(file.mimeType) ? (
                          <video
                            src={file.url}
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                          />
                        ) : (
                          <div className="flex flex-col items-center text-gray-500 gap-2">
                            <FileIcon className="h-8 w-8" />
                            <span className="text-sm">{file.mimeType || "Bilinmeyen tür"}</span>
                          </div>
                        )}
                        <Badge className="absolute top-3 right-3 bg-white/90 text-gray-900 border">
                          {isImage(file.mimeType) ? "Resim" : isVideo(file.mimeType) ? "Video" : "Dosya"}
                        </Badge>
                      </div>
                      <div className="p-4 flex-1 flex flex-col gap-3">
                        <div className="space-y-1">
                          <p className="font-medium text-gray-900 line-clamp-1" title={file.filename}>
                            {file.filename}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(file.createdAt).toLocaleDateString("tr-TR")} · {formatFileSize(file.fileSize)}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigator.clipboard.writeText(file.url)}
                          >
                            Bağlantıyı kopyala
                          </Button>
                          <a href={file.url} target="_blank" rel="noreferrer" className="flex-1">
                            <Button variant="secondary" size="sm" className="w-full">
                              <Upload className="h-4 w-4 mr-2" /> İncele
                            </Button>
                          </a>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600"
                            disabled={deleteMutation.isPending}
                            onClick={() => handleDelete(file.id)}
                          >
                            Sil
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-sm sticky top-24">
            <CardHeader>
              <CardTitle>Yeni Medya Ekle</CardTitle>
              <CardDescription>
                PNG, JPG, WEBP veya MP4 gibi medya dosyalarını sürükleyip bırakın ya da bilgisayarınızdan seçin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="border-2 border-dashed rounded-lg p-6 bg-white hover:border-orange-400 transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="flex flex-col items-center gap-3 text-center text-gray-600">
                  <Upload className="h-8 w-8 text-orange-600" />
                  <div>
                    <p className="font-medium text-gray-900">Dosyaları seçmek için tıklayın</p>
                    <p className="text-sm">Görseller ve videolar desteklenir</p>
                  </div>
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    className="hidden"
                    onChange={(event) => handleFilesSelected(event.target.files)}
                    disabled={uploading}
                  />
                </div>
              </div>
              <Button
                className="w-full bg-orange-600 hover:bg-orange-700"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
              >
                {uploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Yükleniyor...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" /> Medya yükle
                  </>
                )}
              </Button>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-orange-600" /> JPEG, PNG, WEBP
                </div>
                <div className="flex items-center gap-2">
                  <Film className="h-4 w-4 text-orange-600" /> MP4, MOV
                </div>
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 text-orange-600" /> Maksimum 250MB
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-orange-600" /> Güvenli yükleme
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
