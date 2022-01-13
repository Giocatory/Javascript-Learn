'use strict';

let obj = {
    get propName() {
        // геттер, срабатывает при чтении obj.propName
    },

    set propName(value) {
        // сеттер, срабатывает при записи obj.propName = value
    }
};

console.log(obj.propName); // use getter
obj.propName = "..."; // use setter