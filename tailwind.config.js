/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#3452ed',
                primary100: '#2341dc',
                accent: '#191919',
                warn: '#ffc107',
                warn100: '#d39e00',
                light: '#ffffff',
                light100: '#efefef',
                dark: '#000000',
                ground: '#232323'
            }
        }
    },
    plugins: []
};
