import { test, expect } from '@playwright/test';

import data from "../testdata/login.json"

test("Verify login with valid credentials",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.locator("input[name='username']").fill(data.username)
    await page.waitForTimeout(3000)
    await page.locator("input[type='password']").fill(data.password)
    await page.locator("button[type='submit']").click();
    
    //Assertions means Verification
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

})

test("Verify login with a valid username and an invalid password",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin12")
    await page.locator("button[type='submit']").click()
    
    //Assertions means Verification
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})

test("Verify login with an invalid username and a valid password",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.locator("input[name='username']").fill("Admin1")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    
    //Assertions means Verification
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})

test("Verify login with an invalid username and a invalid password",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.locator("input[name='username']").fill("Admin1")
    await page.locator("input[type='password']").fill("admin1234")
    await page.locator("button[type='submit']").click()
    
    //Assertions means Verification
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible() // this will actually element is visible or not
//or
await expect(page.locator("(//p[contains(@class,'oxd-text oxd-text--p')])[1]")).toHaveText("Invalid credentials");//this will actually text is displayed on the screen
})