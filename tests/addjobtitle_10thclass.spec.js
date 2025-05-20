import{test,expect} from '@playwright/test';

import data from "../testdata/login.json"
import jobtitledata from "../testdata/addjobtitle.json"

const creds={
    username:"Admin",
    password:"admin123"
}
test('Verify Add jobe tile with mandatory fields',{tag:"@smoke"}, async ({page})=>{
    
   // test.setTimeout(60000) //explicit timeout for only this test
    //navigate to the application
    await page.goto('/web/index.php/auth/login');
    console.log("launching the application")

    // //enter username and password
    // await page.locator("input[name='username']").fill(data.username)
    // console.log("entering username")
    // await page.waitForTimeout(3000)
    // await page.locator("input[type='password']").fill(data.password)
    // console.log("entering password")

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


    await expect (page.locator('ul[class="oxd-main-menu"]')).toBeVisible();
   
    //click on admin module
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
    
    //click on the job
    await page.locator("//li[contains(.,'Job')]").click();
    //click on the jobtitle
    await page.locator("//a[normalize-space(text())='Job Titles']").click();
    //click on the add button
    await page.locator("//button[contains(.,'Add')]").click();
    
    //assertion for jobtitle
    await expect(page).toHaveURL("/web/index.php/admin/saveJobTitle")

    const random5Char=Math.random().toString(36).substring(2,7); //random characters at the last along with this we have to give whereever is needed

    //click on the jobtitle
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitledata.jobTitle+random5Char);
    
    //click on the jobtitle description
    await page.locator("//textarea[@placeholder='Type description here']").fill(jobtitledata.jobDescription);
    //click on the save button
    await page.locator("//button[@type='submit']").click();
    
    //assertion once submit is done
    await expect(page).toHaveURL("/web/index.php/admin/viewJobTitleList");
    



})