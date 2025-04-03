import { reverseString } from "./reverseString.js";

describe("reverseString", () => {
    test("should reverse a word", () => {
        expect(reverseString("hello")).toMatch("olleh");
    });

    test("should reverse a sentence", () => {
        expect(reverseString("This is a sentence.")).toMatch(".ecnetnes a si sihT");
    });

    test("should reverse numbers", () => {
        expect(reverseString("54321")).toMatch("12345");
    });
})