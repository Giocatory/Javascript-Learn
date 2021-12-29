function user(userName, role = "simple user") {
    this.name = userName;
    this.role = role;

    this.userInfo = () => console.log(`${this.role}: ${this.name}`);
}

let mike = new user("Mikhail", "admin");
let tatyana = new user("Tatyana");

mike.userInfo(); // admin: Mikhail
tatyana.userInfo(); // simple user: Tatyana

console.log(mike);
// user {
//     name: 'Mikhail',
//     role: 'admin',
//     userInfo: [Function (anonymous)]
// }