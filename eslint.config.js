import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";

export default [
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module"
            },
            globals: {
                console: "readonly",
                process: "readonly",
                module: "readonly",
                require: "readonly"
            }
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            "prettier": eslintPluginPrettier,
            "import": eslintPluginImport,
            "unused-imports": eslintPluginUnusedImports
        },
        rules: {
            "for-direction": "error",
            "no-compare-neg-zero": "error",
            "no-cond-assign": ["error", "always"],
            "no-console": "off",
            "no-constant-condition": "warn",
            "no-debugger": "error",
            "no-empty": "warn",
            "no-extra-semi": "error",
            "no-irregular-whitespace": "error",
            "no-prototype-builtins": "error",
            "prettier/prettier": "error",
            "import/extensions": "off",
            "import/no-extraneous-dependencies": "off",
            "import/no-unresolved": "off",
            "import/order": [
                "error",
                {
                    "groups": ["builtin", "external", "internal"],
                    "newlines-between": "always"
                }
            ],
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" }
            ],
            "unused-imports/no-unused-imports": "error",
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "max-lines-per-function": ["error", 500],
            "indent": "off",
            "linebreak-style": "off"
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json"
                },
                node: {
                    extensions: [".js", ".ts"]
                }
            }
        },
        ignores: ["node_modules/**"]
    }
];
