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
        "spin-fast": "spin 1s linear infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('/logo-white.png')",
        "hero-dark-gray": "url('/gray-950.png')",
        Fajr: "url('/Fajr.webp')",
        Sunrise: "url('/Sunrise.jpg')",
        Dhuhr: "url('/Duhur.webp')",
        Asr: "url('/Asr.jpg')",
        Maghrib: "url('/Maghrib.webp')",
        Isha: "url('/Isha.webp')",
        quran: "url('/100.png')",
      },
      backgroundColor: {
        darkBlue: "#071237",
        lighterBlue: "#0f256e",
      },
    },
  },
  plugins: [],
};
