import { add, divide } from "./calculator";

describe("add", () => {
    test("1 + 1 = 2", () => {
        expect(add(1, 1)).toBe(2);
    });

    test("1 + 2 = 3", () => {
        expect(add(1, 2)).toBe(3);
    });

    test("2 + 1 = 3", () => {
        expect(add(2, 1)).toBe(3);
    });

    test("2 + 0 = 2", () => {
        expect(add(2, 0)).toBe(2);
    });

    test("2 + (-1) = 1", () => {
        expect(add(2, -1)).toBe(1);
    });
});

describe("divide", () => {
    test("4 / 0 throws an error", () => {
        expect(() => divide(5, 0)).toThrow("Can't divide by zero");
    });

    test.each([
        [2, 1, 2],
        [1, 2, 0.5],
        [-2, 1, -2],
        [1, -2, -0.5],
        [0, 2, 0],
    ])("%i / %i = %f", (first, second, expected) => {
        expect(divide(first, second)).toBe(expected);
    });
});

// 1. provide confidence
// 2. enable running code easily
// 3. documenting the code