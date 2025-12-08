/** @type {import('tailwindcss').Config} */
module.exports = {
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
                'primary-dark': '#090040',
                'accent': '#471396',
                'highlight': '#B13BFF',
                'cta': '#FFCC00',
                'text-on-dark': '#FFFFFF',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Fallback
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}
