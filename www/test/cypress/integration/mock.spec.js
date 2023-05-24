import {faker} from "@faker-js/faker";

console.log("faker", faker);

it("generaten mocks", () => {
    faker.seed();
    const users = cy.writeFile("cypress/fixtures/stories.json", {
        hits: Cypress._.times(5).map((_, k) => {
            return {
                go: {
                    title: `${faker.lorem.words(3)}`,
                    url: `${faker.internet.url()}`,
                    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
                    num_comments: `${faker.datatype.number()}`,
                    points: `${faker.datatype.number()}`,
                    objectID: `${faker.datatype.uuid()}`
                }
            };
        })
    });
    console.log("users", faker.seed(5));
    faker.seed(123);

    const firstRandom = faker.datatype.number();

    // Setting the seed again resets the sequence.
    faker.seed(123);

    const secondRandom = faker.datatype.number();

    console.log(firstRandom === secondRandom, "first", firstRandom, "second", secondRandom);

    const test = cy.readFile("cypress/fixtures/stories.json").then((content) => {
        // content.hits[0].go = {super: "maman"};
        delete content.hits[0];

        console.log("content", content);
    });
});
