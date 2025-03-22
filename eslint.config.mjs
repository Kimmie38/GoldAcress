import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import next from "eslint-plugin-next";

export default defineConfig([
  {
    ignores: ["node_modules/", "dist/"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      next,
    },
    extends: [
      "js/recommended",
      "next/core-web-vitals",
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
  },
]);
