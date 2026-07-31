import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [".next/**", ".next-dev/**", ".next-dev-*/**", "node_modules/**", "next-env.d.ts"]
  },
  {
    files: ["*.mjs"],
    languageOptions: {
      globals: {
        process: "readonly"
      }
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error"
    }
  }
];
