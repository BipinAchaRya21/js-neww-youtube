//Now it's time to crack inheritance concept
class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is:${this.username} `)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)//another function properties call
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai=new Teacher("chai","chai@gmail.com",2344)
chai.logMe();
const Masalachai=new User("Masachai")
Masalachai.logMe()
console.log(chai instanceof User);