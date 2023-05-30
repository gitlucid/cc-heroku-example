/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
        plex: ['IBM Plex Sans', 'sans-serif'],
        plexmono: ['IBM Plex Mono', 'sans-serif'],
        serif: ['Source Serif Pro', 'sans-serif']
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
      backgroundColor: theme => ({
        primary: theme('colors.indigo.500'),
        secondary: theme('colors.gray.200'),
        ...theme('colors.gray', {
          dark: '#333',
          light: '#fff',
        }),
      }),
      textColor: theme => ({
        primary: theme('colors.white'),
        secondary: theme('colors.gray.900'),
        ...theme('colors.gray', {
          dark: '#fff',
          light: '#333',
        }),
      }),
    },
  },
  plugins: [require("daisyui")],
}