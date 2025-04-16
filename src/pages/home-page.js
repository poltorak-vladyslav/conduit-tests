import { expect, test } from "@playwright/test";
import { BasePage } from "@pages/base-page";

export class HomePage extends BasePage {

    constructor(page) {
        super(page);
        this.profilePic = page.locator('.user-pic');
        this.loginButton = page.getByRole('link', { name: 'Sign in' });
        this.newArticleButton = page.getByRole('link', { name: 'New Article' })
    }

    async open() {
        await super.open('/');
    }

    async goToLoginPage() {
        await test.step(`Go to login page`, async () => {
            await this.loginButton.click();
        });
    }

    async goToNewArticlePage() {
        await test.step(`Go to new article page`, async () => {
            await this.newArticleButton.click();
        });
    }

    async assertUserIsLoggedIn() {
        await test.step(`Assert user is logged in`, async () => {
            await expect(this.profilePic).toBeVisible();
        });
    }
}