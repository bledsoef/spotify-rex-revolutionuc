/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      height: {
        600: "600px",
      },
      width: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
