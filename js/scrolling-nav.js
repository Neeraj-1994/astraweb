"use strict";

document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = document.querySelector(this.hash);
            target = target ? target : document.querySelector('[name=' + this.hash.slice(1) + ']');
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 55,
                    behavior: 'smooth'
                });
            }
        }
    });
});

document.querySelectorAll('.js-scroll-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const mainNavLinks = document.querySelectorAll('#mainNav .nav-link');
    mainNavLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (
            section.offsetTop - 56 <= currentScroll &&
            section.offsetTop + section.offsetHeight - 56 > currentScroll
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});