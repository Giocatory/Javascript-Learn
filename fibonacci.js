/**
 * @function fibonacci: Array
 */
let fibonacci = function(num) {
    if (+num === 0) return 0;
    if (+num === 1) return 1;
    if (+num === 2) return 1;
    let fibArray = [0, 1, 1];
    if (+num > 2) {
        for (let i = 3; i <= +num; i++) {
            fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        }
    }
    return fibArray;
};

let countFib = 5;
let result = fibonacci(countFib);
result.forEach(element => {
    console.log(element);
});
console.log(result);