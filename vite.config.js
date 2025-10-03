import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Read HOST from environment variables; fallback to 'localhost'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '10.85.85.3', // or true for all interfaces
    port: 5173           // default Vite port, can be changed
  }
})
