const { test, expect } = require('@playwright/test');

exports.addjobtitlePage = class addjobtitlePage {

    constructor(page) {

        this.page = page
        this.admin=page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
        this.jobs= page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]")
        this.job=page.locator("(//ul[@role='menu']//li)[1]")
        this.addjobtitle = page.locator("//button[contains(.,'Add')]")
        // this.JobT = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        // this.jobdesc = page.locator("//textarea[@placeholder='Add note']")
        // this.savebutton=page.locator("//button[@type='submit']")
        this.jobt=page.locator("(//span[normalize-space(text())='Configuration']/following::input)[1]")
        this.jobdec = page.locator("//textarea[@placeholder='Add note']")
        this.savebutton=page.locator("//button[@type='submit']")

    }
    async addjob(jobt,jobdec){
        await this.admin.click()
        await this.jobs.click()
        await this.job.click()
        await this.addjobtitle.click()
        await this.jobt.fill(jobtitle)
        await this.jobdec.fill(jobdec)
        await this.savebutton.click()
    }
    

}