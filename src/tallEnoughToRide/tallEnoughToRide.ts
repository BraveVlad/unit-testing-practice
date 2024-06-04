// Test Driven Development
// 0. Create a stub
// 1. Write a failing test
// 2. Write code to make the test pass
// 3. Repeat

export type Visitor = {
	age: number;
	height: number;
};

export function canRide(visitor: Visitor) {
	const isAdult = visitor.age >= 18;
	const isOldEnough = visitor.age > 4;
	const isTallEnough = visitor.height >= 1.4;

	if (!isAdult && (!isOldEnough || !isTallEnough)) {
		return false;
	}

	return true;
}

// if visitor is above 4 yo and accompanied by an adult, they can ride regardless of height.
// export function canRide(visitor: Visitor): boolean ======> export function canRide(visitors: Visitor[]): boolean[]
