//ES6 class constructor//Modern way
class User {
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc123`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}
//creating an instance of the class
const chai=new User("Chai","chai@gmail.com",123)
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

