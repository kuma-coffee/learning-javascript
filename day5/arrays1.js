//How to create an empty array
const arr = []
console.log(arr)

//How to create an array with values
const numbers = [1,2,3,4,5]
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
//print the array and its length
console.log("Numbers: ", numbers)
console.log("Number of numbers: ", numbers.length)
console.log("Days: ", days)
console.log("Number of days: ", days)
//Array can have items of different data types
const diff = ["kuma", 20, false, {country: "Indonesian", city: "Surabaya"}, {skills: ["HTML", "JS", "Python"]}]
console.log(diff)

//Creating an array using split
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) 
let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)

//Accessing array items using index
let firstDay = days[0]
console.log(firstDay)
let thirdDay = days[2]
console.log(thirdDay)
let lastDay = days[6]
console.log(lastDay)
let lastIndex1 = days.length-1
lastDay2 = days[lastIndex1]
console.log(lastDay2)
const seasons = [
    "Spring",
    "Summer",
    "Autumn",
    "Winter"
]
console.log(seasons) //all the array items
console.log(seasons.length) //to know the size of the array
console.log(seasons[0])
console.log(seasons[2])
let lastIndex2 = seasons.length-1
console.log(seasons[lastIndex2])

//Modifying array element
numbers [0] = 10
numbers [3] = 40
console.log(numbers)

const phones = [
    "Apple", 
    "Samsung",
    "OnePlus",
    "Oppo",
    "Sony"
]
console.log(phones)
phones[0] = "Xiaomi"
let lastIndex3 = phones.length-1
phones[lastIndex3] = "Pixel"
console.log(phones)