import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      //aca podemos agregar colores personalizados 🙂
      colors: {
        "background-color": "#F0F0F0",
        primary: "#FFB347",
        secondary: "#CCCCCC",
        "navbar-bg": "#0f172a",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
