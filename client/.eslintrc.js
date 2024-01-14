module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // https://typescript-eslint.io/packages/parser/#configuration
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  root: true,
  ignorePatterns: [
    'public',
    'node_modules',
    'styles',
  ],
  rules: {
    'arrow-body-style': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        depth: 3,
        assert: 'either',
      },
    ],
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
    '@typescript-eslint/quotes': ['error', 'single'],
  },
};
