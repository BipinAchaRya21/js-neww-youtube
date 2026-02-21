// All function, Array, Object, etc. are objects in JavaScript. They are instances of the Object class. This means that they have properties and methods that can be accessed and used.
function multipleBy5(num){
    return num*5;
}
multipleBy5.power=2;//We can add properties to functions because they are objects
//console.log(multipleBy5.power);//Output: 2
//console.log(multipleBy5(5));//Output: 25
//console.log(multipleBy5.prototype);//Output: {} (functions have a prototype property that is an object)
function CreateUser(username,score){
    this.username=username;
    this.score=score;
}
CreateUser.prototype.increment=function(){
    this.score++;
}
CreateUser.prototype.printMe=function(){
    console.log(`Username:${this.username},Score:${this.score}`);
}
const user1=new CreateUser("Bipin",8);
const user2=new CreateUser("Barsha",5);
user1.increment();
user1.printMe();//Output: Username:Bipin,Score:9
user2.printMe();//Output: Username:Barsha,Score:5