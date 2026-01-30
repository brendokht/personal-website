import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

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
  image: {
    remotePatterns: [{ hostname: "placehold.co", protocol: "https" }],
  },
});
