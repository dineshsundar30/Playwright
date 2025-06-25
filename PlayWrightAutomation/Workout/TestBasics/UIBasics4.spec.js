test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();                                         
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(                                      //handling new pages we can use this promise all code in java will return 3 state pending,error,fullfiled
   [                                                                       // if we use this Promise.all we can run that inside lines of code parallelly and it's will return the pages as array
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();                // here we can use that page to access the eleement newPage
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").fill(domain);                             // and if you want to access the main page use page.
    console.log(await page.locator("#username").textContent());
 
 })
