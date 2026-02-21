//let myName="Bipin  ";
//let myChannel="Chai   "
//console.log(myName.length);//Output: 7 (length of the string including spaces)
//console.log(myName.truelength);//Output: 5 (length of the string excluding spaces)
let myHeros=["thor","spiderman","ironman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    ironman:"suit",
    getSpiderPower:function(){
        console.log(`spiderman power is ${this.spiderman}`);//Output: spiderman power is sling
    }
}
Object.prototype.hitesh=function(){//We can add methods to the Object prototype, which will be available to all objects
    console.log("hitesh is present in all objects");//Output: hitesh is present in all objects
}
Array.prototype.heyHitesh=function(){//We can add methods to the Array prototype, which will be available to all arrays
    console.log("Hey Hitesh, how are you?");//Output: Hey Hitesh, how are you?
}
//heroPower.hitesh();//Output: hitesh is present in all objects
//myHeros.hitesh();//Output: hitesh is present in all objects
//myHeros.heyHitesh();//Output: Hey Hitesh, how are you?
//heroPower.heyHitesh();//not a function (heyHitesh is not a function because heroPower is an object and heyHitesh is a method added to the Array prototype)
// inheritance
const User={
    name:"Bipin",
    email:"bipin@example.com"
    }
    const Teacher={

        makeVideos:true
    }
    const TeachingSupport={
        isAvailable:true
    }
    
    const TAsupport={
        makeAssignment:'js assignment',
        fullTime:true
__proto__:TeachingSupport
    }
    Teacher.__proto__=User;//Teacher inherits from User
    TAsupport.__proto__=Teacher;//TAsupport inherits from Teacher
   // console.log(TAsupport.name);//Output: Bipin (TAsupport can access properties of User through Teacher)
    //console.log(TAsupport.makeVideos);//Output: true (TAsupport can access properties of Teacher)
   // console.log(TAsupport.isAvailable);//Output: true (TAsupport can access properties of TeachingSupport)
    //Moderen way syntax
    Object.setPrototypeOf(TeachingSupport,Teacher);//TeachingSupport inherits from Teacher
   // console.log(TeachingSupport.name);//Output: Bipin (TeachingSupport can access properties of User through Teacher)

    let anotherUsername="Bipin  ";
    String.prototype.truelength=function(){
        console.log(this);//Output: Bipin   (the string on which the method is called)
        console.log(`True length of the string is ${this.trim().length}`);//Output: True length of the string is 5 (length of the string excluding spaces)
    }
    anotherUsername.truelength();//Output: Bipin   (the string on which the method is called) and True length of the string is 5 (length of the string excluding spaces)
    "Barshu beb".truelength();//Output: Barshu beb (the string on which the method is called) and True length of the string is 9 (length of the string excluding spaces)
    