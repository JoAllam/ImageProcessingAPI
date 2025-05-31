import { defineConfig, globalIgnores } from "eslint/config";
import parser from "@typescript-eslint/parser";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  [globalIgnores(["build/*"])],
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jasmine,
        Express: "readonly",
      },
      parser: parser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
        },
      },
    },
  },
]);
