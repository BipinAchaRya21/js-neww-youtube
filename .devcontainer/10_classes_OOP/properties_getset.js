function User(email, password) {
    // store raw values in private fields
    this._email = email;
    this._password = password;

    // define getters/setters on the instance
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return `${this._password}hitesh_`;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
}

const bipin = new User("bipin@gmail.com", "123456");
console.log(bipin.email);
console.log(bipin.password);