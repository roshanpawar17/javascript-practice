// ************** async ana await **************

//what is async and await?
/*
1. async() - 1. async() function always return a Promise

*/

// **********************************************

// console.log("start")

// function hello(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve(`hello ${name}`)
//         },1000)
//     })
// }

// const coding1=(name)=>{
//     return new Promise((resolve,reject)=>{
//         if(1){
//             setTimeout(()=>{
//                 resolve(`${name} loves coding`)
//             },2000)          
//         }else{
//             reject(new Error("reject the coding promise"))
//         }
//     })
// }

// const result = async ()=>{
//     const promise1=await hello("Roshan") //1st resolve this 
//     console.log(promise1)
//     const promise2=await coding1("Roshan") //then resolve this  
//     console.log(promise2)
// }

// console.log("end")

// result()

// output

// start
// stop
// hello Roshan
// Roshan loves coding

