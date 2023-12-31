/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fadeBlack: "rgb(107,107,120)",
        black_primary: "#2E2E2E",
        gray_primary:"rgb(241, 242, 244)",
        white_700: "#f2f2fc",
        white_500: "#d4d4d4",
        white_300: "#c8c8cf",
        white_100: "#fffcf4",

        black_900: "#2b2a2a",
        black_700: "#333",
        black_500: "#172337",
        black_300: "#212121",
        black_100: "#878787",
      },
    },
  },
  plugins: [],
};
