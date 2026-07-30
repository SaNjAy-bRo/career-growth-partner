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
          bg: "#070A12",
          card: "#0F172A",
          surface: "#141E33",
          border: "rgba(139, 92, 246, 0.2)",
          cyan: "#38BDF8",
          blue: "#2563EB",
          purple: "#8B5CF6",
          pink: "#EC4899",
          indigo: "#6366F1",
          gold: "#F59E0B",
          textMuted: "#94A3B8",
          textLight: "#F8FAFC",
        },
      },
      backgroundImage: {
        "gemini-gradient": "linear-gradient(135deg, #38BDF8 0%, #8B5CF6 35%, #EC4899 70%, #2563EB 100%)",
        "gemini-glow": "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.25) 0%, rgba(56, 189, 248, 0.15) 35%, rgba(7, 10, 18, 1) 80%)",
        "hero-pattern": "radial-gradient(ellipse at top, rgba(139, 92, 246, 0.18) 0%, rgba(7, 10, 18, 1) 75%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        geminiShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.04)" },
        },
        ultraSlowSlideUp: {
          "0%": { opacity: "0", transform: "translateY(60px) scale(0.92)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        ultraSlowSlideRight: {
          "0%": { opacity: "0", transform: "translateX(-70px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        ultraSlowSlideLeft: {
          "0%": { opacity: "0", transform: "translateX(70px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        textRevealFade: {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "gemini-shift": "geminiShift 6s ease infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "ultra-slow-slide-up": "ultraSlowSlideUp 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ultra-slow-slide-right": "ultraSlowSlideRight 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ultra-slow-slide-left": "ultraSlowSlideLeft 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "text-reveal": "textRevealFade 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
