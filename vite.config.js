import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/Weather/", // Укажите имя репозитория со слэшами!
  plugins: [vue()]
})
