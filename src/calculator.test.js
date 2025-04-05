import { calculator } from "./calculator.js"

describe("calculator", () => {
    test("should add two numbers", () => {
        expect(calculator.add(1,2)).toBe(3);
    });
    
    test("should add floats", () => {
        expect(calculator.add(0.1,0.2)).toBeCloseTo(0.3);
    });

    test("should add negative number", () => {
        expect(calculator.add(10,-3)).toBe(7);
    });

    test("should not change when adding 0", () => {
        expect(calculator.add(10,0)).toBe(10);
    });

    test("should subtract two numbers", () => {
        expect(calculator.subtract(1,2)).toBe(-1);
    });

    test("should subtract floating point numbers", () => {
        expect(calculator.subtract(0.21,0.2)).toBeCloseTo(0.01);
    });

    test("should subtract negative number", () => {
        expect(calculator.subtract(10,-3)).toBe(13);
    });

    test("should not change when subtracting 0", () => {
        expect(calculator.subtract(10,0)).toBe(10);
    });

    test("should multiply two numbers", () => {
        expect(calculator.times(1,2)).toBe(2);
    });
    
    test("should times floats", () => {
        expect(calculator.times(0.1,0.2)).toBeCloseTo(0.02);
    });

    test("should times negative number", () => {
        expect(calculator.times(10,-3)).toBe(-30);
    });

    test("should be 0 when multiplying 0", () => {
        expect(calculator.times(10,0)).toBe(0);
    });

    test("should divide two numbers", () => {
        expect(calculator.divide(4,2)).toBe(2);
    });
    
    test("should divide floats", () => {
        expect(calculator.divide(0.1,0.2)).toBeCloseTo(0.5);
    });

    test("should divide negative number", () => {
        expect(calculator.divide(30,-3)).toBe(-10);
    });

    test("should not be able to divide by 0", () => {
        expect(() => {calculator.divide(10,0)}).toThrow("Cannot divide by 0");
    });

    test("should be 0 when dividying 0 by a number", () => {
        expect(calculator.divide(0,10)).toBe(0);
    });

    test("should throw error when input not a number", () => {
        expect(() => {calculator.add(1)}).toThrow("Both numbers must be numbers");
    });
})