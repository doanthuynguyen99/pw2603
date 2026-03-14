import { test, expect } from '@playwright/test';

test('test-css', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator(`#username`).fill('tomsmith');
  await page.locator(`#password`).fill('SuperSecretPassword!');
  await page.locator(`i:has-text("Login")`).click();
});