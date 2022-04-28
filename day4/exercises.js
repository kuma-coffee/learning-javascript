//exercise: 1
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt("Enter your age:")
if (age>=18){
    console.log(`You are older enough to drive`)
} else {
    let age2 = 18-Number(age)
    console.log(`You are left with ${age2} years to drive`)
}
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 20
let yourAge = prompt("Enter your age:")
let calcAge = Number(myAge)-Number(yourAge)
let calc = Math.abs(calcAge)
if (myAge>yourAge){
    console.log(`You are ${calc} years younger than me`)
} else if (myAge<yourAge){
    console.log(`You are ${calc} years older than me`)
} else if (myAge==yourAge){
    console.log(`We are the same age`)
} else {
    console.log(`${yourAge} is not a number`)
}
//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else
let a = 4
let b = 3
if (a>b){
    console.log("a is greater than b")
} else {
    console.log("a is less than b")
}
//using ternary operator
let calc2 = (a>b)? "a is greater than b": "a is less than b"
console.log(calc2)
//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt("Enter a number:")
let even = Number(number) % 2 == 0
let odd = Number(number) % 2 == 1
if (even){
    console.log(`${number} is an even number`)
} else if (odd){
    console.log(`${number} is an odd number`)
} else {
    console.log(`${number} is not a number`)
}

//exercises: 2
//Write a code which can give grades to students according to theirs scores:
let grade = prompt("Enter your score: ")
if (grade>=90 && grade<=100){
    console.log("Your grade is A")
} else if (grade>=80 && grade<90){
    console.log("Your grade is B")
} else if (grade>=70 && grade<80){
    console.log("Your grade is C")
} else if (grade>=60 && grade<70){
    console.log("Your grade is D")
} else if (grade>=50 && grade<60){
    console.log("Your grade is E")
} else {
    console.log("Your grade is F")
}
//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let season = prompt("Enter a month: ")
if (season == "March" || season == "April" || season == "May"){
    console.log("The season is Spring")
} else if (season == "June" || season == "July" || season == "August"){
    console.log("The season is Summer")
} else if (season == "September" || season == "October" || season == "November"){
    console.log("The season is Autumn")
} else if (season == "December" || season == "January" || season == "February"){
    console.log("The season is Winter")
} else {
    console.log(`${season} is not a month`)
}
//Check if a day is weekend day or a working day. Your script will take day as an input.
let days = prompt("Enter a day: ")
let res = days.toLowerCase()
if (res == "monday", "tuesday","wednesday", "thursday","friday"){
    console.log(`${days} is working day`)
} else if (res == "saturday", "sunday"){
    console.log(`${days} is a weekand`)
} else {
    console.log(`${days} is not a day`)
}

//exercise: 3
//Write a program which tells the number of days in a month.
let month = prompt("Enter a month: ")
let monthToLow = month.toLocaleLowerCase()
if (monthToLow == "january", "march", "may", "july", "august", "october", "december"){
    console.log(`${month} has 31 days`)
} else if (monthToLow == "april", "june", "september", "november"){
    console.log(`${month} has 30 days`)
} else if (monthToLow == "february"){
    console.log(`${month} has 28/29 days`)
} else {
    console.log(`${season} is not a month`)
}