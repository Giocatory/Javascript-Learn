class Animal {};
let rabbit = new Animal();

console.log(rabbit instanceof Animal); // true
console.log(rabbit instanceof Object); // true


function Wolf() {}
console.log(new Wolf() instanceof Wolf); // true


let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Set); // false