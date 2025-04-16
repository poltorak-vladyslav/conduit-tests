import { faker } from '@faker-js/faker';

export function getNewArticleData(tagsNumber = 0) {
    return {
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(10),
        content: faker.lorem.sentences(4),
        tags: Array.from({ length: tagsNumber }, () => faker.lorem.word())
    };
}