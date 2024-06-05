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
	const cardNumber = number.replace(/[\s-]/g, "");
	if (cardNumber.length < 2) return false;

	let sumOfDigits = 0;
	for (let index = cardNumber.length - 1; index >= 0; index--) {
		const digit = Number(cardNumber.at(index));
		if (index % 2) sumOfDigits += digit;
		else {
			const multipliedDigit = digit * 2;
			sumOfDigits +=
				multipliedDigit > 9 ? multipliedDigit - 9 : multipliedDigit;
		}
	}

	return sumOfDigits % 10 === 0;
}
