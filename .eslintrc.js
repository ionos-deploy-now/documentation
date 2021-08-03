module.exports = {
  env: {
    es2021: true,
    node: true
  },
  plugins: ['gridsome'],
  extends: [
    '@vue/prettier',
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:gridsome/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        printWidth: 120,
      },
    ],
    //'comma-dangle': ['error', 'always-multiline']
  }
};
