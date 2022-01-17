class Car {
    constructor(model, maxSpeed) {
        this.model = model;
        this.maxSpeed = maxSpeed;
    }

    get MaxSpeed() {
        return this.maxSpeed;
    }

    get Model() {
        return this.model;
    }
}


class Minivan extends Car {
    constructor(model, maxSpeed, color) {
        super(model, maxSpeed);
        this.color = color;
    }
    get Color() {
        return this.color;
    }
}


let myCar = new Minivan('Minivan', 120, 'blue');
console.log(
    `Model: ${myCar.Model}\n` +
    `Max speed: ${myCar.MaxSpeed}\n` +
    `Car color: ${myCar.Color}`
);

// Model: Minivan
// Max speed: 120
// Car color: blue