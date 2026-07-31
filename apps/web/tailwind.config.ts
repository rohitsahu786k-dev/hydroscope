import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Additive brand tokens used by the Glow/Mockup primitives. The existing
        // hydro-* palette below is untouched.
        brand: "hsl(var(--brand))",
        "brand-foreground": "hsl(var(--brand-foreground))",
        hydro: {
          blue: "#1258b6",
          blue2: "#1678e8",
          cyan: "#26b9e8",
          ink: "#101729",
          navy: "#09244c",
          muted: "#5c6574",
          line: "#dbe4ef",
          soft: "#f5f9ff"
        }
      },
      boxShadow: {
        hydro: "0 16px 38px rgba(35, 69, 111, 0.08)",
        hydroHover: "0 24px 55px rgba(27, 77, 138, 0.14)"
      },
      borderRadius: {
        hydro: "13px"
      },
      animation: {
        // `both`, not `forwards`: the backwards fill holds the 0% keyframe during
        // animation-delay, so the markup does not need a hard `opacity-0` class -
        // which would leave the text invisible if the stylesheet ever fails to load.
        appear: "appear 0.5s ease-out both",
        "appear-zoom": "appear-zoom 0.8s ease-out both"
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "appear-zoom": {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
