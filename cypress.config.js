import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(/*on, config*/) {
      // implement node event listeners here
    },
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://127.0.0.1:5500', 
    clearCookiesBeforeEach: true,
    clearLocalStorageBeforeEach: true,
  },
});
