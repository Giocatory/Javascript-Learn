try {
    // код...
    console.log('Begin try')
    lalala; // error
} catch (err) {
    // обработка ошибки
    console.log('we have error');
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
}
// Begin try
// we have error
// ReferenceError
// lalala is not defined