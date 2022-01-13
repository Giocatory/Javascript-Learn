'use strict';

let user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 3) {
            return console.log('Very small name length');
        }
        this._name = value;
    }
}

console.log(user.name); // undefined

user.name = "Mike";
console.log(user.name); // Mike

user.name = "I"; // Very small name length
console.log(user.name); // Mike