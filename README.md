# Flowopz Website

Static landing page for Flowopz (HTML/CSS/JS, no build step).

## Structure
- `index.html` – page content
- `assets/css/styles.css` – styles
- `assets/js/main.js` – booking link (`BOOKING_URL`) and small scripts

## Deploy (Hostinger)
hPanel → Websites → Manage → Advanced → **GIT**:
- Repository: `https://github.com/<owner>/flowopz-website.git`
- Branch: `main`
- Directory: leave empty (deploys to `public_html`)

Enable **Auto Deployment** and add the webhook URL to GitHub (repo → Settings → Webhooks) so every push goes live.
