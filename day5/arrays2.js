//Methods to manipulate array
//Array Constructs
const arr = Array()//creates an empty array
console.log(arr)
const arr2 = Array(7) //it creates 8 empty array
console.log(arr2)

//Creating static values with fill
const xArr = Array(5).fill("x")
console.log(xArr)
const zeroArr = Array(9).fill(0)
console.log(zeroArr)

//Concatenating array using concat
const firstArr = [1,2,3,4]
const secondArr = [5,6,7,8,9]
const thirdArr = firstArr.concat(secondArr)
console.log(thirdArr)
const fruits = ["banana", "orange", "watermelon", "lemon"]
const vegetables = ["tomato", "potato", "onion", "carrot"]
const fruitsAndVegetables = fruits.concat(vegetables)
console.log(fruitsAndVegetables)

//Getting array length
console.log(firstArr.length)
console.log(fruits.length)

//Getting index an element in arr array
console.log(firstArr.indexOf(4))
console.log(firstArr.indexOf(0))
console.log(firstArr.indexOf(1))
console.log(firstArr.indexOf(5))
console.log(fruits.indexOf("orange"))
console.log(fruits.indexOf("mango"))

//Getting last index of an element in array
const numbers = [1,2,3,4,5,1,3,2,6]
console.log(numbers.lastIndexOf(2))
console.log(numbers.lastIndexOf(0))
console.log(numbers.lastIndexOf(1))
console.log(numbers.lastIndexOf(7))

console.log(numbers.includes(1))
console.log(numbers.includes(7))
console.log(numbers.includes(0))
console.log(numbers.includes(6))
console.log(fruits.includes("banana"))
console.log(fruits.includes("mango"))

//Checking array
console.log(Array.isArray(numbers))
const  num = 99
console.log(Array.isArray(num))
console.log(Array.isArray(fruits))

//Converting array to string
console.log(numbers.toString())
console.log(fruits.toString())

//Joining array elements
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
console.log(days.join())
console.log(days.join(""))
console.log(days.join(" "))
console.log(days.join(", "))
console.log(days.join(" # "))

//Slice array elements
console.log(firstArr.slice())
console.log(firstArr.slice(0))
console.log(firstArr.slice(0, firstArr.length))
console.log(firstArr.slice(1,3))

//Splice method in array
const numbers2 = [1,2,3,4,5]
numbers2.splice()
console.log(numbers2)
const numbers7 = [1,2,3,4,5]
numbers7.splice(0,1)
console.log(numbers7)
const numbers8 = [1,2,3,4,5]
numbers8.splice(3,2,8,9)
console.log(numbers8)

//Adding item to an array using push
firstArr.push(5)
console.log(firstArr)
fruits.push("mango")
console.log(fruits)

//Removing the end element using pop
const numbers3 = [1,2,3,4,5]
numbers3.pop()
console.log(numbers3)

//Removing an element from the beginning
const numbers4 = [1,2,3,4,5]
numbers4.shift()
console.log(numbers4)

//Add an element from the beginning
const numbers5 =[1,2,3,4,5]
numbers5.unshift(0)
console.log(numbers5)

//Reversing array order
const numbers6 = [1,2,3,4,5]
numbers6.reverse()
console.log(numbers6)

//Sorting elements in array
const langguages = [
    "HTML",
    "CSS",
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "React"
]
langguages.sort()
console.log(langguages)

//Array of arrays
const frontEnd = ["HTML", "CSS", "JavaScript", "React"]
const backEnd = ["Node", "MongoDB", "Laravel", "SQL"]
const fullStack = [frontEnd, backEnd]
console.log(fullStack)
console.log(fullStack.length)
console.log(fullStack[0])
console.log(fullStack[1])
