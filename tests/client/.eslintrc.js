module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    '../../client/.eslintrc.js',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
  },
  root: true,
};
