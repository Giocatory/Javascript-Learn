'use strict';

// string to array
let names = "Mikhail learning HTML, CSS, JS";
let arrNames = names.split(' ');

for (let i = 0; i < arrNames.length; i++) {
    if (arrNames[i].endsWith(',')) {
        arrNames[i] = arrNames[i].replace(',', '');
    }
}

console.log(arrNames); // [ 'Mikhail', 'learning', 'HTML', 'CSS', 'JS' ]
console.log(arrNames[0].split('')); // ['M', 'i', 'k', 'h', 'a', 'i', 'l' ]

// array to string
arrNames = ['Mikhail', 'learning', 'HTML,', 'CSS,', 'JS'];
let strNames = arrNames.join(' ') + '.'; // Mikhail learning HTML, CSS, JS.
console.log(strNames);