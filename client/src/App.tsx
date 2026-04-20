import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FileManager = lazy(() => import("./pages/FileManager"));
const ServiceMobilCrane = lazy(() => import("./pages/ServiceMobilCrane"));
const ServiceSafeTransport = lazy(() => import("./pages/ServiceSafeTransport"));
const Service24_7 = lazy(() => import("./pages/Service24_7"));
const ServiceConstruction = lazy(() => import("./pages/ServiceConstruction"));
const ServiceIndustrial = lazy(() => import("./pages/ServiceIndustrial"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogSalihliVincKiralama = lazy(() => import("./pages/BlogSalihliVincKiralama"));
const BlogHiabVincNedir = lazy(() => import("./pages/BlogHiabVincNedir"));
const BlogAgirYukTasimaGuvenlik = lazy(() => import("./pages/BlogAgirYukTasimaGuvenlik"));
const BlogVincOperasyonundaHavaKosullari = lazy(() => import("./pages/BlogVincOperasyonundaHavaKosullari"));
const BlogSanayiTesislerindeVincKiralama = lazy(() => import("./pages/BlogSanayiTesislerindeVincKiralama"));
const LocationAlasehir = lazy(() => import("./pages/LocationAlasehir"));
const LocationKula = lazy(() => import("./pages/LocationKula"));
const LocationDemirci = lazy(() => import("./pages/LocationDemirci"));
const LocationKoprubasiSarigol = lazy(() => import("./pages/LocationKoprubasiSarigol"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white"><div className="w-8 h-8 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div></div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/files" component={FileManager} />
        {/* Hizmet sayfaları */}
        <Route path="/mobil-vinc-kiralama-salihli" component={ServiceMobilCrane} />
        <Route path="/insaat-vinc-kiralama-salihli" component={ServiceConstruction} />
        <Route path="/sanayi-vinc-kiralama-salihli" component={ServiceIndustrial} />
        <Route path="/guvenli-tasima-salihli" component={ServiceSafeTransport} />
        <Route path="/acil-vinc-hizmeti-salihli" component={Service24_7} />
        {/* Eski URL'ler */}
        <Route path="/service/mobile-crane" component={ServiceMobilCrane} />
        <Route path="/service/safe-transport" component={ServiceSafeTransport} />
        <Route path="/service/24-7" component={Service24_7} />
        <Route path="/service/construction" component={ServiceConstruction} />
        <Route path="/service/industrial" component={ServiceIndustrial} />
        {/* Blog */}
        <Route path="/blog" component={Blog} />
        <Route path="/blog/salihli-vinc-kiralama" component={BlogSalihliVincKiralama} />
        <Route path="/blog/hiab-vinc-nedir" component={BlogHiabVincNedir} />
        <Route path="/blog/agir-yuk-tasima-guvenlik" component={BlogAgirYukTasimaGuvenlik} />
        <Route path="/blog/vinc-operasyonunda-hava-kosullari" component={BlogVincOperasyonundaHavaKosullari} />
        <Route path="/blog/sanayi-tesislerinde-vinc-kiralama" component={BlogSanayiTesislerindeVincKiralama} />
        {/* Konum sayfaları — tamamen ASCII URL */}
        <Route path="/alasehir-vinc-kiralama" component={LocationAlasehir} />
        <Route path="/kula-vinc-kiralama" component={LocationKula} />
        <Route path="/demirci-vinc-kiralama" component={LocationDemirci} />
        <Route path="/koprubasi-sarigol-vinc-kiralama" component={LocationKoprubasiSarigol} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
