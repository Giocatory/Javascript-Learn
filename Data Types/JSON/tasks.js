'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let newObj = JSON.parse(JSON.stringify(user));

console.log(newObj); // { name: 'Василий Иванович', age: 35 }


// Исключить обратные ссылки
let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [
        { name: "Иванов" },
        { name: "Петров" }
    ],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));

/*
{
  "title":"Совещание",
  "occupiedBy": [
      {"name":"Иванов"},
      {"name":"Петров"}
    ],
  "place":{
      "number":23
    }
}
*/