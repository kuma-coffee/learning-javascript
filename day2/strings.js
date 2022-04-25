//Strings
let space = ' '
let firstName = "kuma"
let lastName = "coffee"
let age = 20
let country = "Indonesia"
console.log(space, firstName, lastName, country)

//string concatenation
let fullName = firstName + space + lastName
console.log(fullName)

//concatenating using addition operator
let personInfo =  'My name is ' + fullName + '. I am ' + age + ' years old'
console.log(personInfo)

//long literal string
const paragraph = "Hello, my name is kuma. I live in Indonesia. \
I am a student at State University of Surabaya. \
Have a nice day :-)"

//escape sequences in strings
console.log("Hello World! \nHave a nice day :-)") //new line
console.log("This\tDay\tTopics") //tab, means 8 spaces
console.log("This is backslash symbol (\\)") //blakslash symbol
console.log("This is \'single quote'")
console.log('This is \"double quote"')

//template literals (template strings)
//example 1
let a = 1
let b = 1
console.log(`The sum of ${a} and ${b} is ${a+b}`)
//example 2
let personInfo2 = `Hello, my name is ${fullName}. I am ${age} years old.` //ES6-string interpolation method
console.log(personInfo2)
//example 3
console.log(`${a} is equal to ${b}: ${a = b}`)

//string method
//length
let js = "JavaScript"
console.log(js.length) //10
console.log(name.length) //4
//accessing characters in a string
let firstLetter = js[0]
console.log(firstLetter)
let secondLetter = js[1]
let lastLetter = js[9]
console.log(secondLetter)
console.log(lastLetter)
let lastIndex = js.length-1
console.log(lastIndex)
console.log(js[lastIndex])
//toUpperCase()
console.log(js.toUpperCase())
console.log(country.toUpperCase())
//toLowerCase()
console.log(js.toLowerCase())
console.log(country.toLowerCase())
//substr()
console.log(js.substr(4,6))
console.log(country.substr(0,3))
//split()
let string = "30 Days of JavaScript"
console.log(string.split()) //changes to an array
console.log(string.split(" ")) //split to an array with space
let state = "East Java, Central Java, West Java"
console.log(state.split(",")) //split to an array at coma
//trim()
let string2 ="   Have a Nice Day   "
console.log(string2.trim()) //removes trailing space in the beginning or the end of a string
//includes()
console.log(string.includes("Days")) //true
console.log(string.includes("days")) //false
console.log(country.includes("Ind")) //true
console.log(country.includes("ind")) //false
//replace()
console.log(string.replace("JavaScript", "HTML"))
//charAt()
console.log(country.charAt(0)) //I
console.log(string.charAt(0))
//charCodeAt()
console.log(string.charCodeAt(3)) //D ASCII number is 68
//indexOf()
console.log(string.indexOf("D")) //3
console.log(string.indexOf("Days")) //3
console.log(string.indexOf("days")) //-1
//lastIndexOf()
let string3 = "My name is kuma, and my last name is coffee"
console.log(string3.lastIndexOf("My"))
console.log(string3.lastIndexOf("is"))
//concat()
let yearNow = "3"
console.log(yearNow.concat("years", "later")) //3yearslater
//startWith()
console.log(string.startsWith("30")) //true
console.log(string.startsWith("of")) //false
//endWith()
console.log(string.endsWith("30")) //false
console.log(string.endsWith("JavaScript")) //true
//search()
console.log(string3.search("name")) //4
console.log(string3.search("coffee"))
//match
console.log(string3.match("is"))
let pattern = /name/gi
console.log(string3.match(pattern))
let string4 = "Next year is 2023, and I will turned to 21 years old"
let regEx = /\d+/
console.log(string4.match(regEx))
console.log(string4.match(/\d+/g))
//repeat()
console.log(country.repeat(5))