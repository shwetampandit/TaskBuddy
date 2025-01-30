/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./public/index.html",
      ],
    theme: {
        extend: {
          colors: {
            primary: '#1a1a1a',
          },
          fontFamily: {
            urbanist: ['Urbanist', 'sans-serif'],
          },
          fontWeight: {
            'extra-light': 100,   // Custom font weight
            'semi-bold': 600,    
            'bold': 700,
            'extra-bold': 800,    // Custom font weight
          },
        },
      },
    plugins: [], // Add any Tailwind plugins here
  };
  