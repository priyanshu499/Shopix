import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'image-proxy',
      configureServer(server) {
        server.middlewares.use('/img-proxy', async (req, res) => {
          try {
            const u = new URL(req.url, 'http://localhost')
            const target = u.searchParams.get('u')
            if (!target) {
              res.statusCode = 400
              return res.end('Missing u')
            }
            const r = await fetch(target)
            const ct = r.headers.get('content-type') || 'image/jpeg'
            res.setHeader('Content-Type', ct)
            const buf = Buffer.from(await r.arrayBuffer())
            res.end(buf)
          } catch (e) {
            res.statusCode = 502
            res.end('Fetch failed')
          }
        })
      }
    }
  ],
  server: {
    port: 5173,
    open: true
  }
})
