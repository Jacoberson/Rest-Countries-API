module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        181: "181px",
        264: "264px",
        320: "320px",
        560: "560px",
        598: "598px",
      },
      maxWidth: {
        267: "267px",
        1440: "1440px",
      },
      height: {
        160: "160px",
        229: "229px",
        323: "323px",
        336: "336px",
        401: "401px",
      },
      maxHeight: {
        160: "160px",
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
        22: "22px",
      },
      fontWeight: {
        300: "300",
        400: "400",
        600: "600",
        800: "800",
      },
      lineHeight: {
        26: "26px",
        30: "30px",
        32: "32px",
      },
      borderRadius: {
        5: "5px",
      },
      backgroundImage: {
        "search-icon": "url('/images/search-outline.svg')",
      },
      boxShadow: {
        search: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
        back: "0px 0px 7px rgba(0, 0, 0, 0.293139)",
        border: "0px 0px 4px 1px rgba(0, 0, 0, 0.104931)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
