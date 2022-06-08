module.exports = {
  root: true,
  extends: ['prettier'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  globals: {
    process: false,
    Promise: true,
  },
};
