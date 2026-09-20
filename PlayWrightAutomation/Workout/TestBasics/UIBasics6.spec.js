const { test, expect } = require('@playwright/test');

test('Playwright Special locators', async ({ page }) => {

  // Test timeout - 60 seconds
  test.setTimeout(60000);

  // Action timeout - 10 seconds
  page.setDefaultTimeout(10000);

  await page.goto('https://rahulshettyacademy.com/angularpractice/');

  // getByLabel
  await page.getByLabel('Check me out if you Love IceCreams!').click();          // getByLable only work if that lable and input box wrapped or linked the id refrence else this will not work 

  await page.getByLabel('Employed').check();

  await page.getByLabel('Gender').selectOption('Female');

  await page.getByPlaceholder('Password').fill('abc123');

  // Step-level action timeout - 5 seconds
  await page.getByRole('button', { name: 'Submit' }).click({ timeout: 5000 });

  // Step-level assertion timeout - 10 seconds
  await expect(page.getByText('Success! The Form has been submitted successfully!.')).toBeVisible({ timeout: 10000 });

  await page.getByRole('link', { name: 'Shop' }).click();

  // CSS locator + filter
  await page.locator('app-card').filter({ hasText: 'Nokia Edge' }).getByRole('button').click();

});
