import { test } from '@fixtures/page-fixtures';
import { getValidCredentials } from "@utils/credentials-utils";
import { getNewArticleData } from "@utils/article-data-utils";
import { ARTICLE_TITLE_CANNOT_BE_EMPTY } from "@constants/error-messages";

test.describe('Articles Feature', () => {

    test.beforeEach(async ({ homePage, loginPage }) => {
        const credentials = getValidCredentials();
        await homePage.open();
        await homePage.goToLoginPage();
        await loginPage.login(credentials);
        await homePage.goToNewArticlePage();
    })

    test('successfully create an article with all fields', async ({ newArticlePage, articleDetailsPage }) => {
        const newArticleData = getNewArticleData(3);
        await newArticlePage.createArticle(newArticleData);
        await articleDetailsPage.assertArticleData(newArticleData)
    });

    test('try to create an article without mandatory fields', async ({ newArticlePage }) => {
        await newArticlePage.clickPublishArticleButton();
        await newArticlePage.assertErrorMessageIsDisplayed(ARTICLE_TITLE_CANNOT_BE_EMPTY)
    });
})
