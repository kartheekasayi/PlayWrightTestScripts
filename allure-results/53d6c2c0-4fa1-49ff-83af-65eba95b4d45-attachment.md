# Test info

- Name: validate Orange HRM Login functionality >> Add Employee
- Location: E:\playwrightestscripts\tests\withoutlogintest_31stclass.spec.js:8:5

# Error details

```
Error: Error reading storage state from .auth/user.json:
ENOENT: no such file or directory, open 'E:\playwrightestscripts\.auth\user.json'
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | import jobtitledata from "../testdata/addjobtitle.json"
   4 | import employeedetails from "../testdata/addemployee_24thclass.json"
   5 |
   6 | test.describe('validate Orange HRM Login functionality',()=>{
   7 |     
>  8 | test('Add Employee',{tag:"@smoke"}, async ({ page }) => {
     |     ^ Error: Error reading storage state from .auth/user.json:
   9 |
  10 |   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
  11 |
  12 |   await page.getByRole('textbox', { name: 'First Name' }).click();
  13 |   await page.getByRole('textbox', { name: 'First Name' }).fill(employeedetails.firstname);
  14 |   await page.getByRole('textbox', { name: 'Last Name' }).click();
  15 |   await page.getByRole('textbox', { name: 'Last Name' }).fill(employeedetails.lastname);
  16 |   await page.getByRole('button', { name: 'Save' }).click();
  17 |   await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  18 |
  19 | }); 
  20 |
  21 | test('Add job tite',{tag:"@smoke"}, async ({ page }) => {
  22 |     
  23 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
  24 |     const random5Char = Math.random().toString(36).substring(2, 7); // 5 chars 
  25 |
  26 |     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitledata.jobTitle + random5Char)
  27 |
  28 |     await page.locator("//textarea[@placeholder='Type description here']").fill(jobtitledata.jobDescription)
  29 |
  30 |     await page.locator("//button[@type='submit']").click();
  31 |
  32 |     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
  33 |
  34 |
  35 | });
  36 |
  37 | });
  38 |     
  39 |
```