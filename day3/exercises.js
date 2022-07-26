//exercise:1
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let first_Name = 'kuma'
let last_Name = 'coffee'
let country = 'Indonesian'
let city = 'Surabaya'
let age = 22
let isMarried = false
let yearNow = 2020
console.log(typeof first_Name)
console.log(typeof last_Name)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof yearNow)
//Check if type of '10' is equal to 10
let number = '10'
console.log(number==10)
console.log(number===10)
//Check if parseInt('9.8') is equal to 10
let g = parseInt('9.8')
console.log(g==10)
console.log(g===10)
//Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
let posNum = 10
let hobby = 'sleep'
let isCollege = true
//Write three JavaScript statement which provide falsy value.
let zero = 0
let result = null
let gender
//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//4 > 3
console.log(4>3)//true
//4 >= 3
console.log(4>=3)//true
//4 < 3
console.log(4<3)//false
//4 <= 3
console.log(4<=3)//false
//4 == 4
console.log(4==4)//true
//4 === 4
console.log(4===4)//true
//4 != 4
console.log(4!=4)//false
//4 !== 4
console.log(4!==4)//false
//4 != '4'
console.log(4!='4')//false
//4 == '4'
console.log(4=='4')//true
//4 === '4'
console.log(4==='4')//false
//Find the length of python and jargon and make a falsy comparison statement.
let k  = 'python'
let l = 'jargon'
console.log(k.length)
console.log(l.length)
console.log(k.length>l.length)
//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//4 > 3 && 10 < 12
console.log(4>3&&10<12)//true
//4 > 3 && 10 > 12
console.log(4>3&&10>12)//false
//4 > 3 || 10 < 12
console.log(4>3||10<12)//true
//4 > 3 || 10 > 12
console.log(4>3||10>12)//true
//!(4 > 3)
console.log(!(4>3))//false
//!(4 < 3)
console.log(!(4<3))//true
//!(false)
console.log(!(false))//true
//!(4 > 3 && 10 < 12)
console.log(!(4>3&&10<12))//false
//!(4 > 3 && 10 > 12)
console.log(!(4>3&&10>12))//true
//!(4 === '4')
console.log(!(4==='4'))//true
//There is no 'on' in both dragon and python
let m = 'dragon'
let n = 'python'
console.log(m.includes('on')&&n.includes('on'))
//Use the Date object to do the following activities
const now2 = new Date()
//What is the year today?
console.log(now2.getFullYear())
//What is the month today as a number?
console.log(now2.getMonth())
//What is the date today?
console.log(now2.getDate())
//What is the day today as a number?
console.log(now2.getDay())
//What is the hours now?
console.log(now2.getHours())
//What is the minutes now?
console.log(now2.getMinutes())
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now2.getTime())

//exercise:2
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base: ")
let height = prompt("Enter height: ")
let area = 0.5*base*height
alert("The area of the triangle is " + area)
//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt("Enter side a: ")
let b = prompt("Enter side b: ")
let c = prompt("Enter side c: ")
let perimeter = Number(a)+Number(b)+Number(c)
alert("The perimeter of the triangle is " + perimeter)
//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length: ")
let width = prompt("Enter width: ")
let area2 = length*width
let perimeter2 = 2*(Number(length)+Number(width))
alert("The area of the rectangle is " + area2 + " and perimeter is " + perimeter2)
//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14
let r = prompt("Enter radius: ")
const areaOfCircle = PI*r*r
let circumference = 2*PI*r
alert("The area of the circle is " + areaOfCircle + " and circumference is " + circumference)
//Calculate the slope, x-intercept and y-intercept of y = 2x -2
let y = "2*x -2"
let slope = y[0]
console.log("Slope is ", slope)
//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = prompt("Enter x1: ")
let y1 = prompt("Enter y1: ")
let x2 = prompt("Enter x2: ")
let y2 = prompt("Enter y1: ")
let slope2 = (Number(y2)-Number(y1))/(Number(x2)-Number(x1))
console.log("Slope is", slope2)
//Compare the slope of above two questions.
console.log(y)
console.log("Slope is ", slope)
console.log("(",y2,"-",y1,")","/","(",x2,"-",x1,")")
console.log("Slope is", slope2)
//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//IDK this one
let x = ""
let y3 = x*2 + 6*x + 9
console.log("y = 0")
console.log("0 = (x-3)(x-3)")
console.log("x = 3")
//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hour = prompt("Enter hours: ")
let rate = prompt("Enter rate per hours: ")
let earn = hour*rate
alert("Your weekly earning is " + earn)
//If the length of your name is greater than 7 say, your name is long else say your name is short.
let userName = prompt("Enter your name: ")
let lengthName = userName.length
if(lengthName > 7){
    alert("your name is long")
} else {
    alert("your name is short")
}
//Compare your first name length and your family name length and you should get this output.
let firstName = prompt("Enter your first name: ")
let lastName = prompt("Enter your last name: ")
let firstNameLength = firstName.length
let lastNameLength = lastName.length
if(firstNameLength>=lastNameLength){
    alert("Your first name, " + firstName + " is longer than your family name, " + lastName)
} else{
    alert("Your first name, " + firstName + " is shorter than your family name, " + lastName)
}
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
console.log("I am ", myAge-=yourAge, " years older than you")
//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let userBirth = prompt("Enter birth year: ")
let calc = 2022-Number(userBirth)
let calc2 = 18-Number(calc)
if(calc>=18){
    console.log("You are " + calc + ". You are old enough to drive")
} else {
    console.log("You are " + calc + ". You will be allowed to drive after " + calc2 + " years.")
}
//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let numYears = prompt("Enter number of years you live:")
const allSeconds = Number(numYears)*3.156e+7
console.log("You lived " +  allSeconds + " seconds.")

//Create a human readable time format using the Date time object
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
//exercise:3
//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
console.log(`${year}-${month}-${date} ${hours}:${minutes}`)