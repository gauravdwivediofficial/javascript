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