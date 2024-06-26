import { isValidCreditCardNumber } from "./validateCreditCard";

describe("isValidCreditCardNumber", () => {
	it("Valid card number: 4532015112830366", () =>
		expect(isValidCreditCardNumber("4532015112830366")).toEqual(true));

	it("Invalid card number: 4532015112830367", () =>
		expect(isValidCreditCardNumber("4532015112830367")).toEqual(false));

	it("Valid card number with spaces: 4532 0151 1283 0366", () =>
		expect(isValidCreditCardNumber("4532 0151 1283 0366")).toEqual(true));

	it("Valid card number with dashes: 4532-0151-1283-0366", () =>
		expect(isValidCreditCardNumber("4532-0151-1283-0366")).toEqual(true));

	it("Valid card number with mixed seperators: 4532-0151 1283 0366", () =>
		expect(isValidCreditCardNumber("4532-0151 1283 0366")).toEqual(true));

	it("Valid card number with trailing spaces:     4532015112830366      ", () =>
		expect(isValidCreditCardNumber("    4532015112830366      ")).toEqual(
			true
		));

	it("Valid card number with newline and tab characters: 4532015\\t112830366\\n", () =>
		expect(isValidCreditCardNumber("4532015\t112830366\n")).toEqual(true));

	it("Invalid card number with incorrect length (15): 453201511283036", () =>
		expect(isValidCreditCardNumber("453201511283036")).toEqual(false));

	it("Valid short card number: 79927398713", () =>
		expect(isValidCreditCardNumber("79927398713")).toEqual(true));

	it("Invalid short card number: 79927398710", () =>
		expect(isValidCreditCardNumber("79927398710")).toEqual(false));

	it("Valid card number with leading zeros: 0004532015112830366", () =>
		expect(isValidCreditCardNumber("0004532015112830366")).toEqual(true));

	it("Invalid card number with characters: 4532a0151b1283c0366", () =>
		expect(isValidCreditCardNumber("4532a0151b1283c0366")).toEqual(false));

	it("Only non-digit characters asdfgh", () =>
		expect(isValidCreditCardNumber("asdfgh")).toEqual(false));

	it("Only special characters !@#$%^%", () =>
		expect(isValidCreditCardNumber(" !@#$%^%")).toEqual(false));

	it("Empty string", () => expect(isValidCreditCardNumber("")).toEqual(false));

	it("Invalid single zero digit", () =>
		expect(isValidCreditCardNumber("0")).toEqual(false));
});
describe.each([
	["378282246310005", true],
	["371449635398431", true],
	["378734493671000", true],
	["5610591081018250", true],
	["30569309025904", true],
	["38520000023237", true],
	["6011111111111117", true],
	["3530111333300000", true],
	["3566002020360505", true],
	["5555555555554444", true],
	["5105105105105100", true],
	["4111111111111111", true],
	["4012888888881881", true],
	["4222222222222", true],
])(`isValidCreditCardNumber`, (cardNumber, expected) => {
	test(`Credit card: [${cardNumber}] should be ${
		expected ? `valid` : `invalid`
	} credit card`, () => {
		expect(isValidCreditCardNumber(cardNumber)).toStrictEqual(expected);
	});
});
