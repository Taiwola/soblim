import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        gothic: ["var(--font-gothic)"],
      },
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a'
        },
        foreground: {
          DEFAULT: '#171717',
          dark: '#ededed'
        },
        orange: '#E97B25',
        'light-pink': '#FFECDD',
        darkgrey: '#595959',
        grey: "FFEEE029",
        twhite: "E9E9E9"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;