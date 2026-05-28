//Frame Handling
import { test } from '@playwright/test'
test('Frame Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const frame = await page.frameLocator('//iframe[@id="singleframe"]')
    await frame.locator('//input[@type="text"]').fill('HiiBro')

    await page.locator('(//a[@class="analystic"])[2]').click()

    const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await innerFrame.locator('//input[@type="text"]').fill('Hello Buddy')
    await page.waitForTimeout(3000)
})