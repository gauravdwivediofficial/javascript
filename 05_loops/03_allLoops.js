// For Of Loop

const myArr = [1,2,3,4,5]

for (const num of myArr) {
    // console.log(num)
}

const greet = "Hello Coders!"

for (const g of greet) {
    // console.log(g)
}

// Maps

const map = new Map()
map.set("IN","INDIA")
map.set("FR","FRANCE")
map.set("JP","JAPAN")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ":-", value);
}

const myGame = {
    'game': 'BGMI',
    'game2': 'PUBG'
}
for (const [game,name] of object) {
    // console.log(game, "name is", name);
}

// For In Loop

const language = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in language) {
    console.log(key);
}







