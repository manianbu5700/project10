//Webtable
import { test, expect } from '@playwright/test'
test('webtable', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')

    //Row data
    const rowData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
    console.log(rowData)
    await expect(rowData).toEqual([
        'Tiger Nixon',
        'System Architect',
        'Edinburgh',
        '61',
        '2011/04/25',
        '$320,800'
    ])

    //column data
    const columnData = await page.locator('//table[@id="table02"]//tbody//tr//td[2]').allTextContents()
    console.log(columnData)
    await expect(columnData).toContain('Developer')

    //single data
    const singleData = await page.locator('//table[@id="table02"]//tbody//tr[2]//td[3]').textContent()
    console.log(singleData)
    await expect(singleData).toEqual('Tokyo')
})