const{test,expect}=require('@playwright/test');
exports.loginPage=class loginPage{
    //constructor
 constructor(page){
    this.page=page
    this.logo=page.locator("img[alt='company-branding']")
    this.usernameInput=page.locator('//input[@name="username"]')
    this.passwordInput=page.locator('input[type="password"]')
    this.loginButton=page.locator('button[type="submit"]')
    this.loginErrorMessage=page.getByText("Invalid credentials")
    this.admin=page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
    this.job=page.locator('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]')
    this.jobtitles=page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[1]')
    this.jobtitles=page.getByText('Job Titles')
    this.add=page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]')
    this.jobtitle=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
    this.jobspecification=page.locator('[placeholder="Type description here"]')
    this.uploadfile=page.locator('input[type="file"]')
    this.save=page.locator('//button[@type="submit"]')


 }
 async launchApplication(){
    await this.page.goto("/web/index.php/auth/login")   
}

//assertion
async verifyLogo(){
    await expect(this.logo).toBeVisible()
}

async loginwithCreds(username,password){
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
}
async verifyErrorMessage(){
    await expect(this.loginErrorMessage).toBeVisible()
}

async verifyLoginSuccess(){
    await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
}

async clickonAdmin(){
    await this.admin.click()
}
async clickonJob(){
    await this.job.click()
}
async clickonJobtitles(){
    await this.jobtitles.click()
}
async clickonAdd(){
    await this.add.click()
}
async fillJobtitle(jobtitle){
    await this.jobtitle.fill(jobtitle)
}
async fillJobspecification(jobspecification){
    await this.jobspecification.fill(jobspecification)
}

// async uploadFile(filePath){
//     const fileToUpload = path.join(__dirname, '..', 'testdata', 'files', 'demo.txt');
//     await this.uploadfile.setInputFiles(fileToUpload)
// }
async clickonSave(){
    await this.save.click()
}

async verifyjobtitleissuccess(){
    await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
}


}