let sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
};

let sayHiMixin = {
    __proto__: sayMixin, // (или мы можем использовать Object.create для задания прототипа)

    sayHi() {
        // вызываем метод родителя
        super.say(`Привет, ${this.name}`); // (*)
    },
    sayBye() {
        super.say(`Пока, ${this.name}`); // (*)
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Mike").sayHi(); // Привет, Mike
new User("Mike").sayBye(); // Пока, Mike