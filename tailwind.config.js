/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "url('/src/assets/gradient.jpg')",
        mountain: "url('/src/assets/mountain.jpg')",
        paint: "url('/src/assets/paint.jpg')",
        sky: "url('/src/assets/sky.jpg')",
      },
    },
  },
  plugins: [],
};
