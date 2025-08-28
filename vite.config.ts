import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PORTFOLIO/', // <-- Add this line if deploying to a subfolder!
  plugins: [react()],
})
