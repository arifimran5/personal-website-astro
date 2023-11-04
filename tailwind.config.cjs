/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'Roboto', 'Arial', 'sans-serif'],
      round: ['Outfit', 'Inter', 'system-ui', 'Roboto', 'Arial', 'sans-serif'],
      fun: ['handjet', 'Inter', 'system-ui', 'Roboto', 'Arial', 'sans-serif'],
      mono: [
        'JetBrains Mono Variable',
        'Menlo',
        'Liberation Mono',
        'monospace',
      ],
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
