/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeftRight: {
          '0%': { transform: 'translateX(-30%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(80%)' },
        },
      },
      animation: {
        slideLeftRight: 'slideLeftRight 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

