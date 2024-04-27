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