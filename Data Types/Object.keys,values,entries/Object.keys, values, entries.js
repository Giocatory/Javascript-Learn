'use strict';

// For simple objects, the following methods are available:

// Object.Keys (OBJ) - Returns an array of keys.
// Object.Values (OBJ) - Returns an array of values.
// Object.Entries (OBJ) - Returns the array of pairs [key, value].

let user = {
    name: "Mikhail",
    age: 33,
};

console.log(Object.keys(user)); // [ 'name', 'age' ]
console.log(Object.values(user)); // [ 'Mikhail', 33 ]
console.log(Object.entries(user)); // [ [ 'name', 'Mikhail' ], [ 'age', 33 ] ]

for (const kv of Object.entries(user)) {
    kv.forEach(elem => {
        console.log(elem);
    })
}
// name
// Mikhail
// age
// 33

// Translate an object to an array, change the value and translate back to the object
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(Object.entries(prices).map(([key, value]) => [key, value * 2]));
console.log(doublePrices); // { banana: 2, orange: 4, meat: 8 }

let experiment = [
    [0, 2],
    [1, 4],
    [2, 8],
]
console.log(experiment.map(([a, b]) => [a + 1, b * 2])); // [ [ 1, 4 ], [ 2, 8 ], [ 3, 16 ] ]