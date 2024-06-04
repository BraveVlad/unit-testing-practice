import { canRide } from "./tallEnoughToRide";

fdescribe("canRide", () => {
    it("can't ride when age is under 4", () => {
        expect(canRide({ age: 3, height: 1.5 })).toBe(false);
    });

    it("can't ride when age is 4", () => {
        expect(canRide({ age: 4, height: 1.5 })).toBe(false);
    });

    it("can't ride when age is above 4 and height is below 1.4", () => {
        expect(canRide({ age: 5, height: 1.3 })).toBe(false);
    });

    it("can ride when age is above 4 and height is 1.4", () => {
        expect(canRide({ age: 5, height: 1.4 })).toBe(true);
    });

    it("can ride when age is above 18 and height is below 1.4", () => {
        expect(canRide({ age: 21, height: 1.3 })).toBe(true);
    });
});