'use strict';

let now = new Date();
console.log(now); // 2022-01-06T05:07:58.142Z

let date = new Date("2022-01-06");
console.log(date); // 2022-01-06T00:00:00.000Z

// New Date (Year, Month, Date, Hours, Minutes, Seconds, MS)
// Create a Date object with specified components at the local time zone.Only the first two arguments are required.

// Year should consist of four digits: the value of 2013 is correct, 98 - no.
// MONTH begins with 0 (January) to 11 (December).
// Date parameter here is a day of month.If the parameter is not specified, the value is taken 1.
// If the Hours / Minutes / Seconds / MS parameters are missing, the value becomes 0.

let dateNow = new Date();
dateNow.setFullYear(2022);
dateNow.setMonth(0);
dateNow.setDate(6);
dateNow.setHours(8);
dateNow.setMinutes(30);

console.log(dateNow); // 2022-01-06T05:30:53.969Z

let dateParse = new Date(Date.parse('2022-01-06T08:30:50.417-07:00'));
console.log(dateParse); // 2022-01-06T15:30:50.417Z