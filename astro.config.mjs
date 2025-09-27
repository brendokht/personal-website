import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";

/* TODO: Update fonts to Astro fonts API */

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  adapter: netlify(),
  site: "https://brendenkohut.com",
  trailingSlash: "always",
});
