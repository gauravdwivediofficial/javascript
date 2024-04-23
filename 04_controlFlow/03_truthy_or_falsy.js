const userEmail = "rc@ai"

if (userEmail){
    // console.log("User Have Email");
}else {
    // console.log("User Don't have email");
}
const userEmail1 = ""

if (userEmail1){
    // console.log("User Have Email");
}else {
    // console.log("User Don't have email");
}

// -------------------------- Falsy Values -------------------------------------

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// -------------------------- Truthy Values ------------------------------------

// "0", "false", " ", [], {}, function(){}


const userEmail3 = []

if (userEmail3.length === 0){
    // console.log("Array is Empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length===0){
    console.log("Object is Empty");
}









