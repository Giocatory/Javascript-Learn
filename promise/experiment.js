'use strict';

const delay = (wait = 1000) => {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise;
}

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

async function asyncExample() {
    await delay(2000); // 2 sec
    const data = await getData();
    console.log('Data', data);
}

asyncExample();