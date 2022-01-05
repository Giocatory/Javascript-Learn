'use strict';

// New Map () - creates a collection.
// map.set (Key, Value) - writes on the key key Value.
// map.get (key) - returns a value over key or undefined if there is no key Key.
// MAP.HAS (KEY) - Returns True if Key is present in the collection, otherwise false.
// Map.Delete (Key) - removes the element by key key.
// map.clear () - cleans the collection from all elements.
// map.size - Returns the current number of items.

let map = new Map();
map.set("1", "Hello"); // key "str"
map.set(1, "my friend"); // key "number"
map.set(true, "!"); // key "boolean"

/* OR
map.set("1", "Hello")
    .set(1, "my friend")
    .set(true, "!");
*/


let mike = {
    name: "Mikhail",
}

map.set(mike, mike.name); // key "object"

console.log(
    `${map.get("1")} ${map.get(1)} ${map.get(mike)}${map.get(true)}`
); // Hello my friend Mikhail!


// for..of - Bust goes in order addition
for (const keys of map.keys()) {
    console.log(keys);
}
// 1
// 1
// true
// { name: 'Mikhail' }
for (const value of map.values()) {
    console.log(value);
}
// Hello
// my friend
// !
// Mikhail
for (const elements of map) {
    console.log(elements);
}
// [ '1', 'Hello' ]
// [ 1, 'my friend' ]
// [ true, '!' ]
// [ { name: 'Mikhail' }, 'Mikhail' ]

/*    Object to Map     */
let obj = {
    name: "John",
    age: 30
};

let collMap = new Map(Object.entries(obj));
console.log(collMap); // Map(2) { 'name' => 'John', 'age' => 30 }

/*    Map to Object     */
let collect = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

let prices = Object.fromEntries(collect);
console.log(prices); // object(3) { banana: 1, orange: 2, meat: 4 }