import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4a9ed4",
        "primary-dark": "#3a8ec4",
        "primary-mid": "#5caee0",
        "blog-gray": "#8e9ea8",
        "text-main": "#333333",
        "text-secondary": "#555555",
        "text-light": "#777777",
        "sidebar-bg": "#efefef",
        "page-bg": "#a8c4d8",
        "divider": "#d0d0d0",
        "nav-hover": "#4a9ed4",
      },
      fontFamily: {
        sans: ["Open Sans", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "960px",
      },
    },
  },
  plugins: [],
};

export default config;
