//object de structure 
const course={
    couseName:"js in hindi",
    price:999,
    courseInsructor:"Bipin"
}
//course.courseInsructor
const {courseInsructor}=course
console.log(courseInsructor);
const {courseInsructor:instructor}=course// destructure
console.log(instructor);
/* react json and api
const navbar=({company})=>{
    }
    navbar(company="SBI")
    */
 /*  { //json vai json
    "name":"BIPIN",
    "courseName":"Js in hindi",
    "price":"free"
   }*/
/*
[
{},
{},
{}
]
