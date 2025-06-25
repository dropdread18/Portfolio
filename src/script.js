document.addEventListener('DOMContentLoaded', () => {
  new Typed('.multiple-text', {
    strings: ['WordPress Developer', 'Virtual Assistant', 'Web Developer'],
    typeSpeed: 50,
    backSpeed: 50,
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
