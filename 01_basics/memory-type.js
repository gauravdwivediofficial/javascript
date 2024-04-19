// Stack Memory used in Primitive Data Types

let myYoutubeName = "Radar Coding"
let anotherName = myYoutubeName
anotherName = "BaaZ Gaming"

// console.log(myYoutubeName)
// console.log(anotherName)

// Here we fetch Copy 


// Heap Memory used in Non Primitive Data Types

let userOne = {
    name: "Gaurav",
    email: "gaurav@google.com",
    upiId: "gaurav@ybl",
}

let userTwo = userOne
console.log(userTwo)
userTwo.upiId = "gd@ybl"

console.log(userOne)