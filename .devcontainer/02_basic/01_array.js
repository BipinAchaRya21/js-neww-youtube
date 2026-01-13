//Array 
const myArr=[0,1,2,3,4,5]
const myHeros=["ironman","spiderman","Hulk"]
const myArr2=new Array(1,2,3,4,5,6)
//console.log(myArr);
//console.log(myArr[1]);
//console.log(myArr2);
//console.log(myHeros);
//Array methods
//myArr.push(6)
//myArr.pop();
//myArr.unshift(9);
//myArr.shift();
//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));
//const newArr=myArr.join()
//console.log(myArr);
//console.log(newArr);
//slice and splice ( splice  involved 1st nd last original remove its value but slice not remove and involved also)
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);