let sum = 0.1 + 0.2;

console.log(sum === 0.3); // false
console.log(parseFloat(sum.toFixed(1)) === 0.3); // true !!! .toFixed() - Always returns the string

// Random numbers
// Math.random => 0.1 -> 0.9
console.log(+(Math.random() * 10).toFixed); // 1 -> 10