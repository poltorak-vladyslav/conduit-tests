import { expect, test } from "@playwright/test";
import { BasePage } from "@pages/base-page";

export class ArticleDetailsPage extends BasePage {

    constructor(page) {
        super(page);
        this.articleTitle = page.locator('.banner h1');
        this.articleContent = page.locator('.article-content p');
        this.articleTags = page.locator('.tag-list .tag-pill');
    }

    async open(articleId) {
        await super.open(`/article/article-title-${articleId}`);
    }

    async assertArticleData(articleData) {
        await test.step(`Assert article info is ${JSON.stringify(articleData)}`, async () => {
            const actualTags = await this.articleTags.allTextContents();
            await expect(this.articleTitle).toHaveText(articleData.title);
            await expect(this.articleContent).toHaveText(articleData.content);
            await expect(actualTags).toEqual(articleData.tags);
        });
    }

    async assertTitleIs(expectedTitle) {
        await test.step(`Assert article title is ${expectedTitle}`, async () => {
            await expect(this.articleTitle).toHaveText(expectedTitle);
        });
    }

    async assertContentIs(expectedContent) {
        await test.step(`Assert article content is ${expectedContent}`, async () => {
            await expect(this.articleContent).toHaveText(expectedContent);
        });
    }

    async assertTagsAre(expectedTags) {
        await test.step(`Assert article tags are ${JSON.stringify(expectedTags)}`, async () => {
            const actualTags = await this.articleTags.allTextContents();
            expect(actualTags).toEqual(expectedTags);
        });
    }
}