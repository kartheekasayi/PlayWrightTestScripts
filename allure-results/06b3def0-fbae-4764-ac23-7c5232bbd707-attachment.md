# Test info

- Name: Add job tite
- Location: E:\playwrightestscripts\tests\withoutlogintest_31stclass.spec.js:20:5

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
   6 |
   7 | test('Add Employee',{tag:"@smoke"}, async ({ page }) => {
   8 |
   9 |   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
  10 |
  11 |   await page.getByRole('textbox', { name: 'First Name' }).click();
  12 |   await page.getByRole('textbox', { name: 'First Name' }).fill(employeedetails.firstname);
  13 |   await page.getByRole('textbox', { name: 'Last Name' }).click();
  14 |   await page.getByRole('textbox', { name: 'Last Name' }).fill(employeedetails.lastname);
  15 |   await page.getByRole('button', { name: 'Save' }).click();
  16 |   await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  17 |
  18 | }); 
  19 |
> 20 | test('Add job tite',{tag:"@smoke"}, async ({ page }) => {
     |     ^ Error: Error reading storage state from .auth/user.json:
  21 |     
  22 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
  23 |     const random5Char = Math.random().toString(36).substring(2, 7); // 5 chars 
  24 |
  25 |     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitledata.jobTitle + random5Char)
  26 |
  27 |     await page.locator("//textarea[@placeholder='Type description here']").fill(jobtitledata.jobDescription)
  28 |
  29 |     await page.locator("//button[@type='submit']").click();
  30 |
  31 |     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
  32 |
  33 |
  34 | });
  35 |     
  36 |
```