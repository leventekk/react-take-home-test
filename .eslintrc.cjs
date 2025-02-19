module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['jest', 'import', 'react', 'prettier'],
  rules: {
    '@typescript-eslint/triple-slash-reference': 0,
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true
      }
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unicorn/filename-case': ['off'],
    'unicorn/prefer-module': ['off']
  }
}
