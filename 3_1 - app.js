'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let textOur = document.querySelector('.text');

let navOur = document.querySelectorAll('.nav-link');
navOur.forEach(function (link) {
    link.addEventListener('click', clickHandler);
});

function clickHandler(event) {
    changeText(event);
    changeActiveClass(event);
}

function changeActiveClass(event) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
}

function changeText(event) {
    switch (event.target.textContent) {
        case "Link 1":
            textOur.textContent = texts.text1;
            break;
        case "Link 2":
            textOur.textContent = texts.text2;
            break;
        case "Link 3":
            textOur.textContent = texts.text3;
            break;
    }
}

