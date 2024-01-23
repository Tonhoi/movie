import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3abff8",
        // secondary: "#337a99",
        secondary: "#285E76",
        text_color: "#e2e8f0",
        gray_white: "#b4b4b4",
      },
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  daisyui: {
    themes: false,
    darkTheme: "light",
  },
  plugins: [require("daisyui")],
};
export default config;
