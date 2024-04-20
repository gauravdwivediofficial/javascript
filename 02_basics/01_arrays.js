// Array

const myArr = [0,1,2,3,4,5,6,"gaurav", true] // array could be mixed

const heros = ["Batman", "Junior G", "Spiderman"] // array could be strings value

const arr2 = new Array(9,8,7,4,5,6) // new way to create array

// console.log(heros[1]) this is how we extract value through indexing

// Array Methods

myArr.push(6) // adding element
// console.log(myArr)
myArr.pop() // remove last element
// console.log(myArr)

myArr.unshift(10) // add value in first index
// console.log(myArr)

myArr.shift() // remove first value from element
// console.log(myArr)

const newArr = myArr.join()
// console.log(newArr)


const myNewArr = myArr.slice(1,3)
console.log(myNewArr)

const myNewArr2 = myArr.splice(1,3) // splice manupalate origanal array
console.log(myNewArr2)











