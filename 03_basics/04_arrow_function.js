const user = {
    username: "Gaurav",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to Radar Coding`)
        // console.log(this)
    }
}

// user.welcomeMsg()
// user.username = "Tanuj"
// user.welcomeMsg()

// console.log(this)


// function radarCoders(){
//     let name = "gaurav"
//     // console.log(this.name)
// }
// radarCoders()

// const radarCoders = function(){
//     const name = "gaurav"
//     console.log(this.name)
// }
// radarCoders()


// const radarCoders = () =>{
//     let name = "Gaurav"
//     console.log(this)
//     console.log(this.name)
// }

// radarCoders()

// ---------------Basic Arrow Function ----------------

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }
// -------------------------- 
// const addTwoNumbers = (num1, num2) => (num1 + num2) 


 const addTwoNumbers = (num1, num2) => ({username: 'Tanuj'}) 

console.log(addTwoNumbers(8,9))



