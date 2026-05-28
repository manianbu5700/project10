import { test } from '@playwright/test'
test('validate Automation test practice', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@id="username"]').fill('student')
    await page.pause();
    await page.locator('//input[@name="password"]').fill('Password123')
    await page.locator('//button[text()="Submit"]').click()
})

//Playwright support by default corss browser testing--------->Run test in multiple browsers(chromium,firefox,webkit)
//By default it support parallel execution-------->It Runs multiple files
//By default it run the test headless mode--------->server mode

//xpath------>For address the location from back end server
//id------> //input[@id="username"]
//name-------->//input[@name="username"]
//class------->//button[@class="btn"]
//attribute and value------->//input[@type="text"]
//text---------->//button[text()="Submit"]

//Task Day1 Use instagram automate the login functionality