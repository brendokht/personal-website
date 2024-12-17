import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: true,
    },
    integrations: [tailwind(), mdx()],
    adapter: netlify(),
    site: "https://brendenkohut.com",
    trailingSlash: "always",
});
