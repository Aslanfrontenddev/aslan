let burger = document.querySelector('.burger__btn');
let menu = document.querySelector('.menu');
let header = document.querySelector('.header');

burger.addEventListener('click', responsive);
function responsive (e) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
};

responsive(e);

window.addEventListener('scroll', scroll);
function scroll() {
    header.classList.toggle('sticky', this.window.scrollY > 100);
};

scroll();
