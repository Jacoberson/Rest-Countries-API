module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    width: {
      264: "264px",
    },
    height: {
      336: "336px",
    },
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      "dark-blue-dk": "hsl(203, 23%, 22%)",
      "very-dark-blue-dk": "hsl(207, 26%, 17%)",
      "very-dark-blue-lt": "hsl(200, 15%, 8%)",
      "dark-gray-lt": "hsl(0, 0%, 52%)",
      "very-light-gray-lt": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
    },
    fontWeight: {
      300: "300",
      600: "600",
      800: "800",
    },
    lineHeight: {
      26: "26px",
    },
    borderRadius: {
      5: "5px",
    },
    backgroundImage: {
      "search-icon": "url('/images/search-outline.svg')",
    },
    boxShadow: {
      search: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
