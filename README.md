# Flowopz Website

Company website built with [Astro](https://astro.build) (static output).

## Editing content
All copy, prices, FAQs and links live in **`src/data/site.ts`**:
- `site` – name, email, WhatsApp, Calendly link, form webhook, main CTA
- `home` – every section of the home page (hero, carousel cards, stats, steps, proof, final CTA)
- `faqs` – shared FAQ (home + Get Started)
- `services`, `getStarted`, `about`, `contact` – inner pages

Badge / images go in `public/` and are referenced like `/badge.webp`.

## Structure
- `src/pages/` – `index`, `services`, `get-started`, `about`, `contact`
- `src/layouts/Layout.astro` – head, nav, final CTA, footer, scripts
- `src/components/` – Nav, Footer, FinalCta, PageHero, Words (animated headings), Btn, Faq, icons
- `src/scripts/motion.js` – scroll scenes, reveals, nav theme, hero tilt, contact form, Calendly
- `src/scripts/star.js` – WebGL chrome star in the final CTA
- `src/styles/global.css` – all styles

## Commands
- `npm install` – install dependencies
- `npm run dev` – local dev server at http://localhost:4321
- `npm run build` – production build to `dist/`

## Deploy (Hostinger)
Import the GitHub repo in hPanel:
- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20+

Every push to `main` redeploys the site.
