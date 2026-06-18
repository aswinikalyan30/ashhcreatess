import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteImageOptimizer from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      mozjpeg: {
        quality: 85,
      },
      pngquant: {
        quality: [0.8, 0.9],
      },
      webp: {
        quality: 85,
      },
    }),
  ],
})
