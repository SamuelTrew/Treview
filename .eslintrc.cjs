/** @type {import("eslint").Linter.Config} */
const config = {
   parser: "@typescript-eslint/parser",
   parserOptions: {
      project: true,
      // Idk if I need this
      sourceType: "module",
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

      // T3 defaults
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      "@typescript-eslint/consistent-type-imports": [
         "error",
         {
            prefer: "type-imports",
            fixStyle: "separate-type-imports",
         },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
         "error",
         {
            checksVoidReturn: { attributes: false },
         },
      ],

      // Testing stylistic-type-checked
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/ban-tslint-comment": "error",
      "@typescript-eslint/class-literal-property-style": "error",
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-type-assertions": "error",
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/non-nullable-type-assertion-style": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",

      // Testing recommended-type-checked
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/ban-types": "error",
      "no-array-constructor": "off",
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-duplicate-type-constituents": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "no-implied-eval": "off",
      "@typescript-eslint/no-implied-eval": "error",
      "no-loss-of-precision": "off",
      "@typescript-eslint/no-loss-of-precision": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-redundant-type-constituents": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-unsafe-enum-comparison": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "require-await": "off",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/restrict-template-expressions": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/unbound-method": "error",
   },
   settings: {
      react: {
         version: "detect",
      },
      "import/parsers": {
         "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
         typescript: {
            alwaysTryTypes: true,
            project: ["tsconfig.json"],
         },
         node: {
            extensions: [".ts", ".tsx"],
         },
      },
   },
   overrides: [
      {
         files: ["**/*.ts", "**/*.tsx"],
         parser: "@typescript-eslint/parser",
         plugins: ["@typescript-eslint"],
         extends: [
            "plugin:@typescript-eslint/eslint-recommended",
            "plugin:@typescript-eslint/recommended",
         ],
         rules: {
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-this-alias": "off",
            "@typescript-eslint/explicit-function-return-type": [
               "warn",
               { allowExpressions: true },
            ],
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
      },
   ],
   // Idk if I need this
   env: {
      es6: true,
      node: true,
      browser: true,
   },
}

module.exports = config
