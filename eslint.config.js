import globals from 'globals';
import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';

export default [
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Legger til browser-globals
        ...globals.es2021, // Legger til ECMAScript 2021-globals
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  // Base ESLint recommended rules
  pluginJs.configs.recommended,
  // Jest specific configuration for test files
  {
    files: ['**/*.test.js'],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      'jest/prefer-expect-assertions': 'off', // Eksempel på å deaktivere en spesifikk regel
    },
    languageOptions: {
      globals: {
        ...globals.jest, // Setter globale variabler for Jest-miljøet
        global: 'readonly', // Definerer "global" som en global variabel i Jest-miljøet
      },
    },
  },
];
