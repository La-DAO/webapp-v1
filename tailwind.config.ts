import { type Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const ldPrimaryOrange = "#f25b3d";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ldNightBlack: "#0b0b0a",
        ldJetBlack: "#1A1A17",
        ldJetBlackTones: {
          100: "#2B2B26",
          300: "#23231F",
          500: "#1A1A17",
          700: "#181815",
          900: "#161613",
        },
        ldAlmostWhite: "#FFFDF5",
        ldBeigeWhite: "#f6f2e6",
        ldDeepGreen: "#1F4038",
        ldDeepGreenTones: {
          100: "#2E6054",
          300: "#275046",
          500: "#1F4038",
          700: "#1D2D28",
          900: "#1C2420",
        },
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
        sora: ["Sora", ...defaultTheme.fontFamily.sans],
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
  },
  plugins: [],
} satisfies Config;
