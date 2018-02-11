module.exports = {
  plugins: ['prettier', 'react', 'jsx-a11y'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true
  },
  rules: {
    'comma-dangle': 0,
    'no-plusplus': 0,
    'react/jsx-filename-extension': 0
  }
};
