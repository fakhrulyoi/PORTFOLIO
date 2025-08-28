import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PORTFOLIO/', // <-- use exactly this!
  plugins: [react()],
})
