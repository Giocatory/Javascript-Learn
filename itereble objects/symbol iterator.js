'use strict';

// loop for iterable objects => for..of
let range = {
    from: 1,
    to: 5,
};

// 1. Call for..of first causes this feature
range[Symbol.iterator] = function() {

    // ... it returns the object of the iterator:
    // 2. Further, for..of only works with this iterator, requesting new values
    return {
        current: this.from,
        last: this.to,

        // 3. Next () is called at each iteration of the FOR..OF cycle
        next() {
            // 4. It must return the value in the form of an object {Done: .., Value: ...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// it works now!
for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
}

console.log('\n');
// OR easy
let range2 = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range2) {
    console.log(num); // 1, then 2, 3, 4, 5
}