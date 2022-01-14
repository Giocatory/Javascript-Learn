'use strict';

let animal = {
    eats: true,
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;
Rabbit.prototype.jump = 'i jump';

let rabbit = new Rabbit("White rabbit"); // rabbit.__proto__ == animal

console.log(rabbit.eats); // true
console.log(rabbit.jump); // i jump