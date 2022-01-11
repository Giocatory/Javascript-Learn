'use strict';

/*
SetTimeout allows you to call a function once at a certain time interval.
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

SetInterVal allows you to call a function regularly, repeating the call at a certain time interval.
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
*/

// 1
setTimeout(() => {
    console.log("after delay: 1.5sec");
}, 1500);


function timeOutMessage(name, wait) {
    console.log(`Message: 'Hello ${name}; Delay: ${wait/1000}sec`)
}

setTimeout(timeOutMessage, 2500, "Mike", 1500);

// 2. Display numbers from 1 to 10, every second, after 10 stop the interval
let count = 0;
let tenSeconds = setInterval(() => {
    if (count !== 11) console.log(count++);
    else clearInterval(tenSeconds);
}, 1000); // 1...10

// 2.1 Display numbers from 1 to 10, every second, after 10 stop the interval WITH DELAY
setTimeout(() => {
    let count = 0;
    let tenSeconds = setInterval(() => {
        if (count !== 11) console.log(count++);
        else clearInterval(tenSeconds);
    }, 1000); // 1...10
}, 13000);