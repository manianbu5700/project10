import { test } from '@playwright/test'
test('validate dropdown', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    //Single Dropdown
    const singleFruit = await page.locator('//select[@id="fruits"]')
    await singleFruit.selectOption({ label: "Mango" })
    const txt = await singleFruit.locator('option:checked').textContent()
    console.log('Show Selected fruite :', txt)
    //Multiple Dropdown
    const superHeros = await page.locator('//select[@id="superheros"]')
    await superHeros.selectOption([{ label: "Thor" }, { value: "im" }, { index: 1 }])
    const superTxt = await superHeros.locator('option:checked').allTextContents()
    console.log("Multiple Superheros selected :", superTxt)
    // await page.waitForTimeout(3000)
})
//dropdown
//index {index:1}
//value {value:"2"}
//label {label:"Pine Apple"}