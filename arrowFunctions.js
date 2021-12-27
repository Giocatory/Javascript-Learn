'use strict';
/**
 * let func = (arg1, arg2, .... agrN) => expression
 * 
 * создали функцию func с аргументами arg1...argN и вычисляем expression
 * 
 * или можно так:
 * 
 * let func = function(arg1, arg2, .... agrN) {
 *      return expression;
 * };
 */

let sum = (a, b) => a + b;
console.log(sum(10, 5)); // 15
// if more expressions
let pow = (a, b) => {
    let result = Math.pow(a, b);
    return result;
};
console.log(pow(5, -3)); // 0.008

// if don't arguments
let sayHello = () => console.log("Hello");
sayHello(); // Hello

let age = 18;
let varAge = (age >= 18) ? () => console.log("big") : () => console.log("small");
varAge(); // big