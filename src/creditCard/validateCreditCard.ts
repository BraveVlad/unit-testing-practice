// TODO - FOCUS ON TDD .
// [V] 0. Create a stub
// [V] 1. Write a failing READABLE test
// [ ] 2. Write code to make the test pass
// [ ] 3. Repeat

// LUHN ALGORITHM VALIDATION STEPS:
// 0. extract the control digit (right-most digit)
// 1. start from right to left (reverse the array?)
// 2. multiply BY 2 all even order numbers (every second digit)
// 2.1. if the result is >= 10, sum both digits.
// 3. sum all results.
// 4. control digit = 10-(sum%10)
export function isValidCreditCardNumber(number: string) {
	return true;
}
