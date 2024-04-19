const myDate = new Date
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())

// console.log(typeof(myDate)) // Object Type

// const myBirthDay = new Date(1993, 11, 4)
// const myBirthDayOne = new Date(1993, 11, 4, 6, 30)
// console.log(myBirthDay.toDateString())
// console.log(myBirthDayOne.toLocaleString())

// const myBirthDay = new Date("1993-12-04")
const myBirthDay = new Date("04-12-1993")
// console.log(myBirthDay.toLocaleString())

const myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000))

const newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getMonth())
// console.log(newDate.getFullYear())
// console.log(newDate.getHours())
// console.log(newDate.getMinutes())
// console.log(newDate.getSeconds())

const todaysDate = `Today Date Is ${newDate.getDate()} and Year is ${newDate.getFullYear()}`
// console.log(todaysDate)

const newInstance = newDate.toLocaleString('default', {
    weekday: "long",
    era:"short",
})


console.log(newInstance)



