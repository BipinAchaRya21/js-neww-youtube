//Dates
/*let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);*/
let myCreatedDate=new Date(2026,0,23);
console.log(myCreatedDate.toLocaleString());
let myCreatedDate1=new Date(2026,0,23,5,3);
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate.toDateString());
let myCreatedDate2=new Date("2023-01-14");
console.log(myCreatedDate2.toLocaleString());
//+++Time stamp milisecond second convert
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
//'${newDate.getDa()} and the time
newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:
})