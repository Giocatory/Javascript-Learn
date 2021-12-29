'use strict';

let user = {
    name: "Mikhail",
    age: 33,
};

console.log(user.name);
console.log(user.age);

user.isAdmin = true;

console.log(user); // { name: 'Mikhail', age: 33, isAdmin: true }

delete user.age;
console.log(user); // { name: 'Mikhail', isAdmin: true }