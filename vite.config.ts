
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,

    proxy: {
      '/my-portfolio/api': {
        target: 'http://127.0.0.1:8787',
        changeOrigin: true,

        // Development-only proxy.
        // The Worker permits this local origin.
        headers: {
          Origin: 'http://localhost:5173',
        },

        rewrite: path =>
          path.replace(/^\/my-portfolio\/api/, '/api'),
      },
    },
  },
})
