'use strict';

let field = document.querySelector('.field');

function addOne() {
    field.textContent += '1';
}

function addTwo() {
    field.textContent += '2';
}

function addPlus() {
    field.textContent += '+';
}

function addResult() {
    let result = field.textContent
    field.textContent = eval(result);
}

function addReset() {
    field.textContent = '';
}