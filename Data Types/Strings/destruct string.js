let someString = "Hello";

let [oneLetter, ...otherLetters] = someString;

console.log(oneLetter); // H
console.log(otherLetters); // [ 'e', 'l', 'l', 'o' ]