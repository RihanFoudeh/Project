'use strict';

let sum = 0;

let discount = JSON.parse(localStorage.getItem('discount'));


function x() {
    let item = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (keys[i] !== 'discount' && keys[i] !== 'allCourses' && keys[i] !== 'counter' && keys[i] !== 'counter') {
            item.push(JSON.parse(localStorage.getItem(keys[i])));
        }
    }
    return item;
}


let cartItem = x();
let table = document.getElementById('table');

function hedarForTable() {

    let trElemant = document.createElement('tr');
    table.appendChild(trElemant);
    trElemant.classList = 'header';
    let thElemant1 = document.createElement('th');
    trElemant.appendChild(thElemant1);
    thElemant1.textContent = 'Remove Icon';


    let thElemant2 = document.createElement('th');
    trElemant.appendChild(thElemant2);
    thElemant2.textContent = 'Images';

    let thElemant3 = document.createElement('th');
    trElemant.appendChild(thElemant3);
    thElemant3.textContent = 'Name';


    let thElemant4 = document.createElement('th');
    trElemant.appendChild(thElemant4);
    thElemant4.textContent = 'Price';
}


hedarForTable();
bodyForTable();
footerForTable();




function footerForTable() {
    let discountValeu = sum - sum * discount;
    let totalTable = document.getElementById('totalTable');
    let trElemantForTotal = document.createElement('tr');
    totalTable.appendChild(trElemantForTotal);
    let tdElemant1 = document.createElement('td');
    trElemantForTotal.appendChild(tdElemant1);
    tdElemant1.textContent = 'Total Price';
    let tdElemant2 = document.createElement('td');
    trElemantForTotal.appendChild(tdElemant2);
    tdElemant2.textContent = `${sum} $ `;
    let trElemantForTotal0 = document.createElement('tr');
    totalTable.appendChild(trElemantForTotal0);
    let tdElemant10 = document.createElement('td');
    trElemantForTotal0.appendChild(tdElemant10);
    tdElemant10.textContent = 'Discount';
    let tdElemant20 = document.createElement('td');
    trElemantForTotal0.appendChild(tdElemant20);
    tdElemant20.textContent = `${discount * 100} %`;
    let trElemantForTotal3 = document.createElement('tr');
    totalTable.appendChild(trElemantForTotal3);
    let tdElemant13 = document.createElement('td');
    trElemantForTotal3.appendChild(tdElemant13);
    tdElemant13.textContent = 'Total After Discount';
    let tdElemant23 = document.createElement('td');
    trElemantForTotal3.appendChild(tdElemant23);
    tdElemant23.textContent = `${discountValeu} $ `;
}

function clearCart() {
    sum = 0;
    while (table.rows.length > 0) {
        document.getElementById('table').deleteRow(0);
    }
    document.getElementById('totalTable').deleteRow(2);
    document.getElementById('totalTable').deleteRow(1);
    document.getElementById('totalTable').deleteRow(0);
}

function bodyForTable() {

    for (let i = 0; i < cartItem.length; i++) {
        let trElemantForBody = document.createElement('tr');
        table.appendChild(trElemantForBody);
        let btndele = document.createElement('button');
        trElemantForBody.appendChild(btndele);
        btndele.setAttribute('value', cartItem[i].key);
        btndele.textContent = 'X';
        btndele.classList = 'RemoveIcon';
        btndele.addEventListener('click', removeItemFromCart);
        let thElemantForBody = document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody);
        let imgele = document.createElement('img');
        thElemantForBody.appendChild(imgele);
        imgele.setAttribute('src', cartItem[i].src);
        let thElemantForBody1 = document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody1);
        thElemantForBody1.textContent = cartItem[i].name;
        let thElemantForBody2 = document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody2);
        thElemantForBody2.textContent = cartItem[i].price;
        sum += cartItem[i].price;
    }
}

function removeItemFromCart() {

    localStorage.removeItem(this.value);
    cartItem = x();
    clearCart();
    hedarForTable();
    bodyForTable();
    footerForTable();
}


let checkoutButton = document.getElementsByClassName('checkout');
let shown = false;
// eslint-disable-next-line no-unused-vars
checkoutButton[0].addEventListener('click', function () {
    let x = document.getElementById('a');
    if (!shown) {
        x.style.display = 'block';
        checkoutButton[0].innerText = 'Hide Checkout Form';
        shown = !shown;
    } else {
        x.style.display = 'none';
        checkoutButton[0].innerText = 'Proceed to Checkout';
        shown = !shown;
    }
});

let payForm = document.getElementById('a');
payForm.addEventListener('submit', paySubmit);

function paySubmit(e) {
    e.preventDefault();
    alert('your application has been sent you will receive your courses by e-mail in 2 hours ');
    clearCart();
    localStorage.clear();
    // location.reload();
    
    let div=document.getElementById('cart-div');
    let div2 = document.createElement('div');
    let h2 = document.createElement('h2');
    let btn = document.createElement('button');
    let a = document.createElement('a');
    div2.setAttribute('id','gift');
    a.setAttribute('href','freecourse.html');
    div.textContent=' ';
    div.appendChild(div2);
    div2.appendChild(h2);
    div2.appendChild(btn);
    btn.appendChild(a);

    h2.textContent = 'congratulations, you received a free course from JavaScript-Warriors.' ;
    a.textContent = 'Go to Free Course';

    
    // elemant.setAttribute('href','freecourse.html');
    // document.getElementById('h2').textContent = 'congratulations, you received a free course from JavaScript-Warriors.' ;
}

   
 
    


// let elemant = document.getElementById('h2');
//     elemant.textContent = 'Hello JS';

let cartIcon = document.getElementById('cartIcon');
let counter;
let cartItemm = x();
counter = cartItemm.length;
if (counter === 0) {
    cartItem = x();
    // eslint-disable-next-line no-undef
    cartIcon.textContent = 'Cart';
} else {
    cartIcon.textContent = `Cart ${counter} `;
}

