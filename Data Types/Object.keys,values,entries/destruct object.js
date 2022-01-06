'use strict';

let options = {
    size: {
        width: 100,
        hHeight: 200,
    },
    items: ["Cake", "donut"],
    extra: true
};

// Destructuring is divided into several rows for clarity
let {
    size: { // Put the Size here
        width,
        height
    },
    items: [item1, item2], // Add items to Items
    title = "Menu" // is missing in the object (used by default)
} = options;

console.log(title); // Menu.
console.log(width); // 100
console.log(height); // 200.
console.log(item1); // Cake
console.log(item2); // donut