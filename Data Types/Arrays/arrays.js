'use strict';

// let arr = new Array();
// or
// let arr = [];

// Add item to the end //
let mass = ["One", "Two", "Three"];
mass.push("four", "Five"); // one or more items can add
console.log(mass); // [ 'One', 'Two', 'Three', 'four', 'Five' ]

// Remove the last element and return it //
let lastItem = mass.pop();
console.log(lastItem); // Five
console.log(mass); // [ 'One', 'Two', 'Three', 'four' ]

// Remove the first element and return it //
let firstItem = mass.shift();
console.log(firstItem); // One
console.log(mass); // [ 'Two', 'Three', 'four' ]

// Add item to the start //
mass.unshift("Zero", "One"); // one or more items can add
console.log(mass); // [ 'Zero', 'One', 'Two', 'Three', 'four' ]


/**                ARRAY.SLICE()                              **/
// arr.slice(start, end) -> [start; end) copy
let myArr = ["M", "i", "k", "h", "a", "i", "l"];
console.log(myArr.slice()); // ["M", "i", "k", "h", "a", "i", "l"];
console.log(myArr.slice(0, 2)); // [ 'M', 'i' ]
console.log(myArr.slice(2)); // [ 'k', 'h', 'a', 'i', 'l' ]


/**                ARRAY.SPLICE()                             **/
let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // Starting from Position 1, Delete 1 Element
console.log(arr); // now ["Я", "JavaScript"]

arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// Remove the first element and replace them with others.
arr.splice(0, 3, "Давай", "танцевать");
console.log(arr) // now ["Давай", "танцевать", "прямо", "сейчас"]

arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// Remove the first two elements
let removed = arr.splice(0, 2);
console.log(removed); // ["Я", "изучаю"]; <-- массив из удалённых элементов
console.log(arr); // ["JavaScript", "прямо", "сейчас"];

arr = ["Я", "изучаю", "JavaScript"];
//From position 2.
// Delete 0 items
// Insert "Complex", "Language"
arr.splice(2, 0, "сложный", "язык");
console.log(arr); // [ 'Я', 'изучаю', 'сложный', 'язык', 'JavaScript' ]

// View an overalls's array is useful when copying
console.log(arr.splice(0)); // [ 'Я', 'изучаю', 'сложный', 'язык', 'JavaScript' ]