// Task 1: Write a feature for checking the emptiness of the object //
function isEmpty(object) {
    let total = true;
    for (const key in object) {
        if (key) {
            total = false;
            break;
        }
    }
    return total;
}

let exp = {};
let user = { name: "Admin" };

console.log("Is empty function: ");
console.log(isEmpty(exp)); // true
console.log(isEmpty(user)); // false



// Task 2: The sum of the values of the object properties //
let salary = {
    Mikhail: 30000,
    Tatyana: 60000,
    Margarita: 50000,
};
sum = (pay_after_work) => {
    let total = 0;

    if (isEmpty(pay_after_work)) return 0;

    for (const key in pay_after_work) {
        total += pay_after_work[key];
    }

    return total;
};
console.log(sum(salary)); // 140000


// Task 3: Function that multiplies numeric values (*2)
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric = (object_for_calc) => {
    for (const key in object_for_calc) {
        if (typeof(object_for_calc[key]) === 'number') {
            object_for_calc[key] *= 2;
        }
    }
};
multiplyNumeric(menu);
console.log(menu);