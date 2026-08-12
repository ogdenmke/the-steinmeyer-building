# AGENTS.md

## Project Context

This is a static, single-page React marketing site for The Steinmeyer Building. There is no backend, no auth, and no external platform dependency — it's a plain Vite + React app that builds to static files and is served as-is.

Start with `README.md` for local setup and the GitHub Pages deploy workflow.

## Key Files

- `src/pages/Home.jsx`: the page, composed from section components.
- `src/components/steinmeyer/`: the page's content sections (Hero, AvailableSpace, LeaseTerms, Tenants, LocalBusiness, Architecture, District, Timeline, Contact, Footer).
- `src/components/ui/`: shared UI primitives (shadcn/ui style, built on Radix).
- `vite.config.js`: Vite config. `base` is the GitHub Pages project path; `App.jsx` reads it back via `import.meta.env.BASE_URL` as the router's `basename`, so the two must stay in sync.
- `.github/workflows/deploy.yml`: builds and publishes `dist/` to GitHub Pages on push to `main`.

## Working Notes

- `npm run dev` for local development; `npm run build` to produce the static `dist/` output; `npm run preview` to preview that build locally.
- Run `npm run lint` and `npm run typecheck` before finishing code changes.
- Keep changes framework-plain: no backend calls, no auth, no third-party platform SDKs — this site only needs static markup, styles, and client-side interactivity.
