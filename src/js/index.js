import '../sass/style.scss';

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-is-active');
    hamburger.classList.contains('menu-is-active') 
    ? nav.style.width = '100%'
    : nav.style.width = '0';
});