import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  site: "https://brendenkohut.com",
  trailingSlash: "always",
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist",
        weights: [300, 400, 500, 600, 700, 800, 900],
        styles: ["italic", "normal", "oblique"],
        fallbacks: ["sans"],
      },
      {
        provider: fontProviders.google(),
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
        weights: [300, 400, 500, 600, 700, 800, 900],
        styles: ["italic", "normal", "oblique"],
        fallbacks: ["mono"],
      },
    ],
  },
});
