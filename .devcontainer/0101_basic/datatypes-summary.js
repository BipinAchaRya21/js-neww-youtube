//primitive
// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber=2345677786n


//reference (non primitive)
// Array,Objects,Functions
const heros =["Rajesh", "Aditiya","Dipa"];
let myObj={
    name:"Bipin",
    age:22,
}
const myFunction =function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);