// Reduce Function


const myNums = [1,2,3,4,5,6,7,8,9,10]



const newN = myNums.reduce((acc, cur)=> {
    // console.log(`Acc ${acc} CRR ${cur}`);
    return acc + cur
},0)

// console.log(newN);

const cart = [
    {
        itemName: 'JS',
        price: 2999,
    },
    {
        itemName: 'Web Dev',
        price: 5999,
    },
    {
        itemName: 'Mobile Dev',
        price: 9999,
    },
    {
        itemName: 'Data Science',
        price: 12999,
    },
]

 const finalPrice = cart.reduce((acc,curr)=>{
    return  acc + curr.price
},0)

console.log(finalPrice);