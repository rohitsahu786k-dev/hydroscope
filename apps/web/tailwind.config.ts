import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
      }
    }
  },
  plugins: []
};

export default config;
