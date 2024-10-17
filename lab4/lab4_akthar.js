// /* 
// Tania Akthar
// Sep 10, function
// Sep 12, function calling function
// */


// console.log("Tania Akthar")
// console.log("\n----- Example 1: defining a function -----")
// function msg(){
//     console.log("Hello World!")
// }
// // define a function that prints out the number from 3 to 1
// function printnumber(){
//     for(let n = 3; n>0; n--){
//         console.log(`n = ${n}`)
//     }
// }

// console.log("\n----- Example 2: defining a function -----")

// // defina a function to prompt a greeting using a username passed to the function as argument
// function greeting(username){
//     console.log(`Welcome to Javascript programming ${username}`)
// }

// // define a function that prints a name in upper case
// function touppername(name){
//     console.log(`Thank you for your business ${name.toUpperCase()}`)

// }
// // define a function to check if two numbers are 1's. The two numbers are passed to the function as arguments
// function isSnakeEyes(n1, n2){
//     if (n1===1 && n2===1){
//         console.log("Snake eyes!")
//     }
//     else{
//         console.log("NOT snake eyes!")
//     }
// }


// console.log("\n----- Example 3: function that returns value -----")
// //define a function that takes a number and returns the double of the number
// function doublenumber(n){
//     return n*2
// }


// //define a function to print result
// function printresult(number, dbnumber){
//     console.log(`The double of number ${number} is ${dbnumber}`)
// }
// let number = parseInt(prompt("Enter a number: "))

// let dbnumber = doublenumber(number)
// printresult(number, dbnumber)



// console.log("\n----- EXERCISE -----")

// function checkName() {
//     let name;
    
//     while (true) {
//         name = prompt("Enter your name:");
//         if (name === null || name === "") {
//             alert("You forgot to enter a name. Enter a name again:");
//             continue;
//         }

//         if (!isNaN(name)) {
//             alert(`${name} is invalid! Enter a name again:`);
//             continue;
//         }
//         break;
//     }

//     console.log(`Welcome ${name.toUpperCase()} to the class!`);
// }

// checkName()

console.log("----- THURSDAY, SEP 12 ----- \n")
console.log("----- Example 1: passing an array in a function ----- \n")
// function that reads a list and returns the last item in the list
function lastelement(inputarray){
    if(inputarray===undefined){
        return null
    }
    else if (inputarray.length !==0){
        let lastindex = inputarray.length - 1
        return inputarray[lastindex]
    }
    else{
        return null
    }
}

console.log("----- Example 2: JaveScript buolt0in functions ----- \n")
let pinumber = Math.PI
console.log(`PI =${pinumber}`)
//Math.ceil returns the rounded up number to its nearest integer
console.log(`PI ceil = ${Math.ceil(pinumber)}`)
// Math.floor returns the rounded down number to its nearest integer
console.log(`PI floor = ${Math.floor(pinumber)}`)
// Math.pow(base,exponent) returns the value of base to the power of exponent
console.log(`2^3= ${Math.pow(2,3)}`)
// math.random returns a random number between 0 and 1
console.log(`Random number ${Math.random}`)
// math.random returns a random number between 0 and 10
console.log(`Random number ${Math.floor(Math.random() *10)}`)
// math.random returns a random number between 5 and 20
console.log(`Random number ${Math.floor(Math.random()*15 + 5)}`)

console.log("----- Example 3: Randomly pick an item from a list ----- \n")

function pickacolor(listcolors){
    let lastindex = listcolors.length - 1
    let indexrandomcolor = Math.floor(Math.random()*lastindex)
    return listcolors[indexrandomcolor]
}

console.log("----- Example 4: Variable function ----- \n")
const addition = function(n1,n2,){
    return n1+n2
}

let squared = function(num){
    return Math.pow(num,2)
}

console.log("----- Example 5: Arrow function ----- \n")
let greet =(username) => {
    console.log(`Welcome to function in JS ${username}`)
}

console.log("----- Example 6: Function with default value ----- \n")
// function that takes a argument as the number of time to roll a dice.
const rolldice = (rolltimes=1)=>{
    for(let n = 1; n<=rolltimes; n++){
        console.log(Math.floor(Math.random()*5 + 1))
    }
}

console.log("----- Example 7: Spread ... in a list ----- \n")
const findmax = function(listnumbers){
    return Math.max(listnumbers)
}