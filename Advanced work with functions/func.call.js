'use strict';

function sayHi() {
    return `Hello ${this.name}`;
}

function sayHiTwo(phrase) {
    return `${phrase} ${this.name}`;
}

function sayHiThree(phrase, sign) {
    return `${phrase} ${this.name}${sign}`;
}

let user = { name: "Guest" };
let admin = { name: "Admin" };

console.log(sayHi.call(user)); // Hello Guest
console.log(sayHi.call(admin)); // Hello Admin

console.log(sayHiTwo.call(user, "Hi")); // Hi Guest
console.log(sayHiTwo.call(admin, "Hi")); // Hi Admin

// APPLY - Takes an argument array
console.log(sayHiThree.apply(user, ["Hi", "!"])); // Hi Guest!
console.log(sayHiThree.call(admin, "Hi", "?")); // Hi Admin?

// Borrowing method
function hash() {
    console.log([].join.call(arguments));
}
hash(1, 2, 3); // 1,2,3