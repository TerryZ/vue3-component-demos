import { fileURLToPath, URL } from 'node:url'
// import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@view': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@http': fileURLToPath(new URL('./src/config/http', import.meta.url))
    }
  },
  plugins: [vue(), vueJsx()]
})
