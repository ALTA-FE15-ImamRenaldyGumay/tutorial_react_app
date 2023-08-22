/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "alta-blue-dark": "#1b355e",
        "alta-orange": "#f07539",
      },
    },
  },
  plugins: [],
};
