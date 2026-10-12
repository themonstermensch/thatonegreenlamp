import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

server: {
  allowedHosts: true
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['lamp.ratzonemedia.com'],
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})


