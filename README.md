# Flowopz Website

Company website built with [Astro](https://astro.build) (static output).

## Editing content
All text, prices, FAQs and the booking link live in `src/data/site.ts`.

## Structure
- `src/pages/index.astro` – home page
- `src/layouts/Layout.astro` – HTML head and shell
- `src/components/` – header, footer, booking button
- `src/styles/global.css` – styles
- `public/` – static files (favicon, images)

## Commands
- `npm install` – install dependencies
- `npm run dev` – local dev server at http://localhost:4321
- `npm run build` – production build to `dist/`

## Deploy (Hostinger)
Import the GitHub repo in hPanel. Settings:
- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20+

Every push to `main` redeploys the site.
