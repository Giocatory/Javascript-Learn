let animal = {
    eats: true,
    walk() {
        return 'animal walks';
    }
};

/////////////////
let rabbit = {
    jump: true,
};
/////////////////

rabbit.__proto__ = animal;

console.log(rabbit.eats); // true
console.log(rabbit.walk()); // animal walks

/////////////////
let wolf = {
    __proto__: rabbit,
    walk() {
        return 'wolf run';
    }
}

console.log(wolf.eats); // true
console.log(wolf.walk()); // wolf run

console.log('\nProperties Object "Wolf":')
for (const key in wolf) {
    if (Object.hasOwnProperty.call(wolf, key)) {
        console.log(`Self: ${key}`);
    } else {
        console.log(`Inherit: ${key}`);
    }
}
// Properties Object "Wolf":
// Self: walk
// Inherit: jump
// Inherit: eats