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
  const distPath = path.resolve(import.meta.dirname);

  console.log(`[serveStatic] dirname: ${import.meta.dirname}`);
  console.log(`[serveStatic] distPath: ${distPath}`);
  console.log(`[serveStatic] index.html exists: ${fs.existsSync(path.join(distPath, "index.html"))}`);

  app.use(express.static(distPath));

  // Bot tespiti: arama motoru botlarına route'a özel meta inject edilmiş HTML döndür
  app.use("*", (req, res) => {
    const ua = req.headers["user-agent"] ?? "";
    const indexPath = path.resolve(distPath, "index.html");

    if (isBot(ua)) {
      // pathname'i temizle (?query ve #hash olmadan)
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
      // Normal kullanıcılar için doğrudan index.html
      res.sendFile(indexPath);
    }
  });
}
