'use strict';

/*  What is the name of the day of the week */
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

let date = new Date(2022, 0, 6); // 4 января 2022 года
console.log(getWeekDay(date)); // ЧТ


/** Which day number was a few days ago */
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

date = new Date(2015, 0, 6);

console.log(getDateAgo(date, 1)); // 5
console.log(getDateAgo(date, 2)); // 4
console.log(getDateAgo(date, 365)); // 6
console.log(getDateAgo(date, 370)); // 1