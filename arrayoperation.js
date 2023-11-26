// *************** arrayoperations *************

// what is array?

/*

1. An array is a data type that can store a collection of data elements.
2. An elements in an array are ordered and each element can be accessed by a numerical index.
3. Arrays can be used to store any type od data, including numbers,string,objects and othres array

*/

let arr1 = [13,24,2,8,3,"Roshan"]
let arr2 = [3,4,72,88,43,99,87]

// console.log(arr1.length) //--> 6
// console.log(arr2.length) //--> 8
// console.log(arr1[3]) //--> 8
// console.log(arr1) //--> [13, 24, 2, 8, 3, 'Roshan']
// console.log(arr1.concat(arr2)) //--> [13, 24, 2, 8, 3, 'Roshan', 3, 4, 72, 88, 'harsh', 43, 99, 87]
// console.log(Array.isArray(arr1)) //--> true

// arr1[1] = "omkar"
// console.log(arr1) //--> [13, 'omkar', 2, 8, 3, 'Roshan']

// console.log(arr1.indexOf("Roshan")) //--> 5
// console.log(arr1.indexOf(3)) //--> 4
// console.log(arr1.lastIndexOf(3)) //--> 4


// arr1.push(10)
// console.log(arr1) //--> [13, 24, 2, 8, 3, 'Roshan', 10]
// arr1.pop()
// console.log(arr1) //--> [13, 24, 2, 8, 3, 'Roshan']

// arr1.unshift(10)
// console.log(arr1) //--> [10, 13, 24, 2, 8, 3, 'Roshan']
// arr1.shift()
// console.log(arr1) //--> [13, 24, 2, 8, 3, 'Roshan']

// console.log(arr1.reverse()) // --> ['Roshan', 3, 8, 2, 24, 13]
// console.log(arr1.slice(1,3)) // --> [24, 2]

// let b=arr1.toString()
// console.log(b, typeof b) // --> 13,24,2,8,3,Roshan | string

// let j = arr1.join("_") 
// console.log(j, typeof j) // --> 3_24_2_8_3_Roshan | string

// delete arr1[0]
// console.log(arr1) // --> [empty, 24, 2, 8, 3, 'Roshan']

// console.log(arr2.includes(23)) // --> false;
// console.log(arr2.includes(72)) // --> true;

// ********************** sorting array***********************************

// console.log(arr1.sort()) // --> [13, 2, 24, 3, 8, 'Roshan']

// //sorting ascending order
// let sa = (a,b)=>{
//     return a-b
// }
// console.log(arr1.sort(sa)) // --> [2, 3, 8, 13, 24, 'Roshan']

// //sorting descending order
// let sd = (a,b)=>{
//     return b-a
// }
// console.log(arr1.sort(sd)) // --> [24, 13, 8, 3, 2, 'Roshan']

// ************************ splice menthod *********************************
// console.log(arr1) // --> [13, 24, 2, 8, 3, 'Roshan']
// let sp=arr1.splice(1,2)
// console.log(sp) // --> [24,2] -- deleted values
// console.log(arr1) // --> [13, 8, 3, 'Roshan']

// console.log(arr1) // --> [13, 24, 2, 8, 3, 'Roshan']
// let sp2=arr1.splice(1,3,11,22,33) 
// console.log(sp2) // --> [24, 2, 8] -- deleted values
// console.log(arr1) // --> [13, 11, 22, 33, 3, 'Roshan']

// ***********foreach() method**************

// foreach() - does not return new array

// arr1.forEach((e)=>{
//     console.log(e)
// }) 

// output
// --> 13
// --> 24
// --> 2
// --> 8
// --> 3
// --> Roshan

// ***********map() method**************

// map() - return new array

// arr1.map((e)=>{
//     console.log(e)
// })

// output
// --> 13
// --> 24
// --> 2
// --> 8
// --> 3
// --> Roshan

// ***********filter() method**************

// console.log(arr2) // --> [3, 4, 72, 88, 43, 99, 87]
// let f=arr2.filter((e)=>{
//     return e>10
// })

// console.log(f) // --> [72, 88, 43, 99, 87]


// ***********some() method**************

// console.log(arr2)
// let s=arr2.some((e)=>{
//     return e>10
// })

// console.log(s) // --> true -- only one value check


// ***********every() method**************

// console.log(arr2)
// let e=arr2.every((e)=>{
//     return e>10
// })

// console.log(e) // --> false -- all value check


// ***********reduce() method**************

// let r=arr2.reduce((a,b)=>{
//     return a+b
// })

// console.log(r) // --> 396


// ***********find() and findIndex() method**************

// 1. find() --> this method returns the value of the first element in an array that pass a test

// console.log(arr2) // --> [3, 4, 72, 88, 43, 99, 87]
// let fi=arr2.find((e)=>{
//     return e>30
// })

// console.log(fi) // --> 72

// --------------------------------

// 2. findIndex() --> this method returns the index of the first element in an array that pass a test

// console.log(arr2)
// let fi=arr2.findIndex((e)=>{
//     return e>30
// })

// console.log(fi) // --> 2 -- index 2

// *************** fill() method *************

// this method fils all the elementsin an array with a static value

// console.log(arr1) // --> [13, 24, 2, 8, 3, 'Roshan']
// console.log(arr1.fill("Roshan")) // --> ['Roshan', 'Roshan', 'Roshan', 'Roshan', 'Roshan', 'Roshan']


// ******* using for loop to iterate array *******

// for(let i=0;i<arr2.length;i++){
//     console.log(arr2[i])
// } 

// output
// 3
// 4
// 72
// 88
// 43
// 99
// 87


// *************** questions on array *************

// 1. find sum and avg of arrays

let arr3=[5,4,3,2,1,2,4,5,10,3]

// method 1 - manually

// function sum(...arr){
//     let sum=0
//     let avg=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//         avg = sum/arr.length
//     }
//     return `Sum = ${sum} and avg = ${avg}`
//     // return {sum,avg}
// }

// console.log(sum(...arr3))

// method 2 - using predefine functions

// let sum=arr3.reduce((a,b)=>{
//     return a+b
// })

// console.log(sum)

// **********************************************

// 2. length of array without predefine function

// let length=0
// for(let i=0;i<arr3.length;i++){
//     length++
// }
// console.log(length)

// **********************************************

// 3. find even and odd position of array 

// for(let i=0;i<arr3.length;i++){
//     if(arr3[i] % 2 == 0){
//         console.log("even elements: "+arr3[i])
//     }else{
//         console.log("odd elements: "+arr3[i])
//     }  
// }

// **********************************************

// 4. How to reverse array without predefine function

// for(let i=arr3.length-1;i>=0;i--){
//     console.log(arr3[i])
// }

// **********************************************

// 5. remove specific item 

// console.log(arr3.indexOf(4))
// console.log(arr3)
// arr3.splice(1,1)
// console.log(arr3)

// **********************************************

// 6. count duplicate element
// [5,4,3,2,1,2,4,5,10,3]

// let count=0
// for(let i=0;i<arr3.length;i++){
//     for(let j=0;j<i;j++){
//         if(arr3[i]==arr3[j]){
//             count++            
//         }
//     }
// }

// console.log(count) // --> 4 element duplicates

// **********************************************

// 7. multiply each element with array length

// arr3.forEach((e)=>{
//     console.log(e*arr3.length)
// })

// for(let i=0;i<arr3.length;i++){
//     console.log(arr3[i]*arr3.length)
// }

// *****************************************

// 8. filtering numbers from an array

let arr5 = new Array("Roshan",45,89,"Omkar",85,"Raj","Harsh",99)

// arr5.forEach((e)=>{
//     if(Number.isInteger(e)){
//         console.log(e)
//     }
// })

// output
// 45
// 89
// 85
// 99

// *****************************************

// 9. pick out prime number from array

// let arr6 = [1,2,3,4,5,11,23,27]
// let prime=[]

// function findPrimeNumber(number){
//     if(number == 1){
//         return false
//     }
//     for(let i=2;i<number;i++){
//         if(number%i==0){
//            return false
           
//         }
//     }
//     return true
// }

// function isPrime(arr){
//     arr.filter((element)=>{
//         if(findPrimeNumber(element)){
//             prime.push(element)
//         }
//     })
// }

// isPrime(arr6)
// console.log(prime)


// sort arr in ascending order

let arr=[2,44,13,55,3,1,66,32]
let temp;

for(let i=0;i<arr.length;i++){
    for(let j=0;j<i;j++){
     if(arr[i]<arr[j]){
        temp=arr[j]  
        arr[j]=arr[i]
        arr[i]=temp
     }
    } 
 
}
// console.log(arr) //--> [1, 2, 3, 13, 32, 44, 55, 66]

// sort arr in descending order


for(let i=0;i<arr.length;i++){
    for(let j=0;j<i;j++){
     if(arr[i]>arr[j]){
        temp=arr[j]  
        arr[j]=arr[i]
        arr[i]=temp
     }
    } 
 
}
// console.log(arr) //--> [66, 55, 44, 32, 13, 3, 2, 1]


let arr7=[10,20,30,30,40,30]
for(let i=0;i<arr.length;i++){
    if(arr7[i]===30){
        console.log(arr7.slice(i,i+1))
    }
}


















