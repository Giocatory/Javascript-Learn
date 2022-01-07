'use strict';

// factorial
function factorial(num) {
    if (num === 1) return 1;
    return num *= factorial(num - 1);
}
console.log(factorial(5)); // 120


//fibonacci
function fibonacci(num) {
    if (num < 2) return num;
    else return fibonacci(num - 1) + fibonacci(num - 2);
}

let fibMass = [];
for (let i = 0; i < 10; i++) {
    fibMass.push(fibonacci(i));
}
console.log(fibMass); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// The amount of numbers to a certain number
function sumTo(num) {
    if (num === 0) return 0;
    return num += sumTo(num - 1);
}
console.log(sumTo(1000)); // 500500