import { test, expect } from '@playwright/test';


test('learn pw on website formy project', async ({ page }) => {
    await page.goto('http://formy-project.herokuapp.com/')
    
   await page.getByRole('link', { name: 'Autocomplete' }).click();
    await page.waitForTimeout(3000);
    // await page.locator('[href="/autocomplete"]').nth(1).click();
    // validasi - autocomplete page
    await expect(page).toHaveURL('http://formy-project.herokuapp.com/autocomplete');
    //menggunakan locator playwright ui
   //await page.getByPlaceholder('Enter address').fill('Sudirman street')
   //id >> # >> #autocomplete
   //class >> . >> .form-control
   //atribut >> [] >> [id="autocomplete"] or type
   //class >> box  >> duplicate ? page.locator('.box').first() / .last()
   await page.locator('[id="autocomplete"]').fill('Sudirman street')
   await page.getByPlaceholder('Street address',{ exact: true }).fill('Sudirman street')
   await page.getByPlaceholder('Street address 2').fill('Sudirman street 3')
   await page.getByPlaceholder('City').fill('Jakarta')
   await page.getByPlaceholder('State').fill('DKI Jakarta')
   await page.getByPlaceholder('Zip code').fill('12345')
   await page.getByPlaceholder('Country').fill('Indonesia')
});
