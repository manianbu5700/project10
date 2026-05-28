export class LoginPage {
    constructor(page) {
        this.page = page
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.button = page.locator('//input[@id="login"]')

    }
    async launchUrl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUsername() {
        await this.username.fill('Manianbu5700')
    }
    async enterPassword() {
        await this.password.fill('Mani12345')
    }
    async clickButton() {
        await this.button.click()
    }
}