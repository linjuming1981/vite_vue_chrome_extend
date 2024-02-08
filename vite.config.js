import { defineConfig } from 'vite'
import {crx} from '@crxjs/vite-plugin';
import manifest from './manifest_v3.json'
import vue from '@vitejs/plugin-vue'
import path from 'node:path';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: '/index.html',
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  plugins: [
    vue(),
    crx({manifest}),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
})
