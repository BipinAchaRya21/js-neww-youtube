function calculateCartprice(...num1)//... rest operator
{
    return num1
}
console.log(calculateCartprice(200,400,600,1000));//all together
const user={
    username:"Bipin",
    price:200
}
function handleObject(anyobject)
{
    console.log('username is ${anyobject.username} and price is ${anyobject.price}')
}
/*handleObject(user)
handleObject({
    username:"sam",
    price:4000
})*/
const myNewarray=[200,400,100,600]
function returnSecond(getArray)
{
return getArray[1]
}
//console.log(returnSecond(myNewarray));
console.log(returnSecond([200,433,500,577]));