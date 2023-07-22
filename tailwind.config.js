module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-opacity":
          "linear-gradient(to right, rgba(59, 130, 246, 1) 0%, rgba(59, 130, 246, 0) 100%)",
      }),
    },
  },
  plugins: [],
};
