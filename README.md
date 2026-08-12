# The Steinmeyer Building

Marketing site for The Steinmeyer Building (est. 1893), a historic office building in downtown Milwaukee. This is a static single-page React site — no backend, no login, no external service dependency. It builds to plain static files and is deployed with GitHub Pages.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

Outputs static files to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploy (GitHub Pages)

Deployment is automatic: `.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages on every push to `main`.

One-time setup in the repo's GitHub settings:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the "Deploy to GitHub Pages" workflow manually from the **Actions** tab).

The site is published at **steinmeyerbuilding.com** (a custom domain configured under **Settings → Pages → Custom domain**), which points at `https://ogdenmke.github.io/the-steinmeyer-building/` via DNS.

### Custom domain notes

- `public/CNAME` holds the custom domain (`steinmeyerbuilding.com`) and gets copied into every build's `dist/` output. GitHub Pages requires this file to be present in the published content on every deploy when publishing via a custom Actions workflow (as this repo does) — without it, the custom domain setting gets cleared on the next deploy. If the domain ever changes, update both this file and the Settings → Pages → Custom domain field.
- DNS is managed at the registrar (Cloudflare): four `A` records for the apex domain pointing at GitHub Pages' IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`), plus a `CNAME` record for `www` → `ogdenmke.github.io`.

## Project Structure

- `src/pages/Home.jsx` — the page, composed from the section components in `src/components/steinmeyer/`.
- `src/components/ui/` — shared UI primitives (shadcn/ui style, built on Radix).
- `vite.config.js` — Vite config; `base` is `/` since the site serves from the custom domain's root, and is also read at runtime by `App.jsx` (`import.meta.env.BASE_URL`) as the router's `basename`. If the custom domain is ever removed, change this back to `/the-steinmeyer-building/` to match the GitHub Pages project URL.
