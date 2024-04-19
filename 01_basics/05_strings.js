const name = "Gaurav"
const repoCount = 46

// console.log(`My Name Is ${name} my repo count is ${repoCount}`) // Mordern way 

const gameName = new String("Gaurav Dwivedi")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('D'))

const newString = gameName.substring(0,6)
// console.log(newString);
const newStringOne = gameName.slice(-8, 4)
// console.log(newStringOne);
const newStringTwo = "    Gaurav     "
// console.log(newStringTwo)
// console.log(newStringTwo.trim())

const url = "https://hitesh.com/hitesh%20singh"
console.log(url.replace('%20', '-'))

console.log(url.includes("hitesh"))

console.log(gameName.split(" "))








