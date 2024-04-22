// Direct Function Declaration

function myName(){
    console.log("Gaurav Dwivedi")
}
// myName()

function addTwoNumbers(num1, num2 ){ // in the braces called Parameters
    // console.log(num1+num2)
    // return num1 + num2
    let result = num1 + num2
    return result

}

// addTwoNumbers(3,4) // in the braces called Arguments

const result = addTwoNumbers(3,5)
// console.log("Result: ", result)

function loginUserMsg(username="Tanuj"){
    if(!username){
        console.log("Please Enter Username")
        return
    }
    return `${username} Just Logged In`
}

const username = loginUserMsg("Gaurav")
// console.log(username)