/*what is OOP?
Object Oriented Programming
Organizing code into Objects with properties & methods.
const User={
username:"Bipin",
age:30,
print(){
console.log("User is logged in");
}
}
3)prototypes in javascript
function User(username){
this.username=username;
}
//Add method to all user objects
User.prototype.greet=function(){
console.log(`Hello ${this.username}`);
}
const user1=new User("Bipin");
user1.greet();//Hello Bipin
//share methods without duplication
4)Classes in javascript
class User{
constructor(username,age){
this.username=username;
this.age=age;
}
greet(){
console.log(`Hello ${this.username}`);
}
}
const user1=new User("Bipin",30);
user1.greet();//Hello Bipin
//cleaner,easier to read
Instances & Keywords
new keyword
const user1=new User("Bipin",30);
user1.greet();//Hello Bipin
//creates new instance of User class
this keyword
class User{
constructor(username){
this.username=username;
}
greet(){
console.log(`Hello ${this.username}`);
}
}
const user1=new User("Bipin");
user1.greet();//Hello Bipin
//refers to current instance of the class
4)  4 pillars of OOP 
1)Abstraction
Hiding complex implementation details and showing only necessary features.
user doesn't need to know how it works
class Car{
start(){
this.ignition();
this.fuelPump();
this.sparkPlugs();
console.log("Car started");
}
//Hidden details
ignition(){
console.log("Ignition started");    
}
sparkPlugs(){
console.log("Spark plugs activated");
}
fuelPump(){
console.log("Fuel pump activated");
}
}
const car1=new Car();
car1.start();
//Car started
//Abstraction hides the complex steps of starting a car, user just calls start() method without worrying about the internal workings.
2)Encapsulation
Bundling data and methods that operate on that data within a single unit (class), and restricting access to some of the object's components.
(Bundle and protect data)
class BankAccount{
#balance=0; //private property
deposit(amount){
this.#balance+=amount;
}
getBalance(){
return this.#balance;
}
}
const account1=new BankAccount();
account1.deposit(100);
console.log(account1.getBalance());//100
console.log(account1.#balance);//SyntaxError: Private field '#balance' must be declared in an enclosing class
//Encapsulation allows us to protect the balance property from direct access, ensuring that it can only be modified through the deposit method, thus maintaining data integrity.
5)Inheritance 
Creating a new class that is based on an existing class, inheriting its properties and methods.
//Parent Class
class Animal{
eat(){
console.log("Eating...");
}
}
//Child class inherits from Animal
class Dog extends Animal{
bark(){
console.log("Woof!");
}
}
const dog1=new Dog();
dog1.eat();//Eating...
dog1.bark();//Woof!
//Inheritance allows the Dog class to reuse the eat method from the Animal class, promoting code reusability and a hierarchical relationship between classes.
6)Polymorphism
The ability of different classes to be treated as instances of the same class through a common interface, often achieved through method overriding.
same method name, different behavior
class Animal{
speak(){
console.log("Animal speaks");
}
}
class Dog extends Animal{
speak(){
console.log("Woof!");//Override speak method
}
}
class Cat extends Animal{
speak(){
console.log("Meow!");//Override speak method
}
}
const dog1=new Dog();
const cat1=new Cat();
dog1.speak();//Woof!
cat1.speak();//Meow!
//Polymorphism allows us to call the speak method on both Dog and Cat instances, and each will respond according to its own implementation, demonstrating flexibility in code design.