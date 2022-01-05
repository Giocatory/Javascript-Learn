'use strict';

let sum = 0.1 + 0.2;

console.log(sum === 0.3); // false
console.log(parseFloat(sum.toFixed(1)) === 0.3); // true !!! .toFixed() - Always returns the string


// Random numbers
// Math.random => 0.1 -> 0.9
console.log(+(Math.random() * 10).toFixed()); // 0 -> 10



// Random number in the specified interval //
function random(min, max) {
    return +(min + Math.random() * (max - min)).toFixed();
}

console.log(random(1, 100)); // 1 -> 100


// Another option is more correct //
function randomInteger(min, max) {
    // Random number from min to (MAX + 1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(randomInteger(1, 3)); // 1 -> 3