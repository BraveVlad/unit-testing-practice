import { calculate } from "./calculator";

const [_, __, first, sign, second] = process.argv;

console.log(calculate(first, sign, second));

// 4. testable code tends to be more maintainable
