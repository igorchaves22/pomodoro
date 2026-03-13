import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importHelpers from "eslint-plugin-import-helpers";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig([
    globalIgnores(["node_modules", "dist"]),
    js.configs.recommended,
    ts.configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser
        },
        plugins: {
            "import-helpers": importHelpers
        },
        rules: {
            "@typescript-eslint/no-empty-object-type": "off",
            "react/no-unescaped-entities": "off",
            "import-helpers/order-imports": [
                "warn",
                {
                    newlinesBetween: "never",
                    groups: ["module", "/^~/", ["parent", "sibling", "index"]],
                    alphabetize: { order: "asc", ignoreCase: true }
                }
            ]
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    eslintPluginPrettierRecommended,
    eslintConfigPrettier
]);
