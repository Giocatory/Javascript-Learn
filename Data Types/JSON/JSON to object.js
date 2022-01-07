'use strict';

// Double quotes in keys and values are required
let user = `{
    "name": "Mike",
    "nik": "sbkits",
    "isAdmin": "true",
    "birthday": "1988-06-18"
}`;

let userObject = JSON.parse(user);

console.log(userObject);
// {
//     name: 'Mike',
//     nik: 'sbkits',
//     isAdmin: 'true',
//     birthday: '1988-06-18'
// }

let userObjNormDate = JSON.parse(user, (key, value) => {
    if (key == 'birthday') return new Date(value)
    return value;
});

console.log(userObjNormDate);
// {
//     name: 'Mike',
//     nik: 'sbkits',
//     isAdmin: 'true',
//     birthday: 1988-06-18T00:00:00.000Z
// }
console.log(userObjNormDate.birthday.getDate()); // 18
console.log(userObjNormDate.birthday.getMonth()); // 5 (Отсчет же с нуля)