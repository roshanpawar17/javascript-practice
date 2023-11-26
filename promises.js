// ******************* promises **************

//what is promise?
/*

*/

// ************************************************

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result=true
//         if(result){
//             resolve("Hello Roshan")
//         }else{
//             reject(new Error("not resolve"))
//         }
//     },1000)
// })

// console.log(promise)
// promise.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// ---------------1st way - promises hell---------------------

// console.log("start")

// function hello(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve(`hello ${name}`)
//         },1000)
//     })
// }

// const coding=(name)=>{
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

// console.log("stop")

// hello("Roshan").then((res)=>{
//     console.log(res)
//     coding("Roshan").then((res)=>{
//         console.log(res)
//     })
// }).catch((err)=>{
//     console.log(err)
// })

// output

// start
// stop
// hello Roshan
// Roshan loves coding

// ----------------2nd way - promises chaining---------------------------

// console.log("start")

// function hello(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve(`hello ${name}`)
//         },1000)
//     })
// }

// const coding=(name)=>{
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

// console.log("stop")

// hello("Roshan").then((res)=>{
//     console.log(res)
//     return coding("Roshan")
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// output

// start
// stop
// hello Roshan
// Roshan loves coding

// -----------------promise combinators ---------------------------

// 1. Promise.all() - 1.wait for all promises to resolve and returns array 
//                    2.if any one fails, it become an error and all other results are ignore  

// Promise.all([hello("Roshan"),coding("Roshan")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// ------------------------

// 2. Promise.allSettled() - waits for all the promises to-settled and return the
                        //  array of objects with status and value                   

// Promise.allSettled([hello("Roshan"),coding("Roshan")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// --------------------------

// 3. Promise.race() - 1. wait for first promise to fullfilled or rejected
//                     2. any one reject gives an error 

// Promise.race([hello("Roshan"),coding("Roshan")]).then((res)=>{
//     console.log(res) //hello Roshan
// }).catch((err)=>{
//     console.log(err)
// })

// -----------------------------

// 4. Promise.any() - 1. wait for first promise to fullfilled not rejected
//                    2. reject other promise 
//                    3. if all promises are rejected then give error   

// Promise.any([hello("Roshan"),coding("Roshan")]).then((res)=>{
//     console.log(res) //hello Roshan
// }).catch((err)=>{
//     console.log(err)
// })

// ************** questions *************************

// 1. what's the output

// console.log("start")

// let promise2=new Promise((resolve,reject)=>{
//     console.log(1)
//     resolve(2)
// })


// promise2.then((res)=>{
//     console.log(res)
// })

// console.log("end")

// output
//start
//1
//end
//2

// --------------------------------

// 2.   


