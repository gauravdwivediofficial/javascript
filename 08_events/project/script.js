// Generate Random Color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let inetrvalId;

const startChnageColor = function(){
    inetrvalId = setInterval(chnageBgColor, 2500)

    function chnageBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
} 
const stopChnageColor = function(){
    clearInterval(inetrvalId);
    inetrvalId = null
}


document.querySelector('#start').addEventListener('click', startChnageColor)
document.querySelector('#stop').addEventListener('click', stopChnageColor)