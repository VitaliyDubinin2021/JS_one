'use strict';

let scrollCheck = document.querySelector('.scrollCheck');

function init() {
    if (window.innerHeight === document.body.offsetHeight) {
        insertPosts();
        init();
    }
}
init();

document.addEventListener('scroll', function (event) {
    if (scrollCheck.getBoundingClientRect().top <= window.innerHeight) {
        insertPosts();
    }
});

function insertPosts() {
    let postsMarkup = '';
    for (let x = 0; x < 5; x++) {
        postsMarkup += getPostMarkup(x);
    }
    scrollCheck.insertAdjacentHTML('beforebegin', postsMarkup);
}

function getPostMarkup(counter) {
    let num = new Date().getTime() + counter;
    return `<div class="post">
        <img src="https://picsum.photos/200/300?random=${num}">
        Добрый день!
    </div>`;
}