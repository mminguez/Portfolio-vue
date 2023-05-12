import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-vue/',
  plugins: [vue(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      "name": "mminguez.github.io",
      "short_name": "mminguez",
      "start_url": ".",
      "display": "standalone",
      "description": "My portfolio",
    },
  }), svgLoader({svgo: false})],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables";@import "./src/styles/breakpoints";',
      }
    }
  },
  server: {
    host: true
  }
})
