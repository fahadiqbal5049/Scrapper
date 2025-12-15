import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      screens: {
        xxs: "370px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        cmd: "880px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      colors: {
        primary: "#2D363D",
        secondary: "#1e252c",
        tertary: "#252D33",
        white: {
          "1": "#ffffff",
          "2": "#A3A3A3",
          "3": "#A4A4A4",
          "4": "#FAFAFA",
          "5": "#E2E2E2",
        },
        pink: {
          "1": "#FB0078",
        },
        success: {
          "1": "#00FBA0",
          "2": "#00B62A",
          "3": "#284A47",
          4: "#00B62A33",
        },
        red: {
          "1": "#EF4444",
        },
        cyan: {
          "1": "#0ED6B2",
          "2": "#60B2FF",
        },
        orange: {
          "1": "#F3941D",
          "2": "#EB7301",
          "3": "#FF7C001A",
        },
        gray: {
          "1": "#4E4E4E",
          2: "#3A4249",
          3: "#343E46",
        },
        yellow: {
          "1": "#F3D42F",
        },
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "32px",
        "2xl": "48px",
        full: "9999px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "64px",
        "6xl": "80px",
      },
      boxShadow: {
        lightShadow: "0px 4px 20px 4px rgba(30, 37, 43, 0.5)",
      },
      backgroundImage: {
        "orange-text-gradient":
          "linear-gradient(65.68deg, #E33556 11.97%, #E9514B 17.76%, #EC5D47 23.56%, #EF6A43 29.35%, #F37B3E 35.59%, #F2A144 42.28%, #EBAD52 60.11%, #E9B055 69.02%, #DBCA73 77.49%, #CFE08F 86.85%, #C0FAAE 94.88%)",
        "orange-gradient":
          "linear-gradient(69.39deg, #EB7301 21.06%, #FFCA49 96.19%)",
      },

      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
