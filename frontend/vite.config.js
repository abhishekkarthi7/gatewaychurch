import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Automatically copy video files from root directory to public folder when server starts
try {
  const rootDir = path.resolve(__dirname, '..')
  const publicDir = path.resolve(__dirname, 'public')
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const videos = ['PRAYER.mp4', 'WORSHIP.mp4']
  videos.forEach(video => {
    let src = path.join(rootDir, video)
    const dest = path.join(publicDir, video)
    if (!fs.existsSync(src) && video === 'WORSHIP.mp4') {
      src = path.join(rootDir, 'PRAYER.mp4')
      console.log(`[Vite Init] WORSHIP.mp4 not found in root, falling back to PRAYER.mp4`)
    }
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest)
      console.log(`[Vite Init] Copied ${src} to public/${video}`)
    }
  })
} catch (err) {
  console.error('[Vite Init] Video copy failed:', err)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
