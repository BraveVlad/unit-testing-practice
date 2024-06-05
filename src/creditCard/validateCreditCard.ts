// TODO - FOCUS ON TDD .
// [V] 0. Create a stub
// [V] 1. Write a failing READABLE test
// [ ] 2. Write code to make the test pass
// [ ] 3. Repeat

// LUHN ALGORITHM VALIDATION STEPS:
// [x] 0. extract the control digit (right-most digit)
// [x] 1. start from right to left (reverse the array?)
// [ ] 2. multiply BY 2 all even order numbers (every second digit)
// [ ] 2.1. if the result is >= 10, sum both digits.
// [ ] 3. sum all results.
// [ ] 4. control digit = 10-(sum%10)

function sumTwoDigits(number: number) {
	return ((number / 1) % 10) + Math.floor((number / 10) % 10);
}
export function isValidCreditCardNumber(number: string) {
	const cardNumber = number
		.trim()
		.replace(/[\s-]/g, "")
		.split("")
		.map(Number)
		.reverse();
	if (cardNumber.length < 2) return false;
	const controlDigit = cardNumber.shift();
	const multipliedDigits = cardNumber.map((currentDigit, index) => {
		if (index % 2) return currentDigit;

		const multipliedDigit = currentDigit * 2;
		return multipliedDigit >= 10
			? sumTwoDigits(multipliedDigit)
			: multipliedDigit;
	});

	const sumOfAllDigits = multipliedDigits.reduce(
		(previouse, current) => previouse + current,
		0
	);

	return sumOfAllDigits === 0 && controlDigit === 0
		? true
		: controlDigit === 10 - (sumOfAllDigits % 10);
}
