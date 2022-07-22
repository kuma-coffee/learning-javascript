//exercise:1
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript"
//Print the string on the browser console using console.log()
console.log(challenge)
//Print the length of the string on the browser console using console.log()
console.log(challenge.length)
//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,2))
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3,21))
//Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"))
//Split the string into an array using split() method
console.log(challenge.split())
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11))
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let folSen = 'You cannot end a sentence with because because because is a conjunction'
console.log(folSen.indexOf('because'))
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(folSen.lastIndexOf('because'))
//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(folSen.search('because'))
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challenge2 = ' 30 Days Of JavaScript '
console.log(challenge2.trim())
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'))
//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let merge = '30 Days of'
console.log(merge.concat(' JavaScript'))
//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))

//exercise:2
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let num1 = "10"
console.log(typeof num1)
console.log(`${num1} is equal to 10:${num1 == 10}`)

let gravity = '9.8'
let gravFloat = parseFloat(gravity)
console.log(gravFloat)
console.log(`${gravFloat} is equal to 10:${gravFloat == 10}`)

let string1 = "python on jargon"
console.log(string1.search("on"))

let string2 = "I hope this course is not full of jargon"
console.log(string2.match("jargon"))

const num2 = Math.floor(Math.random()*101)
console.log(num2)

const num3 = Math.floor(Math.random()*51)+50
console.log(num3)

const num4 = Math.floor(Math.random()*266)
console.log(num4)

let js = "JavaScript"
const num5 = Math.floor(Math.random()*10)
let randomLetter = js[num5]
console.log(randomLetter)

let arr1 = [1,1,1,1,1]
let arr2 = [2,1,2,4,8]
let arr3 = [3,1,3,9,27]
let arr4 = [4,1,4,16,64]
let arr5 = [5,1,5,25,125]
console.log(arr1, arr2, arr3, arr4, arr5)

let string3 = 'You cannot end a sentence with because because because is a conjunction'
console.log(string3.search("because"))
console.log(string3.substr(31,7))

//Exercise 3
let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(sentence.search("love"))
let sentence2 = "You cannot end a sentence with because because because is a conjunction"
let pattern = /because/gi
console.log(sentence2.match(pattern))
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanString = sentence3.replace(/[|&;$%@"<>()+#,]/g, "")
console.log(cleanString)
let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
console.log(text.search("5000"))
let salary = text.substring(9,13)
console.log(text.search("10000"))
let bonus = text.substring(42,47)
console.log(text.search("15000"))
let courses = text.substring(67,72)
let income = Number(salary)+Number(bonus)+Number(courses)
console.log("Total anual income: ", income)