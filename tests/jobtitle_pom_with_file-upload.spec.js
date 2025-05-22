const { test, expect } = require('@playwright/test');

import { loginPage } from "../pageObjects_24thclass/loginpage.po.js"

import logindata from "../testdata/login.json"
//import jobtitledata from "../testdata/jobtitle.json"

const fs=require('fs')
const path=require('path');


let page;

let login;

test.beforeEach(async ({browser})=>{

    page = await browser.newPage()

   login = new loginPage(page)

  await  login.launchApplication()

  await login.verifyLogo()

})

test("Verify login with valid credentials", async () =>{
  
    await login.loginwithCreds(logindata.username, logindata.password)

    await login.verifyLoginSuccess()
     
    await login.clickonAdmin()
    await login.clickonJob()
    await login.clickonJobtitles()
    await login.clickonAdd()
    const random5Char=Math.random().toString(36).substring(2,7);
    await login.fillJobtitle("testing"+random5Char)
    await login.fillJobspecification("description"+random5Char)

    //await login.uploadFile()

    await page.locator('input[type="file"]').setInputFiles('./testdata/files/demo.txt')
    
    await login.clickonSave()
    await expect(page.getByText("Successfully Saved")).toBeVisible()
    await login.verifyjobtitleissuccess()
    await page.close()
    //await browser.close()

    
})
