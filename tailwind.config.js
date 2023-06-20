/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 90s linear infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('/logo-white.png')",
        "hero-descktop": "url('/hero-dark-blue.png')",
        "hero-descktop-blue": "url('/dark-blue-hero.png')",
        "hero-descktop-black": "url('/hero-black.png')",
      },
      backgroundColor: {
        darkBlue: "#071237",
        lighterBlue: "#0f256e",
      },
    },
  },
  plugins: [],
};
