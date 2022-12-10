'use strict';
// to slideshow photo 
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let y = document.getElementsByClassName("text");
  let z = document.getElementsByClassName("pargraph");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";  
    z[i].style.display = "none";

  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block"; 
  y[myIndex-1].style.display = "block";
  z[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


let form=document.getElementById('form');

form.addEventListener('submit',feedBackSubmit);

function feedBackSubmit(event){

    event.preventDefault();

    let fullName = event.target.fullName.value;
   let email = event.target.email.value;
   let feedBack = event.target.feedBack.value;
   
   alert('Your Feedback Has Been Send');
   location.reload();

}

