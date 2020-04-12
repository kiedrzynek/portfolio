import '../sass/style.scss';

// navbar animation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-is-active');
    hamburger.classList.contains('menu-is-active') 
    ? nav.classList.add('nav-show')
    : nav.classList.remove('nav-show');
});

//animations on scroll
document.addEventListener('scroll', () => {
    const scrollValue = window.pageYOffset;
    const h1 = document.querySelector('.hero-header').offsetTop;
    const sectionAbout = document.querySelector('#about-me').offsetTop;
    const heading = document.querySelector('#about-me h3');
    const text = document.querySelector('#about-me p');
    const sectionSkills = document.querySelector('#skills').offsetTop - 200;
    const skillIconElements = document.querySelectorAll('.skill-wrap');
    const projectsOffset = document.querySelectorAll('#projects .project');
    const projectImages = document.querySelectorAll('#projects .project-image-wrapper img');
    const sectionContact = document.querySelector('#contact').offsetTop - 100;
    const contactHeading = document.querySelector('#contact h3');

    //change navbar
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

    // text animation
    // slide heading
    if (scrollValue >= sectionAbout - 250) {
        heading.classList.add('move-right');
    }
    // slide paragraph
    if (scrollValue >= sectionAbout - 100) {
        text.classList.add('fadein');
    }

    // fade in icons
    if (scrollValue >= sectionSkills) {
        for (let i = 0; i < skillIconElements.length; i++) {
            skillIconElements[i].classList.add('animate-icon');
        }   
    };

    //coloring projects
    for (let i = 0; i < projectsOffset.length; i++) {
        if (scrollValue >= projectsOffset[i].offsetTop - 250) {
            projectImages[i].classList.add('color');
        }
    }

    //pulse contact
    if (scrollValue >= sectionContact) {
        contactHeading.classList.add('pulse');
    }
});