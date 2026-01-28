const Coding=["js","c++","python","java","ruby"]
Coding.forEach(function(val){
   // console.log(val);
})
Coding.forEach((item)=>{
    //console.log(item);
})
function printme(item){
    //console.log(item);
}
Coding.forEach(printme);
Coding.forEach((item,index,arr)=>{
    //console.log(`item at index ${index} is ${item} in array ${arr}`);
})
const myCoding=[
    {
        language:"javascript",
        type:"frontend"
    },
    {
        language:"python",
        type:"backend"
    },
     {
        language:"java",
        type:"fullstack"
    },
]
myCoding.forEach((item)=>{
    console.log(`item is ${item.language} and type is ${item.type}`);
})