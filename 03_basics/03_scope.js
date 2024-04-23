// Global Scope

let a = 300

// Block Scope
if (true) {
    let a = 10
    // console.log(`Inner: ${a}`)
}

// console.log(a)

// Nested Scope

function one(){
    const username = "Gaurav"
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const username = "Gaurav"
    if(username === 'Gaurav'){
        const website = " Youtube"
        // console.log(username+website);
    }
    // console.log(website) // this line also give error because website is block scope
}
// console.log(username); // this line gives error because the scope is block



// ------------------- Intresting ---------------------

// console.log(addOne(5)) this runs smoothly because of the way you declare function
function addOne(num){
    return num + 1
}


// addTwo(5) // Cannot run the the in this manner when you declare function after calling
const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(5))












