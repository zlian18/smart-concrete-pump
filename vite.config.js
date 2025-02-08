import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import multiPages from 'vite-plugin-multi-pages'

export default defineConfig({
  plugins: [
    tailwindcss(),
    multiPages(),
  ],
  base: './',  // Ensures correct relative paths for assets
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        slabs: 'slabs.html',
        block: 'block.html',
        driveway: 'driveway.html',
        areas: 'areas.html',
        contacts: 'contacts.html',
      }
    },
    outDir: 'dist',  // Default output folder
    }
  })