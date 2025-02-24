/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBF6E9", // light Beige
        secondary: "#A8CD89", // Green
        tertiary: "#F9C0AB", // Pink
        accent: "#355F2E", // Dark Green
        accenttwo: "#F4E0AF", //Og Beige
        pinkdark: "#EAAF9D", //accent pink color
        pinkdarker: "#DB9B8D", //darker
      },
      screens: {
        md: "900px",
      },
    },
  },
  plugins: [],
};
