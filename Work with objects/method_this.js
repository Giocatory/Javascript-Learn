'use strict';

let user = {
    name: "Mikhail",
    age: 33,
};

user.sayHi = () => console.log('Hello, i\'m ' + user.name);

user.sayHi(); // Hello, i'm Mikhail


///////// or so ///////////
let person = {
    name: "Tatyana",
    age: 32,
    sayHi() {
        console.log('Hello, i\'m ' + this.name);
    },
    // the same
    // sayHi: () => console.log('Hello, i\'m ' + this.name)
};

person.sayHi(); // Hello, i'm Tatyana