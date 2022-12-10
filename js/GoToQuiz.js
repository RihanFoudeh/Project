'use strict'

let form=document.getElementById('quizForm');

form.addEventListener('submit',quizSubmit);

function quizSubmit(event){

    event.preventDefault();

    let fullName = event.target.fullName.value;
   let email = event.target.email.value;
   
   location.reload();
}