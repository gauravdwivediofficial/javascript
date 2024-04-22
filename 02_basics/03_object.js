// Singleton
// Object.create



// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    firstName: "Gaurav",
    lastName: "Dwivedi",
    "full name": "Gaurav Dwivedi",
    [mySym]: "myKey1",
    age: 29,
    location: "Satna",
    email: "gaurav@google.com",
    isLoggedIn: false,
    lastActiveDays:["Monday", "Tuesday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "Gaurav@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "gd@google.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Jai Shree Raam")
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${this.firstName} welcome To JavaScript`)
}

// jsUser.greetingTwo()
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

