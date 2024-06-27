"Use Strict"; //treat all JS code as a newer Version

// alert("hello") we are using nodejs Not browser so it will not work

console.log("code is working and its working fine")
let name = "Adii"
let age = 21
let isLoggedIn = false

console.table([name, typeof(name), age,typeof(age),isLoggedIn, typeof(isLoggedIn)])

/* data Types
number
BigInt
String
Boolean
Null
Undefined
Objects

*/

name = null
console.table([typeof(name), name])