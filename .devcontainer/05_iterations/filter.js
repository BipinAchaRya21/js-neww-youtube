const coding =["js","c++","python","java","ruby"]
const values=coding.forEach((item)=>{
    //console.log(item);
   return item;
})
//console.log(values);//undefined
//filter method
const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=>num>5)
//console.log(newNums);//[6,7,8,9,10]

//const newNums=myNums.filter((num)=>{
   // return num>6
//})
//console.log(newNums);//[7,8,9,10]

//for each loop
const newNums=[]
myNums.forEach((num)=>{
    if (num>7){
        newNums.push(num)
    }
})
//console.log(newNums);"//[8,9,10]
//example of database records using filter
const books=[
    {title:"Book one", genre:"Fiction",publish:1981, edition:2004},
    {title:"Book two", genre:"Non-Fiction",publish:1992, edition:2008},
    {title:"Book three", genre:"Science Fiction",publish:2005, edition:2015},
    {title:"Book four", genre:"Mystery",publish:1995, edition:2010},
    {title:"Book five", genre:"Fiction",publish:2014, edition:2004},
];
//const userBooks=books.filter((bk)=>bk.genre==="Fiction")
let userBooks=books.filter((bk)=>{
    return bk.publish>=1992 && bk.genre==="Fiction"
})
//console.log(userBooks);
