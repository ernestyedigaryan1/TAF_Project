import { Page } from "@playwright/test";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
    this.page = page;
    }

    async goto(url: string) {
        if (url === 'web') {
            await this.page.goto('https://reportportal.epam.com/');
        }
        if (url === 'local') {
            await this.page.goto('http://localhost:5000');
        }
    }
}
