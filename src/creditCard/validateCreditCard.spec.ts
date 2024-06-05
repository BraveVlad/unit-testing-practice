import { isValidCreditCardNumber } from "./validateCreditCard";

fdescribe.each([
	["12345674", true],
	["00012345674", true],
	["12435674", false],
	["1234567", false],

	["3655952491", true],
	["3655952492", false],

	["378282246310005", true],
	["378282246210005", false],

	["6011111111111117", true],
	["6011111111111107", false],

	["4222222222222", true],
	["42222222222222", false],

	["0000000000000", true],
	["1111111111111", false],
])(`isValidCreditCardNumber`, (cardNumber, expected) => {
	test(`Credit card: [${cardNumber}] should be ${
		expected ? `valid` : `invalid`
	} credit card`, () => {
		expect(isValidCreditCardNumber(cardNumber)).toStrictEqual(expected);
	});
});
