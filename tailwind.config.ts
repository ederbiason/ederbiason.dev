import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#C778DD",
        "background": "var(--background)",
        "titleColor": "var(--text-title)",
        "textColor": "var(--text-color)",
        "borderColor": "var(--border-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
