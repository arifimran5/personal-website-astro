import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
// import vercel from '@astrojs/vercel/serverless'
// import partytown from '@astrojs/partytown'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: 'https://thatarif.in',
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap(),
    // partytown({
    //   config: {
    //     forward: ['dataLayer.push'],
    //   },
    // }),
    robotsTxt(),
  ],
  output: 'static',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
})
