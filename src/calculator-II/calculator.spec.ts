import { calculate } from "./calculator";

describe("calculator", () => {
    it("calls the correct operation on the given numbers", () => {
        const actual = calculate("1", "+", "2");

        expect(actual).toBe(3);
    });
});
