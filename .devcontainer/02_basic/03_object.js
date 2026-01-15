//Singeton
//object.create
//object literals
const mySym=Symbol("key1")
const jsUser={//object
    name:"Bipin",
    age:21,
    location:"Chuhandanda",
    email:"Bipin@gmail.com",
    isLoggedIn:false,
    "full name":"Bipin Acharya",
    lastLoginDays:"mykey1",
    [mySym]:"key1"
}
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//console.log(jsUser.mySym)//type of string not using big bracet in above symbol
//console.log(jsUser[mySym]);
jsUser.email="hitesh@chatgppt.com"
Object.freeze(jsUser)//no change inside object
jsUser.email="aditiya@gmail.com"
//console.log(jsUser);
jsUser.greeting=function(){
    console.log("Hello js User!");
}
jsUser.greetingTwo=function(){
    console.log('Hello Js User ${this.name}');
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());