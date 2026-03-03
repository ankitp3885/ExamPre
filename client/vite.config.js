import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // SPA routing: serve index.html for all non-matched requests
    // This allows React Router to handle all routes client-side
    middlewares: [
      (req, res, next) => {
        // Skip for files with extensions (static assets, js, css, etc)
        if (/\.[^.]*$/.test(req.url.split('?')[0])) {
          return next();
        }
        // Skip for API calls
        if (req.url.startsWith('/api/')) {
          return next();
        }
        // For all other routes, serve index.html
        req.url = '/index.html';
        next();
      },
    ],
  },
})
