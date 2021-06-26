module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      width: {
        "13/12": "96%",
      },
      colors: {
        modal: "rgba(0,0,0, 0.6)",
      },
      zIndex: {
        9: "9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
