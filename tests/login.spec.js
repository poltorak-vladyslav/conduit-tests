import { test } from '@fixtures//page-fixtures';
import { getInvalidCredentials, getValidCredentials } from "@utils/credentials-utils";
import { EMAIL_OR_PASSWORD_IS_INVALID } from "@constants/error-messages";

test.describe('Login Feature', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.open();
        await homePage.goToLoginPage();
    })

    test('successful login', async ({ homePage, loginPage }) => {
        const credentials = getValidCredentials();
        await loginPage.login(credentials);
        await homePage.assertUserIsLoggedIn();
    });

    test('failed login', async ({ loginPage }) => {
        const credentials = getInvalidCredentials();
        await loginPage.login(credentials);
        await loginPage.assertErrorMessageIsDisplayed(EMAIL_OR_PASSWORD_IS_INVALID);
    });
})
