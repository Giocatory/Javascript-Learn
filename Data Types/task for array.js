'use strict';

const employers = [
    { name: "Mikhail", salary: 30000, nowWork: false },
    { name: "Tatyana", salary: 60000, nowWork: true },
    { name: "Margarita", salary: 70000, nowWork: true },
    { name: "Varvara", salary: 80000, nowWork: true },
];

let reach = employers.filter(elem => elem.salary > 60000).map(elem => elem.name);
console.log(reach); // [ 'Margarita', 'Varvara' ]


// Calculate salary of working (nowWork: true)
let allSalary = employers
    .filter(elem => elem.nowWork == true)
    .map(elem => elem.salary)
    .reduce((charge, elem) => elem + charge, 0);

console.log(allSalary); // 210000


// Translate the text of the type of Border-Left-Width in Borderleftwidth
const camelize = text => text
    .split('-')
    .filter(elem => elem != '')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');
console.log(camelize("border-width-left")); // BorderWidthLeft
console.log(camelize("-webkit-transition")); // WebkitTransition


// Full copy of the array, without changing the initial array
let initialArray = ["A", "E", "Z", "O", "W", "G"];

let deepSorted = array => array.slice().sort();

let copiedArray = deepSorted(initialArray);
console.log(initialArray); // [ 'A', 'E', 'Z', 'O', 'W', 'G' ]
console.log(copiedArray); // [ 'A', 'E', 'G', 'O', 'W', 'Z' ]

// transform to object
let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25 };
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 30 };
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 28 };

let users = [vasya, petya, masha];

let usersMapped = users
    .map(elem => {
        return {
            fullName: `${elem.name} ${elem.surname}`,
            id: elem.id,
            age: elem.age
        };
    })
    .sort((a, b) => a.age > b.age ? 1 : -1)
    // [
    //     { fullName: 'Вася Пупкин', id: '1', age: '25' },
    //     { fullName: 'Маша Петрова', id: '3', age: '28' },
    //     { fullName: 'Петя Иванов', id: '2', age: '30' }
    //   ]
console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин