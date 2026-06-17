import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/"]
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["app.js", "jest.setup.js", "playwright.config.js", "webpack.config.js"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["test/**"],
    languageOptions: { globals: globals.jest },
  },
  {
    rules: { "react/prop-types": "off" },
  },
]);