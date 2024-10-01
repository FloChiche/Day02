function doOperation(operation) {
    const [num1, operator, num2] = operation.split(" ").map((item, index) => index % 2 === 0 ? parseInt(item) : item);

    if (operator === '/' && num2 === 0) {
        console.log("Can't divide by 0");
        return null;
    }

    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
    }
}

console.log(doOperation("10 + 5"));
console.log(doOperation("10 / 0"));
console.log(doOperation("8 * 2"));
