import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blanco-hueso": "#FAF8F3",
        "beige-calido": "#EDE6D6",
        "beige-arena": "#C9BBA0",
        "verde-salvia": "#6F8567",
        "verde-salvia-suave": "#8FA187",
        "verde-pino": "#2B3A2A",
        tinta: "#232821",
        "tinta-suave": "#4B554A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
