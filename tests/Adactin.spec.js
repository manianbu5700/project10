import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
test('Validate adactin application', async ({ page }) => {
    const login = new LoginPage(page)
    await login.launchUrl()
    await login.enterUsername()
    await login.enterPassword()
    await login.clickButton()

})
