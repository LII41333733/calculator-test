export const add = (first, second) => {
    return first + second;
}

export const subtract = (first, second) => {
    return first - second;

}

export const multiply = (first, second) => {
    return first * second;

}

export const divide = (first, second) => {
    return first / second;

}

export const calculateResult = (firstValue, secondValue, operator) => {
    let ret;
    switch (operator) {
        case "+":
            ret = add(firstValue, secondValue);
            break;
        case "-":
            ret = subtract(firstValue, secondValue);
            break;
        case "x":
            ret = multiply(firstValue, secondValue);
            break;
        case "/":
            ret = divide(firstValue, secondValue);
            break;
    }
    return ret;
}