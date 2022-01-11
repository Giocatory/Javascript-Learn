'use strict';

// Loss "this", binding context to function
let user = {
    name: "Mike",
    age: 33,
    getName() {
        console.log(this.name);
    },
    getAge() {
        return this.age;
    }
}

// functions "wrap"
user.getName(); // Mike
console.log(user.getAge()); // 33

setTimeout(user.getName, 500); // undefined

setTimeout(() => {
    user.getName(); // Mike
    console.log(user.getAge()); // 33
}, 1000);

// Data binding using Bind
// syntax -> let boundFunc = func.bind(context);
function func() { console.log(`${this.name} -> ${this.age}`); }

function funcS(phrase) { console.log(`${phrase} ${this.name} -> ${this.age}`); }

let funcUser = func.bind(user);
let funcUserS = funcS.bind(user);
let userName = user.getName.bind(user);

funcUser(); // Mike -> 33
funcUserS("Hello"); // Hello Mike -> 33
setTimeout(userName, 1500); // Mike



let helloGuest = {
    name: "Guest",
    message(phrase) {
        return `${phrase} ${this.name}`
    }
}
let guestMessage = helloGuest.message.bind(helloGuest);
console.log(guestMessage("Hello")); // Hello Guest