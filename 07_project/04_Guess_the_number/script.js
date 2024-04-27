let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber)

const submitButton = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const userGuesses = document.querySelector('.guesses')
const lastSlot = document.querySelector('.lastResult')

const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1
let playGame = true


if(playGame){
    submitButton.addEventListener("click", (e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a Valid Number")
    }
    else if(guess < 1){
        alert('Number is less than 1')
    }else if(guess > 100){
        alert('Number is Greater than 100')
    } else{
        prevGuess.push(guess)
        if(numGuesses === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Wooo You are Right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage("Number Is To Low")
    }else if(guess > randomNumber){
        displayMessage("Number is too high")
    }
}

function displayGuess(guess){
    userInput.value = ''
    userGuesses.innerHTML += `${guess}, `
    numGuesses++
    lastSlot.innerHTML = `${11 - numGuesses}`
}

function displayMessage(msg){
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener("click", (e)=>{
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuesses = 1
        userGuesses.innerHTML = ''
        lastSlot.innerHTML = `${11-numGuesses}`
        userInput.removeAttribute('disabled','')
        startOver.removeChild(p)
        playGame =true

    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}