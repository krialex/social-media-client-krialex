import pluginJs from '@eslint/js';
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
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        global: 'readonly', 
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
        cy: 'readonly',
        Cypress: 'readonly',
        expect: 'readonly', 
        describe: 'readonly',
        beforeEach: 'readonly',
        it: 'readonly',
      },
    },
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      'cypress/no-unnecessary-waiting': 'off',
      'cypress/unsafe-to-chain-command': 'warn',
    },
  },
  {
    files: ['**/*.js'], 
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        FormData: 'readonly', 
        alert: 'readonly',    
        fetch: 'readonly',    
        Image: 'readonly',    
        location: 'readonly',
        process: 'readonly', 
      },
    },
  },
];
