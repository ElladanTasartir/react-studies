module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error', // para o prettier corrigir erros do eslint
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
