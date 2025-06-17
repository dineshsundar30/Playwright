const {test,expect} = require('@playwright/test');  

test.only('Browser context playwright Test', async ({browser})=>                  //function() insted of this we can use ()=> for anonymous function
{
//

const context = await browser.newContext();
const page =  await context.newPage();

const signIn = page.locator("#signInBtn");                    //insted of using a locator again and again we can declear globally and reuse that

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());

await page.locator('input#username').fill('rahulshettyacademy');
await page.locator('input#password').fill('akfakfaad');

await page.locator("input[id='signInBtn']").click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect')

await page.locator('input#password').fill("");
await page.locator('input#password').fill("learning");
await signIn.click();                                              // reusing the locator insted of -> await page.locator("#signInBtn").click(); 

console.log(await page.locator(".card-body a").first().textContent());
console.log(await page.locator(".card-body a").nth(1).textContent());

}



);

test('Page playwright test',async ({page})=>

{

await page.goto('https://financialgear.blogspot.com/2024/12/test.html');
console.log(await page.title());
await expect(page).toHaveTitle('Selenium Hanson Practice');

}

);

