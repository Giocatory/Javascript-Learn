function calculator() {
    this.sumAllMethods = 0;

    this.read = (x, y) => {
        this.a = x;
        this.b = y;
    };

    this.sum = () => {
        this.sumAllMethods += this.a + this.b;
        console.log(this.a + this.b)
    };

    this.mul = () => {
        this.sumAllMethods += this.a * this.b;
        console.log(this.a * this.b)
    };
}

let newCalc = new calculator();
newCalc.read(2, 11);
newCalc.sum(); // 13
newCalc.mul(); // 22
console.log(newCalc.sumAllMethods); // 35