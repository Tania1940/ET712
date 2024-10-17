/*
  Tania Akthar
  Sep 3, array and conditional statment
 */
console.log("----- Tania Akthar -----")
console.log("\n----- Example 1: array -----\n")
let fruits
fruits = ['oranges','apples','peaches']
console.log(fruits)
console.log(fruits[1])
let numbers = [-2, 9. , 5, -3.2, 12]
console.log(`The frist number is ${numbers[0]}`)
let mixedarray = [false, 6, 'Peter Pan', true, 'Martha']
console.log(mixedarray)
console.log("\n ------ Example 2: array methods ------\n")
// reverse method: reverses items order
mixedarray.reverse()
console.log(`Reversed mixedarray = ${mixedarray}`)
// shift method: remove the first item from the list
mixedarray.shift()
console.log(`After shift method = ${mixedarray} `)
// unshift method: add items to the list
mixedarray.unshift("QCC", 'ET712', 2024)
console.log(`After unshift method = ${mixedarray}`)
// push method: add items to the list from the right
mixedarray.push('$9.50', -2)
console.log(`After push method = ${mixedarray}`)
// inexOf method: return the index number of the found item in the list
let searchitem = 6
let resultsearch = mixedarray.indexOf(searchitem)
console.log(`What is the index of ${searchitem} in the list? ${resultsearch}`)

console.log("\n----- Example 3: conditional statement -----\n")
let day = true
let night = false
let num = 1

console.log(`Before if statement, num = ${num}`)

if(night){
    num = num + 20
}
 
console.log(`num is ${num}`)

console.log("\n----- Example 4: if-else statement -----\n")
let age = 15

if(age >=21){
    console.log("Adult")
}
else{
    console.log("Under age")
}

console.log("\n----- Example 5: if-else if, ..., else statement -----\n")
let num1 = 10
let num2 = 5

if(num1 === num2){
    console.log("The numbers are the same")
}
else if (num1>num2){
    console.log("num1 is greater than num2")
}
else if (num2>num1){
    console.log("num2 is greater than num1")
}
else{
    console.log("Unable to compare the numbers")
}

console.log("\n----- Example 6: if- else if, ..., else statement and prompt dialog box -----\n")
let pin = prompt("Enter a pin numer")
let checkpin = isNaN(pin)

if(checkpin){
    console.log("You didn't eneter a number")
}
else if (!checkpin && pin !==""){
    console.log(`Your pin number is ${pin}`)
}
else if(pin===''){
    console.log("You didn't enter anything")
}
else if(pin == null){
    console.log("You canceled the dialog box")
}
else{
    console.log("Invalid operation")
}


console.log("\n --------- Exercise: if, else if, else statement --------- \n")

let input_value = prompt("Enter a value: ")

let check_input_value = isNaN(input_value)

if(check_input_value){
    console.log(`${input_value}' is a string.`)
}

else if(!check_input_value && input_value < 0){
    console.log(`'${input_value}' is a negative number`)
}
else if(!check_input_value && input_value >= 0){
    console.log(`'${input_value}' is a positive number`)
}
else{
    console.log("Invalid operation")
}