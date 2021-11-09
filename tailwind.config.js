module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        grey: "#1E2125",
        white: "#fff",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
