import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src/app",
      prerender: {
        enabled: true,
        concurrency: 7,
        autoSubfolderIndex: true,
        crawlLinks: true,
        retryCount: 3,
      },
      sitemap: {
        enabled: true,
        host: "https://www.tryweebo.site",
      },
    }),
    react(),
    nitro(),
  ],
})
