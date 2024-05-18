import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://thatarif.in',
  integrations: [tailwind(), react(), mdx(), sitemap(), robotsTxt()],
  output: 'static',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
})
