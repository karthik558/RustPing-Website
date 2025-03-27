
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        rustred: {
          DEFAULT: "#E43A24",
          light: "#FF5A44",
          dark: "#C32D1A",
        },
        navy: {
          DEFAULT: "#0F1629",
          light: "#1A253B",
          dark: "#0A0F1F",
        },
        slate: {
          DEFAULT: "#8491A9",
          light: "#A1AFCC",
          dark: "#5F6A7D",
        },
        gray: {
          // Add the custom gray-750 shade
          750: "#2D3748",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          blue: "#2e67d3",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(46, 103, 211, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(46, 103, 211, 0.6)" 
          }
        },
        "data-stream": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        "scanner": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" }
        },
        "network-pulse": {
          "0%": { transform: "scale(0.95)", opacity: "0.5" },
          "50%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(0.95)", opacity: "0.5" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "pulse-slow": "pulse-slow 4s infinite ease-in-out",
        "float": "float 6s infinite ease-in-out",
        "glow": "glow 2s infinite ease-in-out",
        "data-stream": "data-stream 3s linear infinite",
        "scanner": "scanner 2s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "network-pulse": "network-pulse 3s infinite ease-in-out",
        "spin-slow": "spin-slow 15s linear infinite"
      },
      backdropFilter: {
        "none": "none",
        "blur": "blur(20px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
