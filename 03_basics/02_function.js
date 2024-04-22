
function calculateCartPrice(...price) { // in braces ... called rest operator
    return price
}

// console.log(calculateCartPrice(200,300,400))

const user = {
    username: "Gaurav",
    price: 999,
}
function handleUser(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleUser(user)
// handleUser({
//     username: 'Tanuj',
//     price: 150,
// })

const myNewArr = [200,300,500,800,2000]

function returnSecondValue(getArr){
    return getArr[2]
}
// console.log(returnSecondValue(myNewArr))
// console.log(returnSecondValue([1000,2200,3000,50000]))