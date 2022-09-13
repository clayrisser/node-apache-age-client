/**
 * File: /.eslintrc.js
 * Project: apache-age-client
 * File Created: 13-09-2022 04:18:52
 * Author: Clay Risser
 * -----
 * Last Modified: 13-09-2022 04:47:09
 * Modified By: Clay Risser
 * -----
 * Risser Labs LLC (c) Copyright 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require("fs");

const cspell = JSON.parse(fs.readFileSync(".vscode/settings.json").toString())[
  "cSpell.words"
];

module.exports = {
  extends: ["airbnb-typescript/base", "prettier"],
  parser: "@typescript-eslint/parser",
  root: true,
  env: {
    browser: true,
  },
  plugins: ["spellcheck", "import"],
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        enums: "always-multiline",
        exports: "always-multiline",
        functions: "never",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-redeclare": "off",
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "default-case": "off",
    "import/extensions": ["error", "never", { json: "always" }],
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "max-lines": ["error", 500],
    "max-lines-per-function": ["warn", 99],
    "no-await-in-loop": "off",
    "no-empty-function": ["warn", { allow: ["constructors"] }],
    "no-extra-boolean-cast": "off",
    "no-inner-declarations": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "react/jsx-props-no-spreading": "off",
    yoda: "off",
    "spellcheck/spell-checker": [
      "warn",
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: "en_US",
        skipWords: cspell,
        skipIfMatch: ["http?://[^s]*", "^[-\\w]+/[-\\w\\.]+$"],
        skipWordIfMatch: [],
        minLength: 3,
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^~"],
      },
    ],
    "no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.spec.js",
          "**/*.spec.jsx",
          "**/*.spec.ts",
          "**/*.test.js",
          "**/*.test.ts",
          "tests/**/*.js",
          "tests/**/*.ts",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.test.js", "*.test.ts"],
      env: {
        jest: true,
      },
      plugins: ["jest"],
    },
    {
      files: ["*.ts"],
      rules: {
        "no-unused-vars": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
};
