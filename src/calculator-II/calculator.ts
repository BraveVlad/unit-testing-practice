import { getOperation } from "./operationsFactory";

export function calculate(first: string, sign: string, second: string) {
    const firstNumber = Number(first);
    const secondNumber = Number(second);
    const operation = getOperation(sign);

    return operation(firstNumber, secondNumber);
}
