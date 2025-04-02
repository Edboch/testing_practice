import { capitalize } from "./capitalize.js";

describe("capitalize", () => {
    test("should capitalize a lower case word", () => {
        expect(capitalize('hello')).toMatch('Hello');
    });

    test("should capitalize a lower case sentence", () => {
        expect(capitalize('good morning to you all.')).toMatch('Good morning to you all.');
    });

    test("should not change when word is already capitalized", () => {
        expect(capitalize('Howdy')).toMatch('Howdy');
    });
})

