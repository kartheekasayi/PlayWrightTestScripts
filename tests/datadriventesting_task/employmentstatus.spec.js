//import { test, expect } from '@playwright/test';
const{test,expect} =require('@playwright/test');

const creds={
    username:"Admin",
    password:"admin123"
}


const employementname={
    name:"Fulltime",
    name1:"Freelancer",
    name2:"Termination",
    name3:"Removed"
}

for (let name in employementname){

test(`Verify Add employmentstatus with mandatory fields - ${employementname[name]}`, async ({page})=>{

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

//click on employmentstatus
await page.locator("//a[normalize-space(text())='Employment Status']").click()

//click on add button
await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()

//give the employment name

await page.locator("//label[normalize-space(text())='Name']/following::input").fill(employementname[name])

//save button
await page.locator("//button[@type='submit']").click()

//assertion
await expect(page).toHaveURL("/web/index.php/admin/employmentStatus")

})
}