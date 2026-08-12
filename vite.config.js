import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  // The site is served from a GitHub Pages project path
  // (https://<user>.github.io/the-steinmeyer-building/), not domain root, so
  // both asset URLs and client-side routing (see App.jsx's Router basename,
  // which reads import.meta.env.BASE_URL) need this subpath. If this site
  // ever moves to a custom domain or a user/org root page, change this back
  // to '/'.
  base: '/the-steinmeyer-building/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
  ]
});
