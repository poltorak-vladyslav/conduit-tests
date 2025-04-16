import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/login-page';
import { HomePage } from '@pages/home-page';
import { NewArticlePage } from "@pages/new-article-page";
import { ArticleDetailsPage } from "@pages/article-details-page";

export const test = base.extend({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    newArticlePage: async ({ page }, use) => {
        await use(new NewArticlePage(page));
    },
    articleDetailsPage: async ({ page }, use) => {
        await use(new ArticleDetailsPage(page));
    }
});

export { expect } from '@playwright/test';