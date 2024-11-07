/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        utama: "#18b7be",
        bgtext: "#F9F7F0",
        tulisan: "#072A40",
      },
    },
  },
  plugins: [],
};
