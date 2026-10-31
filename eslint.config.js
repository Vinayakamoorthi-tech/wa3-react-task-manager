import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // JSX automatically counts imported components as used.
      "react/jsx-uses-vars": "error",

      // Modern React with Vite does not require importing React for JSX.
      "react/react-in-jsx-scope": "off",

      // PropTypes are optional for this project.
      "react/prop-types": "off",

      "react-refresh/only-export-components": "off",

      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];