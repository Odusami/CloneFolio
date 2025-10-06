import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CloneFolio/',
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: 'dist',
    assetsDir: 'folio image',
    // assetsDir: 'assets',
    sourcemap: false,
  },
  publicDir: 'public', 
})
