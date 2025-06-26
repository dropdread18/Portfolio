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

/* carousel */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.projects-carousel');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const projectBoxes = carousel.querySelectorAll('.project-box');

  let currentIndex = 0;

function scrollToIndex(index) {
  if (index < 0) index = 0;
  if (index > projectBoxes.length - 1) index = projectBoxes.length - 1;

  const target = projectBoxes[index];
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    currentIndex = index;
  }
}


  nextBtn.addEventListener('click', () => {
    scrollToIndex(currentIndex + 1);
  });

  prevBtn.addEventListener('click', () => {
    scrollToIndex(currentIndex - 1);
  });

  // Optional: Recalculate index on resize
  window.addEventListener('resize', () => {
    scrollToIndex(currentIndex);
  });
});



