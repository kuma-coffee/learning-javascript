//Exercise: Level 1
//Exercise: Level 2
//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries)
console.log(web_techs)
//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const punctuations = text.replace(/[.,]/g,"")
const textToArray = text.split(" ")
console.log(textToArray)
console.log(textToArray.length)
//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//modify Tea to 'Green Tea'
shoppingCart[2] = "Greentea"
//remove 'Honey' if you are allergic to honey
shoppingCart.pop()
//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar")
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat")
console.log(shoppingCart)
//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries.includes("Ethiopia"))
countries.push("Ethiopia")
countries.sort()
console.log(countries)
//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let index = web_techs.indexOf("Sass")
if (index == -1){
    web_techs.push("Sass")
    console.log(web_techs) 
} else {
    console.log('Sass is a CSS preprocess')
}
//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Exercise: Level 3
//The following is an array of 10 students ages:    
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
ages.sort()
const max = Math.max(...ages)
const min = Math.min(...ages)
console.log(ages, max, min)
//Find the median age(one middle item or two middle items divided by two)
let median = (ages[4] + ages[5])/2
console.log(median)
//Find the average age(all items divided by number of items)
let average = (ages.reduce(function(acc, val) { return acc + val; }, 0))/10
console.log(average)
//Find the range of the ages(max minus min)
let range = max - min
console.log(range)
//Compare the value of (min - average) and (max - average), use abs() method 1.
console.log(min>average)
console.log(max>average)
console.log(Math.abs(min-average))
console.log(Math.abs(max-average))
//Slice the first ten countries from the countries array
console.log(countries.slice(0,10))
//Find the middle country(ies) in the countries array
console.log(countries[97])
//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(countries.slice(0,97))
console.log(countries.slice(97,194))