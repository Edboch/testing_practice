import { analyzeArray } from "./analyzeArray.js"

describe("analyzeArray", () => {
    test("should calculate average", () => {
        expect(analyzeArray([1,2,3])).toMatchObject({average : 2});
    })

    test("should calculate min", () => {
        expect(analyzeArray([1,2,3])).toMatchObject({min : 1});
    })

    test("should calculate max", () => {
        expect(analyzeArray([1,2,3])).toMatchObject({max : 3});
    })

    test("should calculate length", () => {
        expect(analyzeArray([1,2,3])).toMatchObject({length: 3});
    })
})