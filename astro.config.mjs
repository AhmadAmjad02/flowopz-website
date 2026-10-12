import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static site: `npm run build` outputs to dist/
export default defineConfig({
  site: "https://flowopz.com",
  output: "static",
  integrations: [sitemap({ filter: (page) => !page.includes("/get-started") })],
  // Old URLs kept working after the copy-deck restructure
  redirects: {
    "/get-started": "/pricing",
  },
});
