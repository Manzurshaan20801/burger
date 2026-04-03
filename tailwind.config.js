/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          charcoal: "#1a1a1a",
          dark: "#141414",
          orange: "#ff6b00",
          amber: "#ff8c00",
          gold: "#ffa500",
          ember: "#e25822",
          cream: "#fff5e6",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "flame-flicker": "flame-flicker 3s ease-in-out infinite",
        "spark": "spark 2s ease-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,107,0,0.4), 0 0 60px rgba(255,107,0,0.1)" },
          "50%": { boxShadow: "0 0 30px rgba(255,107,0,0.6), 0 0 80px rgba(255,107,0,0.2)" },
        },
        "flame-flicker": {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        spark: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-100px) scale(0)" },
        },
      },
    },
  },
  plugins: [],
};
