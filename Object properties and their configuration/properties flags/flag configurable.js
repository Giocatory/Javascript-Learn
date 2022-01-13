'use strict';

// Unconfigured property cannot be removed and rewrite.
let description = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(
    JSON.stringify(description, null, 2)
);
// {
//     "value": 3.141592653589793,
//     "writable": false,
//     "enumerable": false,
//     "configurable": false
// }

/** Определение свойства как неконфигурируемого – это дорога в один конец. 
 * Мы не сможем отменить это действие, потому что defineProperty не работает с неконфигурируемыми свойствами. 
 **/
let user = {};

Object.defineProperty(user, "name", {
    value: "John",
    writable: false,
    configurable: false
});

// теперь невозможно изменить user.name или его флаги
// всё это не будет работать:
//   user.name = "Pete"
//   delete user.name
//   defineProperty(user, "name", ...)
Object.defineProperty(user, "name", { writable: true }); // Ошибка