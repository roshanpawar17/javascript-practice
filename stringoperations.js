// ***************** string operations ****************** 

// what is string? --> 

/* 

1. It is immutable
2. A string is a data type that represents a sequence of characters.
3. A string can containe letters, numbers, symbols or any combination of character

*/

// *********************************************************

// 1] Some simple methods

let s = "Hello, World "

// string --> H  e  l  l  o  , ' '  W  o  r  l   d   ' '
// index  --> 0  1  2  3  4  5  6   7  8  9  10  11  12

// console.log(s.length) // --> 13
// console.log(s[0]) // --> H
// console.log(s.toLowerCase()) // --> hello, world
// console.log(s.toUpperCase()) // --> HELLO, WORLD
// console.log(s.indexOf('H')) // --> 0
// console.log(s.indexOf('Hello')) // --> 0
// console.log(s.lastIndexOf('o')) // --> 8
// console.log(s.charAt(5)) // --> ,
// console.log(s.startsWith('Hello')) // --> true
// console.log(s.endsWith("d")) // --> false
// console.log(s.endsWith(" ")) // --> true
// console.log(s.includes("Worlds")) // --> false
// console.log(s.includes("World")) // --> true
// console.log(s.substring(3,11)) // --> lo, Worl
// console.log(s.slice(3,11)) // --> lo, Worl
// console.log(s.padStart(16,"*")) // --> ***Hello, World 
// console.log(s.padEnd(16,"*")) // --> Hello, World ***
// console.log(s.concat("Roshan")) // --> Hello, World Roshan
// console.log(s.repeat(2)) // --> Hello, World Hello, World -- repeat 2 times

// console.log(s.search("Hello")) // --> 0 - found at index 0 
// console.log(s.search("o")) // --> 4 - found at index 4 
// console.log(s.search("Roshan")) // --> -1 - not found

// console.log(s.match("World")) // --> ['World', index: 7, input: 'Hello, World ', groups: undefined]  
// console.log(s.match(/World/)) // --> 'World', index: 7, input: 'Hello, World ', groups: undefined] - with regular expression
// console.log(s.match(/World/g)) // --> ['World'] - with regular expression
// console.log(s.match("Roshan")) // --> null - not found

let swn="Ro5sh8an Pa6wa7r"
// console.log(swn.match(/\d/g)) // --> ['5', '8', '6', '7'] -- get numbers from the string

// ********************************************************************************************************

// 2] some tricky questions 

let str="roshan pawar"

// console.log(str[0]) // --> r

// console.log(str.split('').reverse().join('')) // --> reverse the string

// console.log(Array.from(str)) // --> ['r', 'o', 's', 'h', 'a', 'n', ' ', 'p', 'a', 'w', 'a', 'r']
// console.log(str.split()) //--> ['roshan pawar']
// console.log(str.split('')) //--> ['r','o','s','h','a','n','p','a','w','a','r'] reach character
// console.log(str.split(' ')) //--> ['roshan','pawar'] split with space

// console.log(str.replace('s','')) //--> rohan pawar
// console.log(str.replaceAll('a','o')) //--> roshon powor
// console.log(str.replace(/a/g,'o')) //--> roshon powor

// console.log(str.substring(3,9))  //--> an pa
// console.log(str.split('').pop()) //--> r
// console.log(str.substring(1,str.length)) // -->  oshan pawar -- remove first character
// console.log(str.substring(0,str.length-1)) //--> roshan pawa -- remove last character
// console.log(str.split('n')[0]) // --> rosha -- remove string after specific character

let str2="    roshan pawar   "
// console.log(str2.trim()) // --> roshan pawa -- remove extra spaces from both side
// console.log(str2.trimStart()) // --> roshan pawa   -- remove extra spaces from start side
// console.log(str2.trimEnd()) // -->     roshan pawa -- remove extra spaces from end side

// console.log(str.concat(str2)) //--> roshan pawar    roshan pawar -- concat two string 

// ***********************************************************************

// 3] compare two string 

let str3=new String("Roshan")
let str4="Roshan"
// let res1= str3 == str4?true:false
// let res2= str3 === str4?true:false
// console.log(res1) //true
// console.log(res2) //false

// ********************************************************************

// 4] ASCII charatcter

let str5="apple"
//  console.log(str5.charCodeAt(0)) // 72 --> ASCII value of H is 72
//  console.log(str5.charCodeAt(1)) // 101 --> ASCII value of e is 101
// console.log(String.fromCharCode(72)) // --> H
// console.log(s.codePointAt(0)) // --> 72 -- ASCII value of index 0 character a is 72

// *******************************************************************

// 5] compare to string using function localeCompare

/* 
    Note:
    1) if string 1 is greater than string 2 --> 1
    2) if string 1 is less than string 2 --> -1
    30 if string 1 equals to string 2 --> 0 
*/

let str6="banana" 
// console.log(str5.localeCompare(str6)) // --> -1

// ***************************************************************************

// 6] Differece between substring and slice

let str7 = "Hello, World "

// string          --> H    e    l    l    o   ,  ' '  W   o   r   l   d   ' '
// index           --> 0    1    2    3    4   5   6   7   8   9   10  11  12
// index from last--> -13  -12  -11  -10  -9  -8  -7  -6  -5  -4  -3   -2  -1

/* Note - negative value in substring means 0 
 eg.  -4 --> means 0 
 eg.  -2 --> means 0 
*/

// 1.
// console.log(str7.slice(2)) // --> llo, World
// console.log(str7.substring(2)) // --> llo, World

// 2.
// console.log(str7.slice(-2)) // d
// console.log(str7.substring(-2)) // Hello, World --> (0)

// 3.
// console.log(str7.slice(13)) // ''
// console.log(str7.substring(13)) // ''

// 4.
// console.log(str7.slice(2,10)) // llo, Wor
// console.log(str7.substring(2,10)) // llo, Wor

// 5.
// console.log(str7.slice(11,8)) // ''
// console.log(str7.substring(11,8)) // orl -- swap two numbers -- i.e 8-start and 11-end -- (8,11)

// 6.
// console.log(str7.slice(-11,-8)) // llo
// console.log(str7.substring(-11,-8)) // '' -- (0, 0)

// 7.
// console.log(str7.slice(-11,8)) // llo, W
// console.log(str7.substring(-11,8)) // Hello, W -- (0, 8)

// 8.
// console.log(str7.slice(8,-2)) // orl
// console.log(str7.substring(8,-2)) // Hello, W -- (8, 0) --> swap --> (0,8)

// ***************************************************************************

// 6] Differece between indexOf() and lastIndexOf()

let str8 = "Hello, World "

// string          --> H    e    l    l    o   ,  ' '  W   o   r   l   d   ' '
// index           --> 0    1    2    3    4   5   6   7   8   9   10  11   12

// 1.
// console.log(str8.indexOf("hello")) // --> -1
// console.log(str8.lastIndexOf("hello")) // --> -1

// 2.
// console.log(str8.indexOf("o")) // --> 4
// console.log(str8.lastIndexOf("o")) // --> 8

// 3.
// console.log(str8.indexOf("o",4)) // --> 4
// console.log(str8.lastIndexOf("o",8)) // --> 8

// 4.
// console.log(str8.indexOf("o",5)) // --> 8 - not include first occurence 
// console.log(str8.lastIndexOf("o",7)) // --> 4 - not include first occurence

// 5.
// console.log(str8.indexOf("o",-5)) // --> 4 -- ("o", 0)
// console.log(str8.lastIndexOf("o",-5)) // --> -1 -- ("o", 0)

// 6.
// console.log(str8.indexOf("")) // --> 0
// console.log(str8.lastIndexOf("")) // --> 13

// 7.
// console.log(str8.indexOf()) // --> -1
// console.log(str8.lastIndexOf()) // --> -1



// ******* questions ***********

// 1.truncate the string

// let str9 = "Subscribe to CodeWithHarray"

// function truncateText(str,maxlength){
//     if(str.length > maxlength){
//         return str.substring(0,maxlength) + "..."
//     }else{
//         return str
//     }
// }

// let tt=truncateText(str9,9)
// console.log(tt)



// 2. hamming distance

// let str10="hello"
// let str11="hwllr"

// function hammingDis(str1, str2){
//     let count=0
    
//     if(str1.length != str2.length ){
//         throw new Error("Lenght is not same")
//     }else{
//         for(let i=0;i<str1.length;i++){
//             if(str1[i] != str2[i]){
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(hammingDis(str10,str11))

// 3. find vowels from string

// method 1 - using regex
let str12="roshan"
// let v=str12.match(/[aeiou]/g)
// console.log(v.join())

// method 2 - using loop
let vowels=['a','e','i','o','u']
// for(let i of str12){
//     if(vowels.includes(i)){
//         console.log(i)
//     }
// }

// 4. input string is string or not
let str13="roshan" 
let num=12
// if(typeof str13 === "string"){
//     console.log("it is string")
// }else{
//     console.log("it is not a string")
// }

// 5. blank or not

// if(str13 !== '' ){
//     console.log("not blank") 
// }else{
//     console.log("blank")
// }

// 6. print dublicate character

let str14="apple juice"
let char=[]
for(let i=0;i<str14.length;i++){
   for(let j=0;j<i;j++){
    if(str14[i]==str14[j]){
        char.push(str14[i])        
    }
   } 

}
// console.log(char)

// 7. Write a function to check if a given string is a palindrome.

function isPalindrome(str){
    let str2=str.split('').reverse().join('')
    console.log(str2)
    if(str === str2){
        console.log("The given string is palindrome")
    }else{
        console.log("The given string is not palindrome")
    }
} 

// isPalindrome("ror")

// ----------------------------

// 8. How do you check if two strings are anagrams of each other?

function isAnagramString(str1, str2){
    if(str1.length != str2.length){
        console.log("String length is not same")
    }else{
        let arr1=str1.split('')        
        let arr2=str2.split('')        

        let sarr1=arr1.sort()        
        let sarr2=arr2.sort()
        
        if(sarr1.join('') === sarr2.join('')){
            console.log("anagram")
        }else{
            console.log("not anagram")
        }
    }
}

// isAnagramString("listen","silent")

// -----------------------------------

// 9. calculate manual length

let length =0
while(length<str12.length){
    length++
} 
// console.log(length)

// -------------------------------

// 10. How do you remove a given character from String? (solution)

function removeCharFromString(str,ch){
    console.log("Given string : "+str)
    console.log("you want to remove character : "+ch)

    let i=str.indexOf(ch)
    let s=str.slice(i,i+1)
    console.log("remove: "+s) //--> s
}

// removeCharFromString("Roshan","s")

const rcfr=(str,ch)=>{
    return str.split('').filter(i=>i!==ch).join('')  
}
// console.log(rcfr("Roshan",'s')) //--> Rohan

// ----------------------------------




