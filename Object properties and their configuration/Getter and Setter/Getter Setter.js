'use strict';

let user = {
    name: null,
    surname: null,

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(text) {
        [this.name, this.surname] = text.split(' ');
    }
}

console.log(user.fullName); // null null

user.fullName = "Mikhail Giocatory";

console.log(user.fullName); // Mikhail Giocatory