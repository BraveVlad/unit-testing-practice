import { add, divide, multiply, subtract } from "./operations";

export function getOperation(sign: string) {
    switch (sign) {
        case "+": return add;
        case "-": return subtract;
        case "*": return multiply;
        case "/": return divide;
        default: throw new Error(`Unrecognized sign: "${sign}"`)
    }
}
