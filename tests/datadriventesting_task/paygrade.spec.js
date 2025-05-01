//import { test, expect } from '@playwright/test';
const{test,expect} =require('@playwright/test');

const creds={
    username:"Admin",
    password:"admin123"
}


const paygrade={
    name:"payer1",
    name1:"payg2",
    name2:"payer3"
}

for (let name in paygrade){

test(`Verify Add paygrade with mandatory fields - ${paygrade[name]}`, async ({page})=>{

await page.goto('/web/index.php/auth/login');
console.log("launching the application")

//enter username and password
await page.locator("input[name='username']").fill(creds.username)
console.log("entering username")
await page.waitForTimeout(3000)
await page.locator("input[type='password']").fill(creds.password)
console.log("entering password")

//click on the login button
await page.locator("button[type='submit']").click()
console.log("clicking on login button")
//Assertions means Verification
await expect(page).toHaveURL("/web/index.php/dashboard/index",{timeout:15000});

//menu item
await expect (page.locator('ul[class="oxd-main-menu"]')).toBeVisible();

//click on admin module
await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

//click on the job
await page.locator("//li[contains(.,'Job')]").click();

//click on paygrades
await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[2]").click()

//click on add button
await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()

//give the paygrade name

await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(paygrade[name])

//save button
await page.locator("//button[@type='submit']").click()

//assertion
//await expect(page).toHaveURL("/web/index.php/admin/payGrade/18",{timeout:15000})

})
}