"use strict";

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let number = document.getElementById("doc_num");


function simpleNum() {
    number.textContent = +randomIntFromInterval(1, 50);
    let num = parseInt(number.textContent);
    if (document.getElementById("result").textContent != "") {
        document.getElementById("result").textContent = "";
    }
    for (let i = 0; i <= num; i++) {
        if (testPrime(i)) {
            document.getElementById("result").innerHTML += `${i} - `;
        }
    }
    let line = document.getElementById("result").textContent;
    line = line.slice(0, -2);
    document.getElementById("result").textContent = line;
}

function testPrime(num) {
    // Less than or equal to 1 are not prime
    if (num <= 1) return false;

    // 2 and 3 are prime, so no calculations
    if (num == 2 || num == 3) return true;

    // If mod with square root is zero then its not prime 
    if (num % Math.sqrt(num) == 0) return false;

    // Run loop till square root
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {

        // If mod is zero then its not prime
        if (num % i === 0) return false;
    }

    // Otherwise the number is prime
    return true;
}