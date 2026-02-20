import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://formy-project.herokuapp.com/')
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
})


test.describe('all links',{tag:'@all_links'} , () => {
    test.describe('valid links on homepage', {tag:'@validlinks'}, () => {
    test('test step 1', async ({ page }) => {
    //await page.goto('http://formy-project.herokuapp.com/')
    await page.getByRole('link', { name: 'Autocomplete' }).click();
    //await page.waitForTimeout(3000);
});

test('test step 2', async ({ page }) => {
   // await page.goto('http://formy-project.herokuapp.com/')
    await page.getByRole('link', { name: 'Buttons' }).click();
   // await page.waitForTimeout(3000);
});

test('test step 3', async ({ page }) => {
   // await page.goto('http://formy-project.herokuapp.com/')
    await page.getByRole('link', { name: 'Checkbox' }).click();
    //await page.waitForTimeout(3000);
});

test('test step 4', async ({ page }) => {
    //await page.goto('http://formy-project.herokuapp.com/')
    await page.getByRole('link', { name: 'Datepicker' }).click();
    //await page.waitForTimeout(3000);
});

});

});
 

