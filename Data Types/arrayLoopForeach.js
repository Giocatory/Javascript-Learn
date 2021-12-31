/**

arr.forEach(function(item, index, array) {
  // ... do something with item
});

*/

let arr = ["one", "two", "three"];
arr.forEach(console.log);
// one 0 [ 'one', 'two', 'three' ]
// two 1 [ 'one', 'two', 'three' ]
// three 2 [ 'one', 'two', 'three' ]
arr.forEach((item, index, array) => {
    console.log(`Index ${index}: ${item}. In array [${array}]`);
});
// Index 0: one. In array [one,two,three]
// Index 1: two. In array [one,two,three]
// Index 2: three. In array [one,two,three]
arr.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});
// Index 0: one
// Index 1: two
// Index 2: three
arr.forEach(element => {
    console.log(element);
});
// one
// two
// three
for (const iterator of arr) {
    console.log(iterator);
}
// one
// two
// three
for (let i = 0; i < arr.length; i++) {
    console.log(`${i} - ${arr[i]}`);
}
// 0 - one
// 1 - two
// 2 - three