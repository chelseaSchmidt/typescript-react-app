module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  root: true,
  ignorePatterns: [
    'node_modules',
    'client',
    'dist',
    'tests/coverage',
    'tests/client',
    'tests/__mocks__/*.ts',
    'tests/__mocks__/*.tsx',
  ],
  settings: {
    'import/resolver': {
      node: true,
    },
  },
  rules: {
    'arrow-body-style': 'off',
    'no-console': 'off',
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
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'error',
  },
};
