/*import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import cypressPlugin from 'eslint-plugin-cypress';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
    },
  },
  {
    files: ['**//*.test.js'],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    files: ['**//*.cy.js'],
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      'cypress/no-unnecessary-waiting': 'off',
    },
  },
];
*/

import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import cypressPlugin from 'eslint-plugin-cypress';
import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.cypress, // Include Cypress globals here
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
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
    languageOptions: {
      globals: {
        ...globals.cypress, // Include Cypress globals here
      },
    },
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      'cypress/no-unnecessary-waiting': 'off',
    },
  },
];

