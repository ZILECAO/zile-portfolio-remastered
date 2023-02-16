/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cal: ["Cal Sans", "Inter var", "sans-serif"],
        display: ['Oswald'],
        body: ['"Open Sans"', "sans-serif"],
      },

      keyframes: {
        wave: {
          "0%, 100%": {
            transform: "translateX(0%)",
          },
          "50%": {
            transform: "translateX(2px) rotate(30deg)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        wave: "wave 3.5s infinite both",
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      variants: {
        animation: ["motion-safe"]
      }
    },
  },
  plugins: [],
};
