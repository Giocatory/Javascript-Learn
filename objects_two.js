'use strict';

let price = "apple";
let cell = 330;

let productBag = {
    [price + "-fruit"]: cell,
};

console.log(productBag); // { apple-fruit: 330 }