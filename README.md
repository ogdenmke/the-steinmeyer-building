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

The site will be published at `https://<your-github-username>.github.io/<repo-name>/` (or your custom domain, if you configure one under **Settings → Pages → Custom domain**).

## Project Structure

- `src/pages/Home.jsx` — the page, composed from the section components in `src/components/steinmeyer/`.
- `src/components/ui/` — shared UI primitives (shadcn/ui style, built on Radix).
- `vite.config.js` — Vite config; `base: './'` keeps built asset paths relative so the site works both under a GitHub Pages project path and at a custom domain root.
