class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        // use the internal property and correct method name
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        // refer to the internal field to avoid infinite recursion
        return `${this._password}hitesh_`;
    }
    set password(value){
        this._password = value;
    }
}
const bipin=new User("bip@gmail.com","abb1")
console.log(bipin.email)
console.log(bipin.password)