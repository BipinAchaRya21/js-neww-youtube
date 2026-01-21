let a=344
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
}