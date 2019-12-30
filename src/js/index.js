import '../sass/style.scss';

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-is-active');
    hamburger.classList.contains('menu-is-active') 
    ? nav.classList.add('nav-show')
    : nav.classList.remove('nav-show');
});