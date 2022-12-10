/* eslint-disable no-undef */
'use strict';

let coursesRaw = document.getElementById('courses-col');

for (let i = 0; i < Course.allCourses.length; i++) {


    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let img = document.createElement('img');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');
    let hr = document.createElement('hr');
    let btn = document.createElement('button');
    let h4 = document.createElement('h4');

    div1.setAttribute('class', `mix ${Course.allCourses[i].cateogry}`);
    div1.setAttribute('id', `${Course.allCourses[i].key}`);
    div1.setAttribute('style', 'border-style:');
    btn.setAttribute('value', Course.allCourses[i].key);
    btn.addEventListener('click', addToCart);
    coursesRaw.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(hr);
    div2.appendChild(btn);
    div2.appendChild(h4);
    img.src = Course.allCourses[i].src;
    h5.textContent = Course.allCourses[i].name;
    p.textContent = Course.allCourses[i].description;
    btn.textContent = 'Add to Cart';
    h4.textContent = `${Course.allCourses[i].price} $`;
}

let coursesInCart = [];

function addToCart() {

    for (let i = 0; i < Course.allCourses.length; i++) {
        if (this.value === Course.allCourses[i].key) {
            coursesInCart.push(Course.allCourses[i]);
        }
    }

    for (let i = 0; i < coursesInCart.length; i++) {
        let courseStored = JSON.stringify(coursesInCart[i]);
        localStorage.setItem(coursesInCart[i].key, courseStored);
    }
    location.reload();
}
// eslint-disable-next-line no-var
var mybutton = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}

mybutton.addEventListener('click', function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


