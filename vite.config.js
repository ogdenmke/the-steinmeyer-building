import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  // Served from the custom domain's root (steinmeyerbuilding.com), so both
  // asset URLs and client-side routing (see App.jsx's Router basename, which
  // reads import.meta.env.BASE_URL) use '/'. If the custom domain is ever
  // removed and the site falls back to the GitHub Pages project URL
  // (https://<user>.github.io/the-steinmeyer-building/), change this back to
  // '/the-steinmeyer-building/'.
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
  ]
});
