'use strict';

// Флаги свойств
// Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

// Чтоб получить полную информаци о свойстве:
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
    name: "Mike",
    age: 33,
    getInfo() {
        return `${this.name} - ${this.age}`;
    }
}

let ObjectInfo = Object.getOwnPropertyDescriptor(user, 'getInfo');
console.log(
    JSON.stringify(ObjectInfo, null, 2)
);
// {
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
// }

let ObjectField = Object.getOwnPropertyDescriptor(user, 'name');
console.log(
    JSON.stringify(ObjectField, null, 2)
);
// {
//     "value": "Mike",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
// }

/*                     Change Flag                      */
/* Object.defineProperty(obj, propertyName, descriptor) */

Object.defineProperty(user, 'name', {
    value: "Mikhail",
    "writable": false,
    "enumerable": false,
    "configurable": false
});
ObjectField = Object.getOwnPropertyDescriptor(user, 'name');
console.log(
    JSON.stringify(ObjectField, null, 2)
);
// {
//     "value": "Mikhail",
//     "writable": false,
//     "enumerable": false,
//     "configurable": false
// }