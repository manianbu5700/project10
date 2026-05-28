import { test } from '@playwright/test'
test('Alert Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    //Simple Alert
    await page.once('dialog', async (dialog) => {
        await console.log(" Print Alert Message:", dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[@class="btn btn-danger"]').click()
    // await page.waitForTimeout(3000)

    //Confirmation Alert
    await page.locator('(//a[@class="analystic"])[2]').click()
    await page.once('dialog', async (dialog) => {
        await dialog.dismiss()
        await console.log("Confirmation Alert :", dialog.message())
    })

    await page.locator('//button[@class="btn btn-primary"]').click()

    //Prompt Alert
    await page.locator('(//a[@class="analystic"])[3]').click()

    await page.once('dialog', async (dialog) => {
        await dialog.accept('Hii Bro')
        await console.log("Prompt Alert :", dialog.message())
    })

    await page.locator('//button[@class="btn btn-info"]').click()


})

