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

// ************* first class function ***********

// function sum(a,b){
//     return a+b
// }

// function displaySum(fn){
//     console.log("Sum is : "+fn(2,3))
// }

// displaySum(sum) // Sum is : 5

// ************* IIFE function ***********

// (
//     function(){
//         console.log("Hello, Javascript")
//     }
// )()

// (
//     function(n){
//         console.log(n**2) // suare of 6 is 36
//     }
// )(6)

// (
//     function(x){
//         return (
//             function(y){
//                 console.log(x) //1 -- beacause of closer this function used the parent lexical scope
//             }
//         )(2)
//     }
// )(1)

// ************ function scope **************

// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// }

// sample()

// var x=11

// function sample(){
//     console.log(x) //undefine
//     var x=10
//     console.log("Hello "+x)
// }

// function mul(...nums){ 
//     console.log(nums) // [5, 6]
//     console.log(nums[0],nums[1]) // 5 6
// }

// let arr = [5,6]
// mul(...arr)

// function values(a, b, c, ...rest){
//     console.log(a,b,rest) // 2, 3, [6, 8, 9]
// }

// values(2,3,4,6,8,9) 

// function nf(){
//     console.log(arguments)
// }

// nf(1,2,3,4)
 
// let af = ()=>{
//     console.log(arguments)
// }

// af(1,2,3,4) //arguments is not defined

// Higher-Order Function:

// function multiplier(factor) {
//     return function (number) {
//       return number * factor;
//     };
// }

// let r=multiplier(2)(3)
// console.log(r)

