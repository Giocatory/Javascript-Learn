let oneObject = {
    name: "Mikhail",
    age: 33,
};

let twoObject = Object.assign(oneObject, {});

// Now there are 2 different objects with the same content.

console.log(oneObject);
console.log(twoObject);