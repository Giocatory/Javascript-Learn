'use strict';

let user = {
    name: "Mikhail",
    age: 33,
    isAdmin: true,
    skills: ['html', 'css', 'js'],
    wife: 'Tatyana',
    residence: {
        number: 108,
        participants: ["Mike", "Tatyana", "Margo", "Varvara"],
    },
    workOn: null,
    sayHi() { return `i'm ${user.name}`; }, // JSON.stringify проигнорирует эту функцию
    [Symbol("id")]: 123, // JSON.stringify проигнорирует
    something: undefined, // JSON.stringify проигнорирует
};

// json.stringify to convert objects to JSON.
// json.parse to convert JSON back to the object.

let userJson = JSON.stringify(user);
let userJson2 = JSON.stringify(user, null, 2);

console.log(userJson);
// {"name":"Mikhail","age":33,"isAdmin":true,"skills":["html","css","js"],"wife":"Tatyana",
//          "residence":{"number":108,"participants":["Mike","Tatyana","Margo","Varvara"]},"workOn":null}
console.log(userJson2);
// {
//     "name": "Mikhail",
//     "age": 33,
//     "isAdmin": true,
//     "skills": [
//       "html",
//       "css",
//       "js"
//     ],
//     "wife": "Tatyana",
//     "residence": {
//       "number": 108,
//       "participants": [
//         "Mike",
//         "Tatyana",
//         "Margo",
//         "Varvara"
//       ]
//     },
//     "workOn": null
//   }
console.log(typeof(userJson)); // string
console.log(user.sayHi()); // i'm Mikhail