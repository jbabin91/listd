module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import-no-duplicates-prefix-resolved-path'],
  ignorePatterns: ['src/lib/i18n/*.ts'],
  overrides: [
    {
      files: ['**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.cjs', '.js', '.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-duplicates': 'off',
    'import-no-duplicates-prefix-resolved-path/no-duplicates': [
      'error',
      {
        prefixResolvedPathWithImportName: true,
      },
    ],
    'no-restricted-imports': ['error', { paths: ['$env/static/private'] }],
  },
};
