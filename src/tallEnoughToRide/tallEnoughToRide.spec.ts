import { canRide } from "./tallEnoughToRide";

// fdescribe("canRide", () => {
// 	it("can't ride when age is under 4", () => {
// 		expect(canRide({ age: 3, height: 1.5 })).toBe(false);
// 	});

// 	it("can't ride when age is 4", () => {
// 		expect(canRide({ age: 4, height: 1.5 })).toBe(false);
// 	});

// 	it("can't ride when age is above 4 and height is below 1.4", () => {
// 		expect(canRide({ age: 5, height: 1.3 })).toBe(false);
// 	});

// 	it("can ride when age is above 4 and height is 1.4", () => {
// 		expect(canRide({ age: 5, height: 1.4 })).toBe(true);
// 	});

// 	it("can ride when age is above 18 and height is below 1.4", () => {
// 		expect(canRide({ age: 21, height: 1.3 })).toBe(true);
// 	});
// });

fdescribe.each([
	[[{ age: 3, height: 1.5 }], [false]],
	[[{ age: 4, height: 1.5 }], [false]],
	[[{ age: 5, height: 1.3 }], [false]],
	[[{ age: 5, height: 1.4 }], [true]],
	[[{ age: 21, height: 1.3 }], [true]],
])(`CanRide`, (visitors, expected) => {
	test(`age: ${visitors[0].age} and height: ${visitors[0].height} can ride: ${expected[0]}`, () => {
		expect(canRide({ age: visitors[0].age, height: visitors[0].height })).toBe(
			expected[0]
		);
	});
});
