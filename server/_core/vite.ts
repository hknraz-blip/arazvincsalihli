import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";
import { getPageMeta, injectMeta, isBot } from "./seo";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // Build cikti: dist/public (vite.config.ts outDir ayari)
  // __dirname production'da dist/_core/ olduğundan bir üst dizine çıkıp public'e giriyoruz
  const distPath = path.resolve(import.meta.dirname, "..", "public");

  console.log(`[serveStatic] distPath: ${distPath}`);
  console.log(`[serveStatic] index.html exists: ${fs.existsSync(path.join(distPath, "index.html"))}`);

  // Resimler için 30 gün, JS/CSS için 1 yıl, HTML için no-cache
  app.use(
    express.static(distPath, {
      setHeaders: (res, filePath) => {
        if (filePath.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        } else if (/\.(jpg|jpeg|png|gif|webp|svg|ico)$/.test(filePath)) {
          res.setHeader("Cache-Control", "public, max-age=2592000");
        } else {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      },
    })
  );

  // Bot tespiti: arama motoru botlarına route'a özel meta inject edilmiş HTML döndür
  app.use("*", (req, res) => {
    const ua = req.headers["user-agent"] ?? "";
    const indexPath = path.resolve(distPath, "index.html");

    if (isBot(ua)) {
      const pathname = req.path.replace(/\/$/, "") || "/";
      const meta = getPageMeta(pathname);

      fs.readFile(indexPath, "utf-8", (err, html) => {
        if (err) {
          res.status(500).send("Server error");
          return;
        }
        const injected = injectMeta(html, meta);
        res
          .status(200)
          .set({ "Content-Type": "text/html", "X-Robots-Tag": "index, follow" })
          .send(injected);
      });
    } else {
      res.sendFile(indexPath);
    }
  });
}
