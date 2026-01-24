import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#050505',
        'surface': '#121212',
        'brand': '#FF5C00',
        'brand-light': '#FF8A00',
        'brand-dark': '#CC4A00',
        'accent': '#FF5C00',
        'highlight': '#FF8A00',
        'cta': '#FFCC00',
        'text-on-dark': '#FFFFFF',
      },
      borderRadius: {
        'hyper': '2rem',    // 32px
        'modern': '1.5rem', // 24px
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config
