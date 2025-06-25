import Typed from 'typed.js';

// Run this when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Typed('.multiple-text', {
    strings: ['Web Developer','WordPress Developer', 'Virtual Assistant'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.getElementById('nav-list');

hamburgerMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});

const readMoreBtn = document.getElementById('read-more-btn');
  const aboutText = document.getElementById('about-text');

  readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aboutText.classList.toggle('expanded');
    readMoreBtn.textContent = aboutText.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
  
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.toggle('active');
}





