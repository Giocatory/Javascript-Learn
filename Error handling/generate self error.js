let json = '{"age": "34"}';

try {
    let user = JSON.parse(json); // all ok

    if (!user.name) {
        throw new Error("А где имя?");
    }

    console.log(user.name);
} catch (e) {
    console.log("JSON error: " + e.message); // JSON error: А где имя?
}