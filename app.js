const body = document.querySelector('body');
const burger = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        burger.classList.add('open');
        body.classList.add('no-scroll');
    } else {
        burger.classList.remove('open');
        body.classList.remove('no-scroll');
    }
})