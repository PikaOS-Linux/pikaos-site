const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: colors.slate,
                secondary: colors.yellow,
            },
            fontFamily: {
                sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
    darkMode: 'class',
};