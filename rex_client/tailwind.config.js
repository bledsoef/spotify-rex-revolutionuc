/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          999: "#161716"
        }
      },
      height: {
        600: "600px",
        550: "550px",
        200: "200px",
      },
      width: {
        600: "600px",
        550: "550px",
        200: "200px",
      },
    },
  },
  plugins: [],
};
