/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-h1"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#FF8252",
          500: "#FF4D00",
          700: "#CC3E00",
        },
        secondary: {
          300: "#FFA85E",
          500: "#FF8932",
          700: "#CC6E28",
        },
        gray: {
          100: "#F7F7F7",
          700: "#4F4F4F",
        },
        white: "#FFFFFF",
        black: "#000000",
      },
      fontSize: {
        h1: "3rem",         // 48px
        h2: "2.25rem",      // 36px
        h3: "1.75rem",      // 28px
        h4: "1.375rem",     // 22px
        "body-large": "1rem",      // 16px
        "body-base": "0.875rem",   // 14px
        button: "1rem",     // 16px
        mH1: "2rem",       // 32px
        mH2: "1.5rem",     // 24px
        mH3: "1.25rem",    // 20px
      },
      fontFamily: {
        sans: ["'SF Pro'", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
      },
      screens: {
        xs: '375px', // Custom breakpoint for min-width 375px
      },
    },
  },
  plugins: [],
};
