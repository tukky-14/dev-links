/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            animation: {
                'fade-in-top': 'fade-in-top 1.0s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
                'fade-in': 'fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            },
            keyframes: {
                'fade-in-top': {
                    '0%': {
                        transform: 'translateY(-50px)',
                        opacity: '0',
                    },
                    to: {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    to: {
                        opacity: '1',
                    },
                },
            },
        },
    },
    plugins: [],
};
