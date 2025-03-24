/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B35", // Orange
          dark: "#E85826",
        },
        secondary: {
          DEFAULT: "#1B365D", // Navy Blue
          light: "#264573",
        },
        // Add navy colors for the background
        navy: {
          700: "#132C4A",
          800: "#10243D",
          900: "#0C1C30",
        },
        orange: {
          400: "#FF8B55",
          500: "#FF6B35",
          600: "#E85826",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        // Add new animations
        "float-slow": "float1 15s ease-in-out infinite alternate",
        "float-medium": "float2 10s ease-in-out infinite alternate",
        "float-fast": "float3 7s ease-in-out infinite alternate",
        "float-slow-reverse":
          "float1 15s ease-in-out infinite alternate-reverse",
        "float-medium-reverse":
          "float2 10s ease-in-out infinite alternate-reverse",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        particle: "particle 20s linear forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        // Add new keyframes
        float1: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        particle: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.3" },
          "90%": { opacity: "0.3" },
          "100%": {
            transform: "translateY(-100vh) translateX(100px)",
            opacity: "0",
          },
        },
        fadeInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 165, 0, 0.2), 0 0 30px rgba(0, 0, 150, 0.1)",
        "glow-orange": "0 0 15px rgba(255, 165, 0, 0.4)",
      },
      dropShadow: {
        glow: "0 0 8px rgba(255, 255, 255, 0.4)",
      },
      backgroundImage: {
        "pattern-dots":
          "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dots-lg": "20px 20px",
      },
    },
  },
  plugins: [],
};
