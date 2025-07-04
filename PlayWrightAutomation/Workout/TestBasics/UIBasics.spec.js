const {test,expect} = require('@playwright/test');  
// js is synchronous so we need to use async befor function and use await to execute test step by step
// if we use page fixture we don't have to declear the browser and newpage here

test.only('Browser context playwright Test', async ({browser})=>                  //function() insted of this we can use ()=> for anonymous function
{
//

const context = await browser.newContext();
const page =  await context.newPage();

const signIn = page.locator("#signInBtn");                    //insted of using a locator again and again we can declear globally and reuse that
const cardTitles =  page.locator(".card-body a");

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());

await page.locator('input#username').fill('rahulshettyacademy');
await page.locator('input#password').fill('akfakfaad');

await page.locator("input[id='signInBtn']").click();
console.log(await page.locator("[style*='block']").textContent());               //---> extracting the text form element
await expect(page.locator("[style*='block']")).toContainText('Incorrect')        //--> assertions

await page.locator('input#password').fill("");
await page.locator('input#password').fill("learning");
await signIn.click();                                              // reusing the locator insted of -> await page.locator("#signInBtn").click(); 

console.log(await cardTitles.first().textContent());               //--> to work with multiple element's the where need to take the specfie element from locator
console.log(await cardTitles.nth(1).textContent());

const allTitles = await cardTitles.allTextContents();            //--> this allTextContents() don't have auto wait like click so if you use this you will get empty array
   
console.log(allTitles);
}



);

test('Page playwright test',async ({page})=>

{

await page.goto('https://financialgear.blogspot.com/2024/12/test.html');
console.log(await page.title());
await expect(page).toHaveTitle('Selenium Hanson Practice');

}

);

