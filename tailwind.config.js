/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#1b5b31",
        grey: "#f5f0ec",
        white: "#fff",
        black: "#111",
        beige: "#dcc1ab",
      },
      fontFamily: {
        "bagoss-trial-body": "Roboto",
        "inter-body": "Inter",
        "montserrat-h-3": "Montserrat",
      },
      borderRadius: {
        "181xl": "200px",
        "9xl": "28px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "29xl": "48px",
      xs: "12px",
      "9xl": "28px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
