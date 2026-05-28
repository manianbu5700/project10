import { test } from '@playwright/test'
test('WindowHandling using Dynamic xpath', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.locator('(//input[@title="Search for Products, Brands and More"])[1]').fill('iphone 17 pro')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)
    const [newPage] = await Promise.all([context.waitForEvent('page'),
    page.click('//div[text()="Relevance"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbLV col-12-12"]//descendant::div[text()="Apple iPhone 17 Pro (Cosmic Orange, 256 GB)"]')
    ])

    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
})

//Dynamic xpath

//ancestor
//parent
//preceding-sibling
//child
//following-sibling
//descendant
