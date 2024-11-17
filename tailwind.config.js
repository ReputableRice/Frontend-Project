/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-bg': "url('/App_bg.png')",
      },
    },
    screens: {
      'sm': '414px',
      // => @media (min-width: 414px) { ... }

      'md': '820px',
      // => @media (min-width: 820px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    }
  },
  plugins: [],
};
