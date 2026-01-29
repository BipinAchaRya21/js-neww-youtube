/*const myNumers=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNumers.map((num)=>num+10)
const newNums=myNumers
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=50)
console.log(newNums);*/

//Reduce method
const myNums=[1,3,5,7,9]
//const myTotal=myNums.reduce(function(accumulator, currentValue){
    //console.log(`Accumulator: ${accumulator} Current Value: ${currentValue} `);
//return accumulator + currentValue;
//},0 );
/*const myTotal=myNums.reduce((accumulator, currentValue)=>accumulator+currentValue,0)
console.log(myTotal); */

const  ShoopingCart=[
    {
        item:"js course",
        price:100,
        quantity:1
    },
    {
        item:"css course",
        price:50,
        quantity:2
    },
    {
        item:"html course",
        price:70,
        quantity:1
    },
]
const priceTotal=ShoopingCart.reduce((accumulator, currentItem)=>{
    return accumulator + currentItem.price * currentItem.quantity
},0
)
console.log(priceTotal);