const user={
    username:"hitesh",
    price:999,
    welcomeMessag: function()
    {
       // console.log(`${this.username},welcome to website`);
        //console.log(this);
    }
}
//user.welcomeMessag()// this refer to user object currently context
//user.username="sam"
//user.welcomeMessag()
//console.log(this)
/*function chai()
{
    let username="Hitesh"
    //console.log(this.username);
    //console.log(this);
}
chai();*/
/*const chai=function()
{
    let username="Hitesh"
    console.log(this.username);
}
chai();*/
//arrow function
/*const chai=()=>{
    let username="Hitesh"
    console.log(this);
}
chai();*/
//()=>{}
/*const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(4,5));*/
//implicit return
/*const addTwo=(num1,num2)=>num1+num2
console.log(addTwo(8,8));*/
/*const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(9,4));*/
const addTwo=(num1,num2)=>({username:"hitesh"})
console.log(addTwo(7,4));
/*const myArray=[2,5,5,6,7]
myArray.forEach(function(element))*/
