import { Visitors, canRide } from "./tallEnoughToRide";

fdescribe("canRide", () => {
	it("can't ride when age is under 4", () => {
		expect(canRide([{ age: 3, height: 1.5 }])).toStrictEqual([false]);
	});

	it("can't ride when age is 4", () => {
		expect(canRide([{ age: 4, height: 1.5 }])).toStrictEqual([false]);
	});

	it("can't ride when age is above 4 and height is below 1.4", () => {
		expect(canRide([{ age: 5, height: 1.3 }])).toStrictEqual([false]);
	});

	it("can ride when age is above 4 and height is 1.4", () => {
		expect(canRide([{ age: 5, height: 1.4 }])).toStrictEqual([true]);
	});

	it("can ride when age is above 18 and height is below 1.4", () => {
		expect(canRide([{ age: 21, height: 1.3 }])).toStrictEqual([true]);
	});
});

// fdescribe.each([
// 	[[{ age: 3, height: 1.5 }], [false]],
// 	[[{ age: 4, height: 1.5 }], [false]],
// 	[
// 		[
// 			{ age: 3, height: 1.5 },
// 			{ age: 18, height: 1.5 },
// 		],
// 		[false, true],
// 	],
// 	[
// 		[
// 			{ age: 5, height: 1.2 },
// 			{ age: 18, height: 1.5 },
// 		],
// 		[true, true],
// 	],
// 	[[{ age: 5, height: 1.3 }], [false]],
// 	[[{ age: 5, height: 1.4 }], [true]],
// 	[[{ age: 21, height: 1.3 }], [true]],
// 	// FAILING TESTS
// 	// [[{ age: 3, height: 1.5 }], [true]],
// 	// [[{ age: 4, height: 1.5 }], [true]],
// 	// [[{ age: 5, height: 1.3 }], [true]],
// 	// [[{ age: 5, height: 1.4 }], [false]],
// 	// [[{ age: 21, height: 1.3 }], [true]],
// ])(`CanRide`, (visitors, expected) => {
// 	test(`Visitors (total: ${visitors.length}):
//     ${visitors.map(
// 			(visitor, index) =>
// 				`\nVisitor ${index + 1} age ${visitor.age} height ${
// 					visitor.height
// 				} can ride: ${expected[index]}`
// 		)}`, () => {
// 		expect(canRide(visitors)).toStrictEqual(expected);
// 	});
// });
