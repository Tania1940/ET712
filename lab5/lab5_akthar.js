/**
 * Tania AKthar
 * Sep 17, JavaScript Object
 */

console.log("Tania Akthar")
console.log("\n ------- Example 1 : -------")
// create an object named 'car'
const car={
    type: "Fiat",
    model:500,
    color: "white",
}
console.log(`The model of the car is ${car.model}`)

console.log("\n ------- Example 2 : use of 'this' keyword in an object -------")
// create an object named 'person'
const person ={
    // defining properties
    firstname : "John",
    lastname : "Doe",
    id : 1234,

    // defining methods
    fullname : function(){
        return `${this.firstname} ${this.lastname}`
    }
}

// accessing method 'fullname'
console.log(person.fullname())


console.log("\n ------- Example 3 : object constructor using function -------")
function course(title, instructor, code, session, students){
    this.title = title,
    this.instructor = instructor,
    this.code = code,
    this.session = session,
    this.students = students
}
// set up values to the object
let course1 = new course("JavaScript programming", "Wu", "ET712", "H1", 12)

// accessing properties
console.log(`the course ${course1.title} has ${course1.students} students`)

console.log("\n ------- Example 4 : methods -------")
const myMath = {
    // defining methods
    sqaure : function(num){
        return num*num
    },
    double : function(num){
        return num*2
    }   
}

// accessing methods
let n =3
let number1 = myMath.double(n)
let number2 = myMath.sqaure(n)

// print result
console.log(`The double of number ${n} is ${number1}`)
console.log(`The sqaure root of ${n} is ${number2}`)


console.log("\n ------- EXERCISE -------")


