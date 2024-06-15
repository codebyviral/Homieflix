import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://homieflix.onrender.com',
      '/plans':'https://homieflix.onrender.com'
    },
  },
  plugins: [react()],
})
