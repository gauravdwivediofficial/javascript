// ---------------------- basic loop ----------------------------

for (let index = 1; index <= 10; index++) {
    const element = index;
    if (element === 4){
        // console.log("4 Is There");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop: ${j} and Inner Loop: ${i}`);
        // console.log(i + "*" + j +' = ' + i*j);  // Table 1 to 10
    }
    
}

let myArr = ["Gaurav", "Tanuj", "Shubham", "Ram", "Ved"]

// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)
    
}

// ----------------------- Keywords -------------------------------

// break and continue

for (let index = 1; index <= 20; index++) {
    const element = index;
    if(element === 7){
        // console.log(`it's 7 Thala For a Reason`)
        // break
    }
    // console.log(element);
    
}


for (let index = 1; index <= 20; index++) {
    const element = index;
    if(element === 7){
        console.log(`Thala Detected`)
        continue
    }
    console.log(element);
    
}



