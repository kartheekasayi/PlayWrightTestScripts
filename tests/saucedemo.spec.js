import {test,expect} from '@playwright/test';

import data from "../testdata/saucedemo.json"


test('Verify Enter the login credentials',async({page})=>{
    
    //Navigate  to the application
    await page.goto("https://www.saucedemo.com/v1/index.html");
    console.log("launching the application")
    
    await page.locator("input[data-test='username']").fill(data.username);
   
    await page.locator("input[type='password']").fill(data.password);
    await page.locator("input[type='submit']").click();

    //Assertion for dasboard page
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");

})

test('Verify invalid username and valid password',async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/index.html");
    console.log("launching the application")

    await page.locator("input[data-test='username']").fill(data.username2);
   
    await page.locator("input[type='password']").fill(data.password);
    await page.locator("input[type='submit']").click();

    //Assertion
    await expect(page.locator("//h3[@data-test='error']")).toBeVisible()

})

test('Verify valid username and password',async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/index.html");
    console.log("launching the application")

    await page.locator("input[data-test='username']").fill(data.username3);
   
    await page.locator("input[type='password']").fill(data.password);
    await page.locator("input[type='submit']").click();

    //Assertion
    
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
})


test('Verify valid username and valid password',async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/index.html");
    console.log("launching the application")

    await page.locator("input[name='user-name']").fill(data.username4);
   
    await page.locator("input[type='password']").fill(data.password);
    await page.locator("input[type='submit']").click();

    //Assertion
    
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
    

})
