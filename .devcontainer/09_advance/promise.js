// A Promise is an object way to handle asynchronous operations and handle tasks that take time
//(like fetching data from an API, reading a file, etc.) without blocking the main thread of execution.

// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved successfully!");
    },2000)
})
//Handle the result
myPromise.then((result)=>{
    console.log(result); // Output: "Promise resolved successfully!"
}).catch((error)=>{
    console.log(error); // Handle any errors that may occur
})