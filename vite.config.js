import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: path.resolve(__dirname, 'pages'),
  base: '/Cloudflow/',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'pages/index.html'),
        gatekeeper: path.resolve(__dirname, 'pages/gatekeeper.html'),
        qc_gatekeeper: path.resolve(__dirname, 'pages/qc_gatekeeper.html'),
        viewer: path.resolve(__dirname, 'pages/viewer.html'),
        overview: path.resolve(__dirname, 'pages/overview.html'),
        qc_overview: path.resolve(__dirname, 'pages/qc_overview.html'),
        vault: path.resolve(__dirname, 'pages/vault.html'),
        qc_vault: path.resolve(__dirname, 'pages/qc_vault.html'),
        dropzone: path.resolve(__dirname, 'pages/dropzone.html'),
        history: path.resolve(__dirname, 'pages/history.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@css': path.resolve(__dirname, 'css'),
      '@js': path.resolve(__dirname, 'js'),
      '@icons': path.resolve(__dirname, 'Icons')
    }
  }
})