//Declaring Number Data Types
let age = 20
const gravity = 9.81
let mass = 72 //mass in kg
const PI = 3.14
const boilingPoint = 100 
const bodyTemp = 37
console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

//Math Object
const PI2 = Math.PI
console.log(PI2) // 3.141592653589793
console.log(Math.round(PI2)) // 3 to round values to the nearest number
console.log(Math.round(9.81)) // 10
console.log(Math.floor(PI2)) // 10
console.log(Math.ceil(PI2)) // 4 rounding up
console.log(Math.min(-5,2,6,10,0,1)) // -5, returns the minimum value
console.log(Math.max(-5,2,6,10,0,1)) // 10, returns the maximum value
//random number
const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum) 
let num1 = randNum * 11  // this gives: min 0 and max 10.99
console.log(num1)
const num2 = Math.floor(Math.random()*11) // creates random number between 0 and 10
console.log(num2)
//absolute value
console.log(Math.abs(-10)) //10
//square root
console.log(Math.sqrt(100)) //10
//power
console.log(Math.pow(3,2)) //9
console.log(Math.E) //2.718
//logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(10)) // 2.302585092994046

