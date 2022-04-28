// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

// Examples to use conditions in the cases
let num = prompt("Enter a number: ")
switch(true){
    case num>0:
        console.log(`${num} is positive number`)
        break
    case num<0:
        console.log(`${num} is negative number`)
        break
    case num==0:
        console.log(`${num} is zero`)
        break
    default:
        console.log(`${num} is not a number`)
}

