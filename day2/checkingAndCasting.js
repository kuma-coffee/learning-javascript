//checking data types
let country = "Indonesia"
let job
console.log(typeof "kuma") //string
console.log(typeof country) //string
console.log(typeof 9) //number
console.log(typeof 3.14) //number
console.log(typeof true) //boolean
console.log(typeof false) //boolean
console.log(typeof NaN) //number
console.log(typeof job) //undefined
console.log(typeof undefined) //undefined
console.log(typeof null) //object

//changing data type (casting)
//string to integer
let num = "9"
let numInt = parseInt(num)
console.log(numInt)
let numInt2 = Number(num)
console.log(numInt2)
let numInt3 = +num
console.log(numInt3)
//string to float
let num2 = "3.14"
let numFloat = parseFloat(num2)
console.log(numFloat)
let numFloat2 = Number(num2)
console.log(numFloat2)
let numFloat3 = +num2
console.log(numFloat3)
//float to integer
let num3 = 9.81
let numInt4 = parseInt (num3)
console.log(numInt4)

