//truthy and falsy values

const userEmail="hitesh@gmail.com"
if(userEmail){
    console.log(`you have logged in with email ${userEmail}`)
}
else{
    console.log("please provide yoour email");
}
/*falsy values: false,0,-0,BigInt 0n,"",null,undefined,Nan
truthy values:everything else other than falsy values:
"0",'false',[],{},function(){},""
*/
/*if (userEmail.length===0){
    console.log("Array is empty");
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}*/
//Nullish coalescing operator(??):null or undefined
let val1;
//val1=5??10
//val1=null??10
//val1=undefined??15
//val1=null??10??20
//console.log(val1);
//ternary operator
//condition?true:false
const userAge=21
 userAge>20?console.log("you are above 20"):console.log("you are below 20");