// More Array Concept

const marvelHeros = ['Thor', 'Ironman', 'Spiderman']
const dcHeros = ["Superman", 'Batman', 'Aquaman']

// marvelHeros.push(dcHeros)


// console.log(marvelHeros)
// console.log(marvelHeros[3])

// const allHeros = marvelHeros.concat(dcHeros)

// console.log(allHeros)

const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros)


const mixedArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realMixedArr = mixedArray.flat(Infinity)
// console.log(realMixedArr)

// console.log(Array.isArray("Gaurav")) // cheaking 
// console.log(Array.from("Gaurav")) // converting to array
// console.log(Array.from({name:"Gaurav"})) // Interview

let score1 = 100
let score2 = 200
let score3 = 300

const mixingAllElement = Array.of(score1,score2,score3) // converting individual element to an array
// console.log(mixingAllElement)

