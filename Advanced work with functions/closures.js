'use strict';

/**     Function declaration             */
/**     closures function                */
// ax^2 + bx + c = ...
function quadraticEquation(a, b, c) {
    return (x) => {
        return a * (x ** 2) + b * x + c;
    }
}

let result = quadraticEquation(2, 3, 4);

console.log(result(2));
console.log(quadraticEquation.length); // 3

/**     Named Function Expression        */
let sayHi = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest"); // If the parameter has not passed, the function will cause itself
    }
};
sayHi("Mike"); // Hello, Mike
sayHi(); // Hello, Guest


// Task - 1. Counter
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }
    counter.decrease = () => count--;

    return counter;
}

let myCounter = makeCounter();
console.log(myCounter()); // 0
console.log(myCounter()); // 1
console.log(myCounter()); // 2

myCounter.decrease();
console.log(myCounter()); // 2