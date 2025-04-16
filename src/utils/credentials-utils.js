import { faker } from '@faker-js/faker';

export function getValidCredentials() {
    return {
        email: process.env.VALID_EMAIL,
        password: process.env.VALID_PASSWORD,
    };
}

export function getInvalidCredentials() {
    return {
        email: process.env.VALID_EMAIL,
        password: faker.internet.password({ length: 12 }),
    };
}