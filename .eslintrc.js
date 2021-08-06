module.exports = {
  env: {
    es2021: true,
    node: true
  },
  plugins: ['gridsome'],
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:gridsome/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  }
};
