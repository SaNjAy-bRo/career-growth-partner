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
        cgp: {
          bg: "#080C14",
          card: "#0F172A",
          surface: "#131C31",
          border: "rgba(56, 189, 248, 0.15)",
          cyan: "#38BDF8",
          blue: "#2563EB",
          indigo: "#6366F1",
          gold: "#F59E0B",
          goldLight: "#FCD34D",
          textMuted: "#94A3B8",
          textLight: "#F8FAFC",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "ai-gradient": "linear-gradient(135deg, #38BDF8 0%, #2563EB 50%, #6366F1 100%)",
        "ai-glow": "radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
        "hero-pattern": "radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.18) 0%, rgba(8, 12, 20, 1) 75%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
      },
    },
  },
  plugins: [],
};
