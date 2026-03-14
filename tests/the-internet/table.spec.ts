import {test,expect} from '@playwright/test'

test('verify fullname of max due person', async ({page}) =>{

    await page.goto('https://the-internet.herokuapp.com/tables');

    // const tableContents =  await page.locator("#table1 tbody tr td").allTextContents();
    // //print table content
    // console.log(tableContents);

    const dueAmounts = await page.locator("#table1 tbody tr td:nth-child(4)").allTextContents();
    // console.log(dueAmounts);
    //Give array  [ '$50.00', '$51.00', '$100.00', '$50.00' ]  find the index of item has max value?
    const maxDueValue = Math.max(...dueAmounts.map(amount => parseFloat(amount.replace('$', ''))));
    const maxDueIndex = dueAmounts.indexOf('$' + maxDueValue.toFixed(2));
    // console.log(maxDueIndex);
    const firstName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(2)`).textContent();
    const lastName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(1)`).textContent();
    // console.log(`Full name of person with max due: ${firstName} ${lastName}`);
    expect(`${firstName} ${lastName}`).toBe('Jason Doe');

});

test('verify fullname of min due person', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables');

    const dueAmounts = await page.locator("#table1 tbody tr td:nth-child(4)").allTextContents();

    // Tìm giá trị due nhỏ nhất
    const minDueValue = Math.min(...dueAmounts.map(amount => parseFloat(amount.replace('$', ''))));

    // Tìm TẤT CẢ các index có giá trị = min (vì có nhiều người cùng min)
    const minDueIndexes = dueAmounts
        .map((amount, index) => parseFloat(amount.replace('$', '')) === minDueValue ? index : -1)
        .filter(index => index !== -1);

    // Lấy fullname của từng người có min due
    const fullNames = [];
    for (const idx of minDueIndexes) {
        const firstName = await page.locator(`#table1 tbody tr:nth-child(${idx + 1}) td:nth-child(2)`).textContent();
        const lastName = await page.locator(`#table1 tbody tr:nth-child(${idx + 1}) td:nth-child(1)`).textContent();
        fullNames.push(`${firstName} ${lastName}`);
    }

    expect(fullNames).toEqual(["John Smith", "Tim Conway"]);
});