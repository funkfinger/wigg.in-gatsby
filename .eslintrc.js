module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'max-len': ['error', { code: 100 }],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'react/prop-types': ['warn'],
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`airbnb`, 'airbnb/hooks', 'prettier', 'prettier/react'],
};
