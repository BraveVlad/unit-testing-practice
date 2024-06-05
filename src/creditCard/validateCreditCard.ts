// TODO - FOCUS ON TDD .
// [V] 0. Create a stub
// [V] 1. Write a failing READABLE test
// [ ] 2. Write code to make the test pass
// [ ] 3. Repeat

export function isValidCreditCardNumber(number: string) {
	const cardNumber = number.replace(/[\s-]/g, "").split("").map(Number);
	if (cardNumber.length < 2) return false;

	let sumOfDigits = 0;
	let isSecond = false;

	for (
		let index = cardNumber.length - 1;
		index >= 0;
		index--, isSecond = !isSecond
	) {
		const digit = cardNumber[index];
		if (!isSecond) sumOfDigits += digit;
		else {
			const multipliedDigit = digit * 2;
			sumOfDigits +=
				multipliedDigit > 9 ? multipliedDigit - 9 : multipliedDigit;
		}
	}

	return sumOfDigits % 10 === 0;
}
