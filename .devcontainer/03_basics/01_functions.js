function SayMyName()
{
    console.log("H");
    console.log("i");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//SayMyName()
//function addTwoNumbers(number1,number2)//parameters
//{
//console.log(number1+number2);
//}
//addTwoNumbers(3,4)//arguments
//const result=addTwoNumbers(3,5)
//console.log("result:",result);
function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result//console.log("Hitesh")
    //return number1+number2
}
const result=addTwoNumbers(7,8)
console.log("Result:",result)
//(username="sam")
function LoginUserMessage(username){
    
if(username===undefined)
{
    console.log("Please enter a username");
}


return'${username} just logged in'
}
console.log(LoginUserMessage("hitesh"));
console.log(LoginUserMessage)