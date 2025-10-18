import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {allowedHosts:["okay-onion.tunnel.africa"]},
  plugins: [react()],
})



