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
          "linear-gradient(90.21deg, rgba(44, 16, 88, 0.5) -5.91%, rgba(203, 85, 255, 0.5))"
      }
    },
  },
  plugins: [],
};

export default config;