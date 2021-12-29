'use strict';

let price = "apple";
let cell = 330;

let productBag = {
    [price + "-fruit"]: cell,
};

console.log(productBag); // { apple-fruit: 330 }

// is there a property in the object
console.log("apple" in productBag); // false
console.log(price in productBag); // false
console.log("apple-fruit" in productBag); // true
console.log([price + "-fruit"] in productBag); // true

// loop: for...in
let user = {
    name: "Mikhail",
    age: 33,
    isAdmin: true,
};

for (let key in user) {
    console.log(key + ": " + user[key]);
}
// name: Mikhail
// age: 33
// isAdmin: true