import { caesarCipher } from "./casesarCipher.js"

describe("caesarCipher", () => {
    test("should shift letter 3 times", () => {
        expect(caesarCipher("a",3)).toMatch("d");
    })

    test("should wrap around from z to a", () => {
        expect(caesarCipher("xy",4)).toMatch("bc");
    })

    test("should preserve letter case after shift", () => {
        expect(caesarCipher("hELlo",3)).toMatch("kHOor");
    })

    test("should keep non alphabetical characters the same", () => {
        expect(caesarCipher("Hello, World!",3)).toMatch("Khoor, Zruog");
    })
})