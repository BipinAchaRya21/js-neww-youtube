//concept of stack and heap memory in javascript
//stack(primitive(copy), non-primitive(reference(orginal)))
let myYoutubename="BipinAcharyadotcom"
let anotherName=myYoutubename
anotherName="chaiaurcode"
console.log(myYoutubename);
console.log(anotherName);
let userone={
    email:"user@google.com",
    upi:"user@ybl"
}
let usertwo=userone
usertwo.email="bipin@gmail.com"
console.log(userone.email);
console.log(usertwo.email);