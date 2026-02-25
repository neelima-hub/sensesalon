/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: '#0f0f0f',
                champagne: '#f0e6d2',
                champagneDark: '#d4c7b0',
                charcoal: '#1a1a1a',
            },
            fontFamily: {
                serif: ['Inter', 'serif'], // Fallback if Playfair isn't loaded
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'noise': 'noise 1s steps(2) infinite',
            },
            keyframes: {
                noise: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '10%': { transform: 'translate(-5%, -5%)' },
                    '20%': { transform: 'translate(-10%, 5%)' },
                    '30%': { transform: 'translate(5%, -10%)' },
                    '40%': { transform: 'translate(-5%, 15%)' },
                    '50%': { transform: 'translate(-10%, 5%)' },
                    '60%': { transform: 'translate(15%, 0)' },
                    '70%': { transform: 'translate(0, 15%)' },
                    '80%': { transform: 'translate(3%, 35%)' },
                    '90%': { transform: 'translate(-10%, 10%)' },
                }
            }
        },
    },
    plugins: [],
}
