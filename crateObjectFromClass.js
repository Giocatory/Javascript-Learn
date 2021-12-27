"use strict";

class HelloPerson {
    constructor(name = "unnamed", age = 0) {
        this.__name = name;
        this.__age = age;
    }
    getName() {
        return this.__name;
    }
    getAge() {
        return this.__age;
    }
    setName(name) {
        this.__name = name;
    }
    setAge(age) {
        this.__age = age;
    }
}


let firstPerson = new HelloPerson("Mikhail", 33);
console.log(`Hello: ${firstPerson.getName()}\nYour age is: ${firstPerson.getAge()}`);

let secondPerson = new HelloPerson();
secondPerson.setName("Tatyana");
secondPerson.setAge(32);
console.log(`Hello: ${secondPerson.getName()}\nYour age is: ${secondPerson.getAge()}`);