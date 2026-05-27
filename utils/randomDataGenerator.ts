import { faker } from '@faker-js/faker';

export class RandomDataGenerator {

    //method to generate random user data
    static generateRandomUserData() {

    }

    static generateRandomFirstName(): string {
        return faker.person.firstName();
    }
    static generateRandomLastName(): string {
        return faker.person.lastName();
    }

    static generateRandomPhoneNumber(): string {
        return faker.phone.number();
    }

    static generateRandomEmail(): string {
        return faker.internet.email();
    }

    static generateRandomCity(): string {
        return faker.location.city();
    }

    static generateRandomPassword(lenght: number = 8): string {
        return faker.internet.password();
    }

    static generateRandomAddress(): string {
        return faker.location.streetAddress();
    }

    static generateRandomPinCode(): string {
        return faker.location.zipCode();
    }

    static generateFullName(): string {
        return faker.person.fullName();
    }

    static gerRandomUUID(): string {
        return faker.string.uuid();
    }

    static getRandomAlphanumericString(length: number = 10): string {
        return faker.string.alphanumeric(length);
    }

}