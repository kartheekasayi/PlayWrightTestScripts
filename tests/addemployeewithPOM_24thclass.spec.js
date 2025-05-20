const { test, expect } = require('@playwright/test');

import { dashBoardPage } from '../pageObjects_24thclass/dashboardpage_24thclass.po';
import { loginPage } from '../pageObjects_24thclass/loginpage.po.js';
import { addEmployeePage } from "../pageObjects_24thclass/addEmployeePage_24thclass.po.js"

import logindata from "../testdata/login.json"
import addemployeedata from "../testdata/addemployee_24thclass.json"

test("Verify Add Employee", async ({ page }) => {

    const login = new loginPage(page)
    const dashborad = new dashBoardPage(page)
    const addemp = new addEmployeePage(page)

    await login.launchApplication()
    await login.loginwithCreds(logindata.username, logindata.password)
    await login.verifyLoginSuccess()
    await dashborad.clickonPIM()
    await addemp.addEmployee(addemployeedata.firstname, addemployeedata.lastname)
    await addemp.verifyEmployeecreated()

})