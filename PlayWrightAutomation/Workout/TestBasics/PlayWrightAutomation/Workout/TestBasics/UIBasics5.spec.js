const {test} = require('@playwright/test')


test("sample test 3",async ({browser})=>{
    const context = await browser.newContext()
    const page= await context.newPage()

    const first_Name = page.locator("#firstName")
    const last_Name = page.locator("#lastName")
    const user_Email = page.locator("#userEmail")
    const user_Mobile = page.locator("#userMobile")
    const user_Password = page.locator("#userPassword")
    const confirm_Password = page.locator("#confirmPassword")
    const occupation = page.locator("[formcontrolname='occupation']")
    const check_box = page.locator("[type='checkbox']")
    const gender = page.locator("[value='Male']")
    const Register = page.locator("#login")

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("a.text-reset").click()

    await first_Name.fill("Dinesh")
    await last_Name.fill("kumar")
    await user_Email.fill("dkdatamime2021@gmail.com")
    await user_Mobile.fill("9080040526")
    await user_Password.fill("dinesh@DK309")
    await confirm_Password.fill("dinesh@DK309")
    await occupation.selectOption("3: Engineer")
    await check_box.click()
    await gender.click()

    await Register.click()

    await page.locator('#submit').waitFor();


})


//============================================================================================================================================

test("sample test 4",async ({browser})=>{

    const context = await browser.newContext()
    const page= await context.newPage()


    const user_Email = page.locator("#userEmail")
    const user_Password = page.locator("#userPassword")
    const Login = page.locator("#login")

    const productName = "ZARA COAT 3"
    const productItems = page.locator("div.card-body")
    const Cart = page.locator("li [routerlink*='cart']")

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

    await user_Email.fill("dkdatamime2021@gmail.com")
    await user_Password.fill("dinesh@DK309")
    await Login.click()

    
    await page.locator('text="Login Successfully"').waitFor();

    await productItems.first().waitFor()

    const count = await productItems.count()
    for(let i=0;i<count;++i){
        if(await productItems.nth(i).locator("b").textContent() === productName){
           await productItems.nth(i).locator("[class='btn w-10 rounded']").click()
        }
    }
    
    await Cart.click()
    
    await page.waitForTimeout(10000)



})
