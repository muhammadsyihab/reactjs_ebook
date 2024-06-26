import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/reactjs_ebook/",
  optimizeDeps: {
    include: [
      'jquery',
      'semantic-ui-react',
      // Daftar dependensi lain yang diperlukan
    ],
  },
})
