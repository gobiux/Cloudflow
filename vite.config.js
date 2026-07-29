import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const removeCrossorigin = () => ({
  name: 'remove-crossorigin',
  transformIndexHtml(html) {
    return html.replace(/crossorigin\s+/g, '')
  }
})

// Keeps public/css in sync with css/ during dev
const syncCss = () => ({
  name: 'sync-css',
  buildStart() {
    const src = path.resolve(__dirname, 'css')
    const dest = path.resolve(__dirname, 'public/css')
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
    for (const file of fs.readdirSync(src)) {
      fs.copyFileSync(path.join(src, file), path.join(dest, file))
    }
  },
  handleHotUpdate({ file, server }) {
    const cssDir = path.resolve(__dirname, 'css')
    if (file.startsWith(cssDir)) {
      const name = path.basename(file)
      const dest = path.resolve(__dirname, 'public/css', name)
      fs.copyFileSync(file, dest)
      server.ws.send({ type: 'full-reload' })
    }
  }
})

export default defineConfig({
  root: __dirname,
  base: '/Cloudflow/',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
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
    },
    assetsDir: 'assets',
    copyPublicDir: true
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      include: ['css/**', 'pages/**', 'js/**', 'index.html']
    }
  },
  plugins: [removeCrossorigin(), syncCss()],
  resolve: {
    alias: {
      '@css': path.resolve(__dirname, 'css'),
      '@js': path.resolve(__dirname, 'js'),
      '@icons': path.resolve(__dirname, 'Icons')
    }
  }
})