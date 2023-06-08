/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            slate: '#292e32',
            deepsea: '#191e23',
            salmon: '#ffab9b',
            marine: '#00ffd8'
        },
        fontFamily: {
            epilogue: ['Epilogue', 'sans-serif']
        },
        boxShadow: {
            custom: '10px 10px 30px #292e32'
        },
        extend: {
            flex: {
                10: '10'
            }
        }
    },
    plugins: []
};
