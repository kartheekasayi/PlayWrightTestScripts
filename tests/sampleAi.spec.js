const { test, expect } = require('@playwright/test');

test('Login test', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://demoqa.com/text-box');
    await page.getByPlaceholder('Full Name').click();
    await page.getByPlaceholder('Full Name').fill('John Doe');
    await page.getByPlaceholder('Full Name').press;
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').fill('sai@gmail.com');
    await page.getByPlaceholder('name@example.com').press('Tab');
    await page.getByPlaceholder('Current Address').click();
    await page.getByPlaceholder('Current Address').fill('123 Main St');
    await page.getByPlaceholder('Current Address').press('Tab');
    await page.locator('#permanentAddress').click();
    await page.locator('#permanentAddress').fill('456 Elm St');
    await page.locator('#permanentAddress').press('Tab');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('John Doe')).toBeVisible();

   
    
});