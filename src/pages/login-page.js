import { expect, test } from "@playwright/test";
import { BasePage } from "@pages/base-page";

export class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
        this.errorMessage = page.locator('.error-messages');
    }

    async open() {
        await super.open('/user/login');
    }

    async login(credentials) {
        await test.step(`Login with credentials ${JSON.stringify(credentials)}`, async () => {
            await this.emailField.fill(credentials.email);
            await this.passwordField.fill(credentials.password);
            await this.signInButton.click();
        });
    }

    async assertErrorMessageIsDisplayed(errorMessage) {
        await test.step(`Assert error message '${errorMessage}' is displayed`, async () => {
            await expect(this.errorMessage).toHaveText(errorMessage);
        });
    }
}