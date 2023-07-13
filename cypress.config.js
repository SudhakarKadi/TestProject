const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern:"cypress/e2e/**/loginPage.feature"
   
   
  },
  env: {
    url: 'https://test-vw-1--release-gz7y0.docker2.motocommerce.ca/',
    "grepFilterSpecs": true,
    "grepOmitFiltered": true
    
  },
});
