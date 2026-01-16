//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="124abc"
tinderUser.name="Sammu"
tinderUser.isloggedIn=false
//console.log(tinderUser);
//object inside object
const regularUser={
    email:"Bipin01@gmail.com",
    fullname:{
        userFullname:{
firstName:"Bipinn",
lastName:"Acharya"
        }
    }
}
console.log(regularUser.fullname.userFullname.lastName);
const obj1={1:"a",2:"b"}
const obj2={3:"d",4:"c"}
//const obj3={obj1,obj2}
//console.log(obj3);
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3);
const obj3={...obj1,...obj2}
//console.log(obj3);
const Users=[
    {
    id:1,
    email:"h@gmail.com"
    },
    {
        id1:2,
        email:"bipin@gmail.com"
    }
]
//user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));//array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));