const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'hp': '380px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sourcesans: ['Source Sans 3', 'sans-serif'],
        plexmono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url('/Beranda/hero.png')",
          "background-size": "cover",
          "background-position": "bottom",
        },
        ".shadow-skill": {
          "box-shadow" : "0px 15px 30px 0px rgba(0, 0, 0, 0.10)",
        },
      };

      addUtilities(utilities);
    }),
  ],
}
