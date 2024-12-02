import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests
      '/api': {
        target: 'http://localhost:3000', // Your backend server URL
         changeOrigin: true, // Needed for virtual hosted sites
         rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove /api prefix
      },
    },
  },
})
