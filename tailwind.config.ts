import { type Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const ldPrimaryOrange = "#f25b3d";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ldJetBlack: "#2e2e2c",
        ldAlmostWhite: "#FFFDF5",
        ldBeigeWhite: "#f6f2e6",
        ldDeepGreen: "#1F4038",
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
        ldSageGreen: {
          100: "#9CA578",
          300: "#889362",
          500: "#69714c",
          700: "#444931",
          900: "#2D3121",
        },
        primary: ldPrimaryOrange,
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
