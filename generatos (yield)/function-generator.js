function* generatorSequence() {
    for (let i = 0; i < 3; i++) {
        yield i;
    }
}
let generator = generatorSequence();
console.log(generator); // Object [Generator] {}


let values = [];
while (true) {
    let total = generator.next();
    values.push(total['value'])
    if (total['done'] == true) break
}
values.pop(); // delete last value == undefined ({value: undefined, done: trues})
console.log(values); // [ 0, 1, 2 ]

// Или так
// for (let value of generator) {
//     console.log(value);
// }
// 0
// 1
// 2