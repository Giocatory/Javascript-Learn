/**
 * @function factorial: number
 */

let factorial = function(num) {
    if (+num === 0 || +num === 1) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

let factNum = factorial(10); // 3628800
console.log(factNum);

let factNumTwo = factorial;
console.log(factNumTwo(5)); // 120