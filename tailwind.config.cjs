/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      fun: ['handjet'],
      mono: ['Menlo', 'Liberation Mono', 'monospace'],
    },
    extend: {
      colors: {
        text_primary: '#EEEEEE',
        text_secondary: '#A4A4A4',
        accent: '#E7FFA3',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
