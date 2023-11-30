import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3abff8",
        text_color: "#e2e8f0",
      },
    },
  },

  plugins: [require("daisyui")],
};
export default config;
