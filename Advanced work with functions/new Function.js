'use strict';

// let func = new Function([arg1, arg2, ...argN], functionBody);
// Если передавать переменную аргументом, то "new Function" работает только с
// глобальными переменными!!!!

let sum = new Function('a', 'b', 'return a + b');
let sayHi = new Function('console.log("Hello Mike")');

console.log(sum(1, 3)); // 4
sayHi(); // Hello Mike