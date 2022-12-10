/* eslint-disable no-undef */
'use strict';
// let counter ;

const Course = function (key, name, description, cateogry, price, imgSrc) {
    this.key = key;
    this.name = name;
    this.description = description;
    this.cateogry = cateogry;
    this.price = price;
    this.src = imgSrc;
    this.sales = false;
    this.comments = [];
    Course.allCourses.push(this);
};

Course.allCourses = [];

function generateCourses() {

    new Course('js1', 'JavaScript for Beginners', 'The JavaScript for Beginners course aims to build an in-depth understanding of the various aspects of JS that are mandatory for understanding how JavaScript applications work. With 3 hours of on-demand video, this course is one of the most compact and practical beginner-friendly JS courses. About 3k learners have benefitted from this course. You will be awarded a certificate on the successful completion to showcase all the efforts and hard work you put in for the course.',
        'js', 150, 'assets/js1.png');
    new Course('js2', 'Modern JavaScript From The Beginning.', 'The Modern JavaScript From the Beginning tutorial focuses on building projects without using any JS frameworks or libraries. It boasts an excellent 4.7-star rating averaged over 11k reviews. Other than English, the course is also available in Italian, Portuguese, and Spanish languages.',
        'js', 199, 'assets/js2.png');
    new Course('js3', 'Advanced JavaScript Concepts', 'Done with the JavaScript basics and looking to get a good grasp on the advanced JavaScript topics? If yes, then you should check out the Advanced JavaScript Concepts course offered by our website. It has 23.5 hours of on-demand video and 24 articles to fulfill the purpose. You will be able to learn all the modern advanced JavaScript practices that will put you ahead of your peers. Additionally, it also details both the functional programming and OOP aspects of JS.',
        'js', 350, 'assets/js1.png');
    new Course('js4', 'The Complete JavaScript Course 2021: Build Real Projects.', 'Looking to start JavaScript for building real projects instantly? Then you must this JS course offered by Udemy. Over 206k learners have enrolled for the course with an average of 4.6-star rating from over 47k reviews. The comprehensive JavaScript course is offered in 8 languages, including French, German, and Spanish. The course includes 28 hours of on-demand video along with ten articles, one downloadable resource, lifetime access, and a certification of completion. ',
        'js', 250, 'assets/js4.png');
    new Course('js5', 'Introduction to JavaScript.', 'Another great JavaScript course available for the programming greenhorns is the Introduction to JavaScript course offered by freecodecamp.org.Aimed for beginners in JS that have little to no experience working with the web scripting language, Introduction to JavaScript covers topics varying from data types and variables to JS objects and loops.One of the major attractions of this course is that a coding test follows each chapter. Hence, immediately after gulping up the new concepts, you can check how well you have grasped them with the practice exercises.',
        'js', 57, 'assets/js5.png');
    new Course('php1', 'PHP for Beginners - Become a PHP Master - CMS Project','Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi, and ending the course by building a CMS system similar to WordPress, Joomla, or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world. Being a PHP developer can allow anyone to make really good money online and offline, developing dynamic applications.',
        'php', 150,'assets/php1.png');
    new Course('php2', 'PHP with Laravel for beginners - Become a Master in Laravel','Laravel has become one of the most popular if not the most popular PHP framework. Employers are asking for this skill for all web programming jobs and in this course we have put together all of them, to give you the best chance of landing that job; or taking it to the next level.',
        'php',199,'assets/php2.png');
    new Course('php3', 'PHP OOP: Object Oriented Programming for beginners + Project','This course will guaranteed you success if you apply yourself, and take the time to learn everything included.PHP has allowed me to make a really great income, so much that It gives me time to teach others about it. You too can become a professional in the field, and create the life you always dreamed of. PHP is one of the best web programming languages in the world, and all the big important websites, like Google, Apple, Facebook, Yahoo, Wikipedia and many more, use it for their web applications.',
        'php', 350,'assets/php3.png');
    new Course('php4', 'Object Oriented PHP & MVC','In this course we will go step by step to build a complete custom MVC (Model View Controller) framework Called TraversyMVC using object oriented PHP. We will build something similar to Codeigniter but much much lighter. This framework is completely open source and you are free to change the name, add stuff, etc and use it as your own. This framework will include...',
        'php', 250,'assets/php4.png');
    new Course('php5', 'Build a Social Network from Scratch: JavaScript PHP + MySQL','Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi, and ending the course by building a CMS system similar to WordPress, Joomla, or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world. Being a PHP developer can allow anyone to make really good money online and offline, developing dynamic applications.',
        'php', 57,'assets/php5.png');
    new Course('nj1','The Complete Node.js Developer Course',' Have you tried to learn Node before? You start a new course, and the instructor has you installing a bunch of libraries before you even know what Node is or how it works. You eventually get stuck and reach out to the instructor, but you get no reply. You then close the course and never open it again.',
        'node.js ',70 ,'imgs/nodeJS1.jpg');
    new Course('nj2','Microservices with Node JS and React','Microservices are the number one solution for building and scaling out apps that are intended to grow.  Just one little issue: there are few resources online that delve into the most complex and nasty issues around them!  I built this course to fix that.  This course tackles every major issues around microservices head on. From challenges with data replication to confusing unordered event streams, every major challenge of building microservices is covered.',
        'node.js ', 120,'imgs/nodeJS2.jpeg');
    new Course('nj3','Learn and Understand NodeJS','Event-Based Architecture? Covered! Server side rendering with React? Yep.  Scalable, production-ready code? Its here!',
        'node.js ',85 ,'imgs/nodeJS3.jpg');
    new Course('nj4','The Complete Node.js Developer Course (3rd Edition)','NodeJS is a rapidy growing web server technology, and Node developers are among the highest paid in the industry. Knowing NodeJS well will get you a job or improve your current one by enabling you to build high quality, robust web applications.',
        'node.js ',65 ,'imgs/nodeJS4.jpg');
    new Course('nj5','MERN Stack Front To Back: Full Stack React, Redux & Node.js','Welcome to "MERN Stack Front To Back". In this course we will build an in depth full stack social network application using Node.js, Express, React, Redux and MongoDB along with ES6+. We will start with a blank text editor and end with a deployed full stack application.',
        'node.js ',90 ,'imgs/nodeJS5.jpeg');
    new Course('c1', 'Learn C++ Programming -Beginner to Advance- Deep Dive in C++.', 'Which programming language is often seen as a badge of honor among software developers?  C++ Which programming language can you learn that when added to your resume,  will often get you a job interview?  C++  Which programming language is routinely ranked in the top 5 programming languages by popularity, and been consistently in the top 10 for close to 20 years?  C++',
        'c', 50, 'assets/c1.jpg');
    new Course('c2', 'Learn C++ Programming -Beginner to Advance- Deep Dive in C++.', 'his course covers C++ from very basic to more advanced features. Concepts of C++ programming are made very simple and easy.Every topic is covered in greater detail. All Lecture are discussed both on white board like a classroom session and practical demo.Programs and Bullet points are provided as resource.Every Topic is Explained with Real life Examples This course also covers features of modern C++ 11.Student Project at the end of Course',
        'c', 100, 'assets/c2.jpg');
    new Course('c3', 'C++: From Beginner to Expert.', 'Save your precious time by buying this course. You will learn how to program in C++ in a fast and easy way! The total length of the course is over 17 hours! You will learn theory and you will also gain lots of practice. During the course we will write many programs that will make you a great programmer.All of this is presented by a young man who shares his knowledge, so the language used can be easily understood by everyone. ',
        'c', 75, 'assets/c3.jpg');
    new Course('c4', 'Learn Advanced C++ Programming.', 'This course will take you from a basic knowledge of C++ to using more advanced features of the language. This course is for you if you want to deepen your basic knowledge of C++, you want to learn C++ 11 features, or you have taken my free beginners C++ course and you are looking for the next step.We willll start with a look at C++ file handling and move through STL, template classes, operator overloading, lambda expressions, move constructors and much more besides.At the end of the course I will show you how to create a program that generates fractal images, using a a few of the language features we have seen in the course and giving you a great work out with smart pointers and arrays.I will give you exercises throughout the course, ranging from easy near the start, to quite tricky (but optional!) near the end of the course. ',
        'c', 130, 'assets/c4.jpg');
    new Course('c5', 'Unreal Engine C++ Developer: Learn C++ and Make Video Games','This "critically-acclaimed" and "insanely successful" Unreal Engine course was created in collaboration with Epic Games.The course has been fully updated and remastered to Unreal Engine 4.22+. Existing students get all the new material for free.',
        'c', 200, 'assets/c5.jpg');
    new Course('rt1', 'ReactJS for beginners', 'React - The Complete Guide (incl Hooks, React Router, Redux)Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
        'rt', 50, 'assets/rt1.jpg');
    new Course('rt2', 'ReactJS for newbies', 'Master React and Redux with React Router, Webpack, and Create-React-App. Includes Hooks! Realize the power of building composable components and Master fundamental concepts behind structuring Redux applications',
        'rt', 100, 'assets/rt2.jpg');
    new Course('rt3', 'ReactJS from zero to hero', 'React from zero to heroe - The Complete Guide (incl Hooks, React Router, Redux)Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
        'rt', 80, 'assets/rt3.jpg');
    new Course('rt4', 'React - the complete giude', 'Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now and Build powerful, fast, user-friendly and reactive web apps',
        'rt', 88, 'assets/rt4.jpg');
    new Course('rt5', 'react from zero to ninja', 'Learn Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects and Full Stack Development with MERN (MongoDB, Express, React, Node)',
        'rt', 150, 'assets/rt5.jpg');
    new Course('pyt1', 'Python for Absolute Beginners','Learn Python, a programming language with a wide variety of well-paying jobs in many fields, including data science and web development.  It is relatively easy to learn when compared to pretty much any other programming language since most of the time, using Python to do something will take less lines of code than with another programming language.',
        'pyt',100 ,'assets/pyt1.png');
    new Course('pyt2', '2021 Complete Python Bootcamp From Zero to Hero in Python','This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.',
        'pyt',120 ,'assets/pyt2.jpg');
    new Course('pyt3','Learn Python Programming Masterclass','This course is aimed at complete beginners who have never programmed before, as well as existing programmers who want to increase their career options by learning Python. The fact is, Python is one of the most popular programming languages in the world – Huge companies like Google use it in mission critical applications like Google Search.',
        'pyt', 280 ,'assets/pyt3.jpg');
    new Course('pyt4', 'Learning Python for Data Analysis and Visualization ',' You will get a full understanding of how to program with Python and how to use it in conjunction with scientific computing modules and libraries to analyze data. You will also get lifetime access to over 100 example python code notebooks, new and updated videos, as well as future additions of various data analysis projects that you can use for a portfolio to show future employers!',
        'pyt',200 ,'assets/pyt4.jpg');
    new Course('pyt5','The Python Mega Course: Build 10 Real World Applications ','he Python Mega Course is the most practical course you will find on the web today. In this course, rather than practicing rote memorization, students are actively problem-solving towards tangible goals. The purpose of this course is to get you from zero and help you become a Python programmer. We will achieve that by building actual desktop programs, developing interactive web applications, automating tasks, and even creating mobile apps entirely in Python 3.',
        'pyt', 220,'assets/pyt5.jpg');
}

generateCourses();

localStorage.setItem('allCourses', JSON.stringify(Course.allCourses));



let counter;

function x() {
    let item = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (keys[i] !== 'discount' && keys[i] !== 'allCourses' && keys[i] !=='counter') {
            item.push(JSON.parse(localStorage.getItem(keys[i])));
        }
    }
    return item;
}

let cartItem = x();
counter=cartItem.length;
if (counter === 0) {
    cartItem = x();
    // eslint-disable-next-line no-undef
    cartIcon.textContent='Cart';
} else {
    cartIcon.textContent=`Cart ${counter} `;
}
