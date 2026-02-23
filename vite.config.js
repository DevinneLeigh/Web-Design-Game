import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Hide deprecation warnings from dependencies like Bootstrap
        quietDeps: true
      }
    }
  },
  build: {
    // Optional: adjust chunk size warning if needed
    chunkSizeWarningLimit: 1000, // in KB, default is 500
  }
})