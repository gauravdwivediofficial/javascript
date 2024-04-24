const language = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in language) {
    // console.log(key);
    // console.log(language[key]);
    // console.log(`${key} Shortcut for ${language[key]}`);
}

const myArr = ['js','cpp','py','jsx']

for (const key in myArr) {
    // console.log(key);
    // console.log(myArr[key]);
}

const map = new Map()
map.set("IN","INDIA")
map.set("FR","FRANCE")
map.set("JP","JAPAN")

for (const key in map) {
    // console.log(key); // Not Itterble
}

