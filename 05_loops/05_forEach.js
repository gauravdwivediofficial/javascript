// For Each Loop

const coding = ['JS', 'Python', 'Ruby', 'Java', 'C++']

// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: 'Javascript',
        languageFile: 'js',
    },
    {
        languageName: 'Java',
        languageFile: 'java',
    },
    {
        languageName: 'Python',
        languageFile: 'py',
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
    console.log(item.languageFile);
})



