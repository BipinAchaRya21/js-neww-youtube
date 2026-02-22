// all have been its own propert writable,enurmable,configurable true false
//const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(Math.PI);
//console.log(descripter)
//Math.PI=5
//console.log(Math.PI)
const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,
orderchai:function(){
    console.log("chai nahi bani vhai");
}
}
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,"name",{writable:false,enumerable:true})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for(let[key,value]of Object.entries(chai)){
    if(typeof value!=="function"){
        console.log(`${key}:${value}`);
    }
}