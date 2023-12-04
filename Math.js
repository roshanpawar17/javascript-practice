// The JavaScript Math object allows you to perform mathematical tasks on numbers.
// Unlike other objects, the Math object has no constructor.
// The Math object is static.
// All methods and properties can be used without creating a Math object first.

// *********** Math Properties ************

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// console.log(Math.E) //2.718281828459045
// console.log(Math.SQRT2) // 
// console.log(Math.SQRT1_2) // 

// ************* Math Methods *************

// 1.Math.round(x)	Returns x rounded to its nearest integer
// 2.Math.ceil(x)	Returns x rounded up to its nearest integer
// 3.Math.floor(x)	Returns x rounded down to its nearest integer
// 4.Math.trunc(x)	Returns the integer part of x (new in ES6)
// 5.Math.sign(x)	Returns if x is negative(-1), null(0) or positive(-1):
// 6.Math.pow(x, y) returns the value of x to the power of y:
// 7.Math.sqrt(x)   returns the square root of x:
// 8.Math.abs(x)    returns the absolute (positive) value of x:
// 9.Math.sin(x)    returns the absolute (positive) value of x:
// 10.Math.cos(x)    returns the absolute (positive) value of x:
// 11.Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
// 12.Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
// 13.Math.log(x)   returns the natural logarithm of x
// 14.The Math.log2() Method
// 15.The Math.log10() Method

// 1.
// console.log(Math.round(4.6)); //5
// console.log(Math.round(4.5)); //5
// console.log(Math.round(4.4)); //4

// 2.
// console.log(Math.ceil(4.9)); //5
// console.log(Math.ceil(4.7));  //5
// console.log(Math.ceil(4.4)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.ceil(-4.2)); //-4

// 3.
// console.log(Math.floor(4.9)); //4
// console.log(Math.floor(4.7));  //4
// console.log(Math.floor(4.4)); //4
// console.log(Math.floor(4.2)); //4
// console.log(Math.floor(-4.2)); //-5


// 4.
// console.log(Math.trunc(4.9)); //4
// console.log(Math.trunc(4.7));  //4
// console.log(Math.trunc(4.4)); //4
// console.log(Math.trunc(4.2)); //4
// console.log(Math.trunc(-4.2)); //-4

// 5.
// console.log(Math.sign(-4));  //-1
// console.log(Math.sign(0)); //0
// console.log(Math.sign(4)); //1

// 6.
// console.log(Math.pow(4,2)); //16

// 7.
// console.log(Math.sqrt(4)); //2

// 8.
// console.log(Math.abs(-4.3)); //4.3
// console.log(Math.abs(4.3)); //4.3

// 9.
// x-is angle which measures in radian
// so convert degree to radian - angle*pi/180
// console.log(Math.sin(90*Math.PI/180)); //1

// 10.
// console.log(Math.cos(0*Math.PI/180)); //1

// 11.
// console.log(Math.max(0, 150, 30, 20, -8, -200)); //150
// console.log(Math.min(0, 150, 30, 20, -8, -200)); //-200

// 12.
// console.log(Math.random()); // 0.198780323190499
// random number from 0 to 99
// console.log(Math.random()*100) // 60.223487182047066

// 13.
// console.log(Math.log(12)); // 2.4849066497880004

// 14.
// console.log(Math.log2(12)); // 3.584962500721156

// 15.
// console.log(Math.log10(12)); // 1.0791812460476249


// **************** JavaScript Random Integers **************

// Math.random() used with Math.floor() can be used to return random integers.

//4 digit random number
// console.log(Math.floor(Math.random()*9000)+1000)
