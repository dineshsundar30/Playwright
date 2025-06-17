// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
reporter: 'html',
  use: {

    browserName : 'chromium'
    
  },


};

module.exports = config;    // this also use for auto report opening while test failing