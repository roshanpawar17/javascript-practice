// *************object operations************

//what is object?
//An object is a collection of properties and property is association between a name[or key] and value

// *********************************************

const obj={
    name:"Roshan",
    age: 20,
    "Do you like Programming?": "yes"
}

// console.log(obj.name) // --> Roshan
// console.log(obj["age"]) // --> 20
// console.log(obj["Do like Programming?"]) // --> true
// console.log(delete obj["Do you like Programming?"]) // --> true
// console.log(obj) // --> {name: 'Roshan', age: 20}

// **********************************************

const property = "first name"
const value = "Roshan"

const user = {
    [property]: value
}

// console.log(user) //--> {first name: 'Roshan'}
// console.log(user["first name"]) //--> Roshan

// *****************************************************

// 1. access key only

// for(key in obj){
//     console.log(key)
// }

// output

// name
// age
// Do you like Programing?

// -------------------------------------

// 2. access value only

// for(k in obj){
//     console.log(obj[k])
// }

// output

//Roshan
//20
//yes

// ************************ questions ************************
// 1. what will be the output of the object obj2 

const obj2={
    a: "one",
    b: "two",
    a: "three"
} 

// console.log(obj2) //--> {a: 'three', b: 'two'}
// console.log(obj2.a) //--> three

// -------------------------------------------------

// 2. create a numeric function multiply by two of all numeric properties

let nums={
    a:100,
    b:200,
    title:"My nums"
}


// function multiplyByTwo(obj){
//     for(let i in nums){
//         if(typeof nums[i] === 'number'){
//             nums[i]*=2
//         }
//     }
// }

// multiplyByTwo(nums) // --> 200 400
// console.log(nums) // --> {a: 200, b: 400, title: 'My nums'}

// ---------------------------------------------------

// 3. what's the output

// const a={}
// const b={key:"b"}
// const c={key:"c"}

// a[b]=123 // a["[object Object]"] =123
// a[c]=456 // a["[object Object]"] =456

// console.log(a) // {[object Object]: 456}
// console.log(a[b]) // 456


// -----------------------------------------------------

// 4.  what is JSON.stringify and JSON.parse 

// JSON.stringify - javascript object converts json string
// JSON.parse - json string converts javascript objects

let obj3={
    name: "roshan",
    rollno: 20
}

// let jots=JSON.stringify(obj3)
// console.log(jots) // --> {"name":"roshan","rollno":20}
// console.log(JSON.parse(jots)) // --> {name:"roshan",rollno:20}

// localStorage.setItem("user",JSON.stringify(obj3))
// console.log(JSON.parse(localStorage.getItem("user")))

// --------------------------------------------------------

// 5. what's the output

// console.log([..."Roshan"]) //--> ['R', 'o', 's', 'h', 'a', 'n']

const obj4={name:"roshan",rollno:20}
const obj5={admin:true,...obj4}

// console.log(obj5) //--> {admin: true, name: 'roshan', rollno: 20}

// ----------------------------------------------------------

// 6. what's the output

const settings={
    username:"Roshan",
    level:19,
    health:90
}

// const data=JSON.stringify(settings,["level","health"])
// console.log(data) // --> {"level":19,"health":90}

// ---------------------------------------------------

// 7. what's the output

const shape={
    radius:10,
    diameter(){
        return this.radius*2 // refers to object shape radius
    },
    parameter: ()=>{
        return 2*Math.PI*this.radius // refers to window object radius
    }
}

// console.log(shape.diameter()) //-->20
// console.log(shape.parameter()) //-->NaN

// ------------------------------------------------------

// 8. what is destructuring in object

const obj6={
    name:"roshan",
    age:20
}

// const {name,age} = obj6
// console.log(name,age) // roshan 20

// ------- rename value --------

// const name="harsh"
// const {name:myName} = obj6 
// console.log(myName) //--> roshan

// ------ nested destructuring ---------

const obj7={
    name:"roshan",
    age:20,
    fullname:{
        firstname:"roshan",
        lastname:"pawar"
    }
} 

// const {fullname} = obj7
// console.log(fullname) // --> {firstname: 'roshan', lastname: 'pawar'}

// const {fullname:{firstname}} = obj7
// console.log(firstname) //--> roshan

//reaname value

// --------------------------------------------

// 9. what's the output

function getItems(fruitList, favorateList, ...args){
    return [...fruitList, ...args, favorateList]
} 

// console.log(getItems(["apple","banana"],"peer","orange","guvava"))

// output
// ['apple', 'banana', 'orange', 'guvava', 'peer']

// -------------------------------------------------

let obj8={
    12:23,
    89:"uwu"
}

// console.log(obj8[12])
// console.log(obj8[89])

// for(let i in obj8){
//     console.log(`key ${i} => value ${obj8[i]}`)
// }




 







