const{test,expect} =require('@playwright/test');



const creds={
    username:"Admin",
    password:"admin123"
}

const jobtitles={
    title1:"SDET Enginner",
    title2:"AI",
    title3:"data analyst"
}//single tetcase 2 times we are running if we just create one more title here title 4 so how many time it is going to run 4 times 
//basicaly this concept is called as a data driven testing

for (let title in jobtitles){
   //console.log(jobtitles[title])instead of this we need to keep entire test
   test(`Verify Add job tile with mandatory fields - ${jobtitles[title]}`, async ({page})=>{
    
    // test.setTimeout(60000) //explicit timeout for only this test
     //navigate to the application
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
 
     
 
     //click on the jobtitle
     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitles[title]);
     
     //click on the jobtitle description
     await page.locator("//textarea[@placeholder='Type description here']").fill("what ever you want");
     //click on the save button
     await page.locator("//button[@type='submit']").click();
     
     //assertion once submit is done
     await expect(page).toHaveURL("/web/index.php/admin/viewJobTitleList");
     
 
 
 
 })
}
