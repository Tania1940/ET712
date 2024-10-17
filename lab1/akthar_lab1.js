/*
Tania Akthar
Aug 29, JS variables, string, and array (list)
*/
console.log("This is my first JS code")
console.log("------- Example 1: variables -------")
let number = 3
let username = "PeterPan"
let gender = "F"
let num1 = -2.5
let password;
let city = null
let userchoice = true
let music = ""
console.log("The data type of variable 'num1'", typeof(num1))
console.log("The data type of variable 'username'", typeof(username))
console.log("The data type of variable 'password'", typeof(password))
console.log("The data type of variable 'city'", typeof(city))
console.log("The data type of variable 'userchoice'", typeof(userchoice))
console.log("The data type of variable 'music'", typeof(music))
console.log("Double the 'number' value", number*2)
console.log("concatenate string and number by using + sign", username+num1)


console.log("------- Example 2: prompt function -------",)
number = parseInt(prompt("Enter a number "))
// number = parseInt(number)

//backtick operator
console.log(`Triple the entered number ${number} is ${number*3}`)

console.log("------- Example 3: string -------")
let fullname = 'Peter Pan'
console.log(`Index 4 hols character--> ${fullname[4]}`)
console.log(`fullname has ${fullname.length} characters`)
console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())
//find letter 'e' from 'fullname' variable
console.log(`letter 'e' has index ${fullname.search('e')}`)

// removing white space at the beginning and end of a string
fullname = "     Peter Pan     "
fullname = fullname.trim()

//subtracting characters
//let subcharacters = fullname.substr(3,2)

console.log("----- Lab Exercise ------")

let character = "Character"
console.log("The data type of variable 'username'", typeof(character))


