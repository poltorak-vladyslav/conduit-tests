import { expect, test } from "@playwright/test";
import { BasePage } from "@pages/base-page";

export class NewArticlePage extends BasePage {

    constructor(page) {
        super(page);
        this.articleTitle = page.getByRole('textbox', { name: 'Article Title' });
        this.articleDescription = page.getByRole('textbox', { name: `What's this article about?` });
        this.articleContent = page.getByRole('textbox', { name: 'Write your article (in markdown)' });
        this.articleTags = page.getByRole('textbox', { name: 'Enter tags' });
        this.publishArticleButton = page.getByRole('button', { name: 'Publish Article' });
        this.errorMessage = page.locator('.error-messages li').nth(1);
    }

    async open() {
        await super.open('/editor');
    }

    async createArticle(articleData) {
        await test.step(`Create article with data ${JSON.stringify(articleData)}`, async () => {
            await this.articleTitle.fill(articleData.title);
            await this.articleDescription.fill(articleData.description);
            await this.articleContent.fill(articleData.content);
            await articleData.tags.forEach(tag => {
                this.articleTags.click();
                this.articleTags.fill(tag);
                this.articleTags.press('Enter')
            });
            await this.publishArticleButton.click();
        });
    }

    async clickPublishArticleButton() {
        await test.step(`Click publish article button`, async () => {
            await this.publishArticleButton.click();
        });
    }

    async assertErrorMessageIsDisplayed(errorMessage) {
        await test.step(`Assert error message '${errorMessage}' is displayed`, async () => {
            await expect(this.errorMessage).toHaveText(errorMessage);
        });
    }
}