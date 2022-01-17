class User {
    static id = 0;

    constructor(info) {
        [this.name, this.age] = info.split(', ');
        this.userID = User.incrId(); // use static method
    }

    static incrId() {
        return ++User.id; // increment static property
    }
}

let onceUser = new User('Mike, 34');
let secondUser = new User('Tatyana, 33');

console.log(onceUser.userID); // 1
console.log(onceUser.name); // Mike

console.log(secondUser.userID); // 2
console.log(secondUser.age); // 33