//JavaScript is Dynamically-typed languages


// Primitive Data Types

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // number type
const scoreValue = 100.3 // number type
const isLoggedIn = true // Boolean type
const outsideTemp = null // null type
let userEmail; // undefined type

const id = Symbol("123") // symbol type
const anotherId = Symbol('123') // symbol type
// console.log(id === anotherId) // both are not same

const bigNumber = 123456789987654321n
// console.log(typeof bigNumber)
// console.log(bigNumber)



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Junior G", "Aryaman", "Shaktiman"] // Arrays

const superHeros = {
    Marvel: "Iron Man",
    DC: "Batman",
} // Object wrriten in curly braces

const func1 = function(){
    console.log("Jai Shree Raam")
}
func1();
