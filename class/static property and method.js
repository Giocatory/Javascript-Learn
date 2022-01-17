class User {
    static id = 0;

    constructor(info) {
        [this.name, this.age] = info.split(', ');
        this.userID = User.incrId(); // use static method
    }

    static incrId() {
        return ++User.id; // increment static property
    }

    showUserInfo() {
        return `${this.userID}: Name - ${this.Name}; Age - ${this.Age}`;
    }
    get Name() {
        return this.name;
    }
    get Age() {
        return this.age;
    }
}

let onceUser = new User('Mike, 34');
let secondUser = new User('Tatyana, 33');

console.log(onceUser.userID); // 1
console.log(onceUser.showUserInfo()); // 1: Name - Mike; Age - 34

console.log(secondUser.userID); // 2
console.log(secondUser.showUserInfo()); // 2: Name - Tatyana; Age - 33