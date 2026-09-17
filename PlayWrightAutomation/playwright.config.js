// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',    /* to run test's from any diectory we have to use    testDir: '.',   
  /* Maximum time one test can run for. */
  
  timeout: 30 * 1000,
  retries :0,
  expect: {
  
    timeout: 5000
  },
  
reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium',
    headless : false,
    screenshot: 'on',
    trace : 'retain-on-failure',   // it will open log only test is faill, if you want trace for all use 'on'
    navigationtTimeout: 30 * 1000,
    actionTimeout: 10000,
    
//for full screen
  viewport: null,
  launchOptions: {
    args: ['--start-maximized'],
  },
    
  },


};

module.exports = config;    // this also use for auto report opening while test failing
