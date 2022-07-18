/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      extend: {
        screens: {
          xsm: "100px",
        },
      },
    },
  },
  plugins: [],
};
