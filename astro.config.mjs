import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import preact from '@astrojs/preact';

export default defineConfig({
  site: "https://anavue.org",
  base: "/",
  integrations: [tailwind(), mdx(), sitemap(), icon(), preact()],
  vite: {
    ssr: {
      noExternal: ['@astrojs/'],
    },
    define: {
      'process.env.PUBLIC_WEBHOOK_URL': JSON.stringify(process.env.PUBLIC_WEBHOOK_URL),
      'process.env.WEBHOOK_URL': JSON.stringify(process.env.WEBHOOK_URL),
    },
  },
});
