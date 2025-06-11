1. npm init playwright  --> to initiate the playwright project 

2. npx playwright test --> this will run the all test in your directory 

3. if you use only in that test npx playwright test will run only those test 
for example:
test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project.
});

4.  npx playwright test --headed --> this will run script with head mode by default in playwrite is headless

5.  also we can configure that head settings in config file like --> headless : false,
