'use strict';

// даже если объявлено const, а не let, то изменять свойства все равно можно
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

// так же можно вызывать через квадратные скобки
user["user age"] = 33;
console.log(user); // { name: 'Mikhail', isAdmin: true, 'user age': 33 }

let age = "user age";
console.log(user[age]); // 33