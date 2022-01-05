let arr = new Array(1, 2, 3, 1, 3, 4, 1, 3, 4, 21, 4, 4, 5, 11, 23, 4, 5, 1, 23, 12, 3, 4);

console.log(arr.filter(item => item >= 10)); // [ 21, 11, 23, 23, 12 ]
console.log(arr.findIndex(item => item == 21)); // index - 9

let personArr = [
    { id: 1, name: "Mikhail", },
    { id: 2, name: "Tatyana", },
    { id: 3, name: "Margo", }
];
let findName = (personArr.find(item => item.id === 3)).name;
console.log(findName); // Margo

let names = ["Margarita", "Mike", "Tanya"];
let namesLength = names.map(item => item.length);
console.log(namesLength); // [ 9, 4, 5 ]
namesLength.sort();
console.log(namesLength); // [ 4, 5, 9 ]

let randomArr = ["asd", "55ff", 59, 31.123, "1aqwd32"];
let intNum = randomArr.map(item => parseInt(item));
intNum.forEach((element, index) => {
    if (isNaN(element)) {
        intNum.splice(index, 1);
    }
});
console.log(intNum); // [ 55, 59, 31, 1 ]