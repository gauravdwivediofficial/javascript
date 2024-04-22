// const tinderUser = new Object() // Singleton Object

const tinderUser = {} // Non-Singleton Object

// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Hitesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "abc@google.com",
    fullName: {
        userFullName:{
            firstName: "Gaurav",
            lastName: "Dwivedi",
        }
    }
}

// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const user = [
    {
        id:1,
        email:"gd@google.com"
    },
    {
        id:1,
        email:"dm@google.com"
    },
    {
        id:1,
        email:"g@google.com"
    },
]

// console.log(user[0].email)

// console.log(Object.keys(tinderUser)) // Return all the keys as Array format
// console.log(Object.values(tinderUser)) // Return all the values as Array format
// console.log(Object.entries(tinderUser)) // Return all the entries as Array format

// console.log(tinderUser.hasOwnProperty("fullname"))




