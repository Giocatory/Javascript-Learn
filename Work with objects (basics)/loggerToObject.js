'use strict';

const person = {
    name: "Mike",
    age: 33,
    info() {
        console.log('Name: ' + this.name)
    },
    isAdmin: true,
}

person.info()

const logger = {
    properties(top = false, between = false, bottom = false) {
        if (top) console.log('----------- START ----------')
        Object.keys(this).forEach((key, ind, mass) => {
            console.log(key + ': ' + this[key])
            if (between && ind !== mass.length - 1) console.log('--------------------------------')
        })
        if (bottom) console.log('------------- END -------------')
    }
}

logger.properties.apply(person, [true, true, true])