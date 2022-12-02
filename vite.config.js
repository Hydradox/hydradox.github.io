import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import progress from 'vite-plugin-progress'
import webFontDownload from 'vite-plugin-webfont-dl'
import removeConsole from 'vite-plugin-remove-console';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    progress(),
    webFontDownload(),
    removeConsole()
  ]
})
