import { type Config } from "tailwindcss";

const ldPrimaryOrange = "#f25b3d";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ldJetBlack: "#2e2e2c",
        ldPrimaryOrange: {
          100: "#f79d8b",
          200: "#f68c77",
          300: "#f57c64",
          400: "#f36b50",
          500: ldPrimaryOrange,
          600: "#da5237",
          700: "#c24931",
          800: "#a9402b",
          900: "#913725",
        },
        primary: ldPrimaryOrange,
      },
    },
  },
  plugins: [],
} satisfies Config;
