import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
        border: "var(--color-border)", /* gray-400 with opacity */
        input: "var(--color-input)", /* elevated-navy */
        ring: "var(--color-ring)", /* electric-cyan */
        background: "var(--color-background)", /* deep-navy */
        foreground: "var(--color-foreground)", /* white */
        primary: {
          DEFAULT: "var(--color-primary)", /* electric-cyan */
          foreground: "var(--color-primary-foreground)", /* deep-navy */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* metallic-gray */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* metallic-gray */
          foreground: "var(--color-muted-foreground)", /* light-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* saffron */
          foreground: "var(--color-accent-foreground)", /* deep-navy */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* elevated-navy */
          foreground: "var(--color-popover-foreground)", /* white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* elevated-navy */
          foreground: "var(--color-card-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-600 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* orange-500 */
          foreground: "var(--color-warning-foreground)", /* deep-navy */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        surface: {
          DEFAULT: "var(--color-surface)", /* elevated-navy */
          foreground: "var(--color-surface-foreground)", /* white */
        },
        'text-primary': "var(--color-text-primary)", /* white */
        'text-secondary': "var(--color-text-secondary)", /* light-gray */
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'cta': ['Montserrat', 'sans-serif'],
        'accent': ['Roboto', 'sans-serif'],
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      boxShadow: {
        'cta': '0 10px 25px rgba(0, 217, 255, 0.15)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-strong': '0 0 30px rgba(0, 217, 255, 0.6)',
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #0A1628 0%, #1A2332 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #00D9FF 0%, #0891B2 100%)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}