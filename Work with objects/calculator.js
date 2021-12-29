'use strict';

let calculator = {
    // can without creating fields
    // a: 0,
    // b: 0,
    read(x, y) {
        this.a = x;
        this.b = y;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read(2, 10);
console.log(calculator.sum());
console.log(calculator.mul());