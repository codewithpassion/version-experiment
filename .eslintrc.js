module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  extends: [
    'standard',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'promise/catch-or-return': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    'no-useless-constructor': 0, // nestjs dependency injection pattern
  },
};
