'use strict';

// Task - 1
// object fields add to variables
let login = {
    admin: "root",
    access: true,
};

let { admin: user, access: logged, balance: credit = false } = login;

console.log(user); // user
console.log(logged); // true
console.log(credit); // false

// Task - 2
// max salary
function topSalary(someObject) {
    let max = 0;
    let nameTop = null;

    for (const [name, salary] of Object.entries(someObject)) {
        if (max < salary) {
            max = salary;
            nameTop = name;
        }
    }

    return nameTop;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries)); // Pete