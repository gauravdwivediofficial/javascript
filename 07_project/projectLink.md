# Project Related to DOM

## Project Link
[Link](
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)

## Sulution Code

### Project One
```JavaScript
console.log("Gaurav")
const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach((btn)=>{
    btn.addEventListener('click', function(event){
        event.preventDefault()
        // console.log(e);
        console.log(event.target);
        
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
    })
})
```

### Project two BMI Calculator
``` JavaScript 
Code
const form = document.querySelector('form')

// This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
       result.innerHTML = `Please Give a valid height ${height}` 
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
       result.innerHTML = `Please Give a valid weight ${weight}` 
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // Show the result
        if(bmi <= 18.6){
            result.innerHTML = `<span>${bmi}</span><br/><p>Under Weight</p>`
        }
        else if(bmi >= 18.6 && bmi <=24.9){
            result.innerHTML = `<span>${bmi}</span><br/><p>Normal Range</p>`
        }
        if(bmi >= 24.9){
            result.innerHTML = `<span>${bmi}</span><br/><p>Overweight</p>`
        }
        
    }

})
```

### Project Three Digital Clock


``` Javascript
Code

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
//   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

### Project Four Guess The Number

```Javascript 
Code

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

```