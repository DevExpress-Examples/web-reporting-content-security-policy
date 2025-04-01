import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  html: {
    // For demonstration purposes only.
    // Generate a random number, unique for each HTTP request.
    cspNonce: 'random_nonce_value'
  }
})
