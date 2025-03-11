import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eebfff",
        secondary: "#00daca",
        darkBg: "#131424"
      },
      backgroundImage: {
        "gradient-cover": 
          "linear-gradient(90deg, rgba(0,4,80,1) 0%, rgba(76,0,207,1) 48%, rgba(106,0,218,1) 100%);"
      }
    },
  },
  plugins: [],
};

export default config;