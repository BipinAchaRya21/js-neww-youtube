/*let a=344
const b=99
//var c=33
if(true)
{
    let a=10//scope outside
    const b=44//scope outside
    var c=456//var not used it run scope outside same value defined in scope
console.log("Inner:",a)
}
console.log(a);
console.log(b);
//console.log(c);
/* for(let i=0;i<array.length;i++)
{
const element=array[i];
}*/

// scope level and mini hosting in js
function one()
{
    const username="Bipin"
    function two()
    {
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
   // two()
}
//one()
if(true)
{
    const username="Hitesh"
    if(username==="Hitesh")
    {
        const website="  Youtube"
        //console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);
//++++++++++Interesting+++++++
//console.log(addOne(5));//yes printed before declare
function addOne(num)
{
return num+1
}
//console.log(addOne(5));
//console.log(addTwo(5));//not execute before function
const addTwo=function(num) 
{
    return num+2
}
console.log(addTwo(9));