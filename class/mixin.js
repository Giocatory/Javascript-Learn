// класс User может наследовать от другого класса, но при этом также включать в себя примеси, 
// «подмешивающие» другие методы

// примесь
let sayHiMixin = {
    sayHi() {
        console.log(`Привет, ${this.name}`);
    },
    sayBye() {
        console.log(`Пока, ${this.name}`);
    },
    sayStatus() {
        console.log(`Status: ${this.status}`)
    }
};

// использование:
class User {
    constructor(name) {
        this.name = name;
    }
}

class Admin extends User {
    constructor(name, status) {
        super(name);
        this.status = status;
    }
}


// копируем методы
Object.assign(User.prototype, sayHiMixin);
Object.assign(Admin.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася
new Admin("Mike", "Admin").sayStatus(); // Status: Admin