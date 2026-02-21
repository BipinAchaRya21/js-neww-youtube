//the static means => This method belongs to class not to object // also not accessible
//call with class name not object
class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
    static CreateId(){
        return `123`
    }
}
const user1=new User("Bipin")
console.log(user1.logMe());
//console.log(user1.CreateId())
console.log(User.CreateId())
class Teacher extends User{
    constructor(username,email)
    {
        super(username)
        this.email=email
    }
}
const iphone=new Teacher ("iphone","Bipin@gmail.com")
//console.log(iphone.CreateId());
console.log(Teacher.CreateId());