import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class", ".dark"],

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* =========================
         Fonts (from layout.tsx)
         ========================= */
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },

      /* =========================
         CSS Variable Colors
         ========================= */
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",

        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        gold: "hsl(var(--gold))",
        "gold-light": "hsl(var(--gold-light))",
        "gold-dark": "hsl(var(--gold-dark))",

        charcoal: "hsl(var(--charcoal))",
        "charcoal-light": "hsl(var(--charcoal-light))",
        "charcoal-dark": "hsl(var(--charcoal-dark))",
      },

      /* =========================
         Animations
         ========================= */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    animate,

    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container-custom": {
          maxWidth: "80rem", // 7xl
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),

          "@screen md": {
            paddingLeft: theme("spacing.8"),
            paddingRight: theme("spacing.8"),
          },
        },

        ".section-padding": {
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
          paddingTop: theme("spacing.16"),
          paddingBottom: theme("spacing.16"),

          "@screen md": {
            paddingLeft: theme("spacing.8"),
            paddingRight: theme("spacing.8"),
            paddingTop: theme("spacing.24"),
            paddingBottom: theme("spacing.24"),
          },

          "@screen lg": {
            paddingLeft: theme("spacing.16"),
            paddingRight: theme("spacing.16"),
            paddingTop: theme("spacing.32"),
            paddingBottom: theme("spacing.32"),
          },
        },
      });
    }),
  ],
};

export default config;
