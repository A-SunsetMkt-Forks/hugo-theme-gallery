const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hugo_stats.json", "./layouts/**/*.html"],
  darkMode: ['class', '[data-theme="dark"]'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
