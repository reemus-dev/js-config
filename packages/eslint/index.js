module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unicorn", "import", "unused-imports"],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {},
  extends: ["prettier"],
  ignorePatterns: [
    "dist",
    ".build",
    ".next",
    "node_modules",
    ".eslintrc.js",
    ".eslintrc.cjs",
    "vitest.config.ts",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  rules: {
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/adjacent-overload-signatures": 1,
    "@typescript-eslint/await-thenable": 1,
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          String: {
            message: "Use string instead",
            fixWith: "string",
          },
          Boolean: {
            message: "Use boolean instead",
            fixWith: "boolean",
          },
          Number: {
            message: "Use number instead",
            fixWith: "number",
          },
          Symbol: {
            message: "Use symbol instead",
            fixWith: "symbol",
          },
          Function: false,
          Object: {
            message:
              "The `Object` type actually means any non-nullish value, so it is marginally better than `unknown`.",
          },
          "{}": {
            message: "`{}` actually means any non-nullish value.",
          },
        },
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "property",
        leadingUnderscore: "allow",
        format: null,
      },
    ],
    "@typescript-eslint/no-extra-non-null-assertion": 1,
    "@typescript-eslint/no-inferrable-types": 1,
    "@typescript-eslint/no-misused-new": 1,
    "@typescript-eslint/no-misused-promises": 1,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": 1,
    "@typescript-eslint/no-non-null-asserted-optional-chain": 1,
    "@typescript-eslint/no-unnecessary-type-assertion": 1,
    "@typescript-eslint/prefer-as-const": 1,
    "@typescript-eslint/prefer-for-of": 1,
    "@typescript-eslint/prefer-includes": 1,
    "@typescript-eslint/prefer-optional-chain": 1,
    "@typescript-eslint/prefer-string-starts-ends-with": 1,
    "@typescript-eslint/restrict-plus-operands": 1,
    "@typescript-eslint/restrict-template-expressions": 0,
    "constructor-super": 1,
    "for-direction": 1,
    "getter-return": 1,
    "import/extensions": ["error", "ignorePackages"],
    "no-async-promise-executor": 1,
    "no-class-assign": 1,
    "no-compare-neg-zero": 1,
    "no-constant-condition": 1,
    "no-control-regex": 1,
    "no-debugger": 1,
    "no-dupe-args": 1,
    "no-dupe-class-members": 1,
    "no-dupe-else-if": 1,
    "no-dupe-keys": 1,
    "no-duplicate-case": 1,
    "no-empty-character-class": 1,
    "no-empty-pattern": 1,
    "no-ex-assign": 1,
    "no-fallthrough": 1,
    "no-func-assign": 1,
    "no-import-assign": 1,
    "no-inner-declarations": 1,
    "no-invalid-regexp": 1,
    "no-irregular-whitespace": 1,
    "no-loss-of-precision": 1,
    "no-misleading-character-class": 1,
    "no-nested-ternary": "off",
    "no-new-symbol": 1,
    "no-obj-calls": 1,
    "no-prototype-builtins": 1,
    "no-self-assign": 1,
    "no-sparse-arrays": 1,
    "no-undef": 1,
    "no-unexpected-multiline": 1,
    "no-unreachable": 1,
    "no-unsafe-finally": 1,
    "no-unsafe-negation": 1,
    "no-unsafe-optional-chaining": 1,
    "no-useless-backreference": 1,
    "unicorn/better-regex": "error",
    "unicorn/catch-error-name": 0,
    "unicorn/consistent-destructuring": 0,
    "unicorn/consistent-function-scoping": 0,
    "unicorn/custom-error-definition": "off",
    "unicorn/empty-brace-spaces": "error",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/expiring-todo-comments": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/filename-case": 0,
    "unicorn/import-index": "off",
    "unicorn/import-style": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/no-array-callback-reference": 0,
    "unicorn/no-array-for-each": 0,
    "unicorn/no-array-method-this-argument": 0,
    "unicorn/no-array-push-push": "off",
    "unicorn/no-await-expression-member": 0,
    "unicorn/no-console-spaces": "error",
    "unicorn/no-document-cookie": "error",
    "unicorn/no-empty-file": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-lonely-if": "error",
    "unicorn/no-nested-ternary": 0,
    "unicorn/no-new-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-object-as-default-parameter": "error",
    "unicorn/no-process-exit": 0,
    "unicorn/no-static-only-class": "error",
    "unicorn/no-thenable": "error",
    "unicorn/no-this-assignment": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/no-unused-properties": "off",
    "unicorn/no-useless-fallback-in-spread": "error",
    "unicorn/no-useless-length-check": "error",
    "unicorn/no-useless-promise-resolve-reject": "error",
    "unicorn/no-useless-spread": "error",
    "unicorn/no-useless-undefined": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/numeric-separators-style": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-flat": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-at": "off",
    "unicorn/prefer-code-point": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-default-parameters": "error",
    "unicorn/prefer-dom-node-append": "error",
    "unicorn/prefer-dom-node-dataset": "error",
    "unicorn/prefer-dom-node-remove": "error",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-export-from": 0,
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-math-trunc": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-object-from-entries": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-prototype-methods": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-regexp-test": "error",
    "unicorn/prefer-set-has": "error",
    "unicorn/prefer-spread": "off",
    "unicorn/prefer-string-replace-all": "off",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-switch": "error",
    "unicorn/prefer-ternary": "error",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prefer-type-error": "error",
    "unicorn/relative-url-style": "error",
    "unicorn/require-array-join-separator": "error",
    "unicorn/require-number-to-fixed-digits-argument": "error",
    "unicorn/require-post-message-target-origin": "off",
    "unicorn/string-content": "off",
    "unicorn/template-indent": "warn",
    "unicorn/throw-new-error": "error",
    "use-isnan": 1,
    "valid-typeof": 1,
  },
};
