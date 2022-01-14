'use strict';

// TASK - 1
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

function f() {
    console.log("Hello!");
};

f.defer(2000); // выведет "Hello!" через 2 секунды


//TASK - 2
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms)
    }
}

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.