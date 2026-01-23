//Immediately Invoked Function Expression (IIFE)
(function chai(){//named function
    //console.log("This function runs immediately upon defintion");
    console.log(`DB CONNECTED`);
})();
// () defintion + () exectution//()()//IIFE
(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();

//Arrow function IIfe
(()=>{
    console.log(`Db connected three`);
})();
((name)=>{
    console.log(`Db connected four ${name}`);
})('Bipin');