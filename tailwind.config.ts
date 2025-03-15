import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Use class strategy for dark mode
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            fontSize: "0.875rem", // Adjust the base font size
            h1: {
              fontSize: "1.5rem", // Adjust the font size for h1
            },
            h2: {
              fontSize: "1.25rem", // Adjust the font size for h2
            },
            h3: {
              fontSize: "1.125rem", // Adjust the font size for h3
            },
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [typography],
};
export default config;
