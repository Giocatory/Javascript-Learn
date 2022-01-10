'use strict';

/*
SetTimeout allows you to call a function once at a certain time interval.
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

SetInterVal allows you to call a function regularly, repeating the call at a certain time interval.
*/

setTimeout(() => {
    console.log("after delay: 1.5sec");
}, 1500);


function timeOutMessage(name, wait) {
    console.log(`Message: 'Hello ${name}; Delay: ${wait/1000}sec`)
}

setTimeout(timeOutMessage, 2500, "Mike", 1500);