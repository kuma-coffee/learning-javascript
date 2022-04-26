//creating a time object
const now = new Date()
console.log(now)

//getting full year
console.log(now.getFullYear())

//getting month
console.log(now.getMonth())

//getting date
console.log(now.getDate())

//getting day
console.log(now.getDay())

//getting hours
console.log(now.getHours())

//getting minutes
console.log(now.getMinutes())

//getting seconds
console.log(now.getSeconds())

//getting time
//using getTime()
console.log(now.getTime())
//using Date.now()
const allSeconds = Date.now()
console.log(allSeconds)
const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) //

//readable time format  
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0