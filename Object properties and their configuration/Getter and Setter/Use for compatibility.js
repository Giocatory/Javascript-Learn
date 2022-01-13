'use strict';

// Есть объект
function User(name, age) {
    this.name = name;
    this.age = age;
}

let Mike = new User("Mike", 33);

console.log(Mike.age); // 33

// Надо получить другие аргументы: 
function User2(name, birthday) {
    this.name = name;
    this.birthday = birthday;
}

let Mike2 = new User2("Mike", new Date(1988, 5, 19));
console.log(Mike2.birthday); // 1988-06-18T20:00:00.000Z


// SOLUTION
function User3(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // возраст рассчитывается из текущей даты и дня рождения
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let Mike3 = new User3("Mike", new Date(1988, 5, 19));

console.log(Mike3.birthday); // доступен как день рождения => 1988-06-18T20:00:00.000Z
console.log(Mike3.age); // ...так и возраст => 34