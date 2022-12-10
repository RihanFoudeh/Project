/* eslint-disable no-unused-vars */
let disValue = 0;
function check() {
    let c = 0;
    let q1 = document.quiz.question1.value;
    let q2 = document.quiz.question2.value;
    let q3 = document.quiz.question3.value;
    let q4 = document.quiz.question4.value;
    let q5 = document.quiz.question5.value;
    let result = document.getElementById('result');

    let quiz = document.getElementById('quiz');
    if (q1 === 'HyperText Markup Language') { c++; }
    if (q2 === 'True') { c++; }
    if (q3 === 'alert(\'Hellow World\')') { c++; }
    if (q4 === 'style') { c++; }
    if (q5 === '$') { c++; }
    quiz.style.display = 'none';

    if (c < 3) {
        result.textContent = `Unfortunately, your grade is ${c} `;
    }
    else if (c === 3) {
        result.textContent = `Congratulations, your grade is ${c} you got 10% off.`;
        disValue = 0.1;
    }
    else if (c === 4) {
        result.textContent = ` Congratulations, your grade is ${c} you got 30% off.`;
        disValue = 0.3;
    }
    else if (c === 5) {
        result.textContent = `Congratulations, your grade is ${c} you got 50% off.`;
        disValue = 0.5;
    }
    let disValueString = JSON.stringify(disValue);
    localStorage.setItem('discount', disValueString);
    creatbutton();
}
function creatbutton() {
    let corseLink = document.createElement('a');
    let button = document.createElement('button');
    corseLink.appendChild(button);
    button.textContent = 'Go To Courses';
    // eslint-disable-next-line no-undef
    result.appendChild(corseLink);
    corseLink.href = './courses.html';
}



