//Part 1: Object Literals
/*const User={
    username:"Bipin",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        //console.log(`Username:${this.username},Login Count:${this.loginCount},Signed In:${this.signedIn}`);
        console.log(this);
    }
}
User.getUserDetails();*/

//Part 2:Constructor Functions
function User(username,loginCount,signedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.signedIn=signedIn;

    this.greeting=function(){
        console.log(`Hello,${this.username}! You have logged in ${this.loginCount} times.`);
    }
    return this;
}
//create instances of User using new keyword
const user1=new User("Bipin",8,true);
const user2=new User("Barsha",5,false);

user1.greeting();
user2.greeting();