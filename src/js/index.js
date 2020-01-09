import '../sass/style.scss';

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-is-active');
    hamburger.classList.contains('menu-is-active') 
    ? nav.classList.add('nav-show')
    : nav.classList.remove('nav-show');
});

document.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const h1 = document.querySelector('.hero-header').offsetTop;
    if (scrollValue <= h1) {
        nav.classList.add('nav-oblique');
        nav.classList.remove('navbar-default');
        hamburger.style.transform = 'translateX(-60px)';
        nav.classList.remove('nav-show');
        hamburger.classList.remove('menu-is-active');

    } else {
        nav.classList.remove('nav-oblique');
        nav.classList.add('navbar-default');
        hamburger.style.transform = 'translateX(60px)';
    }
});