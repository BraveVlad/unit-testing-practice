// Test Driven Development
// 0. Create a stub
// 1. Write a failing test
// 2. Write code to make the test pass
// 3. Repeat

export type Visitor = {
	age: number;
	height: number;
};
export type Visitors = Visitor[];

function canVisitorRide(visitor: Visitor, isAccompaniedWithAdult: boolean) {
	const isAdult = visitor.age >= 18;
	const isOldEnough = visitor.age > 4;
	const isTallEnough = visitor.height >= 1.4;
	if (
		!isAdult &&
		(!isOldEnough || (!isTallEnough && !isAccompaniedWithAdult))
	) {
		return false;
	}

	return true;
}
export function canRide(visitors: Visitors): boolean[] {
	const isAccompaniedWithAdult = visitors.find((visitor) => visitor.age >= 18)
		? true
		: false;
	const canVisitorsRideResults = visitors.map((visitor) =>
		canVisitorRide(visitor, isAccompaniedWithAdult)
	);
	return canVisitorsRideResults;
}

// if visitor is above 4 yo and accompanied by an adult, they can ride regardless of height.
// export function canRide(visitor: Visitor): boolean ======> export function canRide(visitors: Visitor[]): boolean[]
