import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FileManager from "./pages/FileManager";
import ServiceMobilCrane from "./pages/ServiceMobilCrane";
import ServiceSafeTransport from "./pages/ServiceSafeTransport";
import Service24_7 from "./pages/Service24_7";
import ServiceConstruction from "./pages/ServiceConstruction";
import ServiceIndustrial from "./pages/ServiceIndustrial";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/files"} component={FileManager} />
      <Route path={"/service/mobile-crane"} component={ServiceMobilCrane} />
      <Route path={"/service/safe-transport"} component={ServiceSafeTransport} />
      <Route path={"/service/24-7"} component={Service24_7} />
      <Route path={"/service/construction"} component={ServiceConstruction} />
      <Route path={"/service/industrial"} component={ServiceIndustrial} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
