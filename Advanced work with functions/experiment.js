'use strict';


// Arrow functions do not have "arguments"
function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}

function sayHi(who) {
    console.log('Hello, ' + who + '!');
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("Mike");