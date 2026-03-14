import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
});




/// E[A=t]
/* answer 3 questions:
   * 1. tagname (E): input
   * 2. attributes(name-> A, value -> t ) 
   *      name=username, id=username, type=text
   * 3. text?
   * n/a
   * 
   * Css selector: E[A=t] or [A=t] if A=id => E#t or #t, if A=class => E.t or .t
   */
