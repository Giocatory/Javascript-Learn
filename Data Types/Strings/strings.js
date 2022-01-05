'use strict';

// Strings //
let enName = 'Mikhail'; // 7 letters
let ruName = 'Михаил'; // 6 letters
console.log(`${enName} - ${enName.length} letters`); // 7
console.log(`${ruName} - ${ruName.length} letters`); // 6

// Get the first symbol
console.log(enName[0]); // M
console.log(enName.charAt(0)); // M
// Get the last symbol
console.log(ruName[ruName.length - 1]); // л

//Loop "for..of"
for (const iter of enName) {
    console.log(iter);
}
// M
// i
// k
// h
// a
// i
// l


// get substring
let line = "Mikhail love programming";
// [8; 12)
let sub = line.slice(8, 12);
// [13:]
let prog = line.slice(13);
console.log(sub); // love
console.log(prog); // programming