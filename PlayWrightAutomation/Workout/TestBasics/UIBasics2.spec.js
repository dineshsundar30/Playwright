test('@Web Client App login', async ({ page }) => {

   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("anshika@gmail.com");
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');          //--> if that website is useing the services we can use this so that all the services all callled in network successfully
   await page.locator(".card-body b").first().waitFor();  //--> other method to wait for that to load .waitFor() will work for only single element so here we are using .first()
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})
