/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "url('/src/assets/gradient.jpg')",
        horizon: "url('/src/assets/horizon.jpg')",
        paint: "url('/src/assets/paint.jpg')",
      },
    },
  },
  plugins: [],
};
