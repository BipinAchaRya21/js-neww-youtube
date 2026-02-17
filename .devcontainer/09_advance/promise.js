// A Promise is an object way to handle asynchronous operations and handle tasks that take time
//(like fetching data from an API, reading a file, etc.) without blocking the main thread of execution.


// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.
/*const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved successfully!");
    },2000)
})
//Handle the result
myPromise.then((result)=>{
    console.log(result); // Output: "Promise resolved successfully!"
}).catch((error)=>{
    console.log(error); // Handle any errors that may occur
})*/

/*const promiseone=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography,network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})
promiseone.then(function(){
    console.log('Promise consumed');
})*/

/*new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 is completed");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise2 consumed");
})*/

/*const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Bipin",email:"bipin@example.com"});
    },1000)
})
promisethree.then(function(user){
   // console.log(user);//user.username
    console.log(user.email);
})*/
/*const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Bipin",email:"bipin@example.com"});
        }else{
            reject("Error:Something went wrong");
        }
    },1000)
});
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("Promise execution completed"));  */

/*const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=false;
       if(!error){
        resolve({username:"Javascript",password:"123456"});
       }else{
        reject("Error:Something went wrong");
       }
    },1000)
});
async function consumePromise(){
    try{
        const response=await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
    
    }
    consumePromise();*/
    //fetching data from an internet API using async/await

   /* async function getAllusers(){
    try{
        const response=await fetch("https://api.github.com/users/BipinAchaRya21");
        const data=await response.json();//convert response to json
        console.log(data);//user info
    }catch(error){
        console.log("Error fetching data:",error);
    }
}
getAllusers();*/
fetch("https://api.github.com/users/BipinAchaRya21").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error fetching data:",error);
})