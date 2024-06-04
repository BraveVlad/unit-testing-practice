import { multiply } from "./operations";
import { getOperation } from "./operationsFactory";

describe("operations factory", () => {
    test("* returns the correct function", () => {
        const actual = getOperation("*");

        expect(actual).toBe(multiply);
    });
});