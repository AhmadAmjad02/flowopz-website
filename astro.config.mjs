import { defineConfig } from "astro/config";

// Static site: `npm run build` outputs to dist/
export default defineConfig({
  output: "static",
  // Old URLs kept working after the copy-deck restructure
  redirects: {
    "/get-started": "/pricing",
  },
});
