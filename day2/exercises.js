//I skipped exercise:1, because I was do it

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