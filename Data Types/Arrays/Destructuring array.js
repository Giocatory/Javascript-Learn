'use strict';

let arr = ["Mikhail", "sbkits"];
//destruct, those.Copy the values of the array in variables
let [login, nikName] = arr;
console.log(login); // Mikhail
console.log(nikName); // sbkits
//or destruct split str
[login, nikName] = "Meshges pakastb".split(' ');
console.log(login); // Meshges
console.log(nikName); // pakastb


let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
let { width: w, height: h, title } = options;

// width -> w
// height -> h
// title -> title

console.log(title); // Menu
console.log(w); // 100
console.log(h); // 200