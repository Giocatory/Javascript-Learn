'use strict';

// SET object is a special kind of collection: "Set" of values ​​(without keys), where each value can appear only once.

// its main methods is:

// New Set (Iterable) - Creates SET, and if an object was given as an argument (usually an array), it copies its values ​​to the new SET.
// Set.Add (Value) - adds a value (if it is already there, then nothing does), returns the same set of SET.
// Set.Delete (Value) - Removes the value, returns true if Value was in a set at the time of the call, otherwise false.
// SET.HAS (VALUE) - Returns True if the value is present in the set, otherwise False.
// set.clear () - removes all existing values.
// set.Size - Returns the number of elements in the set.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// We consider guests, some come several times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// SET Stores only 3 unique values
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (then Pete и Mary)
}