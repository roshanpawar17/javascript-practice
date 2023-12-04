// Note:

// 1.
// string + string  = string
// number + number = number
// string + number = string


// let x = 10;
// let y = "20";
// console.log(x+y) // 1020

// let x = "10";
// let y = 20;
// let z = "30";
// let result = x + y + z;
// console.log(result) //102030 

// let x = "10";
// let y = 20;
// let z = 30;
// let result = x + y + z;
// console.log(result) //102030

// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;
// console.log(result) //3030 -- beacause first two are numbers and then cancate with string z value

// 2. JavaScript numbers are always stored as double precision floating point numbers.

// 3.
// Value (aka Fraction/Mantissa)	Exponent	            Sign
// 52 bits (0 - 51) 	            11 bits (52 - 62)	    1 bit (63)

// -----------------


// 4.
// Extra large or extra small numbers can be written with scientific (exponent) notation:
// let x = 123e5; 
// let y = 123e-5; 
// console.log(x) //12300000
// console.log(y) // 0.00123

// const num=new Number(89)

// 5.
// Floating point arithmetic is not always 100% accurate:
// it helps to multiply and divide:
// let z = (0.2*10 + 0.1*10) / 10;
// console.log(z) // 0.3

// ****************** NaN - Not a Number ************

// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// NaN is a number: typeof NaN returns number:

// 6.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
// let x = 100 / "Apple";
// console.log(typeof x, x) // number NaN
// console.log(typeof NaN) // number

// 6.1

// However, if the string is numeric, the result will be a number:
// let a = 100 / "10";
// console.log(typeof a,a) //number 10
 
// 6.2
// use the global JavaScript function isNaN() to find out if a value is a not a number:
// let x = 100 / "Apple";
// console.log(typeof x, x) // number NaN
// console.log(isNaN(x)); //true

// 6.3
// If use NaN in a mathematical operation, the result will also be NaN:
// let x = NaN;
// let y = 5;
// let z = x + y;
// console.log(z) //NaN

// 7.
// Infinity is a number: typeof Infinity returns number.
// console.log(typeof Infinity) // number

// 8. JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
// let x = 0xFF;
// console.log(x) //255

// 9. given base of number and find value
// let myNumber = 32;
// console.log(myNumber.toString(32)); //10 -Duotrigesimal
// console.log(myNumber.toString(16)); //20 -Hexadecimal
// console.log(myNumber.toString(12)); //28 -Duodecimal
// console.log(myNumber.toString(10)); //32 -Decimal 
// console.log(myNumber.toString(8)); //40 -Octal
// console.log(myNumber.toString(2)); //100000 -Binary

// ************** JavaScript Numbers as Objects ************

// 10.
// let y = new Number(123);
// console.log(typeof y, y) //object Number {123}

// **************** BigInt ****************

// 1.
// Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).
// Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

// let x = 5n;
// let y = x / 2;
// console.log(y)
// Error: Cannot mix BigInt and other types, use explicit conversion.

// so that convert BigInt into Number
// let x = 5n;
// let y = Number(x) / 2;
// console.log(y) //2.5

// 2.
// BigInt can also be written in hexadecimal, octal, or binary notation:
// let hex = 0x20000000000003n;
// let oct = 0o400000000000000003n;
// let bin = 0b100000000000000000000000000000000000000000000000000011n;
// console.log(hex) // 9007199254740995
// console.log(oct) // 9007199254740995
// console.log(bin) // 9007199254740995

// let x=9007199254740991
// console.log(Number.isInteger(x)) //true
// console.log(Number.isSafeInteger(x)) //true
// console.log("safe inteder: ", Number.MAX_SAFE_INTEGER) // 9007199254740991

// ************* Number Methods ****************

// 1. toString()	Returns a number as a string
// 2. toExponential()	Returns a number written in exponential notation
// 3. toFixed()	Returns a number written with a number of decimals (fixed number after decimal if required then roundOff(if > 5 then roundOff))
// 4. toPrecision()	Returns a string with number written with a specified length
// 5. ValueOf()	Returns a number as a number

// 1. toString()
// let x = 123;
// let xs=x.toString()
// console.log(typeof xs, xs) //string 123

// 2. toExponential()
// let x = 2;
// let e=x.toExponential(2);
// console.log(e) //2.00e+0

// 3.toFixed()
// let x = 9.656;
// let tf=x.toFixed(2);
// console.log(tf) //9.66

// 4.toPrecision()
// let x = 9.656;
// let tp1=x.toPrecision();
// let tp2=x.toPrecision(2);
// let tp3=x.toPrecision(4);
// let tp4=x.toPrecision(5);
// console.log(typeof tp1,tp1) // string 9.656
// console.log(tp2) // 9.6
// console.log(tp3) // 9.656
// console.log(tp4) // 9.6560

// 5.valueOf()
// let x = 123;
// console.log(x.valueOf()) //123

// *********** Converting Variables to Numbers ***************

// Number()	Returns a number converted from its argument.
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns a whole number

// console.log(Number(true)); //1
// console.log(Number(false)); //0

// console.log(parseInt("10 years")) //10
// console.log(parseInt("10years")) //10
// console.log(parseInt("10.39")) //10
// console.log(parseInt("years 10")) //NaN

// console.log(parseFloat("10")) //10
// console.log(parseFloat("10.33")) //10.33

// NOTE - 
// 1.Number Methods Cannot be Used on Variables
// 2.If the number cannot be converted, NaN (Not a Number) is returned.

// USED like this - Number.isInteger().
// Not like this - x.isInteger() -- where x is variable


// ************* JavaScript Number Properties ***************

// 1.EPSILON	- The difference between 1 and the smallest number > 1.
// 2.MAX_VALUE -	The largest number possible in JavaScript
// 3.MIN_VALUE -	The smallest number possible in JavaScript
// 4.MAX_SAFE_INTEGER -The maximum safe integer (253 - 1)
// 5.MIN_SAFE_INTEGER -The minimum safe integer -(253 - 1)
// 6.POSITIVE_INFINITY - Infinity (returned on overflow)
// 7.NEGATIVE_INFINITY - Negative infinity (returned on overflow)
// 8.NaN	A "Not-a-Number" value

// 1.
// Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

// console.log(Number.EPSILON) //2.220446049250313e-16
// console.log(Number.MAX_VALUE) //1.7976931348623157e+308
// console.log(Number.MIN_VALUE) //5e-324
// console.log(Number.MAX_SAFE_INTEGER) // -9007199254740991
// console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991
// console.log(Number.POSITIVE_INFINITY) // Infinity
// console.log(Number.NEGATIVE_INFINITY) // -Infinity

