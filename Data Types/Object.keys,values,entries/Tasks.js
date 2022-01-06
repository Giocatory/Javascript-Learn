'use strict';

// Task - 1;
// Sum object values

function sumSalaries(someObject) {
    return Object
        .values(someObject)
        .reduce((charge, value) => charge + value, 0)
}

let salaries = {
    "mike": 60000,
    "tat": 70000,
    "mar": 120000,
}

console.log(sumSalaries(salaries)); // 250000

// Task - 2;
// How many properties in object

function count(someObject) {
    return Object.keys(someObject).length;
}

console.log(count(salaries)); // 3