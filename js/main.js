let allCourses = JSON.parse(localStorage.getItem('allCourses'));
let shownBefore = [];
function getRandomIndex() {
    return Math.floor(Math.random() * allCourses.length);
}

let course1 = allCourses[getRandomIndex()];
let course2 = allCourses[getRandomIndex()];
let course3 = allCourses[getRandomIndex()];
let course4 = allCourses[getRandomIndex()];

while (course1 === course2 || course3 === course2 || course4 === course2 || course1 === course3 || course1 === course4 || course3 === course4 || shownBefore.includes(course1) || shownBefore.includes(course2) || shownBefore.includes(course3) || shownBefore.includes(course4)) {
    course1 = allCourses[getRandomIndex()];
    course2 = allCourses[getRandomIndex()];
    course3 = allCourses[getRandomIndex()];
    course4 = allCourses[getRandomIndex()];
}

shownBefore = [course1, course2, course3, course4];

let courseImg = document.querySelectorAll('#courseImg');
let courseName = document.querySelectorAll('h2');
let courseParagraph = document.querySelectorAll('#courseP');
let coursePrice = document.querySelectorAll('h3');
let seeCourse = document.querySelectorAll('.see-course');

for(let i=0; i<shownBefore.length;i++) {
    courseImg[i].src = shownBefore[i].src;
    courseName[i].innerText = shownBefore[i].name;
    courseParagraph[i].innerText = shownBefore[i].description;
    coursePrice[i].innerText = `$${shownBefore[i].price}`;
    for(let i=0; i<seeCourse.length; i++) {
        seeCourse[i].addEventListener('click', function() {
            window.location.href = `courses.html#${shownBefore[i].key}`;
        });
    }
}


