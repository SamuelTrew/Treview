/** @type {import("eslint").Linter.Config} */
const config = {
   parser: "@typescript-eslint/parser",
   parserOptions: {
      project: true,
   },
   plugins: [
      "@typescript-eslint",
      "react-hooks",
      "import",
      "unused-imports",
      "typescript-sort-keys",
   ],
   extends: [
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "plugin:typescript-sort-keys/recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
      "plugin:prettier/recommended", // Needs to be LAST extension!!!
   ],
   rules: {
      // React rules
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/jsx-sort-props": [
         "error",
         {
            ignoreCase: true,
            shorthandFirst: true,
            callbacksLast: true,
         },
      ],
      "react/no-array-index-key": "error",
      "react/no-danger": "error",
      "react/no-unstable-nested-components": "warn",
      "react/react-in-jsx-scope": "off",

      // React hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies

      // ESLint built in rules
      "prefer-const": "error", // If variable never reassigned, use const over let
      "no-alert": "error", // Disallow use of alert - use debug
      "sort-vars": ["error", { ignoreCase: true }], // Sort variable declarations in scope block

      // Import rules
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "warn",
      "import/no-unresolved": ["error", { ignore: [".coffee$", ".(scss|less|css)$"] }],
      "import/order": [
         "error",
         {
            "newlines-between": "always",
            groups: [["builtin", "external"], ["internal", "parent", "sibling"], "type"],
            pathGroupsExcludedImportTypes: [],
            alphabetize: {
               order: "asc",
               caseInsensitive: true,
            },
         },
      ],
      "import/first": "warn",

      // TS-Eslint
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      "@typescript-eslint/consistent-type-imports": [
         "error",
         {
            prefer: "type-imports",
            fixStyle: "separate-type-imports",
         },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/member-delimiter-style": [
         "error",
         {
            multiline: {
               delimiter: "none",
               requireLast: false,
            },
            singleline: {
               delimiter: "comma",
               requireLast: false,
            },
         },
      ],
   },
}

module.exports = config
