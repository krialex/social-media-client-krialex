import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import cypressPlugin from 'eslint-plugin-cypress';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',

        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        exports: 'readonly',
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
      'cypress/no-unnecessary-waiting': 'off',
    },
    plugins: {
      cypress: cypressPlugin,
    },
  },
  {
    files: ['**/*.test.js'],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    files: ['**/*.cy.js'],
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      'cypress/no-unnecessary-waiting': 'off',
    },
  },
];
