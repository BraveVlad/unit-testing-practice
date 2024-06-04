import { Visitors, canRide } from "./tallEnoughToRide";

fdescribe("canRide", () => {
	it("CAN'T ride when age is under 4", () => {
		expect(canRide([{ age: 3, height: 1.5 }])).toEqual([false]);
	});

	it("CAN'T ride when age is 4", () => {
		expect(canRide([{ age: 4, height: 1.5 }])).toEqual([false]);
	});

	it("CAN'T ride when age is above 4 and height is below 1.4", () => {
		expect(canRide([{ age: 5, height: 1.3 }])).toEqual([false]);
	});

	it("CAN ride when age is above 4 and height is 1.4", () => {
		expect(canRide([{ age: 5, height: 1.4 }])).toEqual([true]);
	});

	it("CAN ride when age is above 18 and height is below 1.4", () => {
		expect(canRide([{ age: 21, height: 1.3 }])).toEqual([true]);
	});

	it("CAN'T ride when age is under 4 when accompanied with adult, even if tall enough.", () => {
		expect(
			canRide([
				{ age: 3, height: 1.5 },
				{ age: 18, height: 1.5 },
			])
		).toEqual([false, true]);
	});

	it("CAN ride when age is above 4 but height is below 1.4 when accompanied with adult. any other minor CAN'T ride.", () => {
		expect(
			canRide([
				{ age: 5, height: 1.2 },
				{ age: 3, height: 1.2 },
				{ age: 3, height: 1.5 },
				{ age: 18, height: 1.5 },
			])
		).toEqual([true, false, false, true]);
	});

	it("CAN ride when age is above 4 but height is above 1.4 when accompanied with adult. any other minor CAN'T ride.", () => {
		expect(
			canRide([
				{ age: 5, height: 1.6 },
				{ age: 3, height: 1.2 },
				{ age: 3, height: 1.5 },
				{ age: 18, height: 1.5 },
			])
		).toEqual([true, false, false, true]);
	});
});

/*
not adult, above 4 , under 1.4 with no adult = can't ride
        =true, return false=
            =1=
    1                   -1-
    1           0                          -1-
    1           0                   1               1
    !0          !1                  !0              !0
!isAdult && (!isOldEnough || (!isTallEnough && !isAccompaniedWithAdult))
*/
/*
not adult, above 4 , under 1.4 with  adult = can ride
        =false, return true=
            =0=
    1                   -0-
    1           0                           -0-
    1           0                   1               0
    !0          !1                 !0               !1
!isAdult && (!isOldEnough || (!isTallEnough && !isAccompaniedWithAdult))
*/

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
