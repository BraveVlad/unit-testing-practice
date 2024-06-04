export function add(a: number, b: number) {
    return a + b;
}

export function divide(a: number, b: number) {
    if (b === 0) {
        throw new Error("Can't divide by zero");
    }

    return a / b;
}
