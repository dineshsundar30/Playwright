const {test,expect} = require('@playwright/test');  

 test.only('@Web UI Controls', async ({page})=>
 {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");

    // Select dropdown
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");                    // Here we need to pass the Value

    
    await page.locator(".radiotextsty").last().click();  // this .last() will select the last element 
    await page.locator("#okayBtn").click();
   // await page.pause();                            //this will use to pause the browser
    
    console.log(await page.locator(".radiotextsty").last().isChecked());  // in playwright this will just use to print the true or false 
    await expect(page.locator(".radiotextsty").last()).toBeChecked();     // .toBeChecked() we can use this for assertions whether it's checked
    await page.locator("#terms").click();                            
    await expect( page.locator("#terms")).toBeChecked();

    await page.locator("#terms").uncheck();                               // this .uncheck() will check it's unchecked or not but we can use for directly to assert 
    expect( await page.locator("#terms").isChecked()).toBeFalsy();                  // but we can use .isChecked() it will return true or false then we can use that assert with .toBeFalsy() 
    
    // this .toHaveAttribute will use to check that attribute and attribute value have that for that particular element 
            //useing this we can also check the password is masked or not if that element type is password that is masked correctly
    await expect(documentLink).toHaveAttribute("class","blinkingText");  

});
