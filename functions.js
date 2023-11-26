//************ callback functions *************

// console.log("start")
// function hello(name,callback){
//     setTimeout(function(){
//         callback(`hello ${name}`)
//     },1000)
// }

// hello("Roshan",function(message){
//     console.log(message)
// })

// console.log("stop")

// output

// start
// undefined
// stop
// hello roshan

// --------------- callback hell --------------- 

// callback hell - callback function inside the callback function(nested callback) its like a pyramid stucture

// console.log("start")

// function hello(name,callback){
//     setTimeout(function(){
//         callback(`hello ${name}`)
//     },1000)
// }

// const coding=(name,callback)=>{
//     setTimeout(()=>{
//         callback(`${name} loves coding`)
//     },2000)
// }

// hello("Roshan",function(message){
//     console.log(message)
//     coding("Roshan",(message)=>{
//         console.log(message)
//     })
// })


// console.log("stop")

// output

// start
// stop
// hello roshan
// Roshan loves coding


