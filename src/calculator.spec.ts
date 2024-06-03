import { error } from "console";
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
	test(" 1 / 1 = 1", () => {
		expect(divide(1, 1)).toBe(1);
	});

	test("4 / 2 = 2", () => {
		expect(divide(4, 2)).toBe(2);
	});

	test("2 / 4 = 0.5", () => {
		expect(divide(2, 4)).toBe(0.5);
	});

	test("2 / 0.5 = 4", () => {
		expect(divide(2, 0.5)).toBe(4);
	});

	test("0.5 / 2 = 0.25", () => {
		expect(divide(0.5, 2)).toBe(0.25);
	});

	test("10 / -2 = -5", () => {
		expect(divide(10, -2)).toBe(-5);
	});

	test("-10 / 2 = -5", () => {
		expect(divide(-10, 2)).toBe(-5);
	});

	test("-10 / -2 = 5", () => {
		expect(divide(-10, -2)).toBe(5);
	});

	test("0 / 5 = 0", () => {
		expect(divide(0, 5)).toBe(0);
	});

	test("1 / 0 = Infinity", () => {
		expect(divide(1, 0)).toBe(Infinity);
	});
});
