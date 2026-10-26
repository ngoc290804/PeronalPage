import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { portfolioConfig } from './src/portfolio.config'

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!)
}

// Use the same personal details in the initial HTML and the rendered React page.
const portfolioMetadata = {
  name: 'portfolio-metadata',
  transformIndexHtml(html: string) {
    const image = portfolioConfig.seo.siteUrl ? new URL(portfolioConfig.seo.image, portfolioConfig.seo.siteUrl).href : portfolioConfig.seo.image
    const replacements: Record<string, string> = {
      __PORTFOLIO_TITLE__: `${portfolioConfig.name} — ${portfolioConfig.role}`,
      __PORTFOLIO_DESCRIPTION__: portfolioConfig.seo.description.vi,
      __PORTFOLIO_OG_IMAGE__: image,
    }
    return html.replace(/__PORTFOLIO_(?:TITLE|DESCRIPTION|OG_IMAGE)__/g, token => escapeHtml(replacements[token]))
  },
}

export default defineConfig({
  plugins: [react(), tailwindcss(), portfolioMetadata],
  server: { host: '127.0.0.1', port: 5173, strictPort: true },
  preview: { host: '127.0.0.1', port: 4173, strictPort: true },
})
