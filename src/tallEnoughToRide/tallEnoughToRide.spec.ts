import { Visitors, canRide } from "./tallEnoughToRide";

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

function mapVisitorsAndExpectedResults(
	visitors: Visitors,
	expected: boolean[]
) {}

fdescribe.each([
	// [[{ age: 3, height: 1.5 }], [false]],
	// [[{ age: 4, height: 1.5 }], [false]],
	// [[{ age: 5, height: 1.3 }], [false]],
	// [[{ age: 5, height: 1.4 }], [true]],
	// [[{ age: 21, height: 1.3 }], [true]],
	// FAILING TESTS
	[[{ age: 3, height: 1.5 }], [true]],
	[[{ age: 4, height: 1.5 }], [true]],
	[[{ age: 5, height: 1.3 }], [true]],
	[[{ age: 5, height: 1.4 }], [false]],
	[[{ age: 21, height: 1.3 }], [true]],
])(`CanRide`, (visitors, expected) => {
	test(`Visitors (total: ${visitors.length}): 
    ${visitors.map(
			(visitor, index) =>
				`\nVisitor ${index + 1} age ${visitor.age} height ${
					visitor.height
				} can ride: ${expected[index]}`
		)}`, () => {
		expect(canRide(visitors)).toStrictEqual(expected);
	});
});
