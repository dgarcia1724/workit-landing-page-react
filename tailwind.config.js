/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#24053E",
        green: "#44FFA1",
        darkGray: "#584D62",
        lightGray: "#FCF8FF",
      },
    },
  },
  plugins: [],
};
