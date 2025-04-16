import { test } from "@playwright/test";

export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await test.step(`Open url ${url}`, async () => {
            await this.page.goto(url);
        });
    }
}