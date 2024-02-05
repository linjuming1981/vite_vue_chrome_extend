import { defineConfig } from 'vite'
import {crx} from '@crxjs/vite-plugin';
import manifest from 'manifest_v3.json'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    crx(manifest),
  ],
})
