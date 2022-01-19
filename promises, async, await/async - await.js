// async always return promise

async function ff() {
    return 1;
}
console.log(ff()); // Promise { 1 }
console.log(typeof ff()); // object
ff().then(console.log); // 1

// AWAIT works only inside async functions

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
    });

    let result = await promise; // будет ждать, пока промис не выполнится (*)

    console.log(result); // "готово!"
}

f();

// call async function in simple function
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return 10;
}

function callWait() {
    wait().then(result => console.log(result));
    // or -> wait().then(console.log)
}
callWait(); // 10 (after 1,5sec)