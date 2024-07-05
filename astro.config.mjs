import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  base: "/",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  pages: [
    {
      path: "/features1",
      component: "src/components/featuresIntegration2.astro"
    },
    {
      path: "/features2",
      component: "src/components/featuresbi2.astro"
    },
    {
      path: "/features3",
      component: "src/components/featuresLearning2.astro"
    },
    {
      path: "/features4",
      component: "src/components/features3.astro"
    },
  ]
});
