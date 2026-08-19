import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: "#3b338c",
        canvas: "#f8f9fc",
      },
    },
  },
  plugins: [],
};

export default config;
