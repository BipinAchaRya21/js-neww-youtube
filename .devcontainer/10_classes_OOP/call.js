function setUsername(username){
    //complex DB calls
    this.username=username
    console.log("Called");
}
function CreateUser(username,email,password)
{
    setUsername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new CreateUser("Bipin","Bipin00@gmai.com",9191)
console.log(chai);
// call()is used to borrow a function and apply t to the current object