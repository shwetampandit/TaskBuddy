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
        },
      },
    plugins: [], // Add any Tailwind plugins here
  };
  