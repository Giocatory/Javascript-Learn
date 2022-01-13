'use strict';

let user = {
    name: "Mike"
};

Object.defineProperty(user, 'name', {
    writable: false
});

user.name = "Mikhail"; // ERROR, cannot be changed value
console.log(user.name); // TypeError: Cannot assign to read only property 'name' of object '#<Object>'