import { test, expect } from '@playwright/test';

test('test-xpath', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator(`//*[@id="username"]`).fill('tomsmith');
    await page.locator(`//*[@id="password"]`).fill('SuperSecretPassword!');
    await page.locator(`//i[contains(text(), "Login")]`).click();
}   );  