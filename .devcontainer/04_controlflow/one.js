//if statement and else statement
/*const temp=25
if(temp>30){
    console.log("It's a hot day");
}
else{
    console.log("It's a lovely day");
}
console.log("Enjoy your day");*/
// <,>,<=,>=,==,===,!=,!==
const score=200
if(score>=100){
    let power="fly"
    //console.log(`you have the power to ${power}`);
}
//console.log(`you have the power2 to ${power}`);//error power is not defined
const balance=1000
//if(balance>1500) console.log("you are eligible for a credit card");
//else console.log("you are not eligble for a credit card:");
//else if ladder
/*if(balance<500)
{
    console.log("you are eligible for a credit card gold");
}
else if(balance<750)
{
console.log("you are eligible for a credit card silver");
}
else if(balance<1000)
{
    console.log("you are eligible for a credit card platinum")}
else
{
    console.log("you are eligible for a credit card diamond");
}*/
const userLoggedIn=true
const debitCard=true
const LoggedInfromGoogle=false
const LoggedINfromEmail=true
if(userLoggedIn && debitCard)//and operator
{
    console.log("you are eligible for a credit card");
}
if(LoggedInfromGoogle || LoggedINfromEmail)// or operator
{
    console.log("you are logged in");
}