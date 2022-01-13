'use strict';

let user = {
    name: "Mike",
    toString() {
        return this.name;
    }
};

/*      Default          */
for (let key in user) console.log(key);
// name
// toString



/*      Define property     */
Object.defineProperty(user, 'toString', {
    enumerable: false,
});
for (let key in user) console.log(key);
// name
console.log(Object.keys(user)); // [ 'name' ]