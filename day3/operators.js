//assignment operators
let a = 2
let b = 3
console.log(a=b)
let a1 = 2
let b1 = 3
console.log(a1+=b1)
let a2 = 2
let b2 = 3
console.log(a2-=b2)
let a3 = 2
let b3 = 3
console.log(a3*=b3)
let a4 = 2
let b4 = 3
console.log(a4/=b4)
let a5 = 2
let b5 = 3
console.log(a5%=b5)
let a6 = 2
let b6 = 3
console.log(a6**=b6)

//arithmetic operators
let x = 4
let y =  3
let sum = x + y
let diff = x - y
let mult = x * y
let div = x / y
let remainder = x % y
let powerOf = x ** y
console.log(sum, diff, mult, div, remainder, powerOf)
const PI = 3.14
let r = 10
const areaOfCircle = PI*r*r
console.log(areaOfCircle)

//comparison operators
console.log(x==y)
console.log(x!=y)
console.log(x>y)
console.log(x<y)
console.log(x>=y)
console.log(x<=y)
console.log(NaN==NaN)
console.log("kuma".length == "coffee".length)

//logical operators
// && ampersand operator example

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

//increment operator
let count = 0
console.log(++count) //start from 1
console.log(count)
let count2 = 0
console.log(count2++) //start from 0
console.log(count2) 

//decrement operator
let count3 = 0
console.log(--count3) //-1
console.log(count3) 
let count4 = 0
console.log(count4--) //0
console.log(count4) 

//ternary operations
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  let number = 5
  number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
  number = -5
  
  number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)

//operator precedence
console.log(3+4*5) //3+20
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the division operator (/)
console.log(echo("left", 6) / echo("right", 2));
