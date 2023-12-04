// 4.
// "use strict"
// In function, In strict mode, this is undefined 


// 1.
//refers window object - global object
// console.log(this) 

// 2.
// this refers to the object

let studentInfo = {
    name:"Roshan",
    "roll no":6447,
    class:"TYIT",
    getInfo(){
        return `Name: ${this.name}, Roll No.: ${this["roll no"]} and class: ${this.class}`
    }
}

// console.log(studentInfo.getInfo())

// 3.
// In function this refers to the global object

this.name = "harsh"

function employeeDetails(){
    console.log(this.name)
}

let employeeDetails2 = ()=>{
    console.log(this.name)
}

employeeDetails() // harsh
employeeDetails2() // harsh

// 5.
// In an event this refres to the element that recevied the event


// ********** Function ************
