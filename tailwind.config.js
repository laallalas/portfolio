/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // или 'media'
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#f472b6',
        ink: '#030303',
        surface: '#0a0a0c',
        elevated: '#121218',
      },
    },
  },
  plugins: [],
}