import { test, expect } from '@playwright/test';

import data from "../testdata/login.json"

const username="Admin"
const password="admin123"

const logininput=["Admin","admin123","Admin1",]

test("Verify login with valid credentials",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.locator("input[name='username']").fill(username)
    await page.waitForTimeout(3000)
    await page.locator("input[type='password']").fill(password)
    await page.locator("button[type='submit']").click();
    
    //Assertions means Verification
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

})

test("Verify login with a valid username and an invalid password",async({page})=>{
    const logincreds=["Admin","admin12"]
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.locator("input[name='username']").fill(logincreds[0])
    await page.locator("input[type='password']").fill(logincreds[1])
    await page.locator("button[type='submit']").click()
    
    //Assertions means Verification
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})

test("Verify login with an invalid username and a valid password",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.locator("input[name='username']").fill(logininput[2])
    await page.locator("input[type='password']").fill(logininput[1])
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