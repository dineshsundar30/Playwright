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

    browserName : 'chromium',
    headless : false,
    screenshot: 'on',
    trace : 'retain-on-failure',   // it will open log only test is faill, if you want trace for all use 'on'
    
//for full screen
  viewport: null,
  launchOptions: {
    args: ['--start-maximized'],
  },
    
  },


};

module.exports = config;    // this also use for auto report opening while test failing
