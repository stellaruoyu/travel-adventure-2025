/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'kid-blue': '#4CC9F0',
                'kid-purple': '#7209B7',
                'kid-pink': '#F72585',
                'kid-yellow': '#FFD60A',
                'kid-green': '#4AD66D',
            },
            fontFamily: {
                'sans': ['"Comic Neue"', 'cursive', 'sans-serif'], // We might need to import this font
            }
        },
    },
    plugins: [],
}
