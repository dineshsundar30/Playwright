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


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const { test, expect } = require('@playwright/test');

 
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
   await page.getByRole('button',{name:"Login"}).click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   
   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name:"Add to Cart"}).click();
 
   await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
 
   //await page.pause();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
   await page.getByRole("button",{name :"Checkout"}).click();
 
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
   await page.getByRole("button",{name :"India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
 
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
})
