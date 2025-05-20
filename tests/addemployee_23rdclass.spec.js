import { test, expect } from '@playwright/test';

import logindata from "../testdata/login.json"

const employeedetails={
  firstname:"sai",
  lastname:"s"
}

test('test',{tag:"@smoke"}, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder("Username").fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(employeedetails.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employeedetails.lastname);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

  // delete employeedetails.firstname //if we want to delete the value
  // await page.getByRole('textbox', { name: 'First Name' }).fill(employeedetails.firstname);//here if we cane employee.firstname it will take undefined is the value it will not been available
  // // basically data manuplating purpose we will use the objects


});