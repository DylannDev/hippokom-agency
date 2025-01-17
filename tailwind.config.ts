import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          background: "#f3f8ff",
          light: "#B7E9FD",
          medium: "#52B8EC",
          DEFAULT: "#436AF6",
          hover: "#3d60e0",
          dark: "#15214B",
        },
        yellow: {
          hover: "#fae55b",
          DEFAULT: "#F9DE32",
        },
      },
      borderRadius: {
        "4xl": "32px",
        "5xl": "40px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
